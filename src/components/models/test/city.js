/**
 * to use this code: import city from this js file as well as the GI module
 * run city with the GI module as input along with other start node input
 * e.g.:
 * const city = require('./city.js').city
 * const module = require('gi-module')
 * const result = await city(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"site_geojson","value":"\\"___LONG_STRING_DATA___\\"","type":0}
// Parameter: {"name":"roads_geojson","value":"\\"___LONG_STRING_DATA___\\"","type":0}


async function city(__modules__, site_geojson, roads_geojson) {

const __debug__ = true;
const __model__ = null;
/** * **/
const PI = Math.PI;
const XY = __modules__._constants.XY;
const YZ = __modules__._constants.YZ;
const ZX = __modules__._constants.ZX;
const YX = __modules__._constants.YX;
const ZY = __modules__._constants.ZY;
const XZ = __modules__._constants.XZ;
const isNum = __modules__._types.isNum;
const isInt = __modules__._types.isInt;
const isFlt = __modules__._types.isFlt;
const isBool = __modules__._types.isBool;
const isStr = __modules__._types.isStr;
const isList = __modules__._types.isList;
const isDict = __modules__._types.isDict;
const isVec2 = __modules__._types.isVec2;
const isVec3 = __modules__._types.isVec3;
const isCol = __modules__._types.isCol;
const isRay = __modules__._types.isRay;
const isPln = __modules__._types.isPln;
const isNaN = __modules__._types.isNaN;
const isNull = __modules__._types.isNull;
const isUndef = __modules__._types.isUndef;
const strRepl = __modules__._strs.strRepl;
const strUpp = __modules__._strs.strUpp;
const strLow = __modules__._strs.strLow;
const strTrim = __modules__._strs.strTrim;
const strTrimR = __modules__._strs.strTrimR;
const strTrimL = __modules__._strs.strTrimL;
const strSub = __modules__._strs.strSub;
const strStarts = __modules__._strs.strStarts;
const strEnds = __modules__._strs.strEnds;
const strPadL = __modules__._strs.strPadL;
const strPadR = __modules__._strs.strPadR;
const isApprox = __modules__._util.isApprox;
const isIn = __modules__._util.isIn;
const isWithin = __modules__._util.isWithin;
const min = __modules__._math.min;
const max = __modules__._math.max;
const pow = Math.pow;
const sqrt = Math.sqrt;
const exp = Math.exp;
const log = Math.log;
const round = __modules__._math.round;
const sigFig = __modules__._math.sigFig;
const ceil = Math.ceil;
const floor = Math.floor;
const abs = Math.abs;
const sin = Math.sin;
const asin = Math.asin;
const sinh = Math.sinh;
const asinh = Math.asinh;
const cos = Math.cos;
const acos = Math.acos;
const cosh = Math.cosh;
const acosh = Math.acosh;
const tan = Math.tan;
const atan = Math.atan;
const tanh = Math.tanh;
const atanh = Math.atanh;
const atan2 = Math.atan2;
const boolean = __modules__._mathjs.boolean;
const number = __modules__._mathjs.number;
const string = __modules__._mathjs.string;
const mad = __modules__._mathjs.mad;
const mean = __modules__._mathjs.mean;
const median = __modules__._mathjs.median;
const mode = __modules__._mathjs.mode;
const prod = __modules__._mathjs.prod;
const std = __modules__._mathjs.std;
const vari = __modules__._mathjs.var;
const sum = __modules__._mathjs.sum;
const hypot = __modules__._mathjs.hypot;
const norm = __modules__._mathjs.norm;
const mod = __modules__._mathjs.mod;
const square = __modules__._mathjs.square;
const cube = __modules__._mathjs.cube;
const remap = __modules__._arithmetic.remap;
const distance = __modules__._geometry.distance;
const distanceM = __modules__._geometry.distanceM;
const distanceMS = __modules__._geometry.distanceMS;
const intersect = __modules__._geometry.intersect;
const project = __modules__._geometry.project;
const range = __modules__._list.range;
const len = __modules__._list.listLen;
const listLen = __modules__._list.listLen;
const listCount = __modules__._list.listCount;
const listCopy = __modules__._list.listCopy;
const listRep = __modules__._list.listRep;
const listLast = __modules__._list.listLast;
const listGet = __modules__._list.listGet;
const listFind = __modules__._list.listFind;
const listHas = __modules__._list.listHas;
const listJoin = __modules__._list.listJoin;
const listFlat = __modules__._list.listFlat;
const listSlice = __modules__._list.listSlice;
const listCull = __modules__._list.listCull;
const listZip = __modules__._list.listZip;
const listZip2 = __modules__._list.listZip2;
const listSort = __modules__._list.listSort;
const listRev = __modules__._list.listRev;
const setMake = __modules__._set.setMake;
const setUni = __modules__._set.setUni;
const setInt = __modules__._set.setInt;
const setDif = __modules__._set.setDif;
const length = __modules__._list.length;
const shuffle = __modules__._list.shuffle;
const concat = __modules__._list.concat;
const zip = __modules__._list.zip;
const zip2 = __modules__._list.zip2;
const vecAdd = __modules__._vec.vecAdd;
const vecSub = __modules__._vec.vecSub;
const vecDiv = __modules__._vec.vecDiv;
const vecMult = __modules__._vec.vecMult;
const vecSum = __modules__._vec.vecSum;
const vecLen = __modules__._vec.vecLen;
const vecSetLen = __modules__._vec.vecSetLen;
const vecNorm = __modules__._vec.vecNorm;
const vecRev = __modules__._vec.vecRev;
const vecFromTo = __modules__._vec.vecFromTo;
const vecAng = __modules__._vec.vecAng;
const vecAng2 = __modules__._vec.vecAng2;
const vecDot = __modules__._vec.vecDot;
const vecCross = __modules__._vec.vecCross;
const vecEqual = __modules__._vec.vecEqual;
const vecLtoG = __modules__._vec.vecLtoG;
const vecGtoL = __modules__._vec.vecGtoL;
const plnMake = __modules__._plane.plnMake;
const plnCopy = __modules__._plane.plnCopy;
const plnMove = __modules__._plane.plnMove;
const plnRot = __modules__._plane.plnRot;
const plnLMove = __modules__._plane.plnLMove;
const plnLRotX = __modules__._plane.plnLRotX;
const plnLRotY = __modules__._plane.plnLRotY;
const plnLRotZ = __modules__._plane.plnLRotZ;
const rayMake = __modules__._ray.rayMake;
const rayCopy = __modules__._ray.rayCopy;
const rayMove = __modules__._ray.rayMove;
const rayRot = __modules__._ray.rayRot;
const rayLMove = __modules__._ray.rayLMove;
const rayFromPln = __modules__._ray.rayFromPln;
const rayLtoG = __modules__._ray.rayLtoG;
const rayGtoL = __modules__._ray.rayGtoL;
const colFalse = __modules__._colors.colFalse;
const colScale = __modules__._colors.colScale;
const radToDeg = __modules__._conversion.radToDeg;
const degToRad = __modules__._conversion.degToRad;
const numToStr = __modules__._conversion.numToStr;
const rand = __modules__._rand.rand;
const randInt = __modules__._rand.randInt;
const randPick = __modules__._rand.randPick;
const setattr = __modules__._model.__setAttrib__;
const getattr = __modules__._model.__getAttrib__;


