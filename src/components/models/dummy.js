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

// Parameter: {"name":"latitude","value":"20.23269","type":1,"min":"-90","max":"90","step":"0.01"}
// Parameter: {"name":"longitude","value":"85.77832","type":1,"min":"-180","max":"180","step":"0.01"}
// Parameter: {"name":"rotation","value":"-92","type":1,"min":"-180","max":"180","step":"0.01"}
// Parameter: {"name":"site_front_dim","value":"600","type":1,"min":"300","max":"1000","step":"10"}
// Parameter: {"name":"site_back_dim","value":"550","type":1,"min":"200","max":"1000","step":"10"}
// Parameter: {"name":"site_back_shift","value":"60","type":1,"min":"-1000","max":"1000","step":"10"}
// Parameter: {"name":"site_sides_dim","value":"600","type":1,"min":"300","max":"1000","step":"10"}
// Parameter: {"name":"pop_density","value":"400","type":1,"min":"10","max":"1000","step":"1"}


async function city(__modules__, latitude, longitude, rotation, site_front_dim, site_back_dim, site_back_shift, site_sides_dim, pop_density) {

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


async function exec_city(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){

async function exec_city_node_pjm5j8ro13(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'geolocation',  {"latitude": latitude_,"longitude": longitude_,"elevation": 0.1} );

__modules__.attrib.Set(__params__.model, null, 'north',  [cos(degToRad(90 + rotation_)), sin(degToRad(90 + rotation_))] );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_city_node_qeb45oblsl(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let posis1_ = __modules__.pattern.Line( __params__.model, [site_front_dim_ / 2, 0, 0], site_front_dim_, 2 );

let cen_back_ = [(site_front_dim_ / 2) + site_back_shift_, site_sides_dim_, 0];

let posis2_ = __modules__.pattern.Line( __params__.model, cen_back_, site_back_dim_, 2 );

let site_ = __modules__.make.Polygon( __params__.model, [posis1_[pythonList(0, posis1_.length)], posis1_[pythonList(1, posis1_.length)], posis2_[pythonList(1, posis2_.length)], posis2_[pythonList(0, posis2_.length)]] );

__modules__.attrib.Set(__params__.model, site_, 'type',  "site" );

let coll_ = __modules__.collection.Create( __params__.model, site_, "site" );

let site_edges_ = __modules__.query.Get(__params__.model, '_e', site_);

let art_edges_ = site_edges_[pythonList(0, site_edges_.length)];

let sec_edges_ = [site_edges_[pythonList(1, site_edges_.length)], site_edges_[pythonList(3, site_edges_.length)]];

let roads_art_50_len_ = __modules__.calc.Length( __params__.model, art_edges_ );

__modules__.attrib.Set(__params__.model, null, 'road_len_art_50',  sum(roads_art_50_len_) );

__modules__.attrib.Set(__params__.model, null, 'road_len_art_100',  0 );

let roads_sec_50_len_ = __modules__.calc.Length( __params__.model, sec_edges_ );

__modules__.attrib.Set(__params__.model, null, 'road_len_sec_50',  sum(roads_sec_50_len_) );

__modules__.attrib.Set(__params__.model, null, 'road_len_sec_100',  0 );

let art_roads_ = __modules__.make.Polyline( __params__.model, art_edges_, 'open' );

let sec_roads_ = __modules__.make.Polyline( __params__.model, sec_edges_, 'open' );

for (let  site_pline_ of listJoin(art_roads_, sec_roads_)){

__modules__.modify.Weld( __params__.model, site_pline_, 'break_weld' );

let cen_ = __modules__.calc.Centroid( __params__.model, site_pline_, 'ps_average' );

__modules__.modify.Scale( __params__.model, site_pline_, cen_, 1.2 );
}

__modules__.attrib.Set(__params__.model, art_roads_, 'type',  "road_art" );

__modules__.attrib.Set(__params__.model, sec_roads_, 'type',  "road_sec" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'osm_id',  "existing" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_city_node_kdswy0uny2_north_arrow_(__params__, start_, end_, color_) {

let width_ = 20;

let v1_ = vecFromTo(start_, end_);

let v2_ = vecSetLen([v1_[pythonList(1, v1_.length)], -v1_[pythonList(0, v1_.length)], 0], width_);

let coords_ = [vecSub(start_, v2_), vecAdd(start_, v2_), end_];

let posis_ = __modules__.make.Position( __params__.model, coords_ );

let arrow_ = __modules__.make.Polygon( __params__.model, posis_ );

__modules__.visualize.Color( __params__.model, arrow_, color_ );

let edges_ = __modules__.query.Get(__params__.model, '_e', arrow_);

let cens_ = __modules__.calc.Centroid( __params__.model, edges_.slice(1), 'ps_average' );

let vecs_ = __modules__.calc.Vector( __params__.model, edges_.slice(1) );

let ray1_ = rayMake(cens_[pythonList(0, cens_.length)], [vecs_[pythonList(0, vecs_.length)][pythonList(1, vecs_[pythonList(0, vecs_.length)].length)], -vecs_[pythonList(0, vecs_.length)][pythonList(0, vecs_[pythonList(0, vecs_.length)].length)], vecs_[pythonList(0, vecs_.length)][pythonList(2, vecs_[pythonList(0, vecs_.length)].length)]]);

let ray2_ = rayMake(cens_[pythonList(1, cens_.length)], [vecs_[pythonList(1, vecs_.length)][pythonList(1, vecs_[pythonList(1, vecs_.length)].length)], -vecs_[pythonList(1, vecs_.length)][pythonList(0, vecs_[pythonList(1, vecs_.length)].length)], vecs_[pythonList(1, vecs_.length)][pythonList(2, vecs_[pythonList(1, vecs_.length)].length)]]);

let centroid_ = intersect(ray1_, ray2_);

let radius_ = distance(centroid_, end_);

let circ_ = __modules__.pattern.Arc( __params__.model, centroid_, radius_ + 2, 24, null );

let pl_ = __modules__.make.Polyline( __params__.model, circ_, 'close' );

let circ_pgon_ = __modules__.poly2d.OffsetMitre( __params__.model, pl_, 2, 10, 'square_end' );

__modules__.modify.Delete( __params__.model, pl_, 'delete_selected' );

return [circ_pgon_, arrow_];
}

async function exec_city_node_kdswy0uny2(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let start_ = [-90, -50, 0];

let north_ = __modules__.attrib.Get(__params__.model, null, 'north');

let end_ = vecAdd(start_, vecSetLen([north_[pythonList(0, north_.length)], north_[pythonList(1, north_.length)], 0], 50));

let notth_sign_ = await exec_city_node_kdswy0uny2_north_arrow_(__params__, start_, end_, [1, 1, 1]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, notth_sign_, 'type',  "north_sign" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_city_node_qyar89lw91c_bounce_(__params__, pgons_, bounce_) {

let new_pgons_ = [];

for (let  pgon_ of pgons_){

let off1_ = __modules__.poly2d.OffsetMitre( __params__.model, pgon_, -bounce_, bounce_, 'square_end' );

let off2_ = __modules__.poly2d.OffsetMitre( __params__.model, off1_, bounce_, bounce_, 'square_end' );

__modules__.modify.Delete( __params__.model, [pgon_, off1_], 'delete_selected' );

__modules__.list.Add( new_pgons_, off2_, 'to_start' );
}

return new_pgons_;
}


async function exec_city_node_qyar89lw91c_cleanPgonEdge_(__params__, pgon_) {

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


async function exec_city_node_qyar89lw91c_cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_city_node_qyar89lw91c_angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_city_node_qyar89lw91c_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_city_node_qyar89lw91c(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
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

await exec_city_node_qyar89lw91c_cleanPgonEdge_(__params__, site_);
if (__params__.terminated) { return __params__.model;}

await exec_city_node_qyar89lw91c_cleanPgonAng_(__params__, site_);
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


async function exec_city_node_t6lit3idd7(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let sites_ = __modules__.query.Get(__params__.model, 'pg', null);

let bb_ = __modules__.calc.BBox( __params__.model, __modules__.query.Get(__params__.model, 'pg', null) );

let plane_ = plnMake(bb_[pythonList(3, bb_.length)], [-1, -1.17, 0], [1, -1, 0]);

let g_ = __modules__.pattern.Grid( __params__.model, plane_, [2000, 2000], [4, 3], 'quads' );

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


async function exec_city_node_1n62ut0qpm3j(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
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


async function exec_city_node_mmdo2wo4ker(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
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


async function exec_city_node_9eqdm79bc1(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

let site_area_ = __modules__.calc.Area( __params__.model, site_ );

await __modules__.io.Export( __params__.model, null, "city.gi", 'gi', 'Save to Local Storage' );

let data_ = {};

data_['landowner0'] = site_area_;

let __return_value__ = __modules__._Output.Return(__params__.model, data_);
return __return_value__;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_city_node_czayisb5le5 = __params__.model;
console.log("Executing Node: geo-location");

__params__.model = result_exec_city_node_czayisb5le5;

let result_exec_city_node_pjm5j8ro13 = await exec_city_node_pjm5j8ro13(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: arteries and seconderis");

__params__.model = result_exec_city_node_pjm5j8ro13;

let result_exec_city_node_qeb45oblsl = await exec_city_node_qeb45oblsl(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: north arrow");

__params__.model = duplicateModel(result_exec_city_node_qeb45oblsl);

let result_exec_city_node_kdswy0uny2 = await exec_city_node_kdswy0uny2(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: trim roads from site");

__params__.model = result_exec_city_node_qeb45oblsl;

let result_exec_city_node_qyar89lw91c = await exec_city_node_qyar89lw91c(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: generate random landowners");

__params__.model = result_exec_city_node_qyar89lw91c;

let result_exec_city_node_t6lit3idd7 = await exec_city_node_t6lit3idd7(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: calc areas");

__params__.model = result_exec_city_node_t6lit3idd7;

let result_exec_city_node_1n62ut0qpm3j = await exec_city_node_1n62ut0qpm3j(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: extrude roads");

__params__.model = result_exec_city_node_1n62ut0qpm3j;

let result_exec_city_node_mmdo2wo4ker = await exec_city_node_mmdo2wo4ker(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);
console.log("Executing Node: End");

__params__.model = result_exec_city_node_mmdo2wo4ker;

let result_exec_city_node_9eqdm79bc1 = await exec_city_node_9eqdm79bc1(__params__, latitude_, longitude_, rotation_, site_front_dim_, site_back_dim_, site_back_shift_, site_sides_dim_, pop_density_);

return result_exec_city_node_9eqdm79bc1;
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
function printInp(latitude,longitude,rotation,site_front_dim,site_back_dim,site_back_shift,site_sides_dim,pop_density){
console.log("Calling function city() with the following arguments:\n" +
"  latitude = " + latitude + "\n" +
"  longitude = " + longitude + "\n" +
"  rotation = " + rotation + "\n" +
"  site_front_dim = " + site_front_dim + "\n" +
"  site_back_dim = " + site_back_dim + "\n" +
"  site_back_shift = " + site_back_shift + "\n" +
"  site_sides_dim = " + site_sides_dim + "\n" +
"  pop_density = " + pop_density + "\n" +
'')};


// printInp(latitude,longitude,rotation,site_front_dim,site_back_dim,site_back_shift,site_sides_dim,pop_density);
const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_city(__params__, latitude, longitude, rotation, site_front_dim, site_back_dim, site_back_shift, site_sides_dim, pop_density);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default city;
