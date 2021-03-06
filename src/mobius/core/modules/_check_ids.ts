import { GIModel } from '../../libs/geo-info/GIModel';
import { EEntType, TEntTypeIdx } from '../../libs/geo-info/common';
import { getArrDepth, idsBreak } from '../../libs/geo-info/id';

export const ID = {
    isID: 0,
    isIDL: 1,
    isIDLL: 2,
    isIDLLL: 3,
    isNull: 4
};
const ID_STRS = [
    'an entity ID',
    'a list of entity IDs',
    'a list of lists of entity IDs',
    'a nested list of entity IDs',
    'null'
];

function checkId(__model__: GIModel, id: any, ent_types_set: Set<number>, check_exists: boolean):
        TEntTypeIdx|TEntTypeIdx[]|TEntTypeIdx[][] {
    if (!Array.isArray(id)) {
        let ent: TEntTypeIdx;
        try {
            ent = idsBreak(id) as TEntTypeIdx; // split
        } catch (err) {
            throw new Error('<ul><li>The entity ID "' + id + '" is not a valid Entity ID.</li></ul>'); // check valid id
        }
        // check entity exists
        if (check_exists && !__model__.modeldata.geom.query.entExists(ent[0], ent[1])) {
            throw new Error('<ul><li>The entity ID "' + id + '" does not exist in the model.</li></ul>'); // check id exists
        }
        // check entity type
        if (!ent_types_set.has(ent[0])) {
            throw new Error('<ul><li>The entity ID "' + id + '" is not one of the following valid types - ' +
                Array.from(ent_types_set).map((ent_type) => EEntType[ent_type]).toString() + '.</li></ul>');
        }
        // return the ent array
        return ent;
    } else {
        const ents: TEntTypeIdx[][] = [];
        for (const a_id of id) {
            const a_ents: TEntTypeIdx[] = checkId(__model__, a_id, ent_types_set, check_exists) as TEntTypeIdx[];
            if (a_ents.length) { // skip empty arrays
                ents.push(a_ents);
            }
        }
        return ents;
        // return arg.map( a_arg => checkId(__model__, a_arg, ent_types_set, check_exists)) as TEntTypeIdx[]|TEntTypeIdx[][];
    }
}

export function checkIDs(__model__: GIModel, fn_name: string, arg_name: string, arg: any, id_types: number[],
                         ent_types: EEntType[]|null, check_exists = true): TEntTypeIdx|TEntTypeIdx[]|TEntTypeIdx[][] {
    if (arg === undefined) {
        throw new Error(fn_name + ': The argument "' + arg_name + '" is undefined.' + '<br>');
    }
    // check for null case
    if (arg === null) {
        if (id_types.indexOf(ID.isNull) === -1) {
            throw new Error(fn_name + ': The argument "' + arg_name + '" cannot be null.<br>');
        } else {
            return null;
        }
    }
    // check list depths
    const arg_depth: number = getArrDepth(arg);
    if (arg_depth > 3 || id_types.indexOf(arg_depth) === -1) {
        const options = id_types.map( depth => ID_STRS[depth] );
        throw new Error(fn_name + ': The argument "' + arg_name + '" has the wrong structure.' +
            '<ul><li>The argument can be: ' + options.join(', ') + '.</li></ul>');
    }
    // create a set of allowable entity types
    let ent_types_set: Set<number>;
    if (ent_types === null) {
        ent_types_set = new Set([
            EEntType.POSI,
            EEntType.TRI,
            EEntType.VERT,
            EEntType.EDGE,
            EEntType.WIRE,
            EEntType.FACE,
            EEntType.POINT,
            EEntType.PLINE,
            EEntType.PGON,
            EEntType.COLL]);
    } else {
        ent_types_set = new Set(ent_types);
    }
    // check the IDs
    let ents: TEntTypeIdx|TEntTypeIdx[]|TEntTypeIdx[][];
    try {
        ents = checkId(__model__, arg, ent_types_set, check_exists);
    } catch (err) {
        throw new Error(fn_name + ': The argument "' + arg_name + '" contains bad IDs:' + err.message + '<br>');
    }
    // return the ents
    return ents; // returns TEntTypeIdx|TEntTypeIdx[]|TEntTypeIdx[][]; depends on which passes
}