async function exec_city(__params__, site_geojson_, roads_geojson_){

async function exec_city_node_87704qwpvvy(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'geolocation',  {"latitude": 10.871,"longitude": 123.050,"elevation": 0.1} );

__modules__.attrib.Set(__params__.model, null, 'north',  [0, 1] );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_ey3dsckhc7t(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let im_ = await __modules__.io.Import( __params__.model, site_geojson_, 'geojson' );

let site_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

__modules__.attrib.Set(__params__.model, site_, 'type',  "site" );

__modules__.attrib.Set(__params__.model, null, 'site_area',  __modules__.calc.Area( __params__.model, site_ ) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_h84b2vany5(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let im_ = await __modules__.io.Import( __params__.model, roads_geojson_, 'geojson' );

let road_art_ = "pl5";

__modules__.attrib.Set(__params__.model, road_art_, 'share',  50 );

let road_sec0_ = "pl63";

let road_sec1_ = "pl161";

let road_sec2_ = "pl2";

__modules__.attrib.Set(__params__.model, road_sec0_, 'share',  50 );

__modules__.attrib.Set(__params__.model, road_sec1_, 'share',  100 );

__modules__.attrib.Set(__params__.model, road_sec2_, 'share',  100 );

__modules__.attrib.Set(__params__.model, road_sec0_, 'type',  "road_sec" );

__modules__.attrib.Set(__params__.model, road_sec1_, 'type',  "road_sec_new" );

__modules__.attrib.Set(__params__.model, road_sec2_, 'type',  "road_sec" );

__modules__.attrib.Set(__params__.model, road_art_, 'type',  "road_art" );

let pl_ = __modules__.make.Polyline( __params__.model, ['ps248', 'ps249', 'ps250', 'ps251', 'ps252'], 'open' );

let road_sec_ = [pl_, 'pl3', 'pl12', 'pl62'];

__modules__.attrib.Set(__params__.model, road_sec_, 'type',  "road_sec_other" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_bqjz42gbvq(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let roads_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec");

let roads_sec_50_ = __modules__.query.Filter(__params__.model, roads_sec_, ['share', null], '==', 50);

let roads_sec_100_ = __modules__.query.Filter(__params__.model, roads_sec_, ['share', null], '==', 100);

let roads_art_50_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 12, 1, 'square_end' );

let roads_sec_50_trim_ = __modules__.poly2d.Boolean( __params__.model, roads_sec_50_, off_, 'intersect' );

let roads_sec_100_trim_ = __modules__.poly2d.Boolean( __params__.model, roads_sec_100_, off_, 'intersect' );

let roads_art_50_trim_ = __modules__.poly2d.Boolean( __params__.model, roads_art_50_, off_, 'intersect' );

let roads_sec_50_len_ = __modules__.calc.Length( __params__.model, roads_sec_50_trim_ );

let roads_sec_100_len_ = __modules__.calc.Length( __params__.model, roads_sec_100_trim_ );

let roads_art_50_len_ = __modules__.calc.Length( __params__.model, roads_art_50_trim_ );

__modules__.modify.Delete( __params__.model, [off_, roads_sec_50_trim_, roads_sec_100_trim_, roads_art_50_trim_], 'delete_selected' );

__modules__.attrib.Set(__params__.model, null, 'road_len_sec_50',  sum(roads_sec_50_len_) );

__modules__.attrib.Set(__params__.model, null, 'road_len_sec_100',  sum(roads_sec_100_len_) );

__modules__.attrib.Set(__params__.model, null, 'road_len_art_50',  sum(roads_art_50_len_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_city_node_bcaniglhlub_bounce_(__params__, pgons_, bounce_) {

let new_pgons_ = [];

for (let  pgon_ of pgons_){

let off1_ = __modules__.poly2d.OffsetMitre( __params__.model, pgon_, -bounce_, bounce_, 'square_end' );

let off2_ = __modules__.poly2d.OffsetMitre( __params__.model, off1_, bounce_, bounce_, 'square_end' );

__modules__.modify.Delete( __params__.model, [pgon_, off1_], 'delete_selected' );

__modules__.list.Add( new_pgons_, off2_, 'to_start' );
}

return new_pgons_;
}


async function exec_city_node_bcaniglhlub_cleanPgonEdge_(__params__, pgon_) {

let del_posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', pgon_)){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

if (length_ < 1){

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

__modules__.list.Add( del_posis_, posis_[pythonList(0, posis_.length)], 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_city_node_bcaniglhlub_cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_city_node_bcaniglhlub_angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_city_node_bcaniglhlub_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_city_node_bcaniglhlub(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let art_w_b4_widen_ = 16;

let sec_w_b4_widen_ = 10;

let road_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let road_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec");

let roads_art_ = __modules__.poly2d.OffsetMitre( __params__.model, road_art_, art_w_b4_widen_ / 2, 5, 'square_end' );

let roads_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, road_sec_, sec_w_b4_widen_ / 2, 5, 'square_end' );

let big_site_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "site");

let site_on_art_roads_ = __modules__.poly2d.Boolean( __params__.model, big_site_, roads_art_, 'intersect' );

let site_on_art_roads_areas_ = __modules__.calc.Area( __params__.model, site_on_art_roads_ );

__modules__.attrib.Set(__params__.model, null, 'site_on_art_roads_area',  sum(site_on_art_roads_areas_) );

let site_on_sec_roads_ = __modules__.poly2d.Boolean( __params__.model, big_site_, roads_sec_, 'intersect' );

let site_on_sec_roads_areas_ = __modules__.calc.Area( __params__.model, site_on_sec_roads_ );

__modules__.attrib.Set(__params__.model, null, 'site_on_sec_roads_area',  sum(site_on_sec_roads_areas_) );

__modules__.modify.Delete( __params__.model, [site_on_art_roads_, site_on_sec_roads_], 'delete_selected' );

let divided_sites_ = __modules__.poly2d.Boolean( __params__.model, big_site_, [roads_art_, roads_sec_], 'difference' );

for (let  site_ of divided_sites_){

await exec_city_node_bcaniglhlub_cleanPgonEdge_(__params__, site_);
if (__params__.terminated) { return __params__.model;}

await exec_city_node_bcaniglhlub_cleanPgonAng_(__params__, site_);
if (__params__.terminated) { return __params__.model;}
}

__modules__.modify.Delete( __params__.model, [big_site_, roads_art_, roads_sec_], 'delete_selected' );

__modules__.attrib.Set(__params__.model, divided_sites_[pythonList(0, divided_sites_.length)], 'name',  "site_c" );

__modules__.attrib.Set(__params__.model, divided_sites_[pythonList(1, divided_sites_.length)], 'name',  "site_a" );

__modules__.attrib.Set(__params__.model, divided_sites_[pythonList(2, divided_sites_.length)], 'name',  "site_b" );

__modules__.attrib.Set(__params__.model, divided_sites_, 'type',  "site" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_a4gmspwysni(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let sites_ = __modules__.query.Get(__params__.model, 'pg', null);

let bb_ = __modules__.calc.BBox( __params__.model, __modules__.query.Get(__params__.model, 'pg', null) );

let plane_ = plnMake([700, 700, 0], [-1, -1.17, 0], [1, -1, 0]);

let g_ = __modules__.pattern.Grid( __params__.model, plane_, [1500, 700], [4, 3], 'quads' );

let pgons_ = __modules__.make.Polygon( __params__.model, g_ );

let landowners_ = __modules__.poly2d.Boolean( __params__.model, pgons_, sites_, 'intersect' );

__modules__.modify.Delete( __params__.model, [sites_, pgons_], 'delete_selected' );

landowners_ = __modules__.query.Get(__params__.model, 'pg', null);

let seed_ = 11;

for (let  landowner_ of landowners_){

seed_ = seed_ + 1.23;

__modules__.visualize.Color( __params__.model, landowner_, [0.5, rand(0.6, 1, seed_), 0.5] );

__modules__.attrib.Set(__params__.model, landowner_, 'type',  "landowner" );
}

__modules__.visualize.Color( __params__.model, landowners_[pythonList(-1, landowners_.length)], __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, '_v', landowners_[pythonList(0, landowners_.length)])[pythonList(1, __modules__.query.Get(__params__.model, '_v', landowners_[pythonList(0, landowners_.length)]).length)], 'rgb') );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_city_node_oronj5atxdd_bounce_(__params__, pgons_, bounce_) {

let new_pgons_ = [];

for (let  pgon_ of pgons_){

let off1_ = __modules__.poly2d.OffsetMitre( __params__.model, pgon_, -bounce_, bounce_, 'square_end' );

let off2_ = __modules__.poly2d.OffsetMitre( __params__.model, off1_, bounce_, bounce_, 'square_end' );

__modules__.modify.Delete( __params__.model, [pgon_, off1_], 'delete_selected' );

__modules__.list.Add( new_pgons_, off2_, 'to_start' );
}

return new_pgons_;
}


async function exec_city_node_oronj5atxdd_cleanPgonEdge_(__params__, pgon_) {

let del_posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', pgon_)){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

if (length_ < 1){

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

__modules__.list.Add( del_posis_, posis_[pythonList(0, posis_.length)], 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_city_node_oronj5atxdd_cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_city_node_oronj5atxdd_angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_city_node_oronj5atxdd_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_city_node_oronj5atxdd(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let road_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec_new");

let road_sec_new_ = __modules__.poly2d.OffsetMitre( __params__.model, road_sec_, 5, 5, 'square_end' );

let landowners_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

__modules__.modify.Delete( __params__.model, road_sec_new_, 'delete_selected' );

for (let  site_ of __modules__.query.Get(__params__.model, 'pg', null)){

await exec_city_node_oronj5atxdd_cleanPgonEdge_(__params__, site_);
if (__params__.terminated) { return __params__.model;}

await exec_city_node_oronj5atxdd_cleanPgonAng_(__params__, site_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_qmmepc8poll(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let landowners_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

let area_total_ = 0;

let areas_ = {};

let cols_ = [];

for (let  i_ of range(len(landowners_))){

let col_ = string( __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, '_v', landowners_[pythonList(i_, landowners_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', landowners_[pythonList(i_, landowners_.length)]).length)], ['rgb', 1]));

if (areas_[pythonList(col_, areas_.length)] == undefined){

areas_[pythonList(col_, areas_.length)] = [];

__modules__.list.Add( cols_, col_, 'to_end' );
}

let area_ = __modules__.calc.Area( __params__.model, landowners_[pythonList(i_, landowners_.length)] );

__modules__.list.Add( areas_[pythonList(col_, areas_.length)], area_, 'to_end' );
}

let landowner_areas_ = {};

for (let  i_ of range(len(cols_))){

let name_ = 'landowner' + string(i_) + '_area_agri';

let area_ = sum(areas_[pythonList(cols_[pythonList(i_, cols_.length)], areas_.length)]);

landowner_areas_[pythonList(name_, landowner_areas_.length)] = area_;

area_total_ = area_total_ + area_;
}

landowner_areas_["landowners_area_total"] = area_total_;

__modules__.attrib.Set(__params__.model, null, 'landowner_areas',  landowner_areas_ );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_sloqoeikj2o(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let road_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec");

let road_sec_new_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec_new");

let road_sec_other_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec_other");

let all_road_sec_ = listFlat([road_sec_, road_sec_new_, road_sec_other_]);

let road_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let pgons_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, all_road_sec_, 4.9, 1, 'butt_end' );

let pgons_art_ = __modules__.poly2d.OffsetMitre( __params__.model, road_art_, 7.9, 1, 'butt_end' );

__modules__.modify.Move( __params__.model, pgons_sec_, [0, 0, 0.1] );

__modules__.modify.Move( __params__.model, pgons_art_, [0, 0, 0.2] );

__modules__.attrib.Set(__params__.model, pgons_sec_, 'type',  "road_sec" );

__modules__.attrib.Set(__params__.model, pgons_art_, 'type',  "road_art" );

__modules__.visualize.Color( __params__.model, pgons_sec_, [1, 0.7, 0.3] );

__modules__.visualize.Edge( __params__.model, __modules__.query.Get(__params__.model, '_e', pgons_sec_), 'hidden' );

__modules__.visualize.Color( __params__.model, pgons_art_, [1, 0.4, 0.4] );

__modules__.visualize.Edge( __params__.model, __modules__.query.Get(__params__.model, '_e', pgons_art_), 'hidden' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_5uhf57zk8l3(__params__, site_geojson_, roads_geojson_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let landowners_ = __modules__.query.Get(__params__.model, 'pg', null);

let data_ = {};

let landowner_areas_ = __modules__.attrib.Get(__params__.model, null, 'landowner_areas');

for (let  i_ of range(6)){

let name_ = 'landowner' + string(i_) + '_area_agri';

data_[pythonList(name_, data_.length)] = landowner_areas_[pythonList(name_, landowner_areas_.length)];
}

__modules__.attrib.Set(__params__.model, null, 'site_on_landowners_area',  landowner_areas_["landowners_area_total"] );

data_['site_roads_area'] = __modules__.attrib.Get(__params__.model, null, 'site_on_art_roads_area')+  __modules__.attrib.Get(__params__.model, null, 'site_on_sec_roads_area');

data_['site_area_total'] = __modules__.attrib.Get(__params__.model, null, 'site_area');

let __return_value__ = __modules__._Output.Return(__params__.model, data_);
return __return_value__;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_city_node_dzt2c0g1uyj = __params__.model;
console.log("Executing Node: geolocation");

__params__.model = result_exec_city_node_dzt2c0g1uyj;

let result_exec_city_node_87704qwpvvy = await exec_city_node_87704qwpvvy(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: get site");

__params__.model = duplicateModel(result_exec_city_node_87704qwpvvy);

let result_exec_city_node_ey3dsckhc7t = await exec_city_node_ey3dsckhc7t(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: roads");

__params__.model = result_exec_city_node_87704qwpvvy;

let result_exec_city_node_h84b2vany5 = await exec_city_node_h84b2vany5(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: calc road lengths");

__params__.model = mergeInputs([result_exec_city_node_ey3dsckhc7t, result_exec_city_node_h84b2vany5]);

let result_exec_city_node_bqjz42gbvq = await exec_city_node_bqjz42gbvq(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: trim roads from site");

__params__.model = result_exec_city_node_bqjz42gbvq;

let result_exec_city_node_bcaniglhlub = await exec_city_node_bcaniglhlub(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: generate random landowners");

__params__.model = result_exec_city_node_bcaniglhlub;

let result_exec_city_node_a4gmspwysni = await exec_city_node_a4gmspwysni(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: clean landowner polygons");

__params__.model = result_exec_city_node_a4gmspwysni;

let result_exec_city_node_oronj5atxdd = await exec_city_node_oronj5atxdd(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: calc areas");

__params__.model = result_exec_city_node_oronj5atxdd;

let result_exec_city_node_qmmepc8poll = await exec_city_node_qmmepc8poll(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: extrude roads");

__params__.model = result_exec_city_node_qmmepc8poll;

let result_exec_city_node_sloqoeikj2o = await exec_city_node_sloqoeikj2o(__params__, site_geojson_, roads_geojson_);
console.log("Executing Node: End");

__params__.model = result_exec_city_node_sloqoeikj2o;

let result_exec_city_node_5uhf57zk8l3 = await exec_city_node_5uhf57zk8l3(__params__, site_geojson_, roads_geojson_);

return result_exec_city_node_5uhf57zk8l3;
}


function pythonList(x, l){
    if (x < 0) {
        return x + l;
    }
    return x;
}

function mergeInputs(models){
    let result = null;
    if (models.length === 0) {
        result = __modules__._model.__new__();
    } else if (models.length === 1) {
        result = models[0].clone();
    } else {
        result = models[0].clone();
        for (let i = 1; i < models.length; i++) {
            __modules__._model.__merge__(result, models[i]);
        }
    }
    try {
        result.debug = __debug__;
    } catch (ex) {}
    return result;
}
function duplicateModel(model){
    const result = model.clone();
    try {
        result.debug = __debug__;
    } catch (ex) {}
    return result;
}

function printFunc(_console, name, value){
    let val;
    if (!value) {
        val = value;
    } else if (value === '__null__') {
        console.log('_ ' + name);
        return value;
    } else if (typeof value === 'number' || value === undefined) {
        val = value;
    } else if (typeof value === 'string') {
        val = value;
    } else if (value.constructor === [].constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ of value) {
            if (!__item__) {
                __value_strings__.push('' + __item__);
                continue;
            }
            if (__item__.constructor === [].constructor || __item__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push(JSON.stringify(__item__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            val = '[\n' + __value_strings__.join(',\n') + '\n]';
        } else {
            val = '[' + __value_strings__.join(', ') + ']';
        }
    } else if (value.constructor === {}.constructor) {
        let __list_check__ = false;
        let __value_strings__ = [];
        for (const __item__ in value) {
            const __value__ = value[__item__];
            if (!__value__) {
                __value_strings__.push( __item__ + ': ' + __value__);
                continue;
            }
            if (__value__.constructor === [].constructor || __value__.constructor === {}.constructor) {
                __list_check__ = true;
            }
            __value_strings__.push(__item__ + ': ' + JSON.stringify(__value__).replace(/,/g, ', '));
        }
        if (__list_check__) {
            val = '{\n' +  __value_strings__.join(',\n') + '\n}';
        } else {
            val = '{' + __value_strings__.join(', ') + '}';
        }
    } else {
        val = value;
    }
    console.log(name + ' = ' + val);
    return val;
}
function printInp(site_geojson,roads_geojson){
console.log("Calling function city() with the following arguments:\n" +
"  site_geojson = " + site_geojson + "\n" +
"  roads_geojson = " + roads_geojson + "\n" +
'')};


// printInp(site_geojson,roads_geojson);
const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_city(__params__, site_geojson, roads_geojson);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default city;
