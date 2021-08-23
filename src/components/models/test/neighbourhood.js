/**
 * to use this code: import neighbourhood from this js file as well as the GI module
 * run neighbourhood with the GI module as input along with other start node input
 * e.g.:
 * const neighbourhood = require('./neighbourhood.js').neighbourhood
 * const module = require('gi-module')
 * const result = await neighbourhood(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"in_model","value":"''","type":0}
// Parameter: {"name":"road_art_w","value":26,"type":1,"min":"10","max":"30","step":"1"}
// Parameter: {"name":"road_sec_w","value":18,"type":1,"min":"10","max":"30","step":"1"}
// Parameter: {"name":"road_loc_w","value":10,"type":1,"min":"5","max":"30","step":"1"}
// Parameter: {"name":"part_art_d","value":16,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"part_sec_d","value":27,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"part_loc_d","value":24,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"part_og_d","value":32,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"part_og_w","value":15,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"plot_art_w","value":32,"type":1,"min":"5","max":"50","step":"1"}
// Parameter: {"name":"plot_sec_w","value":14,"type":1,"min":"5","max":"50","step":"3"}
// Parameter: {"name":"plot_loc_w","value":26,"type":1,"min":"5","max":"50","step":"3"}
// Parameter: {"name":"blk_art_num_og_d","value":1,"type":1,"min":"0","max":"1","step":"1"}
// Parameter: {"name":"blk_art_num_og_w","value":2,"type":1,"min":"0","max":"10","step":"1"}
// Parameter: {"name":"blk_sec_num_og_d","value":0,"type":1,"min":"0","max":"1","step":"1"}
// Parameter: {"name":"blk_sec_num_og_w","value":3,"type":1,"min":"0","max":"10","step":"1"}
// Parameter: {"name":"blk_loc_num_og_d","value":2,"type":1,"min":"0","max":"2","step":"1"}
// Parameter: {"name":"blk_loc_num_og_w","value":4,"type":1,"min":"0","max":"10","step":"1"}
// Parameter: {"name":"path_w","value":3,"type":1,"min":"3","max":"10","step":"1"}
// Parameter: {"name":"open_percent","value":1.5,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"amen_percent","value":8,"type":1,"min":"0","max":"15","step":"0.1"}
// Parameter: {"name":"pavement_w","value":"3","type":1,"min":"1","max":"10","step":"0.5"}
// Parameter: {"name":"add_trees","value":true,"type":2}
// Parameter: {"name":"tree_spacing","value":12,"type":1,"min":"6","max":"30","step":"1"}
// Parameter: {"name":"tree_height_start","value":"8","type":1,"min":"5","max":"15","step":"1"}
// Parameter: {"name":"tree_height_max","value":"20","type":1,"min":"10","max":"30","step":"1"}


async function neighbourhood(__modules__, in_model, road_art_w, road_sec_w, road_loc_w, part_art_d, part_sec_d, part_loc_d, part_og_d, part_og_w, plot_art_w, plot_sec_w, plot_loc_w, blk_art_num_og_d, blk_art_num_og_w, blk_sec_num_og_d, blk_sec_num_og_w, blk_loc_num_og_d, blk_loc_num_og_w, path_w, open_percent, amen_percent, pavement_w, add_trees, tree_spacing, tree_height_start, tree_height_max) {

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


async function exec_neighbourhood_Zone(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){


async function exec_neighbourhood_Zone_node_hzj6ssscygo_rotSite_(__params__, pline_art_site_, site_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', pline_art_site_);

let straight_pline_ = __modules__.make.Polyline( __params__.model, [posis_[pythonList(0, posis_.length)], posis_[pythonList(-1, posis_.length)]], 'open' );

let ray_ = __modules__.calc.Ray( __params__.model, __modules__.query.Get(__params__.model, '_e', straight_pline_)[pythonList(0, __modules__.query.Get(__params__.model, '_e', straight_pline_).length)] );

let vecx_ = vecNorm(ray_[pythonList(1, ray_.length)]);

let vecy_ = [-vecx_[pythonList(1, vecx_.length)], vecx_[pythonList(0, vecx_.length)], 0];

let pln_ = plnMake(ray_[pythonList(0, ray_.length)], vecx_, vecy_);

__modules__.modify.XForm( __params__.model, site_, pln_, JSON.parse(JSON.stringify(XY)) );

__modules__.modify.Delete( __params__.model, straight_pline_, 'delete_selected' );

return pln_;
}


async function exec_neighbourhood_Zone_node_hzj6ssscygo_getPerimPlines_(__params__, site_, road_descr_) {

let edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (road_descr_ ==  __modules__.attrib.Get(__params__.model, edge_, 'road')){

__modules__.list.Add( edges_, edge_, 'to_end' );
}
}

let posis_ = [ __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)])];

for (let  edge_ of edges_.slice(1)){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (start_end_[pythonList(0, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}

else {
if(start_end_[pythonList(1, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(0, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(0, start_end_.length)], 'to_start' );
}

else {

__modules__.list.Add( posis_, start_end_, 'to_end' );
}
}
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_Zone_node_hzj6ssscygo_extendPline_(__params__, plines_, dist_) {

for (let  pline_ of plines_){

let closed_ = __modules__.query.Type( __params__.model, pline_, 'is_closed' );

if (!closed_){

__modules__.modify.Weld( __params__.model, pline_, 'break_weld' );

let edges_ = __modules__.query.Get(__params__.model, '_e', pline_);

let posis_ = __modules__.query.Get(__params__.model, 'ps', pline_);

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)]), 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(1, xyzs_.length)], xyzs_[pythonList(0, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(0, posis_.length)], vec_ );

xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(-1, edges_.length)]), 'xyz');

vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(-1, posis_.length)], vec_ );
}
}
}

async function exec_neighbourhood_Zone_node_hzj6ssscygo(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site1_ = __modules__.make.Copy( __params__.model, site_, null );

let edges0_ = __modules__.query.Get(__params__.model, '_e', site_);

let edges1_ = __modules__.query.Get(__params__.model, '_e', site1_);

for (let  i_ of range(len(edges0_))){

__modules__.attrib.Set(__params__.model, edges1_[pythonList(i_, edges1_.length)], 'road',  __modules__.attrib.Get(__params__.model, edges0_[pythonList(i_, edges0_.length)], 'road') );
}

__modules__.modify.Delete( __params__.model, site1_, 'keep_selected' );

let pline_art_site_ = await exec_neighbourhood_Zone_node_hzj6ssscygo_getPerimPlines_(__params__, site1_, "road_art");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'pln',  await exec_neighbourhood_Zone_node_hzj6ssscygo_rotSite_(__params__, pline_art_site_, site1_) );
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_Zone_node_hzj6ssscygo_extendPline_(__params__, pline_art_site_, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, pline_art_site_, 'name',  "art_pline" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_7sxsl258kv8_getLongestEdge_(__params__, edge_) {

let road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

let edges_same_type_ = [edge_];

let this_edge_ = edge_;

let this_road_ = road_;

while (this_road_ == road_){

this_edge_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_nextEdge_(__params__, this_edge_);
if (__params__.terminated) { return __params__.model;}

this_road_ = __modules__.attrib.Get(__params__.model, this_edge_, 'road');

if (this_road_ == road_){

__modules__.list.Add( edges_same_type_, this_edge_, 'to_end' );
}
}

this_edge_ = edge_;

this_road_ = road_;

while (this_road_ == road_){

this_edge_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_prevEdge_(__params__, this_edge_);
if (__params__.terminated) { return __params__.model;}

this_road_ = __modules__.attrib.Get(__params__.model, this_edge_, 'road');

if (this_road_ == road_){

__modules__.list.Add( edges_same_type_, this_edge_, 'to_end' );
}
}

edges_same_type_ = edges_same_type_;

let lengths_ = __modules__.calc.Length( __params__.model, edges_same_type_ );

return listSort(listZip([lengths_, edges_same_type_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_same_type_]), 0).length)][pythonList(1, listSort(listZip([lengths_, edges_same_type_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_same_type_]), 0).length)].length)];
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_getSiteLongestEdges_(__params__, site_, road_descr_) {

let edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (road_descr_ ==  __modules__.attrib.Get(__params__.model, edge_, 'road')){

__modules__.list.Add( edges_, edge_, 'to_end' );
}
}

if (len(edges_) == 0){

return [];
}

let posis_ = [ __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)])];

for (let  edge_ of edges_.slice(1)){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (start_end_[pythonList(0, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}

else {
if(start_end_[pythonList(1, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(0, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(0, start_end_.length)], 'to_start' );
}

else {

__modules__.list.Add( posis_, start_end_, 'to_end' );
}
}
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_extend_(__params__, pline_, dist_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', pline_);

let lengths_ = __modules__.calc.Length( __params__.model, edges_ );

let longest_ = listSort(listZip([edges_, lengths_]), 1)[pythonList(-1, listSort(listZip([edges_, lengths_]), 1).length)][pythonList(0, listSort(listZip([edges_, lengths_]), 1)[pythonList(-1, listSort(listZip([edges_, lengths_]), 1).length)].length)];

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', longest_), 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

let xyz0_ = vecSub(xyzs_[pythonList(0, xyzs_.length)], vec_);

let xyz1_ = vecAdd(xyzs_[pythonList(1, xyzs_.length)], vec_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_] );

let long_pline_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return long_pline_;
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_offsetEdge_(__params__, site_, pline_, dist_) {

let pline_long_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_extend_(__params__, pline_, 1000);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Offset( __params__.model, pline_long_, -dist_ );

pline_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_siteTrimPline_(__params__, site_, pline_long_);
if (__params__.terminated) { return __params__.model;}

return pline_;
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_siteTrimPline_(__params__, site_, pline_) {

let pline2_ = __modules__.poly2d.Boolean( __params__.model, pline_, site_, 'intersect' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

return pline2_;
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_getEdge_(__params__, wire_, posi_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', wire_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(posis_, posi_);

if (idx_ == -1){

return null;
}

return edges_[pythonList(idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_nextEdge_(__params__, edge_) {

let wire_ = __modules__.query.Get(__params__.model, '_w', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(edges_, edge_);

let next_idx_ = idx_ + 1;

if (next_idx_ == len(edges_)){

return edges_[pythonList(0, edges_.length)];
}

return edges_[pythonList(next_idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_prevEdge_(__params__, edge_) {

let wire_ = __modules__.query.Get(__params__.model, '_w', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(edges_, edge_);

let prev_idx_ = idx_ - 1;

if (prev_idx_ < 0){

return edges_[pythonList(-1, edges_.length)];
}

return edges_[pythonList(prev_idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_sortAlongX_(__params__, plines_) {

let cens_ = __modules__.calc.Centroid( __params__.model, plines_, 'ps_average' );

let x_vals_ = [];

for (let  cen_ of cens_){

__modules__.list.Add( x_vals_, cen_[pythonList(0, cen_.length)], 'to_end' );
}

let sorted_ = listSort(listZip([x_vals_, plines_]), 0);

let sorted_plines_ = [];

for (let  x_pline_ of sorted_){

__modules__.list.Add( sorted_plines_, x_pline_[pythonList(1, x_pline_.length)], 'to_end' );
}

return sorted_plines_;
}


async function exec_neighbourhood_Zone_node_7sxsl258kv8_closestEdge_(__params__, site_, xyz_) {

let min_d_ = Infinity;

let closest_edge_ = null;

if (xyz_[pythonList(0, xyz_.length)] > 1290){
}

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < min_d_){

min_d_ = d_;

closest_edge_ = edge_;
}

if (d_ < 0.001){

break;
}
}

return closest_edge_;
}

async function exec_neighbourhood_Zone_node_7sxsl258kv8(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site1_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

let site_art_ = ( __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', null), ['road', null], '==', "road_art"));

let posis_ = __modules__.query.Get(__params__.model, 'ps', site_art_);

let edge0_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_getEdge_(__params__, site1_, posis_[pythonList(0, posis_.length)]);
if (__params__.terminated) { return __params__.model;}

let left_edge_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_prevEdge_(__params__, edge0_);
if (__params__.terminated) { return __params__.model;}

let left_type_ = __modules__.attrib.Get(__params__.model, left_edge_, 'road');

if (left_type_ != "cold"){

let left_edge_long_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_getLongestEdge_(__params__, left_edge_);
if (__params__.terminated) { return __params__.model;}

let left_pline_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_extend_(__params__, left_edge_long_, 500);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, left_pline_, 'name',  "left_pline" );

__modules__.attrib.Set(__params__.model, left_pline_, 'type',  left_type_ );

__modules__.attrib.Set(__params__.model, left_pline_, 'site_edge',  left_edge_long_ );
}

let right_edge_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_getEdge_(__params__, site1_, posis_[pythonList(-1, posis_.length)]);
if (__params__.terminated) { return __params__.model;}

let right_type_ = __modules__.attrib.Get(__params__.model, right_edge_, 'road');

if (right_type_ != "cold"){

let right_edge_long_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_getLongestEdge_(__params__, right_edge_);
if (__params__.terminated) { return __params__.model;}

let right_pline_ = await exec_neighbourhood_Zone_node_7sxsl258kv8_extend_(__params__, right_edge_long_, 500);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, right_pline_, 'name',  "right_pline" );

__modules__.attrib.Set(__params__.model, right_pline_, 'type',  right_type_ );

__modules__.attrib.Set(__params__.model, right_pline_, 'site_edge',  right_edge_long_ );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_e1r5b4jl63o_getLongestEdge_(__params__, edge_) {

let road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

let edges_same_type_ = [edge_];

let this_edge_ = edge_;

let this_road_ = road_;

while (this_road_ == road_){

this_edge_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_nextEdge_(__params__, this_edge_);
if (__params__.terminated) { return __params__.model;}

this_road_ = __modules__.attrib.Get(__params__.model, this_edge_, 'road');

if (this_road_ == road_){

__modules__.list.Add( edges_same_type_, this_edge_, 'to_end' );
}
}

this_edge_ = edge_;

this_road_ = road_;

while (this_road_ == road_){

this_edge_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_prevEdge_(__params__, this_edge_);
if (__params__.terminated) { return __params__.model;}

this_road_ = __modules__.attrib.Get(__params__.model, this_edge_, 'road');

if (this_road_ == road_){

__modules__.list.Add( edges_same_type_, this_edge_, 'to_end' );
}
}

edges_same_type_ = edges_same_type_;

let lengths_ = __modules__.calc.Length( __params__.model, edges_same_type_ );

return listSort(listZip([lengths_, edges_same_type_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_same_type_]), 0).length)][pythonList(1, listSort(listZip([lengths_, edges_same_type_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_same_type_]), 0).length)].length)];
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_getSiteLongestEdges_(__params__, site_, road_descr_) {

let edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (road_descr_ ==  __modules__.attrib.Get(__params__.model, edge_, 'road')){

__modules__.list.Add( edges_, edge_, 'to_end' );
}
}

if (len(edges_) == 0){

return [];
}

let posis_ = [ __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)])];

for (let  edge_ of edges_.slice(1)){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (start_end_[pythonList(0, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}

else {
if(start_end_[pythonList(1, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(0, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(0, start_end_.length)], 'to_start' );
}

else {

__modules__.list.Add( posis_, start_end_, 'to_end' );
}
}
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_extend_(__params__, pline_, dist_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', pline_);

let lengths_ = __modules__.calc.Length( __params__.model, edges_ );

let longest_ = listSort(listZip([edges_, lengths_]), 1)[pythonList(-1, listSort(listZip([edges_, lengths_]), 1).length)][pythonList(0, listSort(listZip([edges_, lengths_]), 1)[pythonList(-1, listSort(listZip([edges_, lengths_]), 1).length)].length)];

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', longest_), 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

let xyz0_ = vecSub(xyzs_[pythonList(0, xyzs_.length)], vec_);

let xyz1_ = vecAdd(xyzs_[pythonList(1, xyzs_.length)], vec_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_] );

let long_pline_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return long_pline_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_offset_(__params__, sites_, roads_, dist_) {

let off1_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_, dist_, dist_, 'square_end' );

let plines1_ = __modules__.make.Polyline( __params__.model, off1_, 'close' );

let plines2_ = __modules__.poly2d.Boolean( __params__.model, plines1_, sites_, 'intersect' );

__modules__.modify.Delete( __params__.model, [off1_, plines1_], 'delete_selected' );

return plines2_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_expandEdge_(__params__, pline_, dist_) {

let pline_long_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_extend_(__params__, pline_, 100);
if (__params__.terminated) { return __params__.model;}

let pgon_ = __modules__.poly2d.OffsetMitre( __params__.model, pline_long_, dist_, dist_, 'square_end' );

return pgon_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_siteTrimPline_(__params__, site_, pline_) {

let pline2_ = __modules__.poly2d.Boolean( __params__.model, pline_, site_, 'intersect' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

return pline2_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_getEdge_(__params__, wire_, posi_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', wire_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(posis_, posi_);

if (idx_ == -1){

return null;
}

return edges_[pythonList(idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_nextEdge_(__params__, edge_) {

let wire_ = __modules__.query.Get(__params__.model, '_w', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(edges_, edge_);

let next_idx_ = idx_ + 1;

if (next_idx_ == len(edges_)){

return edges_[pythonList(0, edges_.length)];
}

return edges_[pythonList(next_idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_prevEdge_(__params__, edge_) {

let wire_ = __modules__.query.Get(__params__.model, '_w', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', wire_);

let idx_ = listFind(edges_, edge_);

let prev_idx_ = idx_ - 1;

if (prev_idx_ < 0){

return edges_[pythonList(-1, edges_.length)];
}

return edges_[pythonList(prev_idx_, edges_.length)];
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_sortAlongX_(__params__, plines_) {

let cens_ = __modules__.calc.Centroid( __params__.model, plines_, 'ps_average' );

let x_vals_ = [];

for (let  cen_ of cens_){

__modules__.list.Add( x_vals_, cen_[pythonList(0, cen_.length)], 'to_end' );
}

let sorted_ = listSort(listZip([x_vals_, plines_]), 0);

let sorted_plines_ = [];

for (let  x_pline_ of sorted_){

__modules__.list.Add( sorted_plines_, x_pline_[pythonList(1, x_pline_.length)], 'to_end' );
}

return sorted_plines_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_closestEdge_(__params__, edges_, xyz_) {

let min_d_ = Infinity;

let closest_edge_ = null;

if (xyz_[pythonList(0, xyz_.length)] > 1290){
}

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < min_d_){

min_d_ = d_;

closest_edge_ = edge_;
}

if (d_ < 0.001){

break;
}
}

return closest_edge_;
}


async function exec_neighbourhood_Zone_node_e1r5b4jl63o_transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}

async function exec_neighbourhood_Zone_node_e1r5b4jl63o(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site1_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

let art_pline_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['name', null], '==', "art_pline");

let left_pline_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['name', null], '==', "left_pline");

let right_pline_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['name', null], '==', "right_pline");

let road_art_off_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_offset_(__params__, site1_, art_pline_, blk_art_d_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, road_art_off_, 'name',  "road_loc_art_off" );

__modules__.attrib.Set(__params__.model, road_art_off_, 'type',  "road_loc_para" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', road_art_off_), 'road',  "road_loc_art_off" );

let left_off_ = [];

let left_ = [];

let road_left_off_ = [];

if (len(left_pline_) > 0){

__modules__.modify.Offset( __params__.model, left_pline_, -blk_sec_d_ );

let vec_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', left_pline_)[pythonList(0, __modules__.query.Get(__params__.model, '_e', left_pline_).length)] );

let ex_vec_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], 300);

left_off_ = __modules__.make.Extrude( __params__.model, left_pline_, ex_vec_, 1, 'quads' );

__modules__.modify.Reverse( __params__.model, left_off_ );

left_ = __modules__.poly2d.Boolean( __params__.model, site1_, left_off_, 'intersect' );

road_left_off_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_siteTrimPline_(__params__, site1_, left_pline_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, road_left_off_, 'name',  "road_loc_left_off" );

__modules__.attrib.Set(__params__.model, road_left_off_, 'type',  "road_loc_perp" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', road_left_off_), 'road',  "road_loc_left_off" );
}

let right_off_ = [];

let right_ = [];

let road_right_off_ = [];

if (len(right_pline_) > 0){

__modules__.modify.Offset( __params__.model, right_pline_, -blk_sec_d_ );

let vec_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', right_pline_)[pythonList(0, __modules__.query.Get(__params__.model, '_e', right_pline_).length)] );

let ex_vec_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], 300);

right_off_ = __modules__.make.Extrude( __params__.model, right_pline_, ex_vec_, 1, 'quads' );

__modules__.modify.Reverse( __params__.model, right_off_ );

right_ = __modules__.poly2d.Boolean( __params__.model, site1_, right_off_, 'intersect' );

road_right_off_ = await exec_neighbourhood_Zone_node_e1r5b4jl63o_siteTrimPline_(__params__, site1_, right_pline_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, road_right_off_, 'name',  "road_loc_right_off" );

__modules__.attrib.Set(__params__.model, road_right_off_, 'type',  "road_loc_perp" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', road_right_off_), 'road',  "road_loc_right_off" );
}

let dist_ = blk_art_d_;

let art_off_ = __modules__.poly2d.OffsetMitre( __params__.model, art_pline_, dist_, dist_, 'square_end' );

let off_grid_ = __modules__.poly2d.Boolean( __params__.model, site1_, [left_off_, right_off_, art_off_], 'difference' );

let art_ = __modules__.poly2d.Boolean( __params__.model, site1_, art_off_, 'intersect' );

let corners_ = __modules__.poly2d.Boolean( __params__.model, art_, [left_off_, right_off_], 'intersect' );

let left2_ = __modules__.poly2d.Boolean( __params__.model, left_, art_off_, 'difference' );

let right2_ = __modules__.poly2d.Boolean( __params__.model, right_, art_off_, 'difference' );

let art2_ = __modules__.poly2d.Boolean( __params__.model, art_, [left_off_, right_off_], 'difference' );

__modules__.attrib.Set(__params__.model, off_grid_, 'name',  "zone_mid" );

__modules__.attrib.Set(__params__.model, art2_, 'name',  "zone_art" );

__modules__.attrib.Set(__params__.model, left2_, 'name',  "zone_left" );

__modules__.attrib.Set(__params__.model, right2_, 'name',  "zone_right" );

__modules__.attrib.Set(__params__.model, corners_, 'name',  "zone_corner" );

let roads_ = [road_art_off_, road_left_off_, road_right_off_];

let zones_ = [off_grid_, corners_, left2_, right2_, art2_];

let from_edges_ = listFlat([ __modules__.query.Get(__params__.model, '_e', roads_),  __modules__.query.Get(__params__.model, '_e', site1_)]);

let to_edges_ = listFlat( __modules__.query.Get(__params__.model, '_e', zones_));

await exec_neighbourhood_Zone_node_e1r5b4jl63o_transferEdgeAttribs_(__params__, from_edges_, to_edges_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [roads_, zones_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_6iqn8018ain_siteTrimPline_(__params__, site_, plines_) {

let new_plines_ = [];

for (let  pline_ of plines_){

let pline2_ = __modules__.poly2d.Boolean( __params__.model, pline_, site_, 'intersect' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

__modules__.list.Add( new_plines_, pline2_, 'to_end' );
}

return new_plines_;
}

async function exec_neighbourhood_Zone_node_6iqn8018ain(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let zone_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_art");

__modules__.modify.Delete( __params__.model, zone_, 'keep_selected' );

let bb_ = __modules__.calc.BBox( __params__.model, zone_ );

let num_x_ = round(bb_[pythonList(3, bb_.length)][pythonList(0, bb_[pythonList(3, bb_.length)].length)] / blk_art_w_) + 1;

let x_plines_ = [];

if (num_x_ > 2){

let posis_ = __modules__.pattern.Grid( __params__.model, bb_[pythonList(0, bb_.length)], [bb_[pythonList(3, bb_.length)][pythonList(0, bb_[pythonList(3, bb_.length)].length)], bb_[pythonList(3, bb_.length)][pythonList(1, bb_[pythonList(3, bb_.length)].length)]], [num_x_, 2], 'columns' );

x_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

x_plines_ = x_plines_.slice(1, -1);

x_plines_ = await exec_neighbourhood_Zone_node_6iqn8018ain_siteTrimPline_(__params__, zone_, x_plines_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, x_plines_, 'type',  "road_loc_perp" );
}

__modules__.modify.Delete( __params__.model, x_plines_, 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_ybw3hdpw97h_siteTrimPline_(__params__, site_, plines_) {

let new_plines_ = [];

for (let  pline_ of plines_){

let pline2_ = __modules__.poly2d.Boolean( __params__.model, pline_, site_, 'intersect' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

__modules__.list.Add( new_plines_, pline2_, 'to_end' );
}

return new_plines_;
}


async function exec_neighbourhood_Zone_node_ybw3hdpw97h_createRoads_(__params__, bb_all_, zone_, edges_off_) {

let posis_left_off_ = __modules__.query.Get(__params__.model, 'ps', edges_off_);

let xyz0_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_off_[pythonList(0, edges_off_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'ps', edges_off_[pythonList(0, edges_off_.length)]).length)], 'xyz');

let xyz1_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_off_[pythonList(-1, edges_off_.length)])[pythonList(1, __modules__.query.Get(__params__.model, 'ps', edges_off_[pythonList(-1, edges_off_.length)]).length)], 'xyz');

let vec_ = vecFromTo(xyz0_, xyz1_);

let bb_zone_ = __modules__.calc.BBox( __params__.model, zone_ );

let dist_y_ = bb_zone_[pythonList(2, bb_zone_.length)][pythonList(1, bb_zone_[pythonList(2, bb_zone_.length)].length)] - bb_all_[pythonList(1, bb_all_.length)][pythonList(1, bb_all_[pythonList(1, bb_all_.length)].length)];

let num_blocks_y_ = floor(dist_y_ / blk_sec_w_) + 1;

let size_y_ = num_blocks_y_ * blk_sec_w_;

let new_plines_ = [];

if (num_blocks_y_ > 1){

for (let  i_ of range(1, num_blocks_y_)){

let y_ = bb_all_[pythonList(1, bb_all_.length)][pythonList(1, bb_all_[pythonList(1, bb_all_.length)].length)] + (blk_sec_w_ * i_);

let posi1_ = __modules__.make.Position( __params__.model, [bb_zone_[pythonList(1, bb_zone_.length)][pythonList(0, bb_zone_[pythonList(1, bb_zone_.length)].length)], y_, 0] );

let posi2_ = __modules__.make.Position( __params__.model, [bb_zone_[pythonList(2, bb_zone_.length)][pythonList(0, bb_zone_[pythonList(2, bb_zone_.length)].length)], y_, 0] );

let new_pline_ = __modules__.make.Polyline( __params__.model, [posi1_, posi2_], 'open' );

__modules__.list.Add( new_plines_, new_pline_, 'to_end' );
}

new_plines_ = await exec_neighbourhood_Zone_node_ybw3hdpw97h_siteTrimPline_(__params__, zone_, new_plines_);
if (__params__.terminated) { return __params__.model;}
}

return new_plines_;
}

async function exec_neighbourhood_Zone_node_ybw3hdpw97h(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let zone_left_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_left");

let zone_mid_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_mid");

let zone_right_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_right");

let bb_all_ = __modules__.calc.BBox( __params__.model, listFlat([zone_left_, zone_mid_, zone_right_]) );

__modules__.modify.Delete( __params__.model, [zone_left_, zone_right_], 'keep_selected' );

let edges_left_off_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', zone_left_), ['road', null], '==', "road_loc_left_off");

let roads_left_ = [];

if (len(edges_left_off_) > 0){

roads_left_ = await exec_neighbourhood_Zone_node_ybw3hdpw97h_createRoads_(__params__, bb_all_, zone_left_, edges_left_off_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, roads_left_, 'type',  "road_loc_para" );
}

let edges_right_off_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', zone_right_), ['road', null], '==', "road_loc_right_off");

let roads_right_ = [];

if (len(edges_right_off_) > 0){

roads_right_ = await exec_neighbourhood_Zone_node_ybw3hdpw97h_createRoads_(__params__, bb_all_, zone_right_, edges_right_off_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, roads_right_, 'type',  "road_loc_para" );
}

__modules__.modify.Delete( __params__.model, [roads_left_, roads_right_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_987q4nkshkv_siteTrimPline_(__params__, site_, plines_) {

let new_plines_ = [];

for (let  pline_ of plines_){

let pline2_ = __modules__.poly2d.Boolean( __params__.model, pline_, site_, 'intersect' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

__modules__.list.Add( new_plines_, pline2_, 'to_end' );
}

return new_plines_;
}

async function exec_neighbourhood_Zone_node_987q4nkshkv(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let zone_left_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_left");

let zone_mid_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_mid");

let zone_right_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['name', null], '==', "zone_right");

let bb_mid_ = __modules__.calc.BBox( __params__.model, zone_mid_ );

let bb_all_ = __modules__.calc.BBox( __params__.model, listFlat([zone_left_, zone_mid_, zone_right_]) );

__modules__.modify.Delete( __params__.model, zone_mid_, 'keep_selected' );

let num_blks_x_ = round(bb_mid_[pythonList(3, bb_mid_.length)][pythonList(0, bb_mid_[pythonList(3, bb_mid_.length)].length)] / blk_loc_w_);

let dist_y_ = bb_mid_[pythonList(2, bb_mid_.length)][pythonList(1, bb_mid_[pythonList(2, bb_mid_.length)].length)] - bb_all_[pythonList(1, bb_all_.length)][pythonList(1, bb_all_[pythonList(1, bb_all_.length)].length)];

let num_blks_y_ = round(dist_y_ / blk_loc_d_);

let cen_y_ = bb_all_[pythonList(1, bb_all_.length)][pythonList(1, bb_all_[pythonList(1, bb_all_.length)].length)] + (num_blks_y_ * blk_loc_d_ * 0.5);

let plines_x_ = [];

let plines_y_ = [];

if (num_blks_x_ > 1 && num_blks_y_ > 1){

let origin_ = [bb_mid_[pythonList(0, bb_mid_.length)][pythonList(0, bb_mid_[pythonList(0, bb_mid_.length)].length)], cen_y_, 0];

let size_ = [bb_mid_[pythonList(3, bb_mid_.length)][pythonList(0, bb_mid_[pythonList(3, bb_mid_.length)].length)], num_blks_y_ * blk_loc_d_];

let num_posis_ = [num_blks_x_ + 1, num_blks_y_ + 1];

let posis_ = __modules__.pattern.Grid( __params__.model, origin_, size_, num_posis_, 'rows' );

plines_x_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

plines_y_ = __modules__.make.Polyline( __params__.model, listZip(posis_), 'open' );

plines_x_ = plines_x_.slice(1, -1);

plines_x_ = await exec_neighbourhood_Zone_node_987q4nkshkv_siteTrimPline_(__params__, zone_mid_, plines_x_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, plines_x_, 'type',  "road_loc_para_inn" );

plines_y_ = plines_y_.slice(1, -1);

plines_y_ = await exec_neighbourhood_Zone_node_987q4nkshkv_siteTrimPline_(__params__, zone_mid_, plines_y_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, plines_y_, 'type',  "road_loc_perp_inn" );
}

__modules__.modify.Delete( __params__.model, [plines_x_, plines_y_], 'keep_selected' );

__modules__.modify.Fuse( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 0.01 );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_Zone_node_mekb7lw7tsa(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_Zone_node_70iqi43ow39(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_9r0bv46xbxd_touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 0.01){

return edge_;

break;
}
}

return null;
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_extend_(__params__, edge_, dist_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

let xyzs_ = __modules__.attrib.Get(__params__.model, posis_, 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

if (dist_ > 0){

__modules__.modify.Move( __params__.model, posis_[pythonList(1, posis_.length)], vec_ );

__modules__.attrib.Set(__params__.model, posis_[pythonList(1, posis_.length)], 'type',  "extended" );
}

else {

__modules__.modify.Move( __params__.model, posis_[pythonList(0, posis_.length)], vec_ );

__modules__.attrib.Set(__params__.model, posis_[pythonList(0, posis_.length)], 'type',  "extended" );
}
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_detachRoadEndsFromColdEdge_(__params__, site_edges_, roads_) {

let roads_trimmed_ = [];

for (let  road_ of roads_){

let still_exists_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_detachFromColdEdge_(__params__, site_edges_, road_, true);
if (__params__.terminated) { return __params__.model;}

if (still_exists_){

still_exists_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_detachFromColdEdge_(__params__, site_edges_, road_, false);
if (__params__.terminated) { return __params__.model;}

if (still_exists_){

__modules__.list.Add( roads_trimmed_, road_, 'to_end' );
}
}
}

return roads_trimmed_;
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_detachFromColdEdge_(__params__, site_edges_, road_, detach_start_) {

let verts_ = __modules__.query.Get(__params__.model, '_v', road_);

if (len(verts_) < 2){

return false;
}

let index_ = 0;

if (!detach_start_){

index_ = -1;
}

let vert_ = verts_[pythonList(index_, verts_.length)];

let posi_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let xyz_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let start_edge_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_touchingEdge_(__params__, site_edges_, xyz_);
if (__params__.terminated) { return __params__.model;}

if (start_edge_ != null){

let start_road_ = __modules__.attrib.Get(__params__.model, start_edge_, 'road');

if (start_road_ == "cold"){

__modules__.modify.Weld( __params__.model, [vert_], 'break_weld' );

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'ps', vert_), 'delete_selected' );

let edges_ = __modules__.query.Get(__params__.model, '_e', road_);

if (len(edges_)){

if (detach_start_){

await exec_neighbourhood_Zone_node_9r0bv46xbxd_remDanglingEdges_(__params__, edges_[pythonList(0, edges_.length)]);
if (__params__.terminated) { return __params__.model;}
}

else {

await exec_neighbourhood_Zone_node_9r0bv46xbxd_remDanglingEdges_(__params__, edges_[pythonList(-1, edges_.length)]);
if (__params__.terminated) { return __params__.model;}
}
}
}
}

let exists_ = __modules__.query.Type( __params__.model, road_, 'exists' );

return exists_;
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_remDanglingEdges_(__params__, edge_) {

let road_ = __modules__.query.Get(__params__.model, 'pl', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', road_);

let index_ = 0;

if (edges_[pythonList(-1, edges_.length)] == edge_){

__modules__.list.Sort( edges_, 'reverse' );

index_ = 1;
}

for ( edge_ of edges_){

let edge_posi_ = __modules__.query.Get(__params__.model, 'ps', edge_)[pythonList(index_, __modules__.query.Get(__params__.model, 'ps', edge_).length)];

if (len( __modules__.query.Get(__params__.model, '_e', edge_posi_)) == 1){

__modules__.modify.Delete( __params__.model, edge_posi_, 'delete_selected' );
}

else {

break;
}
}
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_extendBeyondBoundaryRoad_(__params__, site_edges_, roads_) {

for (let  road_ of roads_){

let posis_ = __modules__.query.Get(__params__.model, 'ps', road_);

let edges_ = __modules__.query.Get(__params__.model, '_e', road_);

let start_edge_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_touchingEdge_(__params__, site_edges_, __modules__.attrib.Get(__params__.model, posis_[pythonList(0, posis_.length)], 'xyz'));
if (__params__.terminated) { return __params__.model;}

if (start_edge_ != null){

let start_road_ = __modules__.attrib.Get(__params__.model, start_edge_, 'road');

if (listFind(["road_art", "road_sec", "road_ter"], start_road_) != -1){

await exec_neighbourhood_Zone_node_9r0bv46xbxd_extend_(__params__, edges_[pythonList(0, edges_.length)], -20);
if (__params__.terminated) { return __params__.model;}
}
}

let end_edge_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_touchingEdge_(__params__, site_edges_, __modules__.attrib.Get(__params__.model, posis_[pythonList(-1, posis_.length)], 'xyz'));
if (__params__.terminated) { return __params__.model;}

if (end_edge_ != null){

let end_road_ = __modules__.attrib.Get(__params__.model, end_edge_, 'road');

if (listFind(["road_art", "road_sec", "road_ter"], end_road_) != -1){

await exec_neighbourhood_Zone_node_9r0bv46xbxd_extend_(__params__, edges_[pythonList(-1, edges_.length)], 20);
if (__params__.terminated) { return __params__.model;}
}
}
}
}


async function exec_neighbourhood_Zone_node_9r0bv46xbxd_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_Zone_node_9r0bv46xbxd(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site1_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

let roads_ = __modules__.query.Get(__params__.model, 'pl', null);

let new_roads_ = __modules__.poly2d.Stitch( __params__.model, roads_, 0.1 );

__modules__.modify.Delete( __params__.model, roads_, 'delete_selected' );

let site_edges_ = __modules__.query.Get(__params__.model, '_e', site1_);

new_roads_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_detachRoadEndsFromColdEdge_(__params__, site_edges_, new_roads_);
if (__params__.terminated) { return __params__.model;}

new_roads_ = __modules__.query.Get(__params__.model, 'pl', new_roads_);

await exec_neighbourhood_Zone_node_9r0bv46xbxd_extendBeyondBoundaryRoad_(__params__, site_edges_, new_roads_);
if (__params__.terminated) { return __params__.model;}

new_roads_ = __modules__.query.Get(__params__.model, 'pl', new_roads_);

__modules__.modify.Fuse( __params__.model, new_roads_, 5 );

for (let  posi_ of __modules__.query.Get(__params__.model, 'ps', new_roads_)){

if (len( __modules__.query.Get(__params__.model, '_e', posi_)) == 1 &&  __modules__.attrib.Get(__params__.model, posi_, 'type')!= "extended"){

await exec_neighbourhood_Zone_node_9r0bv46xbxd_remDanglingEdges_(__params__, __modules__.query.Get(__params__.model, '_e', posi_));
if (__params__.terminated) { return __params__.model;}
}
}

new_roads_ = __modules__.query.Get(__params__.model, 'pl', new_roads_);

for (let  posi_ of __modules__.query.Get(__params__.model, 'ps', new_roads_)){

let verts_ = __modules__.query.Get(__params__.model, '_v', posi_);

let edges_ = __modules__.query.Get(__params__.model, '_e', posi_);

if (len(edges_) == 2 && len(verts_) == 1){

let dot_ = await exec_neighbourhood_Zone_node_9r0bv46xbxd_angDot_(__params__, verts_[pythonList(0, verts_.length)]);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.99){

__modules__.modify.Delete( __params__.model, posi_, 'delete_selected' );
}
}
}

new_roads_ = __modules__.query.Get(__params__.model, 'pl', new_roads_);

__modules__.modify.Delete( __params__.model, [site1_, new_roads_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_Zone_node_rfro6y4fz8_transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_Zone_node_rfro6y4fz8_touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}

else {

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  "road_loc" );
}
}
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8_touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8_joinPlines_(__params__, pline0_, pline1_) {

let posis0_ = __modules__.query.Get(__params__.model, 'ps', pline0_);

let posis1_ = __modules__.query.Get(__params__.model, 'ps', pline1_);

let posis_ = null;

if (posis0_[pythonList(0, posis0_.length)] == posis1_[pythonList(0, posis1_.length)]){

posis_ = listJoin(listRev(posis0_), posis1_.slice(1));
}

else {
if(posis0_[pythonList(-1, posis0_.length)] == posis1_[pythonList(-1, posis1_.length)]){

posis_ = listJoin(posis0_, listRev(posis1_).slice(1));
}

else {
if(posis0_[pythonList(-1, posis0_.length)] == posis1_[pythonList(0, posis1_.length)]){

posis_ = listJoin(posis0_, posis1_.slice(1));
}

else {
if(posis0_[pythonList(0, posis0_.length)] == posis1_[pythonList(-1, posis1_.length)]){

posis_ = listJoin(listRev(posis0_), listRev(posis1_).slice(1));
}
}
}
}

let cc_ = posis_;

let new_pline_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

__modules__.modify.Delete( __params__.model, [pline0_, pline1_], 'delete_selected' );

return new_pline_;
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8__cleanPgonsEdge_(__params__, pgons_) {

for (let  pgon_ of pgons_){

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

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8__cleanPgonsAng_(__params__, pgons_) {

for (let  pgon_ of pgons_){

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_Zone_node_rfro6y4fz8__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_Zone_node_rfro6y4fz8_cleanPgons_(__params__, pgons_) {

pgons_ = await exec_neighbourhood_Zone_node_rfro6y4fz8__cleanPgonsEdge_(__params__, pgons_);
if (__params__.terminated) { return __params__.model;}

pgons_ = await exec_neighbourhood_Zone_node_rfro6y4fz8__cleanPgonsAng_(__params__, pgons_);
if (__params__.terminated) { return __params__.model;}

return pgons_;
}

async function exec_neighbourhood_Zone_node_rfro6y4fz8(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site1_ = __modules__.query.Get(__params__.model, 'pg', null)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', null).length)];

let roads_ = __modules__.query.Get(__params__.model, 'pl', null);

let road_pgons_ = [];

let blocks_ = [];

if (len(roads_)){

let bool_roads_ = __modules__.make.Copy( __params__.model, roads_, null );

for (let  posi_ of __modules__.query.Get(__params__.model, 'ps', bool_roads_)){

let edges_ = __modules__.query.Get(__params__.model, '_e', posi_);

let plines_ = __modules__.query.Get(__params__.model, 'pl', posi_);

if (len(plines_) == 2 && len(edges_) == 2){

let new_pline_ = await exec_neighbourhood_Zone_node_rfro6y4fz8_joinPlines_(__params__, plines_[pythonList(0, plines_.length)], plines_[pythonList(1, plines_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( bool_roads_, new_pline_, 'to_end' );
}
}

bool_roads_ = __modules__.query.Get(__params__.model, 'pl', bool_roads_);

road_pgons_ = __modules__.poly2d.OffsetMitre( __params__.model, __modules__.query.Get(__params__.model, 'pl', bool_roads_), road_loc_w_ / 2, 100, 'butt_end' );

road_pgons_ = await exec_neighbourhood_Zone_node_rfro6y4fz8_cleanPgons_(__params__, road_pgons_);
if (__params__.terminated) { return __params__.model;}

blocks_ = __modules__.poly2d.Boolean( __params__.model, site1_, road_pgons_, 'difference' );

blocks_ = await exec_neighbourhood_Zone_node_rfro6y4fz8_cleanPgons_(__params__, blocks_);
if (__params__.terminated) { return __params__.model;}

road_pgons_ = __modules__.poly2d.Boolean( __params__.model, road_pgons_, site1_, 'intersect' );

road_pgons_ = __modules__.poly2d.Union( __params__.model, road_pgons_ );

let site_edges_ = __modules__.query.Get(__params__.model, '_e', site1_);

for (let  block_ of blocks_){

await exec_neighbourhood_Zone_node_rfro6y4fz8_transferEdgeAttribs_(__params__, site_edges_, __modules__.query.Get(__params__.model, '_e', block_));
if (__params__.terminated) { return __params__.model;}
}
}

else {

blocks_ = __modules__.make.Copy( __params__.model, site1_, null );

let site_edges_ = __modules__.query.Get(__params__.model, '_e', site1_);

await exec_neighbourhood_Zone_node_rfro6y4fz8_transferEdgeAttribs_(__params__, site_edges_, __modules__.query.Get(__params__.model, '_e', blocks_));
if (__params__.terminated) { return __params__.model;}
}

__modules__.modify.Delete( __params__.model, [roads_, blocks_, road_pgons_], 'keep_selected' );

__modules__.attrib.Set(__params__.model, blocks_, 'type',  "block" );

__modules__.attrib.Set(__params__.model, road_pgons_, 'type',  "road_loc" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_Zone_node_xw3xymox0rk(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let ents_ = [ __modules__.query.Get(__params__.model, 'pl', null),  __modules__.query.Get(__params__.model, 'pg', null)];

__modules__.modify.XForm( __params__.model, ents_, JSON.parse(JSON.stringify(XY)), __modules__.attrib.Get(__params__.model, null, 'pln') );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_Zone_node_2owrvrwzaq2(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

return null;
break; }
}

var merged;
let result_exec_neighbourhood_Zone_node_x8o5il6go1 = __params__.model;

__params__.model = duplicateModel(result_exec_neighbourhood_Zone_node_x8o5il6go1);

let result_exec_neighbourhood_Zone_node_hzj6ssscygo = await exec_neighbourhood_Zone_node_hzj6ssscygo(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = duplicateModel(result_exec_neighbourhood_Zone_node_hzj6ssscygo);

let result_exec_neighbourhood_Zone_node_7sxsl258kv8 = await exec_neighbourhood_Zone_node_7sxsl258kv8(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = result_exec_neighbourhood_Zone_node_7sxsl258kv8;

let result_exec_neighbourhood_Zone_node_e1r5b4jl63o = await exec_neighbourhood_Zone_node_e1r5b4jl63o(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = duplicateModel(result_exec_neighbourhood_Zone_node_e1r5b4jl63o);

let result_exec_neighbourhood_Zone_node_6iqn8018ain = await exec_neighbourhood_Zone_node_6iqn8018ain(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = duplicateModel(result_exec_neighbourhood_Zone_node_e1r5b4jl63o);

let result_exec_neighbourhood_Zone_node_ybw3hdpw97h = await exec_neighbourhood_Zone_node_ybw3hdpw97h(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = duplicateModel(result_exec_neighbourhood_Zone_node_e1r5b4jl63o);

let result_exec_neighbourhood_Zone_node_987q4nkshkv = await exec_neighbourhood_Zone_node_987q4nkshkv(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = result_exec_neighbourhood_Zone_node_e1r5b4jl63o;

let result_exec_neighbourhood_Zone_node_mekb7lw7tsa = await exec_neighbourhood_Zone_node_mekb7lw7tsa(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = result_exec_neighbourhood_Zone_node_hzj6ssscygo;

let result_exec_neighbourhood_Zone_node_70iqi43ow39 = await exec_neighbourhood_Zone_node_70iqi43ow39(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = mergeInputs([result_exec_neighbourhood_Zone_node_6iqn8018ain, result_exec_neighbourhood_Zone_node_ybw3hdpw97h, result_exec_neighbourhood_Zone_node_987q4nkshkv, result_exec_neighbourhood_Zone_node_mekb7lw7tsa, result_exec_neighbourhood_Zone_node_70iqi43ow39]);

let result_exec_neighbourhood_Zone_node_9r0bv46xbxd = await exec_neighbourhood_Zone_node_9r0bv46xbxd(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = result_exec_neighbourhood_Zone_node_9r0bv46xbxd;

let result_exec_neighbourhood_Zone_node_rfro6y4fz8 = await exec_neighbourhood_Zone_node_rfro6y4fz8(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = result_exec_neighbourhood_Zone_node_rfro6y4fz8;

let result_exec_neighbourhood_Zone_node_xw3xymox0rk = await exec_neighbourhood_Zone_node_xw3xymox0rk(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

__params__.model = mergeInputs([result_exec_neighbourhood_Zone_node_x8o5il6go1, result_exec_neighbourhood_Zone_node_xw3xymox0rk]);

let result_exec_neighbourhood_Zone_node_2owrvrwzaq2 = await exec_neighbourhood_Zone_node_2owrvrwzaq2(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);

return result_exec_neighbourhood_Zone_node_2owrvrwzaq2;
}

async function exec_neighbourhood(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){

async function exec_neighbourhood_node_a8gsb2eusm4(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let coll_city_ = await __modules__.io.Import( __params__.model, in_model_, 'gi' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_whd8yyh3oy(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let road_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec_new");

let road_sec_new_ = __modules__.poly2d.OffsetMitre( __params__.model, road_sec_, 5, 5, 'square_end' );

let landowners_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

for (let  landowner_ of landowners_){

let divided_sites_ = __modules__.poly2d.Boolean( __params__.model, landowner_, road_sec_new_, 'difference' );

if (len(divided_sites_) > 0){

__modules__.visualize.Color( __params__.model, divided_sites_, __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, '_v', landowner_)[pythonList(0, __modules__.query.Get(__params__.model, '_v', landowner_).length)], 'rgb') );

__modules__.modify.Delete( __params__.model, landowner_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, divided_sites_, 'type',  "landowner" );
}
}

let trimmed_landowners_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

let trimmed_landowners_areas_ = __modules__.calc.Area( __params__.model, trimmed_landowners_ );

__modules__.attrib.Set(__params__.model, null, 'new_road_area',  __modules__.attrib.Get(__params__.model, null, 'site_on_landowners_area')- sum(trimmed_landowners_areas_) );

__modules__.modify.Delete( __params__.model, road_sec_new_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, road_sec_, 'type',  "road_sec" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_vpoahaxtcn_cleanPgonEdge_(__params__, pgon_) {

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


async function exec_neighbourhood_node_vpoahaxtcn_cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_vpoahaxtcn_angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_vpoahaxtcn_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_node_vpoahaxtcn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let landowners_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

__modules__.modify.Delete( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '!=', "landowner"), 'delete_selected' );

let site_combined_ = __modules__.poly2d.Union( __params__.model, landowners_ );

for (let  site_ of site_combined_){

await exec_neighbourhood_node_vpoahaxtcn_cleanPgonEdge_(__params__, site_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_vpoahaxtcn_cleanPgonAng_(__params__, site_);
if (__params__.terminated) { return __params__.model;}
}

__modules__.modify.Delete( __params__.model, landowners_, 'delete_selected' );

let road_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let site2_ = __modules__.poly2d.OffsetMitre( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 20, 20, 'square_end' );

let road_art_trim_ = __modules__.poly2d.Boolean( __params__.model, road_art_, site2_, 'intersect' );

let posis_ = __modules__.query.Get(__params__.model, 'ps', road_art_trim_);

let xyz0_ = __modules__.attrib.Get(__params__.model, posis_[pythonList(-1, posis_.length)], 'xyz');

let xyz1_ = __modules__.attrib.Get(__params__.model, posis_[pythonList(0, posis_.length)], 'xyz');

let x_ = vecFromTo(xyz0_, xyz1_);

let y_ = [-x_[pythonList(1, x_.length)], x_[pythonList(0, x_.length)], 0];

__modules__.attrib.Set(__params__.model, null, 'ortho',  plnMake(xyz0_, x_, y_) );

__modules__.modify.Delete( __params__.model, [site2_, road_art_trim_], 'delete_selected' );

let areas_ = __modules__.calc.Area( __params__.model, site_combined_ );

__modules__.attrib.Set(__params__.model, null, 'site_total_area',  sum(areas_) );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, 'pg', null), 'type',  "zone" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_x79axdhvvk(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_7fnrhogzg74_bounce_(__params__, pgons_, bounce_) {

let new_pgons_ = [];

for (let  pgon_ of pgons_){

let off1_ = __modules__.poly2d.OffsetMitre( __params__.model, pgon_, -bounce_, bounce_, 'square_end' );

let off2_ = __modules__.poly2d.OffsetMitre( __params__.model, off1_, bounce_, bounce_, 'square_end' );

__modules__.modify.Delete( __params__.model, [pgon_, off1_], 'delete_selected' );

__modules__.list.Add( new_pgons_, off2_, 'to_start' );
}

return new_pgons_;
}


async function exec_neighbourhood_node_7fnrhogzg74_cleanPgonEdge_(__params__, pgon_) {

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


async function exec_neighbourhood_node_7fnrhogzg74_cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_7fnrhogzg74_angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_7fnrhogzg74_angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_node_7fnrhogzg74(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let zones_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "zone");

let road_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let road_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec");

let road_ = 'pl2';

let edge_ = __modules__.query.Get(__params__.model, '_e', road_)[pythonList(-1, __modules__.query.Get(__params__.model, '_e', road_).length)];

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

let vec_ = vecSetLen(vecFromTo( __modules__.attrib.Get(__params__.model, posis_[pythonList(0, posis_.length)], 'xyz'),  __modules__.attrib.Get(__params__.model, posis_[pythonList(1, posis_.length)], 'xyz')), 50);

__modules__.modify.Move( __params__.model, posis_[pythonList(1, posis_.length)], vec_ );

let roads_art_ = __modules__.poly2d.OffsetMitre( __params__.model, road_art_, road_art_w_ / 2, road_art_w_, 'square_end' );

let roads_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, road_sec_, road_sec_w_ / 2, road_sec_w_, 'square_end' );

let site_pline_ = __modules__.make.Polyline( __params__.model, zones_, 'close' );

let zones_on_roads_art_ = __modules__.poly2d.Boolean( __params__.model, zones_, roads_art_, 'intersect' );

let zones_on_roads_art_areas_ = __modules__.calc.Area( __params__.model, zones_on_roads_art_ );

__modules__.attrib.Set(__params__.model, null, 'zones_on_roads_art_area',  sum(zones_on_roads_art_areas_) );

let zones_on_roads_sec_ = __modules__.poly2d.Boolean( __params__.model, zones_, roads_sec_, 'intersect' );

let zones_on_roads_sec_areas_ = __modules__.calc.Area( __params__.model, zones_on_roads_sec_ );

__modules__.attrib.Set(__params__.model, null, 'zones_on_roads_sec_area',  sum(zones_on_roads_sec_areas_) );

__modules__.modify.Delete( __params__.model, [zones_on_roads_art_, zones_on_roads_sec_], 'delete_selected' );

let subsites_ = __modules__.poly2d.Boolean( __params__.model, zones_, [roads_art_, roads_sec_], 'difference' );

for (let  site_ of subsites_){

await exec_neighbourhood_node_7fnrhogzg74_cleanPgonEdge_(__params__, site_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_7fnrhogzg74_cleanPgonAng_(__params__, site_);
if (__params__.terminated) { return __params__.model;}
}

__modules__.modify.Delete( __params__.model, [zones_, roads_art_, roads_sec_], 'delete_selected' );

let subsites_areas_ = __modules__.calc.Area( __params__.model, subsites_ );

__modules__.attrib.Set(__params__.model, null, 'subsites_area',  sum(subsites_areas_) );

let site_names_ = [];

for (let  i_ of range(len(subsites_))){

let area_ = __modules__.calc.Area( __params__.model, subsites_[pythonList(i_, subsites_.length)] );

let cen_ = __modules__.calc.Centroid( __params__.model, subsites_[pythonList(i_, subsites_.length)], 'center_of_mass' );

__modules__.attrib.Set( __params__.model, null, "site_" + string(i_) + "_area", area_, 'one_value' );

__modules__.attrib.Set( __params__.model, null, "site_" + string(i_) + "_cen", cen_, 'one_value' );

let site_name_ = "site_" + string(i_);

__modules__.attrib.Set( __params__.model, subsites_[pythonList(i_, subsites_.length)], "name", site_name_, 'one_value' );

__modules__.list.Add( site_names_, site_name_, 'to_end' );
}

__modules__.attrib.Set(__params__.model, null, 'site_names',  site_names_ );

__modules__.attrib.Set(__params__.model, subsites_, 'type',  "site" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_iklrzos79z(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let site_ = __modules__.query.Get(__params__.model, 'pg', null);

let road_art_ = __modules__.query.Get(__params__.model, '_w',  __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art"));

let road_sec_ = __modules__.query.Get(__params__.model, '_w',  __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec"));

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

let cen_ = __modules__.calc.Centroid( __params__.model, edge_, 'ps_average' );

let pos_ = __modules__.make.Position( __params__.model, cen_ );

let dist_ = __modules__.calc.Distance( __params__.model, pos_, road_art_, 'ps_to_w_distance' );

if (dist_ < (road_art_w_ / 2) + 5){

__modules__.attrib.Set(__params__.model, edge_, 'road',  "road_art" );

__modules__.modify.Delete( __params__.model, pos_, 'delete_selected' );

continue;
}

dist_ = __modules__.calc.Distance( __params__.model, pos_, road_sec_, 'ps_to_w_distance' );

if (dist_ < (road_sec_w_ / 2) + 5){

__modules__.attrib.Set(__params__.model, edge_, 'road',  "road_sec" );

__modules__.modify.Delete( __params__.model, pos_, 'delete_selected' );

continue;
}

__modules__.attrib.Set(__params__.model, edge_, 'road',  "cold" );

__modules__.modify.Delete( __params__.model, pos_, 'delete_selected' );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_67npumy41d8(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let sites_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "site");

__modules__.modify.Delete( __params__.model, sites_, 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_zeo6w17m8rl_getPlines_(__params__, pgon_, road_type_) {

let edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', pgon_)){

if (road_type_ ==  __modules__.attrib.Get(__params__.model, edge_, 'road')){

__modules__.list.Add( edges_, edge_, 'to_end' );
}
}

if (len(edges_) == 0){

return [];
}

let posis_ = [ __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)])];

for (let  edge_ of edges_.slice(1)){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (start_end_[pythonList(0, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}

else {
if(start_end_[pythonList(1, start_end_.length)] == posis_[pythonList(-1, posis_.length)][pythonList(0, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(0, start_end_.length)], 'to_start' );
}

else {

__modules__.list.Add( posis_, start_end_, 'to_end' );
}
}
}

let plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return plines_;
}

async function exec_neighbourhood_node_zeo6w17m8rl(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let sites_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "site");

let edges_art_roads_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', sites_), ['road', null], '==', "road_art");

let edges_sec_roads_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', sites_), ['road', null], '==', "road_sec");

let lengths_art_ = __modules__.calc.Length( __params__.model, edges_art_roads_ );

let lengths_sec_ = __modules__.calc.Length( __params__.model, edges_sec_roads_ );

__modules__.attrib.Set(__params__.model, null, 'road_length_art',  sum(lengths_art_) );

__modules__.attrib.Set(__params__.model, null, 'road_length_sec',  sum(lengths_sec_) );

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'delete_selected' );

for (let  site_ of sites_){

let pline_ = await exec_neighbourhood_node_zeo6w17m8rl_getPlines_(__params__, site_, "road_art");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, pline_, 'type',  "road_art" );

pline_ = await exec_neighbourhood_node_zeo6w17m8rl_getPlines_(__params__, site_, "road_sec");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, pline_, 'type',  "road_sec" );

pline_ = await exec_neighbourhood_node_zeo6w17m8rl_getPlines_(__params__, site_, "road_ter");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, pline_, 'type',  "road_ter" );

pline_ = await exec_neighbourhood_node_zeo6w17m8rl_getPlines_(__params__, site_, "cold");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, pline_, 'type',  "cold" );
}

__modules__.modify.Delete( __params__.model, sites_, 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_4t3i7oliqol__cleanPgonsAng_(__params__, pgons_) {

for (let  pgon_ of ['pg165']){

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_4t3i7oliqol__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.99){

let lengths_ = __modules__.calc.Length( __params__.model, __modules__.query.Get(__params__.model, '_e', vert_) );

if (lengths_[pythonList(0, lengths_.length)] < road_loc_w_ && lengths_[pythonList(1, lengths_.length)] < road_loc_w_){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_4t3i7oliqol__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_node_4t3i7oliqol(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blk_art_d_ = part_art_d_ + (blk_art_num_og_d_ * part_og_d_) + part_loc_d_ + (road_loc_w_ / 2);

let blk_art_w_ = (part_loc_d_ * 2) + (blk_art_num_og_w_ * part_og_w_) + road_loc_w_;

let blk_sec_d_ = part_sec_d_ + (blk_sec_num_og_d_ * part_og_d_) + part_loc_d_ + (road_loc_w_ / 2);

let blk_sec_w_ = (part_loc_d_ * 2) + (blk_sec_num_og_w_ * part_og_w_) + road_loc_w_;

let blk_loc_d_ = (part_loc_d_ * 2) + (blk_loc_num_og_d_ * part_og_d_) + road_loc_w_;

let blk_loc_w_ = (part_loc_d_ * 2) + (blk_loc_num_og_w_ * part_og_w_) + road_loc_w_;

let sites_ = __modules__.query.Get(__params__.model, 'pg', null);

for (let  site_ of sites_){

let num_pgons_ = len( __modules__.query.Get(__params__.model, 'pg', null));

__params__.console.push('<div style="margin: 5px 0px 5px 10px; border: 1px solid #E6E6E6"><p><b> Global Function: Zone</b></p>');
await exec_neighbourhood_Zone(__params__, site_, blk_art_d_, blk_art_w_, blk_sec_d_, blk_sec_w_, blk_loc_d_, blk_loc_w_, road_loc_w_);
__params__.console.push('</div>')

let new_pgons_ = __modules__.query.Get(__params__.model, 'pg', null).slice(num_pgons_);

__modules__.attrib.Set(__params__.model, new_pgons_, 'site',  __modules__.attrib.Get(__params__.model, site_, 'name') );

__modules__.modify.Delete( __params__.model, site_, 'delete_selected' );
}

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

blocks_ = await exec_neighbourhood_node_4t3i7oliqol__cleanPgonsAng_(__params__, blocks_);
if (__params__.terminated) { return __params__.model;}

for (let  i_ of range(len(blocks_))){

let block_ = blocks_[pythonList(i_, blocks_.length)];

let cold_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', block_), ['road', null], '==', "cold");

let art_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', block_), ['road', null], '==', "road_art");

let sec_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', block_), ['road', null], '==', "road_sec");

if (len(cold_edges_) > 0){

__modules__.attrib.Set(__params__.model, block_, 'block_type',  "cold" );
}

else {
if(len(art_edges_) > 0){

__modules__.attrib.Set(__params__.model, block_, 'block_type',  "art" );
}

else {
if(len(sec_edges_) > 0){

__modules__.attrib.Set(__params__.model, block_, 'block_type',  "sec" );
}

else {

__modules__.attrib.Set(__params__.model, block_, 'block_type',  "loc" );
}
}
}

__modules__.attrib.Set(__params__.model, block_, 'block_id',  "blk" + i_ );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_w72lans74pm_trimLocalRoad_(__params__, edge_, main_rays_, trim_end_) {

let ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = null;

for (let  main_ray_ of main_rays_){

isect_ = intersect(ray_, main_ray_, 0);

if (isect_ != null){

break;
}
}

let idx_ = 0;

if (trim_end_){

idx_ = 1;
}

let check_ = isect_;

if (isect_ != null){

let posi_ = __modules__.query.Get(__params__.model, 'ps', edge_)[pythonList(idx_, __modules__.query.Get(__params__.model, 'ps', edge_).length)];

let vec_ = vecFromTo( __modules__.attrib.Get(__params__.model, posi_, 'xyz'), isect_);

__modules__.modify.Move( __params__.model, posi_, vec_ );
}
}

async function exec_neighbourhood_node_w72lans74pm(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let roads_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let roads_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec");

let roads_loc_para_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_loc_para");

let roads_loc_perp_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_loc_perp");

let roads_loc_para_inn_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_loc_para_inn");

let roads_loc_perp_inn_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_loc_perp_inn");

let main_rays_ = __modules__.calc.Ray( __params__.model, listFlat([ __modules__.query.Get(__params__.model, '_e', roads_art_),  __modules__.query.Get(__params__.model, '_e', roads_sec_)]) );

for (let  road_ of roads_loc_para_){

let verts_ = __modules__.query.Get(__params__.model, '_v', road_);

if (len( __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(0, verts_.length)]))) == 1){

await exec_neighbourhood_node_w72lans74pm_trimLocalRoad_(__params__, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)]).length)], main_rays_, false);
if (__params__.terminated) { return __params__.model;}
}

if (len( __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(-1, verts_.length)]))) == 1){

await exec_neighbourhood_node_w72lans74pm_trimLocalRoad_(__params__, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(-1, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(-1, verts_.length)]).length)], main_rays_, true);
if (__params__.terminated) { return __params__.model;}
}
}

for (let  road_ of roads_loc_perp_){

let verts_ = __modules__.query.Get(__params__.model, '_v', road_);

if (len( __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(0, verts_.length)]))) == 1){

await exec_neighbourhood_node_w72lans74pm_trimLocalRoad_(__params__, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)]).length)], main_rays_, false);
if (__params__.terminated) { return __params__.model;}
}

if (len( __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(-1, verts_.length)]))) == 1){

await exec_neighbourhood_node_w72lans74pm_trimLocalRoad_(__params__, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(-1, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(-1, verts_.length)]).length)], main_rays_, true);
if (__params__.terminated) { return __params__.model;}
}
}

__modules__.modify.Delete( __params__.model, [roads_loc_para_, roads_loc_perp_, roads_loc_para_inn_, roads_loc_perp_inn_], 'keep_selected' );

let loc_roads_lens_ = __modules__.calc.Length( __params__.model, __modules__.query.Get(__params__.model, 'pl', null) );

__modules__.attrib.Set(__params__.model, null, 'road_len_loc_100',  sum(loc_roads_lens_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_r87elly7i1o(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_pbk9rrj44pa(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let all_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let warm_blocks_ = __modules__.query.Filter(__params__.model, all_blocks_, ['block_type', null], '!=', "cold");

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pg', warm_blocks_), 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_goxpt3ubo5_getCentralBlock_(__params__, blocks_, site_cen_) {

let cen_block_ = null;

let min_dist_ = Infinity;

for (let  block_ of blocks_){

let block_cen_ = __modules__.calc.Centroid( __params__.model, block_, 'center_of_mass' );

let dist_ = distance(site_cen_, block_cen_);

if (dist_ < min_dist_){

min_dist_ = dist_;

cen_block_ = block_;
}
}

return cen_block_;
}

async function exec_neighbourhood_node_goxpt3ubo5(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let warm_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let warm_not_art_blocks_ = __modules__.query.Filter(__params__.model, warm_blocks_, ['block_type', null], '!=', "art");

for (let  site_name_ of __modules__.attrib.Get(__params__.model, null, 'site_names')){

let site_cen_ = __modules__.attrib.Get( __params__.model, null, site_name_ + "_cen" );

let site_area_ = __modules__.attrib.Get( __params__.model, null, site_name_ + "_area" );

let open_req_area_ = site_area_ * (open_percent_ / 100);

let amen_req_area_ = site_area_ * (amen_percent_ / 100);

let req_area_ = open_req_area_ + amen_req_area_;

let blocks_ = __modules__.query.Filter(__params__.model, warm_not_art_blocks_, ['site', null], '==', site_name_);

let cen_block_ = await exec_neighbourhood_node_goxpt3ubo5_getCentralBlock_(__params__, blocks_, site_cen_);
if (__params__.terminated) { return __params__.model;}

if (cen_block_ == null){

continue;
}

let cen_block_area_ = __modules__.calc.Area( __params__.model, cen_block_ );

__modules__.visualize.Color( __params__.model, cen_block_, [0, 1, 0] );

__modules__.attrib.Set( __params__.model, null, site_name_ + "_cen_block_id", __modules__.attrib.Get(__params__.model, cen_block_, 'block_id'), 'one_value' );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_r7u523pwoy_createExtendedRoads_(__params__, block_) {

let roads_art_ = await exec_neighbourhood_node_r7u523pwoy__getPerimPlines_(__params__, block_, "road_art");
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__extendPline_(__params__, roads_art_, 100);
if (__params__.terminated) { return __params__.model;}

let roads_sec_ = await exec_neighbourhood_node_r7u523pwoy__getPerimPlines_(__params__, block_, "road_sec");
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__extendPline_(__params__, roads_sec_, 100);
if (__params__.terminated) { return __params__.model;}

let roads_loc_ = await exec_neighbourhood_node_r7u523pwoy__getPerimPlines_(__params__, block_, "road_loc");
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__extendPline_(__params__, roads_loc_, 100);
if (__params__.terminated) { return __params__.model;}

return [roads_art_, roads_sec_, roads_loc_];
}


async function exec_neighbourhood_node_r7u523pwoy_createOffGridArea_(__params__, block_, roads_) {

let roads_art_ = roads_[pythonList(0, roads_.length)];

let roads_sec_ = roads_[pythonList(1, roads_.length)];

let roads_loc_ = roads_[pythonList(2, roads_.length)];

let off_art_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_art_, part_art_d_, 100, 'butt_end' );

let off_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_sec_, part_sec_d_, 100, 'butt_end' );

let off_loc_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_loc_, part_loc_d_, 100, 'butt_end' );

let off_grids_ = __modules__.poly2d.Boolean( __params__.model, block_, [off_art_, off_sec_, off_loc_], 'difference' );

__modules__.modify.Delete( __params__.model, [off_art_, off_sec_, off_loc_], 'delete_selected' );

off_grids_ = await exec_neighbourhood_node_r7u523pwoy__cleanPgonsEdge_(__params__, off_grids_);
if (__params__.terminated) { return __params__.model;}

off_grids_ = await exec_neighbourhood_node_r7u523pwoy__cleanPgonsAng_(__params__, off_grids_);
if (__params__.terminated) { return __params__.model;}

if (len(off_grids_) == 0){

return null;
}

let off_grid_ = off_grids_[pythonList(0, off_grids_.length)];

if (len(off_grids_) > 1){

let areas_ = __modules__.calc.Area( __params__.model, off_grids_ );

let sorted_ = listSort(listZip([areas_, off_grids_]), 0);

off_grid_ = sorted_[pythonList(-1, sorted_.length)][pythonList(1, sorted_[pythonList(-1, sorted_.length)].length)];

for (let  small_off_grid_ of off_grids_){

if (small_off_grid_ != off_grid_){

__modules__.modify.Delete( __params__.model, small_off_grid_, 'delete_selected' );
}
}
}

__modules__.visualize.Color( __params__.model, off_grid_, [0.7, 0.7, 1] );

__modules__.attrib.Set(__params__.model, off_grid_, 'block_type',  __modules__.attrib.Get(__params__.model, block_, 'block_type') );

return off_grid_;
}


async function exec_neighbourhood_node_r7u523pwoy_createBlockPartsFromOffGrid_(__params__, block_, off_grid_) {

let outer_edges_ = __modules__.query.Get(__params__.model, '_e', block_);

let outer_rays_ = __modules__.calc.Ray( __params__.model, outer_edges_ );

let corners1_ = [];

let side_posis_ = [];

let perv_vert_ = null;

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', off_grid_)){

let ang_ = await exec_neighbourhood_node_r7u523pwoy__vertAng_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (ang_ < 155){

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let er0_ = __modules__.calc.Ray( __params__.model, edges_[pythonList(0, edges_.length)] );

let er1_ = __modules__.calc.Ray( __params__.model, edges_[pythonList(1, edges_.length)] );

let v0_perp_ = vecSetLen([er0_[pythonList(1, er0_.length)][pythonList(1, er0_[pythonList(1, er0_.length)].length)], -er0_[pythonList(1, er0_.length)][pythonList(0, er0_[pythonList(1, er0_.length)].length)], 0], 1000);

let v1_perp_ = vecSetLen([er1_[pythonList(1, er1_.length)][pythonList(1, er1_[pythonList(1, er1_.length)].length)], -er1_[pythonList(1, er1_.length)][pythonList(0, er1_[pythonList(1, er1_.length)].length)], 0], 1000);

let vm_perp_ = vecSetLen(vecSum(v0_perp_, v1_perp_), 1000);

let r0_perp_ = rayMake(er1_[pythonList(0, er1_.length)], v0_perp_);

let r1_perp_ = rayMake(er1_[pythonList(0, er1_.length)], v1_perp_);

let rm_perp_ = rayMake(er1_[pythonList(0, er1_.length)], vecSum(v0_perp_, v1_perp_));

let ori_posi_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let xyz0_ = vecAdd(er1_[pythonList(0, er1_.length)], v0_perp_);

let xyz1_ = vecAdd(er1_[pythonList(0, er1_.length)], v1_perp_);

let xyzm_ = vecAdd(er1_[pythonList(0, er1_.length)], vm_perp_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyzm_, xyz1_] );

let corner_ = __modules__.make.Polygon( __params__.model, listJoin(posis_, ori_posi_) );

__modules__.list.Add( corners1_, corner_, 'to_end' );

__modules__.list.Add( side_posis_, [ori_posi_, posis_[pythonList(0, posis_.length)], edges_], 'to_end' );

__modules__.list.Add( side_posis_, [ori_posi_, posis_[pythonList(-1, posis_.length)], edges_], 'to_end' );
}
}

let sides1_ = [];

let side_posis_len_ = len(side_posis_);

for (let  i_ of range(1, side_posis_len_, 2)){

let a_ = side_posis_[pythonList(i_ % side_posis_len_, side_posis_.length)];

let b_ = side_posis_[pythonList((i_ + 1) % side_posis_len_, side_posis_.length)];

let perim_posis_ = await exec_neighbourhood_node_r7u523pwoy__getPosisBetweenEdges_(__params__, a_[pythonList(2, a_.length)][pythonList(1, a_[pythonList(2, a_.length)].length)], b_[pythonList(2, b_.length)][pythonList(0, b_[pythonList(2, b_.length)].length)], true);
if (__params__.terminated) { return __params__.model;}

let posis_side_ = listFlat([a_[pythonList(0, a_.length)], a_[pythonList(1, a_.length)], b_[pythonList(1, b_.length)], b_[pythonList(0, b_.length)], listRev(perim_posis_)]);

let side_ = __modules__.make.Polygon( __params__.model, posis_side_ );

__modules__.list.Add( sides1_, side_, 'to_end' );
}

let corner_parts_ = __modules__.poly2d.Boolean( __params__.model, corners1_, block_, 'intersect' );

let side_parts_ = __modules__.poly2d.Boolean( __params__.model, sides1_, block_, 'intersect' );

__modules__.visualize.Color( __params__.model, corner_parts_, [1, 0.7, 0.7] );

__modules__.visualize.Color( __params__.model, side_parts_, [0.7, 1, 0.7] );

__modules__.attrib.Set(__params__.model, side_parts_, 'type',  "side" );

let side_parts_e_ = __modules__.query.Get(__params__.model, '_e', side_parts_);

let corner_parts_e_ = __modules__.query.Get(__params__.model, '_e', corner_parts_);

let off_grid_e_ = __modules__.query.Get(__params__.model, '_e', off_grid_);

await exec_neighbourhood_node_r7u523pwoy__setAttribs_(__params__, block_, listFlat([corner_parts_, side_parts_]), off_grid_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouchingPart_(__params__, corner_parts_e_, side_parts_e_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouchingPart_(__params__, side_parts_e_, corner_parts_e_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouchingPart_(__params__, off_grid_e_, side_parts_e_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouchingPart_(__params__, side_parts_e_, off_grid_e_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [corners1_, sides1_, block_], 'delete_selected' );

return [corner_parts_, side_parts_, off_grid_];
}


async function exec_neighbourhood_node_r7u523pwoy__isectRays_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let isect_ = intersect(ray_, rays_[pythonList(i_, rays_.length)], 0);

if (isect_ != null){

return [isect_, i_];
}
}

return null;
}


async function exec_neighbourhood_node_r7u523pwoy__cleanPgonsEdge_(__params__, pgons_) {

for (let  pgon_ of pgons_){

let del_posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', pgon_)){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

if (length_ < 0.1){

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

__modules__.list.Add( del_posis_, posis_[pythonList(0, posis_.length)], 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_r7u523pwoy__cleanPgonsAng_(__params__, pgons_) {

for (let  pgon_ of pgons_){

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_r7u523pwoy__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_r7u523pwoy__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_r7u523pwoy__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_r7u523pwoy__getPerimPlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (__modules__.attrib.Get(__params__.model, edge_, 'road')== road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_r7u523pwoy__setAttribs_(__params__, block_, parts_, off_grid_) {

for (let  part_ of parts_){

await exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', block_), __modules__.query.Get(__params__.model, '_e', part_));
if (__params__.terminated) { return __params__.model;}

if (__modules__.attrib.Get(__params__.model, part_, 'type')== "side"){

await exec_neighbourhood_node_r7u523pwoy__addAttribs_(__params__, part_, true);
if (__params__.terminated) { return __params__.model;}
}

else {

await exec_neighbourhood_node_r7u523pwoy__addAttribs_(__params__, part_, false);
if (__params__.terminated) { return __params__.model;}
}
}

if (off_grid_ == null){

__modules__.modify.Fuse( __params__.model, parts_, 0.001 );
}

else {

await exec_neighbourhood_node_r7u523pwoy__addAttribs_(__params__, off_grid_, false);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Fuse( __params__.model, listFlat([parts_, off_grid_]), 0.001 );
}
}


async function exec_neighbourhood_node_r7u523pwoy__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_r7u523pwoy__extendPline_(__params__, plines_, dist_) {

for (let  pline_ of plines_){

let closed_ = __modules__.query.Type( __params__.model, pline_, 'is_closed' );

if (!closed_){

__modules__.modify.Weld( __params__.model, pline_, 'break_weld' );

let edges_ = __modules__.query.Get(__params__.model, '_e', pline_);

let posis_ = __modules__.query.Get(__params__.model, 'ps', pline_);

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)]), 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(1, xyzs_.length)], xyzs_[pythonList(0, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(0, posis_.length)], vec_ );

xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(-1, edges_.length)]), 'xyz');

vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(-1, posis_.length)], vec_ );
}
}
}


async function exec_neighbourhood_node_r7u523pwoy__addAttribs_(__params__, part_, is_side_part_) {

let road_types_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', part_)){

let road_type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (road_type_ != undefined){

__modules__.list.Add( road_types_, road_type_, 'to_end' );
}
}

let check_ = road_types_;

__modules__.attrib.Set(__params__.model, part_, 'class',  "part" );

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, part_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type_ );
}

else {

let data_ = [];

for (let  road_type_ of road_types_){

__modules__.list.Add( data_, [road_type_, cats_dict_[pythonList(road_type_, cats_dict_.length)]], 'to_end' );
}

let sorted_data_ = listSort(data_, 1);

let road_type0_ = sorted_data_[pythonList(0, sorted_data_.length)][pythonList(0, sorted_data_[pythonList(0, sorted_data_.length)].length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = sorted_data_[pythonList(1, sorted_data_.length)][pythonList(0, sorted_data_[pythonList(1, sorted_data_.length)].length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

if (is_side_part_){

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type0_ );
}

else {

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}
}


async function exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_r7u523pwoy__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}
}


async function exec_neighbourhood_node_r7u523pwoy__transferEdgeAttribsTouchingPart_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_r7u523pwoy__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type') );
}
}
}
}


async function exec_neighbourhood_node_r7u523pwoy__getPosisBetweenEdges_(__params__, edge0_, edge1_, forwards_) {

let idx_ = 1;

if (!forwards_){

idx_ = 0;
}

let posis_ = [];

let next_edge_ = edge0_;

while (next_edge_ != edge1_){

let edge_posis_ = __modules__.query.Get(__params__.model, 'ps', next_edge_);

__modules__.list.Add( posis_, edge_posis_[pythonList(1, edge_posis_.length)], 'to_end' );

next_edge_ = __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, '_v', next_edge_)[pythonList(idx_, __modules__.query.Get(__params__.model, '_v', next_edge_).length)])[pythonList(idx_, __modules__.query.Get(__params__.model, '_e',  __modules__.query.Get(__params__.model, '_v', next_edge_)[pythonList(idx_, __modules__.query.Get(__params__.model, '_v', next_edge_).length)]).length)];
}

return posis_;
}

async function exec_neighbourhood_node_r7u523pwoy(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

for (let  block_ of blocks_){

let roads_ = await exec_neighbourhood_node_r7u523pwoy_createExtendedRoads_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let off_grid_ = await exec_neighbourhood_node_r7u523pwoy_createOffGridArea_(__params__, block_, roads_);
if (__params__.terminated) { return __params__.model;}

if (off_grid_ != null){

let area_ = __modules__.calc.Area( __params__.model, off_grid_ );

if (area_ < (part_og_d_ * part_og_w_ * 0.5)){

__modules__.modify.Delete( __params__.model, off_grid_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, block_, 'class',  "block" );
}

else {

let site_ = __modules__.attrib.Get(__params__.model, block_, 'site');

let block_id_ = __modules__.attrib.Get(__params__.model, block_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, block_, 'block_type');

let parts_ = await exec_neighbourhood_node_r7u523pwoy_createBlockPartsFromOffGrid_(__params__, block_, off_grid_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_, 'class',  "part" );

__modules__.attrib.Set(__params__.model, parts_, 'site',  site_ );

__modules__.attrib.Set(__params__.model, parts_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, parts_, 'block_id',  block_id_ );
}
}

__modules__.modify.Delete( __params__.model, roads_, 'delete_selected' );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_8qtios62jgj_createParts_(__params__, block_, depths_dict_) {

let plines_art_ = await exec_neighbourhood_node_8qtios62jgj__getPerimPlines_(__params__, block_, "road_art");
if (__params__.terminated) { return __params__.model;}

let plines_sec_ = await exec_neighbourhood_node_8qtios62jgj__getPerimPlines_(__params__, block_, "road_sec");
if (__params__.terminated) { return __params__.model;}

if (len(plines_art_) > 0 && len(plines_sec_) == 0){

let art_off_ = __modules__.poly2d.OffsetMitre( __params__.model, plines_art_, part_art_d_, part_art_d_, 'square_end' );

let art_bool1_ = __modules__.poly2d.Boolean( __params__.model, art_off_, block_, 'intersect' );

let art_bool2_ = __modules__.poly2d.Boolean( __params__.model, block_, art_off_, 'difference' );

let result_ = await exec_neighbourhood_node_8qtios62jgj__trimLoc_(__params__, block_, [art_bool1_, art_bool2_]);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [art_off_, plines_art_], 'delete_selected' );

return result_;
}

else {
if(len(plines_art_) == 0 && len(plines_sec_) > 0){

let sec_off_ = __modules__.poly2d.OffsetMitre( __params__.model, plines_sec_, part_sec_d_, part_sec_d_, 'square_end' );

let sec_bool1_ = __modules__.poly2d.Boolean( __params__.model, sec_off_, block_, 'intersect' );

let sec_bool2_ = __modules__.poly2d.Boolean( __params__.model, block_, sec_off_, 'difference' );

let result_ = await exec_neighbourhood_node_8qtios62jgj__trimLoc_(__params__, block_, [sec_bool1_, sec_bool2_]);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [sec_off_, plines_sec_], 'delete_selected' );

return result_;
}

else {
if(len(plines_art_) > 0 && len(plines_sec_) > 0){

let art_off_ = __modules__.poly2d.OffsetMitre( __params__.model, plines_art_, part_art_d_, part_art_d_, 'square_end' );

let art_bool1_ = __modules__.poly2d.Boolean( __params__.model, art_off_, block_, 'intersect' );

let art_bool2_ = __modules__.poly2d.Boolean( __params__.model, block_, art_off_, 'difference' );

let sec_off_ = __modules__.poly2d.OffsetMitre( __params__.model, plines_sec_, part_sec_d_, part_sec_d_, 'square_end' );

let sec_bool1_ = __modules__.poly2d.Boolean( __params__.model, sec_off_, block_, 'intersect' );

let sec_bool2_ = __modules__.poly2d.Boolean( __params__.model, block_, sec_off_, 'difference' );

let art_corners_ = __modules__.poly2d.Boolean( __params__.model, art_bool1_, sec_off_, 'intersect' );

let other_corners_ = __modules__.poly2d.Boolean( __params__.model, art_bool2_, sec_off_, 'intersect' );

let art_bool1_trim_ = __modules__.poly2d.Boolean( __params__.model, art_bool1_, sec_off_, 'difference' );

let art_bool2_trim_ = __modules__.poly2d.Boolean( __params__.model, art_bool2_, sec_off_, 'difference' );

__modules__.modify.Delete( __params__.model, [art_off_, plines_art_, sec_off_, plines_sec_, art_bool1_, art_bool2_, sec_bool1_, sec_bool2_], 'delete_selected' );

__modules__.visualize.Color( __params__.model, art_bool2_trim_, [1, 0, 0] );

let art_bool2_trim_areas_ = __modules__.calc.Area( __params__.model, art_bool2_trim_ );

if (sum(art_bool2_trim_areas_) > (part_loc_d_ * part_loc_d_ * 4)){

let result_ = await exec_neighbourhood_node_8qtios62jgj__trimLoc_(__params__, block_, [art_corners_, other_corners_, art_bool1_trim_, art_bool2_trim_]);
if (__params__.terminated) { return __params__.model;}

return result_;
}

else {

return listFlat([art_corners_, other_corners_, art_bool1_trim_, art_bool2_trim_]);
}
}
}
}

return [];
}


async function exec_neighbourhood_node_8qtios62jgj_transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_8qtios62jgj__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_8qtios62jgj_addTypeAttribsCrvRoads_(__params__, part_) {

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let road_types_ = [];

let art_ = await exec_neighbourhood_node_8qtios62jgj__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_art");
if (__params__.terminated) { return __params__.model;}

let sec_ = await exec_neighbourhood_node_8qtios62jgj__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let loc_ = await exec_neighbourhood_node_8qtios62jgj__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_loc");
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( road_types_, listFlat([art_, sec_, loc_]), 'extend_end' );

__modules__.attrib.Set(__params__.model, part_, 'class',  "part" );

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, part_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type_ );
}

else {

let road_type0_ = road_types_[pythonList(0, road_types_.length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = road_types_[pythonList(1, road_types_.length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}


async function exec_neighbourhood_node_8qtios62jgj_transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', parts_);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_8qtios62jgj__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_8qtios62jgj_copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_8qtios62jgj__getCrvRoadEdgeTypes_(__params__, part_edges_, road_descr_) {

let edges_ = [[]];

for (let  edge_ of part_edges_){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_) == 2){

edges_ = listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}

else {

edges_ = edges_[pythonList(0, edges_.length)];
}

if (len(edges_) == 0){

return [];
}

if (len(edges_) == 1){

return [road_descr_];
}

let road_types_ = [road_descr_];

for (let  i_ of range(1, len(edges_))){

let ang_ = await exec_neighbourhood_node_8qtios62jgj__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (abs(ang_ - 180) > 45){

__modules__.list.Add( road_types_, road_descr_, 'to_end' );
}
}

return road_types_;
}


async function exec_neighbourhood_node_8qtios62jgj__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_8qtios62jgj__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_8qtios62jgj__trimLoc_(__params__, block_, parts_) {

let plines_loc_ = await exec_neighbourhood_node_8qtios62jgj__getPerpLocPlines_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let loc_off_ = __modules__.poly2d.OffsetMitre( __params__.model, plines_loc_, part_loc_d_, part_loc_d_, 'square_end' );

let parts_trim_ = __modules__.poly2d.Boolean( __params__.model, parts_, loc_off_, 'difference' );

for (let  part_ of parts_){

let parts_loc_ = __modules__.poly2d.Boolean( __params__.model, loc_off_, part_, 'intersect' );

__modules__.list.Add( parts_trim_, parts_loc_, 'extend_end' );
}

__modules__.modify.Delete( __params__.model, [plines_loc_, loc_off_, parts_], 'delete_selected' );

return parts_trim_;
}


async function exec_neighbourhood_node_8qtios62jgj__getPerimPlines_(__params__, block_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', block_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

await exec_neighbourhood_node_8qtios62jgj__extendPline_(__params__, site_plines_, 100);
if (__params__.terminated) { return __params__.model;}

return site_plines_;
}


async function exec_neighbourhood_node_8qtios62jgj__getPerpLocPlines_(__params__, block_) {

let perp_dir_ = __modules__.attrib.Get(__params__.model, null, ['ortho', 2]);

if (__modules__.attrib.Get(__params__.model, block_, 'block_type')== "sec"){

perp_dir_ = __modules__.attrib.Get(__params__.model, null, ['ortho', 1]);
}

let loc_perp_edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', block_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

let edge_vec_ = __modules__.calc.Vector( __params__.model, edge_ );

if (edge_road_ == "road_loc" && abs(vecDot(vecNorm(edge_vec_), perp_dir_)) > 0.8){

__modules__.list.Add( loc_perp_edges_, edge_, 'to_end' );
}
}

let plines_ = __modules__.make.Polyline( __params__.model, loc_perp_edges_, 'open' );

await exec_neighbourhood_node_8qtios62jgj__extendPline_(__params__, plines_, 100);
if (__params__.terminated) { return __params__.model;}

return plines_;
}


async function exec_neighbourhood_node_8qtios62jgj__extendPline_(__params__, plines_, dist_) {

for (let  pline_ of plines_){

let closed_ = __modules__.query.Type( __params__.model, pline_, 'is_closed' );

if (!closed_){

__modules__.modify.Weld( __params__.model, pline_, 'break_weld' );

let edges_ = __modules__.query.Get(__params__.model, '_e', pline_);

let posis_ = __modules__.query.Get(__params__.model, 'ps', pline_);

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)]), 'xyz');

let vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(1, xyzs_.length)], xyzs_[pythonList(0, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(0, posis_.length)], vec_ );

xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(-1, edges_.length)]), 'xyz');

vec_ = vecSetLen(vecFromTo(xyzs_[pythonList(0, xyzs_.length)], xyzs_[pythonList(1, xyzs_.length)]), dist_);

__modules__.modify.Move( __params__.model, posis_[pythonList(-1, posis_.length)], vec_ );
}
}
}

async function exec_neighbourhood_node_8qtios62jgj(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let all_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let art_blocks_ = __modules__.query.Filter(__params__.model, all_blocks_, ['block_type', null], '==', "art");

let sec_blocks_ = __modules__.query.Filter(__params__.model, all_blocks_, ['block_type', null], '==', "sec");

__modules__.modify.Delete( __params__.model, [art_blocks_, sec_blocks_], 'keep_selected' );

let depths_dict_ = {"road_art": part_art_d_,"road_sec": part_sec_d_,"road_loc": part_loc_d_,"cold": 0};

let areas_dict_ = {};

areas_dict_["art_art"] = part_art_d_ * part_art_d_;

areas_dict_["art_sec"] = part_art_d_ * part_sec_d_;

areas_dict_["art_loc"] = part_art_d_ * part_loc_d_;

areas_dict_["sec_sec"] = part_sec_d_ * part_sec_d_;

areas_dict_["sec_loc"] = part_sec_d_ * part_loc_d_;

for (let  block_ of __modules__.query.Get(__params__.model, 'pg', null)){

let parts_ = await exec_neighbourhood_node_8qtios62jgj_createParts_(__params__, block_, depths_dict_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_, 'class',  "part" );

await exec_neighbourhood_node_8qtios62jgj_copyAttribs_(__params__, block_, parts_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_8qtios62jgj_transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', block_), __modules__.query.Get(__params__.model, '_e', parts_));
if (__params__.terminated) { return __params__.model;}

for (let  part_ of parts_){

await exec_neighbourhood_node_8qtios62jgj_addTypeAttribsCrvRoads_(__params__, part_);
if (__params__.terminated) { return __params__.model;}

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let corner_expected_area_ = areas_dict_[pythonList(type_, areas_dict_.length)];

if (corner_expected_area_ != undefined){

let area_ = __modules__.calc.Area( __params__.model, part_ );

if (area_ > (corner_expected_area_ * 3)){

__modules__.attrib.Set(__params__.model, part_, 'type',  type_.slice(0,3) );
}
}
}

await exec_neighbourhood_node_8qtios62jgj_transferEdgeAttribsBtwTouchingParts_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, block_, 'delete_selected' );
}

for (let  part_ of __modules__.query.Get(__params__.model, 'pg', null)){

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

if (len(type_) == 7){

let lengths_ = __modules__.calc.Length( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "road_loc") );

if (max(lengths_) > (part_loc_d_ * 2)){

__modules__.attrib.Set(__params__.model, part_, 'type',  type_.slice(0,3) );
}

lengths_ = __modules__.calc.Length( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "road_sec") );

if (max(lengths_) > (part_sec_d_ * 2)){

__modules__.attrib.Set(__params__.model, part_, 'type',  type_.slice(0,3) );
}
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_4x3r91t8fdq_createParts_(__params__, block_, depths_dict_) {

let quad_ = await exec_neighbourhood_node_4x3r91t8fdq__convertToQuad_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

if (quad_ == null){

__modules__.visualize.Color( __params__.model, block_, [0, 1, 0] );

__modules__.attrib.Set(__params__.model, block_, 'type',  "park" );

return [];
}

let blk_edges_ = __modules__.query.Get(__params__.model, '_e', block_);

let quad_edges_ = __modules__.query.Get(__params__.model, '_e', quad_);

await exec_neighbourhood_node_4x3r91t8fdq__transferEdgeAttribs_(__params__, blk_edges_, quad_edges_, false);
if (__params__.terminated) { return __params__.model;}

let roads_ = __modules__.attrib.Get(__params__.model, quad_edges_, 'road');

let lengths_ = __modules__.calc.Length( __params__.model, quad_edges_ );

let rays_ = __modules__.calc.Ray( __params__.model, quad_edges_ );

let a_ = listSort(listZip([lengths_, range(4)]), 0)[pythonList(0, listSort(listZip([lengths_, range(4)]), 0).length)][pythonList(1, listSort(listZip([lengths_, range(4)]), 0)[pythonList(0, listSort(listZip([lengths_, range(4)]), 0).length)].length)];

let b_ = (a_ + 1) % 4;

let c_ = (a_ + 2) % 4;

let d_ = (a_ + 3) % 4;

let off_a_ = depths_dict_[pythonList(roads_[pythonList(a_, roads_.length)], depths_dict_.length)];

let off_b_ = depths_dict_[pythonList(roads_[pythonList(b_, roads_.length)], depths_dict_.length)];

let off_c_ = depths_dict_[pythonList(roads_[pythonList(c_, roads_.length)], depths_dict_.length)];

let off_d_ = depths_dict_[pythonList(roads_[pythonList(d_, roads_.length)], depths_dict_.length)];

let thick_ = off_b_ + off_d_;

let thick_70_ = thick_ * 0.7;

if (lengths_[pythonList(a_, lengths_.length)] < thick_70_ && lengths_[pythonList(c_, lengths_.length)] < thick_70_){

__modules__.modify.Delete( __params__.model, quad_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, block_, 'type',  "loc" );

return [block_];
}

else {
if(lengths_[pythonList(a_, lengths_.length)] < thick_70_){
}

else {
if(lengths_[pythonList(c_, lengths_.length)] < thick_70_){
}
}
}

let vperp_a_ = vecSetLen([-rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)][pythonList(1, rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)].length)], rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)][pythonList(0, rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)].length)], 0], off_a_);

let o_a_ = vecAdd(rays_[pythonList(a_, rays_.length)][pythonList(0, rays_[pythonList(a_, rays_.length)].length)], vperp_a_);

let ray_a_inn_ = rayMake(o_a_, rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)]);

let vperp_c_ = vecSetLen([-rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)][pythonList(1, rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)].length)], rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)][pythonList(0, rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)].length)], 0], off_c_);

let o_c_ = vecAdd(rays_[pythonList(c_, rays_.length)][pythonList(0, rays_[pythonList(c_, rays_.length)].length)], vperp_c_);

let ray_c_inn_ = rayMake(o_c_, rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)]);

let isect_ab_ = intersect(rays_[pythonList(b_, rays_.length)], ray_a_inn_, 2);

let isect_ad_ = intersect(rays_[pythonList(d_, rays_.length)], ray_a_inn_, 2);

let isect_cb_ = intersect(rays_[pythonList(b_, rays_.length)], ray_c_inn_, 2);

let isect_cd_ = intersect(rays_[pythonList(d_, rays_.length)], ray_c_inn_, 2);

let xyz_a_ = vecDiv(vecAdd(isect_ab_, isect_ad_), 2);

let xyz_c_ = vecDiv(vecAdd(isect_cb_, isect_cd_), 2);

let parts_ = [];

if (distance(xyz_a_, xyz_c_) < 20){

let xyz_cen_ = vecDiv(vecAdd(xyz_a_, xyz_c_), 2);

parts_ = await exec_neighbourhood_node_4x3r91t8fdq_creat4Parts_(__params__, blk_edges_, quad_edges_, rays_, [a_, b_, c_, d_], xyz_cen_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_, 'type',  "loc_loc" );
}

else {
if(lengths_[pythonList(a_, lengths_.length)] < thick_70_ || lengths_[pythonList(c_, lengths_.length)] < thick_70_){

parts_ = await exec_neighbourhood_node_4x3r91t8fdq_creat5Parts_(__params__, blk_edges_, quad_edges_, rays_, [a_, b_, c_, d_], [xyz_a_, xyz_c_], lengths_[pythonList(a_, lengths_.length)] < lengths_[pythonList(c_, lengths_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_.slice(0, 3), 'type',  "loc_loc" );

__modules__.attrib.Set(__params__.model, parts_.slice(3), 'type',  "loc" );
}

else {

parts_ = await exec_neighbourhood_node_4x3r91t8fdq_creat6Parts_(__params__, blk_edges_, quad_edges_, rays_, [a_, b_, c_, d_], [xyz_a_, xyz_c_]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_.slice(0, 4), 'type',  "loc_loc" );

__modules__.attrib.Set(__params__.model, parts_.slice(4), 'type',  "loc" );
}
}

if (len(blk_edges_) != 4){

let trimmed_ = __modules__.poly2d.Boolean( __params__.model, parts_, block_, 'intersect' );

__modules__.modify.Delete( __params__.model, parts_, 'delete_selected' );

parts_ = trimmed_;
}

for (let  part_ of parts_){

await exec_neighbourhood_node_4x3r91t8fdq__transferEdgeAttribs_(__params__, blk_edges_, __modules__.query.Get(__params__.model, '_e', part_), true);
if (__params__.terminated) { return __params__.model;}
}

await exec_neighbourhood_node_4x3r91t8fdq__copyAttribs_(__params__, block_, parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [block_, quad_], 'delete_selected' );

return parts_;
}


async function exec_neighbourhood_node_4x3r91t8fdq_creat4Parts_(__params__, blk_edges_, quad_edges_, rays_, abcd_, xyz_cen_) {

let a_ = abcd_[pythonList(0, abcd_.length)];

let b_ = abcd_[pythonList(1, abcd_.length)];

let c_ = abcd_[pythonList(2, abcd_.length)];

let d_ = abcd_[pythonList(3, abcd_.length)];

let xyz_ab_ = project(xyz_cen_, rays_[pythonList(b_, rays_.length)]);

let xyz_ad_ = project(xyz_cen_, rays_[pythonList(d_, rays_.length)]);

if (len(blk_edges_) != 4){

for (let  i_ of range(4)){

let r_o_ = rays_[pythonList(i_, rays_.length)][pythonList(0, rays_[pythonList(i_, rays_.length)].length)];

let r_v_ = rays_[pythonList(i_, rays_.length)][pythonList(1, rays_[pythonList(i_, rays_.length)].length)];

let r_vp_ = vecSetLen([r_v_[pythonList(1, r_v_.length)], -r_v_[pythonList(0, r_v_.length)], 0], 10);

rays_[pythonList(i_, rays_.length)] = rayMake(vecAdd(r_o_, r_vp_), r_v_);
}
}

let a_mid_ = vecAdd(rays_[pythonList(a_, rays_.length)][pythonList(0, rays_[pythonList(a_, rays_.length)].length)], vecDiv(rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)], 2));

let c_mid_ = vecAdd(rays_[pythonList(c_, rays_.length)][pythonList(0, rays_[pythonList(c_, rays_.length)].length)], vecDiv(rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)], 2));

let xyz_ea0_ = intersect(rays_[pythonList(d_, rays_.length)], rays_[pythonList(a_, rays_.length)], 2);

let xyz_ea1_ = intersect(rays_[pythonList(a_, rays_.length)], rays_[pythonList(b_, rays_.length)], 2);

let xyz_ec0_ = intersect(rays_[pythonList(b_, rays_.length)], rays_[pythonList(c_, rays_.length)], 2);

let xyz_ec1_ = intersect(rays_[pythonList(c_, rays_.length)], rays_[pythonList(d_, rays_.length)], 2);

let posis_a_ = __modules__.make.Position( __params__.model, [xyz_ea0_, xyz_ea1_] );

let posis_c_ = __modules__.make.Position( __params__.model, [xyz_ec0_, xyz_ec1_] );

let posis_cen_ = __modules__.make.Position( __params__.model, [xyz_ad_, xyz_cen_, xyz_ab_] );

let posis_a_mid_ = __modules__.make.Position( __params__.model, a_mid_ );

let posis_c_mid_ = __modules__.make.Position( __params__.model, c_mid_ );

let part_ab_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(1, posis_a_.length)], posis_cen_[pythonList(2, posis_cen_.length)], posis_cen_[pythonList(1, posis_cen_.length)], posis_a_mid_] );

let part_ad_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(0, posis_a_.length)], posis_a_mid_, posis_cen_[pythonList(1, posis_cen_.length)], posis_cen_[pythonList(0, posis_cen_.length)]] );

let part_cb_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(1, posis_c_.length)], posis_cen_[pythonList(0, posis_cen_.length)], posis_cen_[pythonList(1, posis_cen_.length)], posis_c_mid_] );

let part_cd_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(0, posis_c_.length)], posis_c_mid_, posis_cen_[pythonList(1, posis_cen_.length)], posis_cen_[pythonList(2, posis_cen_.length)]] );

let parts_ = [part_ab_, part_ad_, part_cb_, part_cd_];

return parts_;
}


async function exec_neighbourhood_node_4x3r91t8fdq_creat5Parts_(__params__, blk_edges_, quad_edges_, rays_, abcd_, xyzs_, a_is_short_) {

let a_ = abcd_[pythonList(0, abcd_.length)];

let b_ = abcd_[pythonList(1, abcd_.length)];

let c_ = abcd_[pythonList(2, abcd_.length)];

let d_ = abcd_[pythonList(3, abcd_.length)];

let xyz_a_ = xyzs_[pythonList(0, xyzs_.length)];

let xyz_c_ = xyzs_[pythonList(1, xyzs_.length)];

if (len(blk_edges_) != 4){

for (let  i_ of range(4)){

let r_o_ = rays_[pythonList(i_, rays_.length)][pythonList(0, rays_[pythonList(i_, rays_.length)].length)];

let r_v_ = rays_[pythonList(i_, rays_.length)][pythonList(1, rays_[pythonList(i_, rays_.length)].length)];

let r_vp_ = vecSetLen([r_v_[pythonList(1, r_v_.length)], -r_v_[pythonList(0, r_v_.length)], 0], 10);

rays_[pythonList(i_, rays_.length)] = rayMake(vecAdd(r_o_, r_vp_), r_v_);
}
}

let xyz_ab_ = project(xyz_a_, rays_[pythonList(b_, rays_.length)]);

let xyz_ad_ = project(xyz_a_, rays_[pythonList(d_, rays_.length)]);

let xyz_cb_ = project(xyz_c_, rays_[pythonList(b_, rays_.length)]);

let xyz_cd_ = project(xyz_c_, rays_[pythonList(d_, rays_.length)]);

let posis_a_ = __modules__.query.Get(__params__.model, 'ps', quad_edges_[pythonList(a_, quad_edges_.length)]);

let posis_c_ = __modules__.query.Get(__params__.model, 'ps', quad_edges_[pythonList(c_, quad_edges_.length)]);

let xyz_ea0_ = intersect(rays_[pythonList(d_, rays_.length)], rays_[pythonList(a_, rays_.length)], 2);

let xyz_ea1_ = intersect(rays_[pythonList(a_, rays_.length)], rays_[pythonList(b_, rays_.length)], 2);

let xyz_ec0_ = intersect(rays_[pythonList(b_, rays_.length)], rays_[pythonList(c_, rays_.length)], 2);

let xyz_ec1_ = intersect(rays_[pythonList(c_, rays_.length)], rays_[pythonList(d_, rays_.length)], 2);

posis_a_ = __modules__.make.Position( __params__.model, [xyz_ea0_, xyz_ea1_] );

posis_c_ = __modules__.make.Position( __params__.model, [xyz_ec0_, xyz_ec1_] );

let posis_off_a_ = __modules__.make.Position( __params__.model, [xyz_ad_, xyz_a_, xyz_ab_] );

let posis_off_c_ = __modules__.make.Position( __params__.model, [xyz_cb_, xyz_c_, xyz_cd_] );

let parts_ = [];

if (a_is_short_){

let c_mid_ = vecAdd(rays_[pythonList(c_, rays_.length)][pythonList(0, rays_[pythonList(c_, rays_.length)].length)], vecDiv(rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)], 2));

let posis_c_mid_ = __modules__.make.Position( __params__.model, c_mid_ );

let part_a_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(1, posis_a_.length)], posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)], posis_a_[pythonList(0, posis_a_.length)]] );

let part_cb_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(1, posis_c_.length)], posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_c_mid_] );

let part_cd_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(0, posis_c_.length)], posis_c_mid_, posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)]] );

let part_b_ = __modules__.make.Polygon( __params__.model, [posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)]] );

let part_d_ = __modules__.make.Polygon( __params__.model, [posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)]] );

parts_ = [part_a_, part_cb_, part_cd_, part_b_, part_d_];
}

else {

let a_mid_ = vecAdd(rays_[pythonList(a_, rays_.length)][pythonList(0, rays_[pythonList(a_, rays_.length)].length)], vecDiv(rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)], 2));

let posis_a_mid_ = __modules__.make.Position( __params__.model, a_mid_ );

let part_ab_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(1, posis_a_.length)], posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_a_mid_] );

let part_ad_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(0, posis_a_.length)], posis_a_mid_, posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)]] );

let part_c_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(1, posis_c_.length)], posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)], posis_c_[pythonList(0, posis_c_.length)]] );

let part_b_ = __modules__.make.Polygon( __params__.model, [posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)]] );

let part_d_ = __modules__.make.Polygon( __params__.model, [posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)]] );

parts_ = [part_ab_, part_ad_, part_c_, part_b_, part_d_];
}

return parts_;
}


async function exec_neighbourhood_node_4x3r91t8fdq_creat6Parts_(__params__, blk_edges_, quad_edges_, rays_, abcd_, xyzs_) {

let a_ = abcd_[pythonList(0, abcd_.length)];

let b_ = abcd_[pythonList(1, abcd_.length)];

let c_ = abcd_[pythonList(2, abcd_.length)];

let d_ = abcd_[pythonList(3, abcd_.length)];

let xyz_a_ = xyzs_[pythonList(0, xyzs_.length)];

let xyz_c_ = xyzs_[pythonList(1, xyzs_.length)];

if (len(blk_edges_) != 4){

for (let  i_ of range(4)){

let r_o_ = rays_[pythonList(i_, rays_.length)][pythonList(0, rays_[pythonList(i_, rays_.length)].length)];

let r_v_ = rays_[pythonList(i_, rays_.length)][pythonList(1, rays_[pythonList(i_, rays_.length)].length)];

let r_vp_ = vecSetLen([r_v_[pythonList(1, r_v_.length)], -r_v_[pythonList(0, r_v_.length)], 0], 10);

rays_[pythonList(i_, rays_.length)] = rayMake(vecAdd(r_o_, r_vp_), r_v_);
}
}

let xyz_ab_ = project(xyz_a_, rays_[pythonList(b_, rays_.length)]);

let xyz_ad_ = project(xyz_a_, rays_[pythonList(d_, rays_.length)]);

let xyz_cb_ = project(xyz_c_, rays_[pythonList(b_, rays_.length)]);

let xyz_cd_ = project(xyz_c_, rays_[pythonList(d_, rays_.length)]);

let a_mid_ = vecAdd(rays_[pythonList(a_, rays_.length)][pythonList(0, rays_[pythonList(a_, rays_.length)].length)], vecDiv(rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)], 2));

let c_mid_ = vecAdd(rays_[pythonList(c_, rays_.length)][pythonList(0, rays_[pythonList(c_, rays_.length)].length)], vecDiv(rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)], 2));

let xyz_ea0_ = intersect(rays_[pythonList(d_, rays_.length)], rays_[pythonList(a_, rays_.length)], 2);

let xyz_ea1_ = intersect(rays_[pythonList(a_, rays_.length)], rays_[pythonList(b_, rays_.length)], 2);

let xyz_ec0_ = intersect(rays_[pythonList(b_, rays_.length)], rays_[pythonList(c_, rays_.length)], 2);

let xyz_ec1_ = intersect(rays_[pythonList(c_, rays_.length)], rays_[pythonList(d_, rays_.length)], 2);

let posis_a_ = __modules__.make.Position( __params__.model, [xyz_ea0_, xyz_ea1_] );

let posis_c_ = __modules__.make.Position( __params__.model, [xyz_ec0_, xyz_ec1_] );

let posis_off_a_ = __modules__.make.Position( __params__.model, [xyz_ad_, xyz_a_, xyz_ab_] );

let posis_off_c_ = __modules__.make.Position( __params__.model, [xyz_cb_, xyz_c_, xyz_cd_] );

let posis_a_mid_ = __modules__.make.Position( __params__.model, a_mid_ );

let posis_c_mid_ = __modules__.make.Position( __params__.model, c_mid_ );

let part_ab_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(1, posis_a_.length)], posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_a_mid_] );

let part_ad_ = __modules__.make.Polygon( __params__.model, [posis_a_[pythonList(0, posis_a_.length)], posis_a_mid_, posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)]] );

let part_cb_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(1, posis_c_.length)], posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_c_mid_] );

let part_cd_ = __modules__.make.Polygon( __params__.model, [posis_c_[pythonList(0, posis_c_.length)], posis_c_mid_, posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)]] );

let part_b_ = __modules__.make.Polygon( __params__.model, [posis_off_a_[pythonList(2, posis_off_a_.length)], posis_off_c_[pythonList(0, posis_off_c_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)]] );

let part_d_ = __modules__.make.Polygon( __params__.model, [posis_off_c_[pythonList(2, posis_off_c_.length)], posis_off_a_[pythonList(0, posis_off_a_.length)], posis_off_a_[pythonList(1, posis_off_a_.length)], posis_off_c_[pythonList(1, posis_off_c_.length)]] );

let parts_ = [part_ab_, part_ad_, part_cb_, part_cd_, part_b_, part_d_];

return parts_;
}


async function exec_neighbourhood_node_4x3r91t8fdq_addTypeAttribsCrvRoads_(__params__, parts_) {

for (let  part_ of parts_){

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let road_types_ = [];

let art_ = await exec_neighbourhood_node_4x3r91t8fdq__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_art");
if (__params__.terminated) { return __params__.model;}

let sec_ = await exec_neighbourhood_node_4x3r91t8fdq__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let loc_ = await exec_neighbourhood_node_4x3r91t8fdq__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_loc");
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( road_types_, listFlat([art_, sec_, loc_]), 'extend_end' );

let check_ = road_types_;

__modules__.attrib.Set(__params__.model, part_, 'class',  "part" );

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, part_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type_ );
}

else {

let road_type0_ = road_types_[pythonList(0, road_types_.length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = road_types_[pythonList(1, road_types_.length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}
}


async function exec_neighbourhood_node_4x3r91t8fdq_transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', parts_);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_4x3r91t8fdq__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_4x3r91t8fdq__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_4x3r91t8fdq__getCrvRoadEdgeTypes_(__params__, part_edges_, road_descr_) {

let edges_ = [[]];

for (let  edge_ of part_edges_){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_) == 2){

edges_ = listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}

else {

edges_ = edges_[pythonList(0, edges_.length)];
}

if (len(edges_) == 0){

return [];
}

if (len(edges_) == 1){

return [road_descr_];
}

let road_types_ = [road_descr_];

for (let  i_ of range(1, len(edges_))){

let ang_ = await exec_neighbourhood_node_4x3r91t8fdq__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (abs(ang_ - 180) > 45){

__modules__.list.Add( road_types_, road_descr_, 'to_end' );
}
}

return road_types_;
}


async function exec_neighbourhood_node_4x3r91t8fdq__convertToQuad_(__params__, pgon_) {

let area_ = __modules__.calc.Area( __params__.model, pgon_ );

if (area_ < 100){

return null;
}

else {
if(len( __modules__.query.Get(__params__.model, '_v', pgon_)) < 4){

return null;
}
}

let pgon2_ = __modules__.make.Copy( __params__.model, pgon_, null );

let verts_ = __modules__.query.Get(__params__.model, '_v', pgon2_);

if (len(verts_) == 4){

return pgon2_;
}

let dots_ = [];

for (let  vert_ of verts_){

let dot_ = await exec_neighbourhood_node_4x3r91t8fdq__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( dots_, dot_, 'to_end' );
}

let sorted_verts_ = listRev(listSort(listZip([verts_, dots_]), 1));

if (abs(sorted_verts_[pythonList(len(verts_) - 4, sorted_verts_.length)][pythonList(1, sorted_verts_[pythonList(len(verts_) - 4, sorted_verts_.length)].length)]) > 0.99){

__modules__.modify.Delete( __params__.model, pgon2_, 'delete_selected' );

return null;
}

for (let  i_ of range(len(verts_) - 4)){

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'ps', sorted_verts_[pythonList(i_, sorted_verts_.length)][pythonList(0, sorted_verts_[pythonList(i_, sorted_verts_.length)].length)]), 'delete_selected' );
}

return pgon2_;
}


async function exec_neighbourhood_node_4x3r91t8fdq__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_4x3r91t8fdq__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_4x3r91t8fdq__transferEdgeAttribs_(__params__, from_edges_, to_edges_, must_touch_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = null;

if (must_touch_){

from_edge_ = await exec_neighbourhood_node_4x3r91t8fdq__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}
}

else {

from_edge_ = await exec_neighbourhood_node_4x3r91t8fdq__closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}
}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}
}


async function exec_neighbourhood_node_4x3r91t8fdq__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_4x3r91t8fdq__closestEdge_(__params__, edges_, xyz_) {

let min_dist_ = Infinity;

let close_edge_ = null;

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < min_dist_){

min_dist_ = d_;

close_edge_ = edge_;
}
}

return close_edge_;
}


async function exec_neighbourhood_node_4x3r91t8fdq__projectOntoEdge_(__params__, xyz_, edges_) {

let d_min_ = Infinity;

let xyz_proj_min_ = xyz_;

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let xyz_proj_ = project(xyz_, r_, 0);

let d_ = distance(xyz_, xyz_proj_);

if (d_ < d_min_){

d_min_ = d_;

xyz_proj_min_ = xyz_proj_;
}
}

return xyz_proj_min_;
}

async function exec_neighbourhood_node_4x3r91t8fdq(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let all_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let loc_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', all_blocks_), ['block_type', null], '==', "loc");

__modules__.modify.Delete( __params__.model, loc_blocks_, 'keep_selected' );

let depths_dict_ = {"road_art": part_art_d_,"road_sec": part_sec_d_,"road_loc": part_loc_d_,"cold": 0};

for (let  block_ of __modules__.query.Get(__params__.model, 'pg', null)){

let parts_ = await exec_neighbourhood_node_4x3r91t8fdq_createParts_(__params__, block_, depths_dict_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, parts_, 'class',  "part" );

await exec_neighbourhood_node_4x3r91t8fdq_addTypeAttribsCrvRoads_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_dryl9a4rtkm_subdivOfGrid_(__params__, off_grid_) {

let block_id_ = __modules__.attrib.Get(__params__.model, off_grid_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, off_grid_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, off_grid_, 'site');

let swap_orientation_ = __modules__.attrib.Get(__params__.model, off_grid_, 'block_type')== "sec";

let quad_tri_ = await exec_neighbourhood_node_dryl9a4rtkm__convertOffGridToQuadTri_(__params__, off_grid_);
if (__params__.terminated) { return __params__.model;}

if (quad_tri_ == null){

let copy_ = __modules__.make.Copy( __params__.model, off_grid_, null );

__modules__.attrib.Set(__params__.model, copy_, 'class',  "plot" );

return [copy_];
}

let off_grid_parts_ = off_grid_;

if (len(quad_tri_) > 1){

off_grid_parts_ = __modules__.poly2d.Boolean( __params__.model, off_grid_, quad_tri_[pythonList(1, quad_tri_.length)], 'difference' );

let tri_ = __modules__.poly2d.Boolean( __params__.model, quad_tri_[pythonList(1, quad_tri_.length)], off_grid_, 'intersect' );

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', off_grid_), __modules__.query.Get(__params__.model, '_e', tri_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, quad_tri_[pythonList(1, quad_tri_.length)], 'delete_selected' );

__modules__.attrib.Set(__params__.model, tri_, 'site',  site_ );

__modules__.attrib.Set(__params__.model, tri_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, tri_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, tri_, 'class',  "part" );

__modules__.attrib.Set(__params__.model, tri_, 'type',  "white" );
}

let posis_ = await exec_neighbourhood_node_dryl9a4rtkm__createClusterPosis_(__params__, quad_tri_[pythonList(0, quad_tri_.length)], swap_orientation_);
if (__params__.terminated) { return __params__.model;}

let parts_ = await exec_neighbourhood_node_dryl9a4rtkm__createClusterParts_(__params__, off_grid_, off_grid_parts_, posis_);
if (__params__.terminated) { return __params__.model;}

for (let  part_ of parts_){

__modules__.attrib.Set(__params__.model, part_, 'site',  site_ );

__modules__.attrib.Set(__params__.model, part_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, part_, 'block_id',  block_id_ );

let area_ = __modules__.calc.Area( __params__.model, part_ );

if (area_ > (part_og_d_ * part_og_w_ * 0.3)){

__modules__.attrib.Set(__params__.model, part_, 'class',  "part" );

__modules__.attrib.Set(__params__.model, part_, 'type',  "off_grid0" );
}

else {

__modules__.attrib.Set(__params__.model, part_, 'class',  "park" );

__modules__.attrib.Set(__params__.model, part_, 'type',  "park" );
}
}

__modules__.modify.Delete( __params__.model, [off_grid_, off_grid_parts_], 'delete_selected' );

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsBtwTouchingParts_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}

return parts_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__convertOffGridToQuadTri_(__params__, off_grid_) {

let off_grid_edges_ = __modules__.query.Get(__params__.model, '_e', off_grid_);

let area_ = __modules__.calc.Area( __params__.model, off_grid_ );

if (area_ < 100){

return null;
}

else {
if(len( __modules__.query.Get(__params__.model, '_v', off_grid_)) < 4){

return null;
}
}

let pgon2_ = __modules__.make.Copy( __params__.model, off_grid_, null );

let verts_ = __modules__.query.Get(__params__.model, '_v', pgon2_);

let dots_ = [];

for (let  vert_ of verts_){

let dot_ = await exec_neighbourhood_node_dryl9a4rtkm__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( dots_, dot_, 'to_end' );
}

let sorted_verts_ = listRev(listSort(listZip([verts_, dots_]), 1));

for (let  i_ of range(len(verts_) - 4)){

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'ps', sorted_verts_[pythonList(i_, sorted_verts_.length)][pythonList(0, sorted_verts_[pythonList(i_, sorted_verts_.length)].length)]), 'delete_selected' );
}

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsClosest_(__params__, off_grid_edges_, __modules__.query.Get(__params__.model, '_e', pgon2_));
if (__params__.terminated) { return __params__.model;}

if (sorted_verts_[pythonList(-1, sorted_verts_.length)][pythonList(1, sorted_verts_[pythonList(-1, sorted_verts_.length)].length)] > -0.7){

return [pgon2_];
}

let worst_vert_ = sorted_verts_[pythonList(-1, sorted_verts_.length)][pythonList(0, sorted_verts_[pythonList(-1, sorted_verts_.length)].length)];

let worst_posi_ = __modules__.query.Get(__params__.model, 'ps', worst_vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', worst_vert_).length)];

let edges_ = __modules__.query.Get(__params__.model, '_e', worst_vert_);

let rays_ = __modules__.calc.Ray( __params__.model, edges_ );

let vec0_ = vecRev(rays_[pythonList(0, rays_.length)][pythonList(1, rays_[pythonList(0, rays_.length)].length)]);

let vec1_ = rays_[pythonList(1, rays_.length)][pythonList(1, rays_[pythonList(1, rays_.length)].length)];

let xyz_ = rays_[pythonList(1, rays_.length)][pythonList(0, rays_[pythonList(1, rays_.length)].length)];

let new_posi_ = null;

let chopped_ = null;

if (vecLen(vec0_) < vecLen(vec1_)){

let dist_ = vecDot(vec0_, vecNorm(vec1_));

let new_xyz_ = vecAdd(xyz_, vecSetLen(vec1_, dist_));

new_posi_ = __modules__.make.Position( __params__.model, new_xyz_ );

chopped_ = await exec_neighbourhood_node_dryl9a4rtkm_makeChopped_(__params__, new_xyz_, __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(0, edges_.length)]).length)], 'xyz'));
if (__params__.terminated) { return __params__.model;}
}

else {

let dist_ = vecDot(vec1_, vecNorm(vec0_));

let new_xyz_ = vecAdd(xyz_, vecSetLen(vec0_, dist_));

new_posi_ = __modules__.make.Position( __params__.model, new_xyz_ );

chopped_ = await exec_neighbourhood_node_dryl9a4rtkm_makeChopped_(__params__, __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(1, edges_.length)])[pythonList(1, __modules__.query.Get(__params__.model, 'ps', edges_[pythonList(1, edges_.length)]).length)], 'xyz'), new_xyz_);
if (__params__.terminated) { return __params__.model;}
}

let posis_list_ = __modules__.query.Get(__params__.model, 'ps', pgon2_);

let idx_ = listFind(posis_list_, worst_posi_);

posis_list_[pythonList(idx_, posis_list_.length)] = new_posi_;

let pgon3_ = __modules__.make.Polygon( __params__.model, posis_list_ );

__modules__.modify.Delete( __params__.model, pgon2_, 'delete_selected' );

return [pgon3_, chopped_];
}


async function exec_neighbourhood_node_dryl9a4rtkm_makeChopped_(__params__, xyz0_, xyz1_) {

let vec_ = vecSetLen(vecFromTo(xyz0_, xyz1_), 100);

let vec_perp_ = vecSetLen([-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0], 200);

let a_ = vecSub(xyz0_, vec_);

let b_ = vecAdd(xyz1_, vec_);

let c_ = vecAdd(b_, vec_perp_);

let d_ = vecAdd(a_, vec_perp_);

let posis_ = __modules__.make.Position( __params__.model, [a_, b_, c_, d_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__convertPartToQuad_(__params__, part_) {

let off_grid_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let area_ = __modules__.calc.Area( __params__.model, part_ );

if (area_ < 100){

return null;
}

else {
if(len( __modules__.query.Get(__params__.model, '_v', part_)) < 4){

return null;
}
}

let pgon2_ = __modules__.make.Copy( __params__.model, part_, null );

let verts_ = __modules__.query.Get(__params__.model, '_v', pgon2_);

if (len(verts_) == 4){

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsClosest_(__params__, off_grid_edges_, __modules__.query.Get(__params__.model, '_e', pgon2_));
if (__params__.terminated) { return __params__.model;}

return pgon2_;
}

let dots_ = [];

for (let  vert_ of verts_){

let dot_ = await exec_neighbourhood_node_dryl9a4rtkm__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( dots_, dot_, 'to_end' );
}

let sorted_verts_ = listRev(listSort(listZip([verts_, dots_]), 1));

for (let  i_ of range(len(verts_) - 4)){

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'ps', sorted_verts_[pythonList(i_, sorted_verts_.length)][pythonList(0, sorted_verts_[pythonList(i_, sorted_verts_.length)].length)]), 'delete_selected' );
}

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsClosest_(__params__, off_grid_edges_, __modules__.query.Get(__params__.model, '_e', pgon2_));
if (__params__.terminated) { return __params__.model;}

return pgon2_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__createClusterPosis_(__params__, quad_, swap_orientation_) {

let quad_edges_ = __modules__.query.Get(__params__.model, '_e', quad_);

let path_plines_ = [];

let lengths_ = __modules__.calc.Length( __params__.model, quad_edges_ );

let rays_ = __modules__.calc.Ray( __params__.model, quad_edges_ );

let rays_loc_ = rayLtoG(rays_,  __modules__.attrib.Get(__params__.model, null, 'ortho'));

let vecs_ = [rays_loc_[pythonList(0, rays_loc_.length)][pythonList(1, rays_loc_[pythonList(0, rays_loc_.length)].length)], rays_loc_[pythonList(1, rays_loc_.length)][pythonList(1, rays_loc_[pythonList(1, rays_loc_.length)].length)], rays_loc_[pythonList(2, rays_loc_.length)][pythonList(1, rays_loc_[pythonList(2, rays_loc_.length)].length)], rays_loc_[pythonList(3, rays_loc_.length)][pythonList(1, rays_loc_[pythonList(3, rays_loc_.length)].length)]];

let vecs_n_ = vecNorm(vecs_);

let dots_ = vecDot([1, 0, 0], vecs_n_);

let sorted_ = listSort(listZip([dots_, range(4)]), 0);

let a_ = sorted_[pythonList(-1, sorted_.length)][pythonList(1, sorted_[pythonList(-1, sorted_.length)].length)];

let b_ = (a_ + 1) % 4;

let c_ = (a_ + 2) % 4;

let d_ = (a_ + 3) % 4;

rays_ = __modules__.calc.Ray( __params__.model, quad_edges_ );

let p0_ = rays_[pythonList(a_, rays_.length)][pythonList(0, rays_[pythonList(a_, rays_.length)].length)];

let p1_ = rays_[pythonList(b_, rays_.length)][pythonList(0, rays_[pythonList(b_, rays_.length)].length)];

let p2_ = rays_[pythonList(c_, rays_.length)][pythonList(0, rays_[pythonList(c_, rays_.length)].length)];

let p3_ = rays_[pythonList(d_, rays_.length)][pythonList(0, rays_[pythonList(d_, rays_.length)].length)];

let wd_ = [part_og_w_, part_og_d_];

if (swap_orientation_){

wd_ = [part_og_d_, part_og_w_];
}

let num_x_ = floor((3 + min(lengths_[pythonList(a_, lengths_.length)], lengths_[pythonList(c_, lengths_.length)])) / wd_[pythonList(0, wd_.length)]) + 1;

let num_y_ = floor((3 + min(lengths_[pythonList(b_, lengths_.length)], lengths_[pythonList(d_, lengths_.length)])) / wd_[pythonList(1, wd_.length)]) + 1;

if (num_x_ == 1){

num_x_ = 2;
}

if (num_y_ == 1){

num_y_ = 2;
}

let vec_right0_ = vecDiv(rays_[pythonList(a_, rays_.length)][pythonList(1, rays_[pythonList(a_, rays_.length)].length)], num_x_ - 1);

let vec_right1_ = vecRev(vecDiv(rays_[pythonList(c_, rays_.length)][pythonList(1, rays_[pythonList(c_, rays_.length)].length)], num_x_ - 1));

let vec_right_exp_ = vecSetLen(vec_right1_, 100);

let posis_ = [];

let cluster_parts_ = [];

for (let  i_ of range(num_x_)){

let posis_list_ = [];

let x0_ = vecAdd(p0_, vecMult(vec_right0_, i_));

let x1_ = vecAdd(p3_, vecMult(vec_right1_, i_));

if (i_ == 0){

x0_ = vecSub(x0_, vec_right_exp_);

x1_ = vecSub(x1_, vec_right_exp_);
}

else {
if(i_ == num_x_ - 1){

x0_ = vecAdd(x0_, vec_right_exp_);

x1_ = vecAdd(x1_, vec_right_exp_);
}
}

let vec_up_ = vecDiv(vecFromTo(x0_, x1_), num_y_ - 1);

let vec_up_exp_ = vecSetLen(vec_up_, 100);

for (let  j_ of range(num_y_)){

let xyz_ = vecAdd(x0_, vecMult(vec_up_, j_));

if (j_ == 0){

xyz_ = vecSub(xyz_, vec_up_exp_);
}

else {
if(j_ == num_y_ - 1){

xyz_ = vecAdd(xyz_, vec_up_exp_);
}
}

let posi_ = __modules__.make.Position( __params__.model, xyz_ );

__modules__.list.Add( posis_list_, posi_, 'to_end' );
}

__modules__.list.Add( posis_, posis_list_, 'to_end' );
}

__modules__.modify.Delete( __params__.model, quad_, 'delete_selected' );

return posis_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__createClusterParts_(__params__, off_grid_, off_grid_ex_, posis_) {

let off_grid_e_ = __modules__.query.Get(__params__.model, '_e', off_grid_);

let parts_ = [];

let to_del_ = [];

for (let  i_ of range(len(posis_) - 1)){

let list0_ = posis_[pythonList(i_, posis_.length)];

let list1_ = posis_[pythonList(i_ + 1, posis_.length)];

for (let  j_ of range(len(list0_) - 1)){

let posi0_ = list0_[pythonList(j_, list0_.length)];

let posi1_ = list1_[pythonList(j_, list1_.length)];

let posi2_ = list1_[pythonList(j_ + 1, list1_.length)];

let posi3_ = list0_[pythonList(j_ + 1, list0_.length)];

let part1_ = __modules__.make.Polygon( __params__.model, [posi0_, posi1_, posi2_, posi3_] );

let part2_ = __modules__.poly2d.Boolean( __params__.model, part1_, off_grid_ex_, 'intersect' );

await exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsTouching_(__params__, off_grid_e_, __modules__.query.Get(__params__.model, '_e', part2_));
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( parts_, part2_, 'extend_end' );

__modules__.list.Add( to_del_, part1_, 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, to_del_, 'delete_selected' );

return parts_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__trimTri_(__params__, off_grid_, tri_) {

let tri2_ = __modules__.poly2d.Boolean( __params__.model, tri_, off_grid_, 'intersect' );

__modules__.modify.Delete( __params__.model, tri_, 'delete_selected' );

return tri2_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_dryl9a4rtkm__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_dryl9a4rtkm__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_dryl9a4rtkm__closestEdge_(__params__, edges_, xyz_) {

let min_dist_ = Infinity;

let close_edge_ = null;

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < min_dist_){

min_dist_ = d_;

close_edge_ = edge_;
}
}

return close_edge_;
}


async function exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_dryl9a4rtkm__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsClosest_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_dryl9a4rtkm__closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_dryl9a4rtkm__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_dryl9a4rtkm__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_dryl9a4rtkm_isect_(__params__, ray_, rays_) {

for (let  a_ray_ of rays_){

let isect_ = intersect(ray_, a_ray_, 0);

if (isect_ != null){

return isect_;
}
}

return null;
}

async function exec_neighbourhood_node_dryl9a4rtkm(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let all_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

__modules__.modify.Delete( __params__.model, all_blocks_, 'delete_selected' );

let off_grids_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

for (let  off_grid_ of off_grids_){

let block_type_ = __modules__.attrib.Get(__params__.model, off_grid_, 'block_type');

let parts_ = await exec_neighbourhood_node_dryl9a4rtkm_subdivOfGrid_(__params__, off_grid_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_gs8x34qm5m_processBlock_(__params__, block_) {

await exec_neighbourhood_node_gs8x34qm5m__cleanPgonEdge_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_gs8x34qm5m__cleanPgonAng_(__params__, block_);
if (__params__.terminated) { return __params__.model;}
}


async function exec_neighbourhood_node_gs8x34qm5m__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_gs8x34qm5m__cleanPgons_(__params__, pgons_) {

for (let  pgon_ of pgons_){

await exec_neighbourhood_node_gs8x34qm5m__cleanPgonEdge_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_gs8x34qm5m__cleanPgonAng_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_gs8x34qm5m__cleanPgonEdge_(__params__, pgon_) {

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


async function exec_neighbourhood_node_gs8x34qm5m__cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_gs8x34qm5m__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

async function exec_neighbourhood_node_gs8x34qm5m(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let all_blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', all_blocks_), ['block_type', null], '==', "cold");

__modules__.modify.Delete( __params__.model, blocks_, 'keep_selected' );

for (let  block_ of blocks_){

await exec_neighbourhood_node_gs8x34qm5m_processBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_8d4k78tygln_subdivBlock_(__params__, block_) {

let block_id_ = __modules__.attrib.Get(__params__.model, block_, 'block_id');

let block_edges_ = __modules__.query.Get(__params__.model, '_e', block_);

let block_verts_ = __modules__.query.Get(__params__.model, '_v', block_);

let block_posis_ = __modules__.query.Get(__params__.model, 'ps', block_verts_);

let result_ = await exec_neighbourhood_node_8d4k78tygln__getEdgesOnRoads_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let road_edges_ = result_[pythonList(0, result_.length)];

let other_edges_ = result_[pythonList(1, result_.length)];

if (len(road_edges_) == 0){

return [];
}

let lengths_ = __modules__.calc.Length( __params__.model, road_edges_ );

let subdivs_ = [];

let edges_to_cut_ = [];

for (let  i_ of range(1, len(road_edges_) - 1)){

let edge_ = road_edges_[pythonList(i_, road_edges_.length)];

let verts_ = __modules__.query.Get(__params__.model, '_v', edge_);

let ang0_ = await exec_neighbourhood_node_8d4k78tygln__vertAng_(__params__, verts_[pythonList(0, verts_.length)]);
if (__params__.terminated) { return __params__.model;}

let ang1_ = await exec_neighbourhood_node_8d4k78tygln__vertAng_(__params__, verts_[pythonList(1, verts_.length)]);
if (__params__.terminated) { return __params__.model;}

let min_len_ = part_loc_d_ * 2;

if (ang0_ < 150 && ang1_ < 150 && lengths_[pythonList(i_, lengths_.length)] > min_len_ && lengths_[pythonList(i_ - 1, lengths_.length)] > min_len_ && lengths_[pythonList(i_ + 1, lengths_.length)] > min_len_){

__modules__.list.Add( edges_to_cut_, edge_, 'to_end' );
}
}

if (len(edges_to_cut_) == 0){

return [block_];
}

let edge_a_ = await exec_neighbourhood_node_8d4k78tygln__getLongestEdge_(__params__, edges_to_cut_);
if (__params__.terminated) { return __params__.model;}

let xyz_a_ = __modules__.calc.Centroid( __params__.model, edge_a_, 'ps_average' );

let edge_vec_ = __modules__.calc.Vector( __params__.model, edge_a_ );

let edge_vec_perp_ = vecSetLen([-edge_vec_[pythonList(1, edge_vec_.length)], edge_vec_[pythonList(0, edge_vec_.length)], 0], 1000);

let ray_ = rayMake(xyz_a_, edge_vec_perp_);

let isect_ = await exec_neighbourhood_node_8d4k78tygln__isect_(__params__, ray_, other_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

if (isect_[pythonList(0, isect_.length)] == null){

return [block_];
}

let xyz_b_ = isect_[pythonList(0, isect_.length)];

let edge_b_ = isect_[pythonList(1, isect_.length)];

let cut_ = [listFind(block_edges_, edge_a_), listFind(block_edges_, edge_b_)];

let posis_ = __modules__.make.Position( __params__.model, [xyz_a_, xyz_b_] );

let subdiv_ = await exec_neighbourhood_node_8d4k78tygln__makeSubdivs_(__params__, block_posis_, null, cut_, null, posis_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );

subdiv_ = await exec_neighbourhood_node_8d4k78tygln__makeSubdivs_(__params__, block_posis_, cut_, null, posis_, null);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );

await exec_neighbourhood_node_8d4k78tygln__transferEdgeAttribs_(__params__, block_edges_, __modules__.query.Get(__params__.model, '_e', subdivs_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_8d4k78tygln__transferEdgeAttribsBtwTouchingParts_(__params__, subdivs_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_8d4k78tygln__copyAttribs_(__params__, block_, subdivs_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, block_, 'delete_selected' );

return subdivs_;
}


async function exec_neighbourhood_node_8d4k78tygln__getLongestEdge_(__params__, edges_) {

if (len(edges_) == 1){

return edges_[pythonList(0, edges_.length)];
}

let lengths_ = __modules__.calc.Length( __params__.model, edges_ );

let long_edge_ = listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)].length)];

return long_edge_;
}


async function exec_neighbourhood_node_8d4k78tygln__transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_8d4k78tygln__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_8d4k78tygln__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_8d4k78tygln__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_8d4k78tygln__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_8d4k78tygln__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_8d4k78tygln__getEdgesOnRoads_(__params__, block_) {

let road_edges_lists_ = [[]];

let other_edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', block_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == "road_art" || edge_road_ == "road_loc" || edge_road_ == "road_sec"){

__modules__.list.Add( road_edges_lists_[pythonList(-1, road_edges_lists_.length)], edge_, 'to_end' );
}

else {

__modules__.list.Add( other_edges_, edge_, 'to_end' );

if (len(road_edges_lists_[pythonList(-1, road_edges_lists_.length)]) != 0){

__modules__.list.Add( road_edges_lists_, [], 'to_end' );
}
}
}

let road_edges_ = [];

if (len(road_edges_lists_) == 0){

road_edges_ = [];
}

else {
if(len(road_edges_lists_) == 1){

road_edges_ = road_edges_lists_[pythonList(0, road_edges_lists_.length)];
}

else {

road_edges_ = listJoin(road_edges_lists_[pythonList(1, road_edges_lists_.length)], road_edges_lists_[pythonList(0, road_edges_lists_.length)]);
}
}

return [road_edges_, other_edges_];
}


async function exec_neighbourhood_node_8d4k78tygln__isect_(__params__, ray_, edges_, subdivs_) {

let rays_ = __modules__.calc.Ray( __params__.model, edges_ );

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', subdivs_)){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

return [null, null];
}
}

let isect_min_ = null;

let dist_min_ = Infinity;

let edge_min_ = null;

for (let  edge_ of edges_){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

let dist_ = distance(isect_, ray_[pythonList(0, ray_.length)]);

if (dist_ < dist_min_){

isect_min_ = isect_;

dist_min_ = dist_;

edge_min_ = edge_;
}
}
}

return [isect_min_, edge_min_];
}


async function exec_neighbourhood_node_8d4k78tygln__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_8d4k78tygln__makeSubdivs_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_) {

let ring_ = [];

if (cut0_ == null && cut1_ == null){

let pgon_ = __modules__.make.Polygon( __params__.model, block_posis_ );

__modules__.attrib.Set(__params__.model, pgon_, 'type',  "off_grid" );

return pgon_;
}

else {
if(cut0_ == null){

ring_ = listCopy(posis1_);

let posis_list_ = await exec_neighbourhood_node_8d4k78tygln__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)], cut1_[pythonList(0, cut1_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {
if(cut1_ == null){

ring_ = listRev(posis0_);

let posis_list_ = await exec_neighbourhood_node_8d4k78tygln__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut0_[pythonList(1, cut0_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {

ring_ = listCopy(posis1_);

let posis_list_ = await exec_neighbourhood_node_8d4k78tygln__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)], cut0_[pythonList(1, cut0_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );

__modules__.list.Add( ring_, listRev(posis0_), 'extend_end' );

posis_list_ = await exec_neighbourhood_node_8d4k78tygln__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut1_[pythonList(0, cut1_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}
}
}

if (len(ring_) < 3){

return null;
}

let pgon_ = __modules__.make.Polygon( __params__.model, ring_ );

return pgon_;
}


async function exec_neighbourhood_node_8d4k78tygln__getPosisFromRing_(__params__, posis_, idxs_) {

let num_posis_ = len(posis_);

let idx0_ = (idxs_[pythonList(0, idxs_.length)] + 1) % num_posis_;

let idx1_ = (idxs_[pythonList(1, idxs_.length)] + 1) % num_posis_;

if (idx0_ == idx1_){

return [];
}

let ring_ = [];

if (idx0_ < idx1_){

__modules__.list.Add( ring_, posis_.slice(idx0_, idx1_), 'extend_end' );
}

else {

__modules__.list.Add( ring_, posis_.slice(idx0_), 'extend_end' );

__modules__.list.Add( ring_, posis_.slice(0,idx1_), 'extend_end' );
}

return ring_;
}

async function exec_neighbourhood_node_8d4k78tygln(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Get(__params__.model, 'pg', null);

for (let  block_ of blocks_){

let subdivs_ = await exec_neighbourhood_node_8d4k78tygln_subdivBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let count_ = 0;

for (let  subdiv_ of subdivs_){

__modules__.attrib.Set(__params__.model, subdiv_, 'block_id',  __modules__.attrib.Get(__params__.model, subdiv_, 'block_id')+ "_" + count_ );

count_ = count_ + 1;
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_xztzuyg833_subdivBlock_(__params__, block_) {

let block_id_ = __modules__.attrib.Get(__params__.model, block_, 'block_id');

let block_edges_ = __modules__.query.Get(__params__.model, '_e', block_);

let block_verts_ = __modules__.query.Get(__params__.model, '_v', block_);

let block_posis_ = __modules__.query.Get(__params__.model, 'ps', block_verts_);

let result_ = await exec_neighbourhood_node_xztzuyg833__getEdgesOnRoads_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let road_edges_ = result_[pythonList(0, result_.length)];

let other_edges_ = result_[pythonList(1, result_.length)];

if (len(road_edges_) == 0){

return [];
}

let lengths_ = __modules__.calc.Length( __params__.model, road_edges_ );

let edge_long_ = listSort(listZip([lengths_, road_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, road_edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, road_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, road_edges_]), 0).length)].length)];

let vec_long_ = __modules__.calc.Vector( __params__.model, edge_long_ );

vec_long_ = vecNorm(vec_long_);

let vec_long_perp_ = [-vec_long_[pythonList(1, vec_long_.length)], vec_long_[pythonList(0, vec_long_.length)], 0];

let cut0_ = null;

let cut1_ = null;

let posis0_ = null;

let posis1_ = null;

let subdivs_ = [];

for (let  i_ of range(1, len(road_edges_))){

cut0_ = cut1_;

posis0_ = posis1_;

let vert_ = __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(i_, road_edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(i_, road_edges_.length)]).length)];

let vert_edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let road_idx0_ = listFind(block_edges_, vert_edges_[pythonList(0, vert_edges_.length)]);

let road_idx1_ = listFind(block_edges_, vert_edges_[pythonList(1, vert_edges_.length)]);

let posi_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let xyz_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let vecs_ = __modules__.calc.Vector( __params__.model, vert_edges_ );

vecs_ = vecNorm(vecs_);

let vec0_ = vecs_[pythonList(0, vecs_.length)];

let vec1_ = vecs_[pythonList(1, vecs_.length)];

let perp_vec0_ = [vec0_[pythonList(1, vec0_.length)], -vec0_[pythonList(0, vec0_.length)], 0];

let perp_vec1_ = [vec1_[pythonList(1, vec1_.length)], -vec1_[pythonList(0, vec1_.length)], 0];

let ang_ = await exec_neighbourhood_node_xztzuyg833__vertAng_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (ang_ > 250){

let xx_ = __modules__.make.Extrude( __params__.model, vert_, 50, 1, 'quads' );

__modules__.attrib.Set(__params__.model, xx_, 'ang',  ang_ );

let xyz_a_ = null;

let isect_a_ = [null, null];

if (lengths_[pythonList(i_ - 1, lengths_.length)] > part_loc_d_){

let vec_a_ = vecRev(vecSetLen(perp_vec0_, 1000));

xyz_a_ = vecAdd(xyz_, vecSetLen(vec0_, -(plot_loc_w_ / 2)));

let ray_a_ = rayMake(xyz_a_, vec_a_);

isect_a_ = await exec_neighbourhood_node_xztzuyg833__isect_(__params__, ray_a_, other_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

if (isect_a_[pythonList(0, isect_a_.length)] != null && distance(xyz_a_, isect_a_[pythonList(0, isect_a_.length)]) > 300){

isect_a_ = [null, null];
}
}

let xyz_b_ = null;

let isect_b_ = [null, null];

if (lengths_[pythonList(i_, lengths_.length)] > part_loc_d_){

let vec_b_ = vecRev(vecSetLen(perp_vec1_, 1000));

xyz_b_ = vecAdd(xyz_, vecSetLen(vec1_, (plot_loc_w_ / 2)));

let ray_b_ = rayMake(xyz_b_, vec_b_);

isect_b_ = await exec_neighbourhood_node_xztzuyg833__isect_(__params__, ray_b_, other_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

if (isect_b_[pythonList(0, isect_b_.length)] != null && distance(xyz_b_, isect_b_[pythonList(0, isect_b_.length)]) > 300){

isect_b_ = [null, null];
}
}

let check_ = [isect_a_, isect_b_];

if (isect_a_[pythonList(0, isect_a_.length)] != null && isect_b_[pythonList(0, isect_b_.length)] == null){

let vec_a_ = vecRev(vecSetLen(perp_vec0_, 1000));

xyz_a_ = xyz_;

let ray_a_ = rayMake(xyz_a_, vec_a_);

isect_a_ = await exec_neighbourhood_node_xztzuyg833__isect_(__params__, ray_a_, other_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}
}

if (isect_a_[pythonList(0, isect_a_.length)] == null && isect_b_[pythonList(0, isect_b_.length)] != null){

let vec_b_ = vecRev(vecSetLen(perp_vec1_, 1000));

xyz_b_ = xyz_;

let ray_b_ = rayMake(xyz_b_, vec_b_);

isect_b_ = await exec_neighbourhood_node_xztzuyg833__isect_(__params__, ray_b_, other_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}
}

if (isect_a_[pythonList(0, isect_a_.length)] == null && isect_b_[pythonList(0, isect_b_.length)] == null){

continue;
}

else {
if(isect_a_[pythonList(0, isect_a_.length)] != null && isect_b_[pythonList(0, isect_b_.length)] == null){

posis1_ = __modules__.make.Position( __params__.model, [xyz_a_, isect_a_[pythonList(0, isect_a_.length)]] );

let idx_a_ = listFind(block_edges_, isect_a_[pythonList(1, isect_a_.length)]);

cut1_ = [road_idx0_, idx_a_];

let subdiv_ = await exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );
}

else {
if(isect_a_[pythonList(0, isect_a_.length)] == null && isect_b_[pythonList(0, isect_b_.length)] != null){

posis1_ = __modules__.make.Position( __params__.model, [xyz_b_, isect_b_[pythonList(0, isect_b_.length)]] );

let idx_b_ = listFind(block_edges_, isect_b_[pythonList(1, isect_b_.length)]);

cut1_ = [road_idx1_, idx_b_];

let subdiv_ = await exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );
}

else {

let idx_a_ = listFind(block_edges_, isect_a_[pythonList(1, isect_a_.length)]);

let dist_a_ = distance(isect_a_[pythonList(0, isect_a_.length)], xyz_);

let idx_b_ = listFind(block_edges_, isect_b_[pythonList(1, isect_b_.length)]);

let dist_b_ = distance(isect_b_[pythonList(0, isect_b_.length)], xyz_);

posis1_ = __modules__.make.Position( __params__.model, [xyz_a_, isect_a_[pythonList(0, isect_a_.length)]] );

cut1_ = [road_idx0_, idx_a_];

let subdiv_ = await exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );

posis0_ = posis1_;

cut0_ = cut1_;

posis1_ = __modules__.make.Position( __params__.model, [xyz_b_, isect_b_[pythonList(0, isect_b_.length)]] );

cut1_ = [road_idx1_, idx_b_];

subdiv_ = await exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block_corner" );

__modules__.visualize.Color( __params__.model, subdiv_, [0.7, 0, 0.7] );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );
}
}
}
}

else {

continue;
}
}

posis0_ = posis1_;

cut0_ = cut1_;

cut1_ = null;

let subdiv_ = await exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, subdiv_, 'type',  "block" );

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );

await exec_neighbourhood_node_xztzuyg833__transferEdgeAttribs_(__params__, block_edges_, __modules__.query.Get(__params__.model, '_e', subdivs_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xztzuyg833__transferEdgeAttribsBtwTouchingParts_(__params__, subdivs_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xztzuyg833__copyAttribs_(__params__, block_, subdivs_);
if (__params__.terminated) { return __params__.model;}

return subdivs_;
}


async function exec_neighbourhood_node_xztzuyg833__transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_xztzuyg833__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_xztzuyg833__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_xztzuyg833__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_xztzuyg833__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_xztzuyg833__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_xztzuyg833__getEdgesOnRoads_(__params__, block_) {

let road_edges_lists_ = [[]];

let other_edges_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', block_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == "road_art" || edge_road_ == "road_loc" || edge_road_ == "road_sec"){

__modules__.list.Add( road_edges_lists_[pythonList(-1, road_edges_lists_.length)], edge_, 'to_end' );
}

else {

__modules__.list.Add( other_edges_, edge_, 'to_end' );

if (len(road_edges_lists_[pythonList(-1, road_edges_lists_.length)]) != 0){

__modules__.list.Add( road_edges_lists_, [], 'to_end' );
}
}
}

let road_edges_ = [];

if (len(road_edges_lists_) == 0){

road_edges_ = [];
}

else {
if(len(road_edges_lists_) == 1){

road_edges_ = road_edges_lists_[pythonList(0, road_edges_lists_.length)];
}

else {

road_edges_ = listJoin(road_edges_lists_[pythonList(1, road_edges_lists_.length)], road_edges_lists_[pythonList(0, road_edges_lists_.length)]);
}
}

return [road_edges_, other_edges_];
}


async function exec_neighbourhood_node_xztzuyg833__isect_(__params__, ray_, edges_, subdivs_) {

let rays_ = __modules__.calc.Ray( __params__.model, edges_ );

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', subdivs_)){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

return [null, null];
}
}

let isect_min_ = null;

let dist_min_ = Infinity;

let edge_min_ = null;

for (let  edge_ of edges_){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

let dist_ = distance(isect_, ray_[pythonList(0, ray_.length)]);

if (dist_ < dist_min_){

isect_min_ = isect_;

dist_min_ = dist_;

edge_min_ = edge_;
}
}
}

return [isect_min_, edge_min_];
}


async function exec_neighbourhood_node_xztzuyg833__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_xztzuyg833__makeSubdivs2_(__params__, block_posis_, cut0_, cut1_, posis0_, posis1_) {

let ring_ = [];

if (cut0_ == null && cut1_ == null){

let pgon_ = __modules__.make.Polygon( __params__.model, block_posis_ );

__modules__.attrib.Set(__params__.model, pgon_, 'type',  "off_grid" );

return pgon_;
}

else {
if(cut0_ == null){

ring_ = listCopy(posis1_);

let posis_list_ = await exec_neighbourhood_node_xztzuyg833__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)], cut1_[pythonList(0, cut1_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {
if(cut1_ == null){

ring_ = listRev(posis0_);

let posis_list_ = await exec_neighbourhood_node_xztzuyg833__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut0_[pythonList(1, cut0_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {

ring_ = listCopy(posis1_);

let posis_list_ = await exec_neighbourhood_node_xztzuyg833__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)], cut0_[pythonList(1, cut0_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );

__modules__.list.Add( ring_, listRev(posis0_), 'extend_end' );

posis_list_ = await exec_neighbourhood_node_xztzuyg833__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut1_[pythonList(0, cut1_.length)]]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}
}
}

if (len(ring_) < 3){

return null;
}

let pgon_ = __modules__.make.Polygon( __params__.model, ring_ );

return pgon_;
}


async function exec_neighbourhood_node_xztzuyg833__getPosisFromRing_(__params__, posis_, idxs_) {

let num_posis_ = len(posis_);

let idx0_ = (idxs_[pythonList(0, idxs_.length)] + 1) % num_posis_;

let idx1_ = (idxs_[pythonList(1, idxs_.length)] + 1) % num_posis_;

if (idx0_ == idx1_){

return [];
}

let ring_ = [];

if (idx0_ < idx1_){

__modules__.list.Add( ring_, posis_.slice(idx0_, idx1_), 'extend_end' );
}

else {

__modules__.list.Add( ring_, posis_.slice(idx0_), 'extend_end' );

__modules__.list.Add( ring_, posis_.slice(0,idx1_), 'extend_end' );
}

return ring_;
}

async function exec_neighbourhood_node_xztzuyg833(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Get(__params__.model, 'pg', null);

for (let  block_ of blocks_){

let subdivs_ = await exec_neighbourhood_node_xztzuyg833_subdivBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

let count_ = 0;

for (let  subdiv_ of subdivs_){

__modules__.attrib.Set(__params__.model, subdiv_, 'block_id',  __modules__.attrib.Get(__params__.model, subdiv_, 'block_id')+ "_" + count_ );

count_ = count_ + 1;
}
}

__modules__.modify.Delete( __params__.model, [blocks_], 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_k375z2278a(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

__modules__.modify.Delete( __params__.model, blocks_, 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_9jblow0n6mn_processBlock_(__params__, block_) {

let roads_art_ = await exec_neighbourhood_node_9jblow0n6mn__getSitePlines_(__params__, block_, "road_art");
if (__params__.terminated) { return __params__.model;}

let roads_sec_ = await exec_neighbourhood_node_9jblow0n6mn__getSitePlines_(__params__, block_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let roads_loc_ = await exec_neighbourhood_node_9jblow0n6mn__getSitePlines_(__params__, block_, "road_loc");
if (__params__.terminated) { return __params__.model;}

let parts_ = await exec_neighbourhood_node_9jblow0n6mn__createOnGridStrips_(__params__, block_, roads_art_, roads_sec_, roads_loc_);
if (__params__.terminated) { return __params__.model;}

parts_ = await exec_neighbourhood_node_9jblow0n6mn__cleanPgons_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}

return parts_;
}


async function exec_neighbourhood_node_9jblow0n6mn__createOnGridStrips_(__params__, block_, roads_art_, roads_sec_, roads_loc_) {

let off_art_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_art_, part_art_d_, 100, 'square_end' );

let off_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_sec_, part_sec_d_, 100, 'square_end' );

let off_loc_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_loc_, part_loc_d_, 100, 'square_end' );

let off_grids_ = __modules__.poly2d.Boolean( __params__.model, block_, [off_art_, off_sec_, off_loc_], 'difference' );

let on_arts1_ = __modules__.poly2d.Boolean( __params__.model, off_art_, block_, 'intersect' );

let on_secs1_ = __modules__.poly2d.Boolean( __params__.model, off_sec_, block_, 'intersect' );

let on_locs1_ = __modules__.poly2d.Boolean( __params__.model, off_loc_, block_, 'intersect' );

let on_arts2_ = __modules__.poly2d.Boolean( __params__.model, on_arts1_, [off_sec_, off_loc_], 'difference' );

let on_secs2_ = __modules__.poly2d.Boolean( __params__.model, on_secs1_, [off_art_, off_loc_], 'difference' );

let on_locs2_ = __modules__.poly2d.Boolean( __params__.model, on_locs1_, [off_art_, off_sec_], 'difference' );

let on_arts3_ = __modules__.poly2d.Union( __params__.model, on_arts2_ );

let on_secs3_ = __modules__.poly2d.Union( __params__.model, on_secs2_ );

let on_locs3_ = __modules__.poly2d.Union( __params__.model, on_locs2_ );

let art_sec_ = __modules__.poly2d.Boolean( __params__.model, off_art_, off_sec_, 'intersect' );

let art_loc_ = __modules__.poly2d.Boolean( __params__.model, off_art_, off_loc_, 'intersect' );

let sec_loc_ = __modules__.poly2d.Boolean( __params__.model, off_sec_, off_loc_, 'intersect' );

let art_sec1_ = __modules__.poly2d.Boolean( __params__.model, art_sec_, block_, 'intersect' );

let art_loc1_ = __modules__.poly2d.Boolean( __params__.model, art_loc_, block_, 'intersect' );

let sec_loc1_ = __modules__.poly2d.Boolean( __params__.model, sec_loc_, block_, 'intersect' );

let new_parts_ = listFlat([art_sec1_, art_loc1_, sec_loc1_, on_arts3_, on_secs3_, on_locs3_, off_grids_]);

__modules__.attrib.Set(__params__.model, art_sec1_, 'type',  'art_sec' );

__modules__.attrib.Set(__params__.model, art_loc1_, 'type',  'art_loc' );

__modules__.attrib.Set(__params__.model, sec_loc1_, 'type',  'sec_loc' );

__modules__.attrib.Set(__params__.model, on_arts3_, 'type',  'art' );

__modules__.attrib.Set(__params__.model, on_secs3_, 'type',  'sec' );

__modules__.attrib.Set(__params__.model, on_locs3_, 'type',  'loc' );

__modules__.attrib.Set(__params__.model, off_grids_, 'type',  'off_grid' );

__modules__.attrib.Set(__params__.model, new_parts_, 'class',  "part" );

await exec_neighbourhood_node_9jblow0n6mn__transferEdgeAttribsBtwTouchingParts_(__params__, new_parts_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_9jblow0n6mn__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', block_), __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', new_parts_), ['road', null], '==', null));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_9jblow0n6mn__copyAttribs_(__params__, block_, new_parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [art_sec_, art_loc_, sec_loc_], 'delete_selected' );

__modules__.modify.Delete( __params__.model, [off_art_, off_sec_, off_loc_, on_arts1_, on_arts2_, on_secs1_, on_secs2_, on_locs1_, on_locs2_, block_], 'delete_selected' );

__modules__.modify.Delete( __params__.model, [roads_art_, roads_sec_, roads_loc_], 'delete_selected' );

return new_parts_;
}


async function exec_neighbourhood_node_9jblow0n6mn__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_9jblow0n6mn__cleanPgons_(__params__, pgons_) {

for (let  pgon_ of pgons_){

await exec_neighbourhood_node_9jblow0n6mn__cleanPgonEdge_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_9jblow0n6mn__cleanPgonAng_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_9jblow0n6mn__cleanPgonEdge_(__params__, pgon_) {

let del_posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', pgon_)){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

if (length_ < 0.0001){

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

__modules__.list.Add( del_posis_, posis_[pythonList(0, posis_.length)], 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_9jblow0n6mn__cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_9jblow0n6mn__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_9jblow0n6mn__getSitePlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (__modules__.attrib.Get(__params__.model, edge_, 'road')== road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_9jblow0n6mn__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_9jblow0n6mn__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}
}


async function exec_neighbourhood_node_9jblow0n6mn__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_9jblow0n6mn__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_9jblow0n6mn__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_9jblow0n6mn__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 0.01){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_9jblow0n6mn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

__modules__.modify.Delete( __params__.model, blocks_, 'keep_selected' );

for (let  block_ of blocks_){

let result_ = await exec_neighbourhood_node_9jblow0n6mn_processBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_elnd381vmpj_subdivParts_(__params__, part_) {

let part_type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let part_depth_ = part_sec_d_;

let plot_width_ = plot_sec_w_;

if (part_type_ == "loc"){

part_depth_ = part_loc_d_;

plot_width_ = plot_loc_w_;
}

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let road_loc_e_ = __modules__.query.Filter(__params__.model, part_edges_, ['road', null], '==', "road_loc");

let road_sec_e_ = __modules__.query.Filter(__params__.model, part_edges_, ['road', null], '==', "road_sec");

let road_art_e_ = __modules__.query.Filter(__params__.model, part_edges_, ['road', null], '==', "road_art");

let og_e_ = __modules__.query.Filter(__params__.model, part_edges_, ['road', null], '==', "off_grid");

let road_edges_ = listFlat([road_loc_e_, road_sec_e_, road_art_e_]);

let ang_threshold_ = 200;

let og_verts_ = __modules__.query.Get(__params__.model, '_v', og_e_);

let convex_ = [];

for (let  vert_ of og_verts_){

let ang_ = await exec_neighbourhood_node_elnd381vmpj__vertAng_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (ang_ > ang_threshold_){

let len_edges_ = __modules__.calc.Length( __params__.model, __modules__.query.Get(__params__.model, '_e', vert_) );

if (len_edges_[pythonList(0, len_edges_.length)] > (plot_loc_w_ / 2) && len_edges_[pythonList(1, len_edges_.length)] > (plot_loc_w_ / 2)){

let corner_ = await exec_neighbourhood_node_elnd381vmpj__makeConvexCorner_(__params__, vert_, part_depth_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( convex_, corner_, 'to_end' );
}
}
}

let corners_un_ = __modules__.poly2d.Union( __params__.model, convex_ );

let corners_trim_ = __modules__.poly2d.Boolean( __params__.model, corners_un_, part_, 'intersect' );

let strips_ = __modules__.poly2d.Boolean( __params__.model, part_, corners_un_, 'difference' );

strips_ = await exec_neighbourhood_node_elnd381vmpj__fixPinchedPgons_(__params__, strips_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_elnd381vmpj__attribs_(__params__, part_, corners_trim_, strips_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [part_, convex_, corners_un_], 'delete_selected' );

return [strips_, corners_trim_];
}


async function exec_neighbourhood_node_elnd381vmpj__attribs_(__params__, part_, corners_, strips_) {

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let part_type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

await exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsTouching_(__params__, part_edges_, __modules__.query.Get(__params__.model, '_e', corners_));
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, corners_, 'type',  part_type_ + '_' + part_type_ );

await exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsTouching_(__params__, part_edges_, __modules__.query.Get(__params__.model, '_e', strips_));
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, strips_, 'type',  part_type_ );

let all_parts_ = listFlat([strips_, corners_]);

__modules__.attrib.Set(__params__.model, all_parts_, 'class',  "part" );

await exec_neighbourhood_node_elnd381vmpj__copyAttribs_(__params__, part_, all_parts_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsBtwTouchingParts_(__params__, all_parts_);
if (__params__.terminated) { return __params__.model;}
}


async function exec_neighbourhood_node_elnd381vmpj__makeConvexCorner_(__params__, vert_, part_depth_) {

let vert_xyz_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)], 'xyz');

let vert_edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vec0_ = __modules__.calc.Vector( __params__.model, vert_edges_[pythonList(0, vert_edges_.length)] );

let vec1_ = __modules__.calc.Vector( __params__.model, vert_edges_[pythonList(1, vert_edges_.length)] );

let vec0_perp_ = vecSetLen([-vec0_[pythonList(1, vec0_.length)], vec0_[pythonList(0, vec0_.length)], 0], part_depth_ + 1);

let vec1_perp_ = vecSetLen([-vec1_[pythonList(1, vec1_.length)], vec1_[pythonList(0, vec1_.length)], 0], part_depth_ + 1);

let xyz0_ = vecAdd(vert_xyz_, vec0_perp_);

let xyz1_ = vecAdd(vert_xyz_, vec1_perp_);

let ray0_ = rayMake(xyz0_, vec0_);

let ray1_ = rayMake(xyz1_, vec1_);

let xyz_cor_ = intersect(ray0_, ray1_, 2);

let posis_ = __modules__.make.Position( __params__.model, [xyz1_, xyz_cor_, xyz0_] );

posis_ = listJoin( __modules__.query.Get(__params__.model, 'ps', vert_), posis_);

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_neighbourhood_node_elnd381vmpj__makeConcaveCorner_(__params__, vert_, part_depth_, plot_width_) {

let vert_xyz_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)], 'xyz');

let vert_edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vec0_ = __modules__.calc.Vector( __params__.model, vert_edges_[pythonList(0, vert_edges_.length)] );

let vec1_ = __modules__.calc.Vector( __params__.model, vert_edges_[pythonList(1, vert_edges_.length)] );

let corner_front_ = plot_width_ / 2;

let xyz_cor_off_ = vecSum(vert_xyz_, vecSetLen(vec0_, -corner_front_), vecSetLen(vec1_, corner_front_));

let vec0_perp_ = vecSetLen([-vec0_[pythonList(1, vec0_.length)], vec0_[pythonList(0, vec0_.length)], 0], part_depth_ + corner_front_ + 1);

let vec1_perp_ = vecSetLen([-vec1_[pythonList(1, vec1_.length)], vec1_[pythonList(0, vec1_.length)], 0], part_depth_ + corner_front_ + 1);

let xyz0_ = vecAdd(xyz_cor_off_, vec0_perp_);

let xyz1_ = vecAdd(xyz_cor_off_, vec1_perp_);

let ray0_ = rayMake(xyz0_, vec0_);

let ray1_ = rayMake(xyz1_, vec1_);

let xyz_cor_ = intersect(ray0_, ray1_, 2);

let posis_ = __modules__.make.Position( __params__.model, [xyz_cor_off_, xyz1_, xyz_cor_, xyz0_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_neighbourhood_node_elnd381vmpj__makeZigZagCorner_(__params__, edge_, part_depth_, plot_width_) {

let verts_ = __modules__.query.Get(__params__.model, '_v', edge_);

let vec0_ = __modules__.calc.Vector( __params__.model, edge_ );

let length_ = vecLen(vec0_);

vec0_ = vecNorm(vec0_);

let vec_next_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(1, verts_.length)])[pythonList(1, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(1, verts_.length)]).length)] );

let vec_next_perp_ = [-vec_next_[pythonList(1, vec_next_.length)], vec_next_[pythonList(0, vec_next_.length)], 0];

let vec_prev_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(0, verts_.length)]).length)] );

let vec_prev_perp_ = [-vec_prev_[pythonList(1, vec_prev_.length)], vec_prev_[pythonList(0, vec_prev_.length)], 0];

let posi_ = __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(0, verts_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'ps', verts_[pythonList(0, verts_.length)]).length)];

let xyz0_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let xyz1_ = vecAdd(xyz0_, vecSetLen(vec0_, length_ + 1));

let xyz2_ = vecAdd(xyz1_, vecSetLen(vec_next_, part_depth_ + plot_width_));

let xyz3_ = vecAdd(xyz2_, vecSetLen(vec_next_perp_, length_ + part_depth_ + 10));

let xyz4_ = vecAdd(xyz0_, vecSetLen(vec_prev_perp_, part_depth_ + 10));

let posis_ = __modules__.make.Position( __params__.model, [xyz1_, xyz2_, xyz3_, xyz4_] );

__modules__.list.Add( posis_, posi_, 'extend_end' );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_neighbourhood_node_elnd381vmpj__fixPinchedPgons_(__params__, pgons_) {

let all_new_pgons_ = [];

for (let  pgon_ of pgons_){

let verts_ = __modules__.query.Get(__params__.model, '_v', pgon_);

let vert_posis_ = [];

let pinch_posis_ = [];

for (let  vert_ of verts_){

let posi_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

if (listHas(vert_posis_, posi_)){

__modules__.list.Add( pinch_posis_, posi_, 'to_end' );
}

__modules__.list.Add( vert_posis_, posi_, 'to_end' );
}

let new_posis_ = [[]];

let idx_ = -1;

let used_ = [];

for (let  posi_ of vert_posis_){

if (listHas(pinch_posis_, posi_)){

if (listHas(used_, posi_)){

idx_ = idx_ - 1;
}

else {

__modules__.list.Add( used_, posi_, 'to_end' );

__modules__.list.Add( new_posis_, [], 'to_end' );
}
}

__modules__.list.Add( new_posis_[pythonList(idx_, new_posis_.length)], posi_, 'to_end' );
}

for (let  a_new_posis_ of new_posis_){

if (len(a_new_posis_) > 2){

let new_pgon_ = __modules__.make.Polygon( __params__.model, a_new_posis_ );

__modules__.list.Add( all_new_pgons_, new_pgon_, 'extend_end' );
}
}
}

__modules__.modify.Delete( __params__.model, pgons_, 'delete_selected' );

return all_new_pgons_;
}


async function exec_neighbourhood_node_elnd381vmpj__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_elnd381vmpj__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsTouchingPart_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_elnd381vmpj__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_elnd381vmpj__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', parts_);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_elnd381vmpj__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_elnd381vmpj__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_elnd381vmpj__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 0.1){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_elnd381vmpj(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '!=', "off_grid");

for (let  part_ of parts_){

let subdivs_ = await exec_neighbourhood_node_elnd381vmpj_subdivParts_(__params__, part_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_n60w7v18kc_subdivBlock_(__params__, block_) {

let block_id_ = __modules__.attrib.Get(__params__.model, block_, 'block_id');

let block_edges_ = __modules__.query.Get(__params__.model, '_e', block_);

let block_verts_ = __modules__.query.Get(__params__.model, '_v', block_);

let block_posis_ = __modules__.query.Get(__params__.model, 'ps', block_verts_);

let cold_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', block_), ['road', null], '==', "cold");

let warm_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', block_), ['road', null], '!=', "cold");

let road_edges_ = await exec_neighbourhood_node_n60w7v18kc__getEdgesOnParts_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

if (len(road_edges_) == 0){

return [];
}

let lengths_ = __modules__.calc.Length( __params__.model, road_edges_ );

let edge_long_ = listSort(listZip([lengths_, road_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, road_edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, road_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, road_edges_]), 0).length)].length)];

let vec_long_ = __modules__.calc.Vector( __params__.model, edge_long_ );

vec_long_ = vecNorm(vec_long_);

let vec_long_perp_ = [-vec_long_[pythonList(1, vec_long_.length)], vec_long_[pythonList(0, vec_long_.length)], 0];

let cut0_ = null;

let cut1_ = null;

let posi0_ = null;

let posi1_ = null;

let subdivs_ = [];

for (let  i_ of range(1, len(road_edges_))){

cut0_ = cut1_;

posi0_ = posi1_;

let road_edge_ = road_edges_[pythonList(i_, road_edges_.length)];

let road_idx_ = listFind(block_edges_, road_edge_);

let vert_ = __modules__.query.Get(__params__.model, '_v', road_edge_)[pythonList(0, __modules__.query.Get(__params__.model, '_v', road_edge_).length)];

let vert_edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let posi_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let xyz_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let ang_ = await exec_neighbourhood_node_n60w7v18kc__vertAng_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

let vecs_ = __modules__.calc.Vector( __params__.model, vert_edges_ );

vecs_ = vecNorm(vecs_);

let vec0_ = vecRev(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecs_[pythonList(1, vecs_.length)];

ang_ = radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));

if (ang_ > 250){

let vec_a_ = vecRev(vecSetLen(vec0_, 1000));

let ray_a_ = rayMake(xyz_, vec_a_);

let isect_a_ = await exec_neighbourhood_node_n60w7v18kc__isect_(__params__, ray_a_, cold_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

let vec_b_ = vecRev(vecSetLen(vec1_, 1000));

let ray_b_ = rayMake(xyz_, vec_b_);

let isect_b_ = await exec_neighbourhood_node_n60w7v18kc__isect_(__params__, ray_b_, cold_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

if (isect_a_[pythonList(0, isect_a_.length)] == null && isect_b_[pythonList(0, isect_b_.length)] == null){

continue;
}

else {
if(isect_a_[pythonList(0, isect_a_.length)] != null && isect_b_[pythonList(0, isect_b_.length)] == null){

posi1_ = __modules__.make.Position( __params__.model, isect_a_[pythonList(0, isect_a_.length)] );

let idx_a_ = listFind(block_edges_, isect_a_[pythonList(1, isect_a_.length)]);

cut1_ = [road_idx_, idx_a_];
}

else {
if(isect_a_[pythonList(0, isect_a_.length)] == null && isect_b_[pythonList(0, isect_b_.length)] != null){

posi1_ = __modules__.make.Position( __params__.model, isect_b_[pythonList(0, isect_b_.length)] );

let idx_b_ = listFind(block_edges_, isect_b_[pythonList(1, isect_b_.length)]);

cut1_ = [road_idx_, idx_b_];
}

else {

let idx_a_ = listFind(block_edges_, isect_a_[pythonList(1, isect_a_.length)]);

let dist_a_ = distance(isect_a_[pythonList(0, isect_a_.length)], xyz_);

let idx_b_ = listFind(block_edges_, isect_b_[pythonList(1, isect_b_.length)]);

let dist_b_ = distance(isect_b_[pythonList(0, isect_b_.length)], xyz_);

if (dist_a_ < dist_b_){

posi1_ = __modules__.make.Position( __params__.model, isect_a_[pythonList(0, isect_a_.length)] );

cut1_ = [road_idx_, idx_a_];
}

else {

posi1_ = __modules__.make.Position( __params__.model, isect_b_[pythonList(0, isect_b_.length)] );

cut1_ = [road_idx_, idx_b_];
}
}
}
}
}

else {
if(ang_ > 190){

let vec_avg_ = vecSum(vecs_);

let vec_perp_ = vecSetLen([-vec_avg_[pythonList(1, vec_avg_.length)], vec_avg_[pythonList(0, vec_avg_.length)], 0], 100);

let ray_perp_ = rayMake(xyz_, vec_perp_);

let isect_perp_ = await exec_neighbourhood_node_n60w7v18kc__isect_(__params__, ray_perp_, cold_edges_, subdivs_);
if (__params__.terminated) { return __params__.model;}

let idx_perp_ = listFind(block_edges_, isect_perp_[pythonList(1, isect_perp_.length)]);

isect_perp_ = isect_perp_[pythonList(0, isect_perp_.length)];

if (isect_perp_ != null){

posi1_ = __modules__.make.Position( __params__.model, isect_perp_ );

cut1_ = [road_idx_, idx_perp_];
}

else {

continue;
}
}

else {

continue;
}
}

let subdiv_ = await exec_neighbourhood_node_n60w7v18kc__makeSubdivs_(__params__, block_posis_, cut0_, cut1_, posi0_, posi1_);
if (__params__.terminated) { return __params__.model;}

if (subdiv_ != null){

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );
}
}

posi0_ = posi1_;

cut0_ = cut1_;

cut1_ = null;

let subdiv_ = await exec_neighbourhood_node_n60w7v18kc__makeSubdivs_(__params__, block_posis_, cut0_, cut1_, posi0_, posi1_);
if (__params__.terminated) { return __params__.model;}

if (subdiv_ != null){

__modules__.list.Add( subdivs_, subdiv_, 'to_end' );
}

await exec_neighbourhood_node_n60w7v18kc__transferEdgeAttribs_(__params__, block_edges_, __modules__.query.Get(__params__.model, '_e', subdivs_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_n60w7v18kc__transferEdgeAttribsBtwTouchingParts_(__params__, subdivs_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_n60w7v18kc__copyAttribs_(__params__, block_, subdivs_);
if (__params__.terminated) { return __params__.model;}

return subdivs_;
}


async function exec_neighbourhood_node_n60w7v18kc__transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_n60w7v18kc__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_n60w7v18kc__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_n60w7v18kc__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_n60w7v18kc__copyAttribs_(__params__, pgon_from_, pgons_to_) {

__modules__.attrib.Set(__params__.model, pgons_to_, 'block_id',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'block_type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'site',  __modules__.attrib.Get(__params__.model, pgon_from_, 'site') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'type') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'class',  __modules__.attrib.Get(__params__.model, pgon_from_, 'class') );
}


async function exec_neighbourhood_node_n60w7v18kc__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_n60w7v18kc__getEdgesOnParts_(__params__, block_) {

let edges_ = [[]];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', block_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == "loc" || edge_road_ == "sec"){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_[pythonList(0, edges_.length)]) == 0){

return [];
}

if (len(edges_) == 1){

return edges_[pythonList(0, edges_.length)];
}

return listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}


async function exec_neighbourhood_node_n60w7v18kc__isect_(__params__, ray_, edges_, subdivs_) {

let rays_ = __modules__.calc.Ray( __params__.model, edges_ );

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', subdivs_)){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

return [null, null];
}
}

let isect_min_ = null;

let dist_min_ = Infinity;

let edge_min_ = null;

for (let  edge_ of edges_){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

let dist_ = distance(isect_, ray_[pythonList(0, ray_.length)]);

if (dist_ < dist_min_){

isect_min_ = isect_;

dist_min_ = dist_;

edge_min_ = edge_;
}
}
}

return [isect_min_, edge_min_];
}


async function exec_neighbourhood_node_n60w7v18kc__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_n60w7v18kc__makeSubdivs_(__params__, block_posis_, cut0_, cut1_, posi0_, posi1_) {

let ring_ = [];

if (cut0_ == null && cut1_ == null){

let pgon_ = __modules__.make.Polygon( __params__.model, block_posis_ );

__modules__.attrib.Set(__params__.model, pgon_, 'type',  "off_grid" );

return pgon_;
}

else {
if(cut0_ == null){

ring_ = [posi1_];

let posis_list_ = await exec_neighbourhood_node_n60w7v18kc__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)] + 1, cut1_[pythonList(0, cut1_.length)] + 1]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {
if(cut1_ == null){

ring_ = [posi0_];

let posis_list_ = await exec_neighbourhood_node_n60w7v18kc__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut0_[pythonList(1, cut0_.length)] + 1]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {

ring_ = [posi1_];

let posis_list_ = await exec_neighbourhood_node_n60w7v18kc__getPosisFromRing_(__params__, block_posis_, [cut1_[pythonList(1, cut1_.length)] + 1, cut0_[pythonList(1, cut0_.length)] + 1]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );

__modules__.list.Add( ring_, posi0_, 'extend_end' );

posis_list_ = await exec_neighbourhood_node_n60w7v18kc__getPosisFromRing_(__params__, block_posis_, [cut0_[pythonList(0, cut0_.length)], cut1_[pythonList(0, cut1_.length)] + 1]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}
}
}

if (len(ring_) < 3){

return null;
}

let pgon_ = __modules__.make.Polygon( __params__.model, ring_ );

__modules__.attrib.Set(__params__.model, pgon_, 'type',  "off_grid" );

return pgon_;
}


async function exec_neighbourhood_node_n60w7v18kc__getPosisFromRing_(__params__, posis_, idxs_) {

let idx0_ = idxs_[pythonList(0, idxs_.length)];

let idx1_ = idxs_[pythonList(1, idxs_.length)];

if (idx0_ == idx1_){

return [];
}

let ring_ = [];

if (idx0_ < idx1_){

__modules__.list.Add( ring_, posis_.slice(idx0_, idx1_), 'extend_end' );
}

else {

__modules__.list.Add( ring_, posis_.slice(idx0_), 'extend_end' );

__modules__.list.Add( ring_, posis_.slice(0,idx1_), 'extend_end' );
}

return ring_;
}

async function exec_neighbourhood_node_n60w7v18kc(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

for (let  block_ of blocks_){

let subdivs_ = await exec_neighbourhood_node_n60w7v18kc_subdivBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}
}

__modules__.modify.Delete( __params__.model, [blocks_], 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_k4g078ggrun_getFrontEdges_(__params__, cluster_) {

let pline_ = await exec_neighbourhood_node_k4g078ggrun__getPerimPlines_(__params__, cluster_, "loc");
if (__params__.terminated) { return __params__.model;}

if (len(pline_) == 0){

pline_ = await exec_neighbourhood_node_k4g078ggrun__getPerimPlines_(__params__, cluster_, "sec");
if (__params__.terminated) { return __params__.model;}
}

if (len(pline_) == 0){

return [[], []];
}

let paths_loc_ = [];

let paths_sec_ = [];

let pline_edges_ = __modules__.query.Get(__params__.model, '_e', pline_[pythonList(0, pline_.length)]);

let posis_loc_ = __modules__.query.Get(__params__.model, 'ps', pline_[pythonList(0, pline_.length)]);

let lengths_ = __modules__.calc.Length( __params__.model, pline_edges_ );

let edge_long_ = listSort(listZip([lengths_, pline_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, pline_edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, pline_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, pline_edges_]), 0).length)].length)];

let vec_long_ = __modules__.calc.Vector( __params__.model, edge_long_ );

vec_long_ = vecNorm(vec_long_);

let vec_long_perp_ = [-vec_long_[pythonList(1, vec_long_.length)], vec_long_[pythonList(0, vec_long_.length)], 0];

let front_edges_ = [edge_long_];

let idx_ = listFind(pline_edges_, edge_long_);

let prev_vec_ = vec_long_;

for (let  i_ of range(idx_ + 1, len(pline_edges_), 1)){

let edge_ = pline_edges_[pythonList(i_, pline_edges_.length)];

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

vec_ = vecNorm(vec_);

let vec_perp_ = [-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0];

if (vecDot(vec_long_, vec_) > 0.8){

__modules__.list.Add( front_edges_, edge_, 'to_end' );

prev_vec_ = vec_;
}

else {

break;
}
}

prev_vec_ = vec_long_;

for (let  i_ of range(idx_ - 1, -1, -1)){

let edge_ = pline_edges_[pythonList(i_, pline_edges_.length)];

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

vec_ = vecNorm(vec_);

let vec_perp_ = [-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0];

if (vecDot(vec_long_, vec_) > 0.8){

__modules__.list.Add( front_edges_, edge_, 'to_start' );

prev_vec_ = vec_;
}

else {

break;
}
}

return front_edges_;
}


async function exec_neighbourhood_node_k4g078ggrun_trimClusterDepth_(__params__, cluster_, front_edges_) {

let pline_ = __modules__.make.Polyline( __params__.model, __modules__.query.Get(__params__.model, 'ps', front_edges_), 'open' );

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, pline_, part_og_d_ * 3, 10, 'square_end' );

let remainder_ = __modules__.poly2d.Boolean( __params__.model, cluster_, off_, 'difference' );

let remainder_areas_ = __modules__.calc.Area( __params__.model, remainder_ );

if (len(remainder_) == 0 || sum(remainder_areas_) < (part_og_w_ * part_og_d_ * 4)){

__modules__.modify.Delete( __params__.model, [pline_, off_, remainder_], 'delete_selected' );

return [];
}

let overlap_ = __modules__.poly2d.Boolean( __params__.model, cluster_, off_, 'intersect' );

let new_clusters_ = listJoin(overlap_, remainder_);

await exec_neighbourhood_node_k4g078ggrun__copyAttribs_(__params__, cluster_, new_clusters_);
if (__params__.terminated) { return __params__.model;}

let block_id_ = __modules__.attrib.Get(__params__.model, cluster_, 'block_id');

__modules__.attrib.Set(__params__.model, overlap_, 'block_id',  block_id_ + "o" );

__modules__.attrib.Set(__params__.model, remainder_, 'block_id',  block_id_ + "r" );

await exec_neighbourhood_node_k4g078ggrun__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', cluster_), __modules__.query.Get(__params__.model, '_e', new_clusters_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [pline_, off_, cluster_], 'delete_selected' );

return remainder_;
}


async function exec_neighbourhood_node_k4g078ggrun__getPerimPlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_k4g078ggrun__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_k4g078ggrun__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_k4g078ggrun__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

__modules__.attrib.Set(__params__.model, pgons_to_, 'block_id',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'block_type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'site',  __modules__.attrib.Get(__params__.model, pgon_from_, 'site') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'class',  __modules__.attrib.Get(__params__.model, pgon_from_, 'class') );

__modules__.attrib.Set(__params__.model, pgons_to_, 'type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'type') );
}


async function exec_neighbourhood_node_k4g078ggrun__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_k4g078ggrun(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let clusters_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

clusters_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

let new_clusters1_ = [];

for (let  cluster_ of clusters_){

let front_edges_ = await exec_neighbourhood_node_k4g078ggrun_getFrontEdges_(__params__, cluster_);
if (__params__.terminated) { return __params__.model;}

let remainder_ = await exec_neighbourhood_node_k4g078ggrun_trimClusterDepth_(__params__, cluster_, front_edges_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( new_clusters1_, remainder_, 'extend_end' );
}

let new_clusters2_ = [];

for (let  cluster_ of new_clusters1_){

let front_edges_ = await exec_neighbourhood_node_k4g078ggrun_getFrontEdges_(__params__, cluster_);
if (__params__.terminated) { return __params__.model;}

let remainder_ = await exec_neighbourhood_node_k4g078ggrun_trimClusterDepth_(__params__, cluster_, front_edges_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( new_clusters2_, remainder_, 'extend_end' );
}

for (let  cluster_ of new_clusters2_){

let front_edges_ = await exec_neighbourhood_node_k4g078ggrun_getFrontEdges_(__params__, cluster_);
if (__params__.terminated) { return __params__.model;}

let remainder_ = await exec_neighbourhood_node_k4g078ggrun_trimClusterDepth_(__params__, cluster_, front_edges_);
if (__params__.terminated) { return __params__.model;}
}

let clusters3_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

for (let  cluster_ of clusters3_){

let edges_ = __modules__.query.Get(__params__.model, '_e', cluster_);

if (len( __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "loc")) > 0){

continue;
}

if (len( __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "sec")) > 0){

continue;
}

__modules__.attrib.Set(__params__.model, cluster_, 'type',  "too_deep" );

__modules__.attrib.Set(__params__.model, cluster_, 'class',  "leftover" );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_up1knuxeaft_processCluster_(__params__, cluster_) {

let new_parts_list_ = [];

let area_ = __modules__.calc.Area( __params__.model, cluster_ );

let front_edges_ = await exec_neighbourhood_node_up1knuxeaft__getFrontEdges_(__params__, cluster_);
if (__params__.terminated) { return __params__.model;}

if (len(front_edges_) == 0){

return [];
}

if (area_ > (part_og_d_ * part_og_w_ * 2)){

let new_parts_lists_ = await exec_neighbourhood_node_up1knuxeaft__subdivFrontEdges_(__params__, cluster_, front_edges_);
if (__params__.terminated) { return __params__.model;}

new_parts_list_ = listFlat(new_parts_lists_);

__modules__.modify.Delete( __params__.model, cluster_, 'delete_selected' );
}

else {

let cluster_edges_ = __modules__.query.Get(__params__.model, '_e', cluster_);

let front_edge_ = await exec_neighbourhood_node_up1knuxeaft__getLongestEdge_(__params__, front_edges_);
if (__params__.terminated) { return __params__.model;}

let cen_ = __modules__.calc.Centroid( __params__.model, front_edge_, 'ps_average' );

let edge_ = await exec_neighbourhood_node_up1knuxeaft__touchingEdge_(__params__, cluster_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

let front_idx_ = listFind(cluster_edges_, edge_);

if (front_idx_ != null){

__modules__.modify.Shift( __params__.model, cluster_, front_idx_ );
}

__modules__.attrib.Set(__params__.model, cluster_, 'type',  "off_grid1" );

__modules__.attrib.Set(__params__.model, cluster_, 'entr',  cen_ );

new_parts_list_ = [cluster_];
}

__modules__.attrib.Set(__params__.model, new_parts_list_, 'class',  "part" );

return new_parts_list_;
}


async function exec_neighbourhood_node_up1knuxeaft__getLongestEdge_(__params__, edges_) {

if (len(edges_) == 1){

return edges_[pythonList(0, edges_.length)];
}

let lengths_ = __modules__.calc.Length( __params__.model, edges_ );

let long_edge_ = listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)].length)];

return long_edge_;
}


async function exec_neighbourhood_node_up1knuxeaft__getFrontEdges_(__params__, cluster_) {

let pline_ = await exec_neighbourhood_node_up1knuxeaft__getPerimPlines_(__params__, cluster_, "loc");
if (__params__.terminated) { return __params__.model;}

if (len(pline_) == 0){

pline_ = await exec_neighbourhood_node_up1knuxeaft__getPerimPlines_(__params__, cluster_, "sec");
if (__params__.terminated) { return __params__.model;}
}

if (len(pline_) == 0){

pline_ = await exec_neighbourhood_node_up1knuxeaft__getPerimPlines_(__params__, cluster_, "art");
if (__params__.terminated) { return __params__.model;}
}

if (len(pline_) == 0){

return [];
}

let paths_loc_ = [];

let paths_sec_ = [];

let pline_edges_ = __modules__.query.Get(__params__.model, '_e', pline_[pythonList(0, pline_.length)]);

let posis_loc_ = __modules__.query.Get(__params__.model, 'ps', pline_[pythonList(0, pline_.length)]);

let lengths_ = __modules__.calc.Length( __params__.model, pline_edges_ );

let edge_long_ = listSort(listZip([lengths_, pline_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, pline_edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, pline_edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, pline_edges_]), 0).length)].length)];

let vec_long_ = __modules__.calc.Vector( __params__.model, edge_long_ );

vec_long_ = vecNorm(vec_long_);

let vec_long_perp_ = [-vec_long_[pythonList(1, vec_long_.length)], vec_long_[pythonList(0, vec_long_.length)], 0];

let front_edges_ = [edge_long_];

let idx_ = listFind(pline_edges_, edge_long_);

let prev_vec_ = vec_long_;

for (let  i_ of range(idx_ + 1, len(pline_edges_), 1)){

let edge_ = pline_edges_[pythonList(i_, pline_edges_.length)];

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

vec_ = vecNorm(vec_);

let vec_perp_ = [-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0];

if (vecDot(vec_long_, vec_) > 0.8){

__modules__.list.Add( front_edges_, edge_, 'to_end' );

prev_vec_ = vec_;
}

else {

break;
}
}

prev_vec_ = vec_long_;

for (let  i_ of range(idx_ - 1, -1, -1)){

let edge_ = pline_edges_[pythonList(i_, pline_edges_.length)];

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

vec_ = vecNorm(vec_);

let vec_perp_ = [-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0];

if (vecDot(vec_long_, vec_) > 0.8){

__modules__.list.Add( front_edges_, edge_, 'to_start' );

prev_vec_ = vec_;
}

else {

break;
}
}

return front_edges_;
}


async function exec_neighbourhood_node_up1knuxeaft__subdivFrontEdges_(__params__, cluster_, front_edges_) {

let cluster_edges_ = __modules__.query.Get(__params__.model, '_e', cluster_);

let lengths_ = __modules__.calc.Length( __params__.model, front_edges_ );

let width_tot_ = sum(lengths_);

let num_og_ = round(width_tot_ / part_og_w_);

let width_og_ = width_tot_ / num_og_;

let half_width_og_ = width_og_ / 2;

let cut_rays_ = [];

let entrs_ = [];

let start_offset_ = 0;

for (let  edge_ of front_edges_){

let xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', edge_), 'xyz');

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

let vec_perp_ = vecSetLen([-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0], 500);

let edge_length_ = vecLen(vec_);

let div_length_ = edge_length_ - start_offset_;

let num_div_ = floor((div_length_ + 0.001) / half_width_og_) + 1;

let ori_ = vecAdd(xyzs_[pythonList(0, xyzs_.length)], vecSetLen(vec_, start_offset_));

for (let  i_ of range(num_div_)){

let cut_ray_ = rayMake(ori_, vec_perp_);

if (edge_ == front_edges_[pythonList(0, front_edges_.length)] && i_ == 0){

cut_ray_[pythonList(0, cut_ray_.length)] = vecAdd(cut_ray_[pythonList(0, cut_ray_.length)], vecSetLen(vec_, -100));
}

else {
if(edge_ == front_edges_[pythonList(-1, front_edges_.length)] && i_ == num_div_ - 1){

cut_ray_[pythonList(0, cut_ray_.length)] = vecAdd(cut_ray_[pythonList(0, cut_ray_.length)], vecSetLen(vec_, 100));
}
}

__modules__.list.Add( cut_rays_, cut_ray_, 'to_end' );

ori_ = vecAdd(ori_, vecSetLen(vec_, half_width_og_));
}

let div_sum_ = (num_div_ - 1) * half_width_og_;

start_offset_ = half_width_og_ - (div_length_ - div_sum_);
}

let new_parts_list_ = [];

let white_parts_ = [];

for (let  i_ of range(0, len(cut_rays_) - 2, 2)){

let ray0_ = rayLMove(cut_rays_[pythonList(i_, cut_rays_.length)], -10);

let ray1_ = rayLMove(cut_rays_[pythonList(i_ + 2, cut_rays_.length)], -10);

let entr_ = cut_rays_[pythonList(i_ + 1, cut_rays_.length)][pythonList(0, cut_rays_[pythonList(i_ + 1, cut_rays_.length)].length)];

let pgon1_ = await exec_neighbourhood_node_up1knuxeaft__makePgonFromRays_(__params__, ray0_, ray1_);
if (__params__.terminated) { return __params__.model;}

let og_ = __modules__.poly2d.Boolean( __params__.model, pgon1_, cluster_, 'intersect' );

let area_og_ = __modules__.calc.Area( __params__.model, og_ );

let two_parts_ = null;

if (area_og_ > (part_og_d_ * part_og_w_ * 1.5)){

let vec_ = vecSetLen(vecFromTo(ray0_[pythonList(0, ray0_.length)], ray1_[pythonList(0, ray1_.length)]), 1);

ray0_[pythonList(0, ray0_.length)] = vecSub(ray0_[pythonList(0, ray0_.length)], vec_);

ray1_[pythonList(0, ray1_.length)] = vecAdd(ray1_[pythonList(0, ray1_.length)], vec_);

ray0_[pythonList(1, ray0_.length)] = vecSetLen(ray0_[pythonList(1, ray0_.length)], part_og_d_ + 10);

ray1_[pythonList(1, ray1_.length)] = vecSetLen(ray1_[pythonList(1, ray1_.length)], part_og_d_ + 10);

let pgon2_ = await exec_neighbourhood_node_up1knuxeaft__makePgonFromRays_(__params__, ray0_, ray1_);
if (__params__.terminated) { return __params__.model;}

let og1_ = __modules__.poly2d.Boolean( __params__.model, og_, pgon2_, 'intersect' );

let og2_ = __modules__.poly2d.Boolean( __params__.model, og_, pgon2_, 'difference' );

__modules__.modify.Delete( __params__.model, [pgon1_, pgon2_, og_], 'delete_selected' );

__modules__.attrib.Set(__params__.model, og1_, 'entr',  entr_ );

if (len(og1_) > 0 && len(og2_) > 0){

let cluster_id_ = __modules__.attrib.Get(__params__.model, cluster_, 'block_id')+ '_' + i_;

__modules__.attrib.Set(__params__.model, og1_, 'cluster_id',  cluster_id_ );

__modules__.attrib.Set(__params__.model, og2_, 'cluster_id',  cluster_id_ );
}

two_parts_ = [og1_, og2_];
}

else {

__modules__.attrib.Set(__params__.model, og_, 'entr',  entr_ );

two_parts_ = [og_, []];

__modules__.modify.Delete( __params__.model, pgon1_, 'delete_selected' );
}

let whites_ = await exec_neighbourhood_node_up1knuxeaft__filterAndSortParts_(__params__, two_parts_, entr_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( white_parts_, whites_, 'extend_end' );

let part0_ = two_parts_[pythonList(0, two_parts_.length)][pythonList(0, two_parts_[pythonList(0, two_parts_.length)].length)];

let part0_edges_ = __modules__.query.Get(__params__.model, '_e', part0_);

let edge_ = await exec_neighbourhood_node_up1knuxeaft__touchingEdge_(__params__, part0_edges_, __modules__.attrib.Get(__params__.model, part0_, 'entr'));
if (__params__.terminated) { return __params__.model;}

let front_idx_ = listFind(part0_edges_, edge_);

if (front_idx_ != null){

__modules__.modify.Shift( __params__.model, part0_, front_idx_ );
}

__modules__.list.Add( new_parts_list_, two_parts_, 'to_end' );
}

await exec_neighbourhood_node_up1knuxeaft__attribs_(__params__, cluster_, new_parts_list_, white_parts_);
if (__params__.terminated) { return __params__.model;}

return new_parts_list_;
}


async function exec_neighbourhood_node_up1knuxeaft__attribs_(__params__, cluster_, new_parts_list_, white_parts_) {

for (let  two_parts_ of new_parts_list_){

await exec_neighbourhood_node_up1knuxeaft__copyAttribs_(__params__, cluster_, listFlat(two_parts_));
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, two_parts_[pythonList(0, two_parts_.length)], 'type',  "off_grid1" );

__modules__.attrib.Set(__params__.model, two_parts_[pythonList(1, two_parts_.length)], 'type',  "off_grid2" );
}

await exec_neighbourhood_node_up1knuxeaft__copyAttribs_(__params__, cluster_, white_parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, white_parts_, 'type',  "white" );

let all_parts_ = listFlat([new_parts_list_, white_parts_]);

__modules__.attrib.Set(__params__.model, all_parts_, 'class',  "part" );

await exec_neighbourhood_node_up1knuxeaft__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', cluster_), __modules__.query.Get(__params__.model, '_e', all_parts_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_up1knuxeaft__transferEdgeAttribsBtwTouchingParts_(__params__, all_parts_);
if (__params__.terminated) { return __params__.model;}
}


async function exec_neighbourhood_node_up1knuxeaft__makePgonFromRays_(__params__, ray0_, ray1_) {

let posis_ = __modules__.make.Position( __params__.model, [ray0_[pythonList(0, ray0_.length)], ray1_[pythonList(0, ray1_.length)], vecAdd(ray1_[pythonList(0, ray1_.length)], ray1_[pythonList(1, ray1_.length)]), vecAdd(ray0_[pythonList(0, ray0_.length)], ray0_[pythonList(1, ray0_.length)])] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_neighbourhood_node_up1knuxeaft__filterAndSortParts_(__params__, two_parts_, entr_) {

let whites_ = [];

for (let  i_ of [0, 1]){

let parts_ = two_parts_[pythonList(i_, two_parts_.length)];

if (len(parts_) < 2){

continue;
}

let part_dists_ = [];

for (let  part_ of parts_){

let cen_ = __modules__.calc.Centroid( __params__.model, part_, 'ps_average' );

let dist_ = distance(entr_, cen_);

__modules__.list.Add( part_dists_, [part_, dist_], 'to_end' );
}

let sorted_ = listSort(part_dists_, 1);

for (let  part_dist_ of sorted_.slice(1)){

__modules__.list.Add( whites_, part_dist_[pythonList(0, part_dist_.length)], 'to_end' );
}

two_parts_[pythonList(i_, two_parts_.length)] = [sorted_[pythonList(0, sorted_.length)][pythonList(0, sorted_[pythonList(0, sorted_.length)].length)]];
}

return whites_;
}


async function exec_neighbourhood_node_up1knuxeaft__getPerimPlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_up1knuxeaft__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_up1knuxeaft__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_up1knuxeaft__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_up1knuxeaft__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_up1knuxeaft__project_(__params__, ray_, rays_, max_dist_) {

let min_dist_ = max_dist_;

let min_i_ = null;

let min_isect_ = null;

for (let  i_ of range(len(rays_))){

let isect_ = project(ray_[pythonList(0, ray_.length)], rays_[pythonList(i_, rays_.length)], 0);

if (isect_ != null){

if (vecDot(vecNorm(vecFromTo(ray_[pythonList(0, ray_.length)], isect_)), ray_[pythonList(1, ray_.length)]) > 0.7){

let dist_ = distance(ray_[pythonList(0, ray_.length)], isect_);

if (dist_ < min_dist_){

min_dist_ = dist_;

min_i_ = i_;

min_isect_ = isect_;
}
}
}
}

if (min_i_ == null){

return null;
}

return [min_i_, min_isect_];
}


async function exec_neighbourhood_node_up1knuxeaft__isect_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let isect_ = intersect(ray_, rays_[pythonList(i_, rays_.length)], 0);

if (isect_ != null){

return [i_, isect_];
}
}

return null;
}


async function exec_neighbourhood_node_up1knuxeaft__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_up1knuxeaft__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_up1knuxeaft__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}

async function exec_neighbourhood_node_up1knuxeaft(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let clusters_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

for (let  cluster_ of clusters_){

let new_parts_list_ = await exec_neighbourhood_node_up1knuxeaft_processCluster_(__params__, cluster_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_9f3jvzoiyii_mergeParts_(__params__, parts_, expected_areas_) {

let new_parts_ = [];

for (let  part_ of parts_){

let exists_ = __modules__.query.Type( __params__.model, part_, 'exists' );

if (!exists_){

continue;
}

let area_ = __modules__.calc.Area( __params__.model, part_ );

if (area_ < 1){

continue;
}

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let expected_area_ = expected_areas_[pythonList(type_, expected_areas_.length)];

area_ = __modules__.calc.Area( __params__.model, part_ );

if (expected_area_ != undefined && area_ < (expected_area_ * 0.6)){

let new_part_ = await exec_neighbourhood_node_9f3jvzoiyii__mergeWithNeighbour_(__params__, part_, parts_);
if (__params__.terminated) { return __params__.model;}

if (new_part_ != null){

__modules__.visualize.Color( __params__.model, new_part_, [1, 1, 0] );

__modules__.list.Add( new_parts_, new_part_, 'to_end' );
}
}
}

return new_parts_;
}


async function exec_neighbourhood_node_9f3jvzoiyii_getLongestEdge_(__params__, edges_) {

if (len(edges_) == 1){

return edges_[pythonList(0, edges_.length)];
}

let lengths_ = __modules__.calc.Length( __params__.model, edges_ );

let long_edge_ = listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)][pythonList(1, listSort(listZip([lengths_, edges_]), 0)[pythonList(-1, listSort(listZip([lengths_, edges_]), 0).length)].length)];

return long_edge_;
}


async function exec_neighbourhood_node_9f3jvzoiyii__mergeWithNeighbour_(__params__, part_, parts_) {

let exists_ = __modules__.query.Type( __params__.model, part_, 'exists' );

if (!exists_){

return null;
}

let pairs_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', part_)){

let nedge_ = await exec_neighbourhood_node_9f3jvzoiyii__getNeighbourEdge_(__params__, edge_, parts_);
if (__params__.terminated) { return __params__.model;}

if (nedge_ != null){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

__modules__.list.Add( pairs_, [edge_, nedge_, length_], 'to_end' );
}
}

if (len(pairs_) > 0){

let sorted_ = listSort(pairs_, 2);

let longest_edge_ = sorted_[pythonList(-1, sorted_.length)];

let edge_posis_ = __modules__.query.Get(__params__.model, 'ps', longest_edge_[pythonList(0, longest_edge_.length)]);

let npart_ = __modules__.query.Get(__params__.model, 'pg', longest_edge_[pythonList(1, longest_edge_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'pg', longest_edge_[pythonList(1, longest_edge_.length)]).length)];

let posi_a_ = edge_posis_[pythonList(0, edge_posis_.length)];

let posi_b_ = edge_posis_[pythonList(1, edge_posis_.length)];

let posis0_ = __modules__.query.Get(__params__.model, 'ps', part_);

let len_posis0_ = len(posis0_);

posis0_ = listJoin(posis0_, posis0_);

let posis1_ = __modules__.query.Get(__params__.model, 'ps', npart_);

let len_posis1_ = len(posis1_);

posis1_ = listJoin(posis1_, posis1_);

let idx0_start_ = listFind(posis0_, posi_b_);

let idx0_end_ = listFind(posis0_, posi_a_);

if (idx0_end_ < idx0_start_){

idx0_end_ = idx0_end_ + len_posis0_;
}

let idx1_start_ = listFind(posis1_, posi_a_);

let idx1_end_ = listFind(posis1_, posi_b_);

if (idx1_end_ < idx1_start_){

idx1_end_ = idx1_end_ + len_posis1_;
}

let posis0_c_ = posis0_.slice(idx0_start_, idx0_end_);

let posis1_c_ = posis1_.slice(idx1_start_, idx1_end_);

let chk0_ = [idx0_start_, idx0_end_];

let chk1_ = [idx1_start_, idx1_end_];

let posis_ = listJoin(posis0_.slice(idx0_start_, idx0_end_), posis1_.slice(idx1_start_, idx1_end_));

await exec_neighbourhood_node_9f3jvzoiyii__removeCracks_(__params__, posis_);
if (__params__.terminated) { return __params__.model;}

let new_part_ = __modules__.make.Polygon( __params__.model, posis_ );

await exec_neighbourhood_node_9f3jvzoiyii__copyAttribs_(__params__, npart_, new_part_);
if (__params__.terminated) { return __params__.model;}

let old_parts_ = listFlat([part_, npart_]);

await exec_neighbourhood_node_9f3jvzoiyii__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', old_parts_), __modules__.query.Get(__params__.model, '_e', new_part_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, old_parts_, 'delete_selected' );

return new_part_;
}
}


async function exec_neighbourhood_node_9f3jvzoiyii__removeCracks_(__params__, posis_) {

let cull_ = null;

let len_posis_ = len(posis_);

for (let  i_ of range(len(posis_))){

if (posis_[pythonList(i_, posis_.length)] == posis_[pythonList((i_ + 2) % len_posis_, posis_.length)]){

cull_ = [(i_ + 1) % len_posis_, (i_ + 2) % len_posis_];

break;
}
}

if (cull_ != null){

__modules__.list.Remove( posis_, cull_[pythonList(1, cull_.length)], 'index' );

__modules__.list.Remove( posis_, cull_[pythonList(0, cull_.length)], 'index' );

await exec_neighbourhood_node_9f3jvzoiyii__removeCracks_(__params__, posis_);
if (__params__.terminated) { return __params__.model;}
}
}


async function exec_neighbourhood_node_9f3jvzoiyii__getNeighbourEdge_(__params__, edge_, parts_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', posis_);

for (let  nedge_ of edges_){

if (nedge_ == edge_){

continue;
}

if (!listHas(parts_,  __modules__.query.Get(__params__.model, 'pg', nedge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', nedge_).length)])){

continue;
}

let nposis_ = __modules__.query.Get(__params__.model, 'ps', nedge_);

if (nposis_[pythonList(0, nposis_.length)] == posis_[pythonList(1, posis_.length)] && nposis_[pythonList(1, nposis_.length)] == posis_[pythonList(0, posis_.length)]){

return nedge_;
}
}

return null;
}


async function exec_neighbourhood_node_9f3jvzoiyii__copyAttribs_(__params__, pgon_from_, pgon_to_) {

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  __modules__.attrib.Get(__params__.model, pgon_from_, 'site') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'type') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'class',  __modules__.attrib.Get(__params__.model, pgon_from_, 'class') );
}


async function exec_neighbourhood_node_9f3jvzoiyii__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_9f3jvzoiyii__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_9f3jvzoiyii__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_9f3jvzoiyii__cleanPgonsAng_(__params__, pgons_) {

for (let  pgon_ of pgons_){

__modules__.modify.Weld( __params__.model, pgon_, 'break_weld' );

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_9f3jvzoiyii__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_9f3jvzoiyii__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_node_9f3jvzoiyii(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'delete_selected' );

let expected_areas_ = [];

expected_areas_["off_grid1"] = part_og_d_ * part_og_w_;

__modules__.modify.Fuse( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 0.01 );

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

let new_parts1_ = await exec_neighbourhood_node_9f3jvzoiyii_mergeParts_(__params__, parts_, expected_areas_);
if (__params__.terminated) { return __params__.model;}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

let new_parts2_ = await exec_neighbourhood_node_9f3jvzoiyii_mergeParts_(__params__, parts_, expected_areas_);
if (__params__.terminated) { return __params__.model;}

let new_parts_ = listJoin(new_parts1_, new_parts2_);

new_parts_ = __modules__.query.Get(__params__.model, 'pg', new_parts_);

new_parts_ = await exec_neighbourhood_node_9f3jvzoiyii__cleanPgonsAng_(__params__, new_parts_);
if (__params__.terminated) { return __params__.model;}

for (let  new_part_ of new_parts_){

let edges_ = __modules__.query.Get(__params__.model, '_e', new_part_);

let front_edges_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "loc");

if (len(front_edges_) == 0){

front_edges_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "sec");
}

if (len(front_edges_) == 0){

front_edges_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "art");
}

if (len(front_edges_) == 0){

continue;
}

let front_edge_ = await exec_neighbourhood_node_9f3jvzoiyii_getLongestEdge_(__params__, front_edges_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Shift( __params__.model, new_part_, listFind(edges_, front_edge_) );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_3iw5zgr7ft5(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block_corner");

__modules__.modify.Delete( __params__.model, blocks_, 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_q3orqudm4dg_processBlock_(__params__, block_) {

let roads_art_ = await exec_neighbourhood_node_q3orqudm4dg__getSitePlines_(__params__, block_, "road_art");
if (__params__.terminated) { return __params__.model;}

let roads_sec_ = await exec_neighbourhood_node_q3orqudm4dg__getSitePlines_(__params__, block_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let result_ = await exec_neighbourhood_node_q3orqudm4dg__createOnGridStrips_(__params__, block_, roads_art_, roads_sec_, []);
if (__params__.terminated) { return __params__.model;}

return result_;
}


async function exec_neighbourhood_node_q3orqudm4dg__createOnGridStrips_(__params__, block_, roads_art_, roads_sec_, roads_loc_) {

let off_art_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_art_, part_art_d_, 100, 'square_end' );

let off_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_sec_, part_sec_d_, 100, 'square_end' );

let off_loc_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_loc_, part_loc_d_, 100, 'square_end' );

let off_grids_ = __modules__.poly2d.Boolean( __params__.model, block_, [off_art_, off_sec_, off_loc_], 'difference' );

let on_arts1_ = __modules__.poly2d.Boolean( __params__.model, off_art_, block_, 'intersect' );

let on_secs1_ = __modules__.poly2d.Boolean( __params__.model, off_sec_, block_, 'intersect' );

let on_locs1_ = __modules__.poly2d.Boolean( __params__.model, off_loc_, block_, 'intersect' );

let on_arts2_ = __modules__.poly2d.Boolean( __params__.model, on_arts1_, [off_sec_, off_loc_], 'difference' );

let on_secs2_ = __modules__.poly2d.Boolean( __params__.model, on_secs1_, [off_art_, off_loc_], 'difference' );

let on_locs2_ = __modules__.poly2d.Boolean( __params__.model, on_locs1_, [off_art_, off_sec_], 'difference' );

let on_arts3_ = __modules__.poly2d.Union( __params__.model, on_arts2_ );

let on_secs3_ = __modules__.poly2d.Union( __params__.model, on_secs2_ );

let on_locs3_ = __modules__.poly2d.Union( __params__.model, on_locs2_ );

let art_sec_ = __modules__.poly2d.Boolean( __params__.model, off_art_, off_sec_, 'intersect' );

let art_loc_ = __modules__.poly2d.Boolean( __params__.model, off_art_, off_loc_, 'intersect' );

let sec_loc_ = __modules__.poly2d.Boolean( __params__.model, off_sec_, off_loc_, 'intersect' );

let art_sec1_ = __modules__.poly2d.Boolean( __params__.model, art_sec_, block_, 'intersect' );

let art_loc1_ = __modules__.poly2d.Boolean( __params__.model, art_loc_, block_, 'intersect' );

let sec_loc1_ = __modules__.poly2d.Boolean( __params__.model, sec_loc_, block_, 'intersect' );

let new_parts_ = listFlat([art_sec1_, art_loc1_, sec_loc1_, on_arts3_, on_secs3_, on_locs3_, off_grids_]);

__modules__.attrib.Set(__params__.model, art_sec1_, 'type',  'art_sec' );

__modules__.attrib.Set(__params__.model, art_loc1_, 'type',  'art_loc' );

__modules__.attrib.Set(__params__.model, sec_loc1_, 'type',  'sec_loc' );

__modules__.attrib.Set(__params__.model, on_arts3_, 'type',  'art' );

__modules__.attrib.Set(__params__.model, on_secs3_, 'type',  'sec' );

__modules__.attrib.Set(__params__.model, on_locs3_, 'type',  'loc' );

__modules__.attrib.Set(__params__.model, off_grids_, 'type',  'off_grid' );

__modules__.attrib.Set(__params__.model, new_parts_, 'class',  "part" );

await exec_neighbourhood_node_q3orqudm4dg__transferEdgeAttribsBtwTouchingParts_(__params__, new_parts_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_q3orqudm4dg__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', block_), __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', new_parts_), ['road', null], '==', null));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_q3orqudm4dg__copyAttribs_(__params__, block_, new_parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [art_sec_, art_loc_, sec_loc_], 'delete_selected' );

__modules__.modify.Delete( __params__.model, [off_art_, off_sec_, off_loc_, on_arts1_, on_arts2_, on_secs1_, on_secs2_, on_locs1_, on_locs2_, block_], 'delete_selected' );

__modules__.modify.Delete( __params__.model, [roads_art_, roads_sec_, roads_loc_], 'delete_selected' );

return new_parts_;
}


async function exec_neighbourhood_node_q3orqudm4dg__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_q3orqudm4dg__cleanPgons_(__params__, pgons_) {

for (let  pgon_ of pgons_){

await exec_neighbourhood_node_q3orqudm4dg__cleanPgonEdge_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_q3orqudm4dg__cleanPgonAng_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_q3orqudm4dg__cleanPgonEdge_(__params__, pgon_) {

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


async function exec_neighbourhood_node_q3orqudm4dg__cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_q3orqudm4dg__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_q3orqudm4dg__getSitePlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (__modules__.attrib.Get(__params__.model, edge_, 'road')== road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_q3orqudm4dg__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_q3orqudm4dg__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}
}


async function exec_neighbourhood_node_q3orqudm4dg__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_q3orqudm4dg__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_q3orqudm4dg__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_q3orqudm4dg__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 0.01){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_q3orqudm4dg(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block_corner");

__modules__.modify.Delete( __params__.model, blocks_, 'keep_selected' );

for (let  block_ of blocks_){

let result_ = await exec_neighbourhood_node_q3orqudm4dg_processBlock_(__params__, block_);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_7202sok1g5p_createOnGridCorners_(__params__, block_) {

let roads_loc_ = await exec_neighbourhood_node_7202sok1g5p__getSitePlines_(__params__, block_, "road_loc");
if (__params__.terminated) { return __params__.model;}

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, roads_loc_, part_loc_d_, 100, 'square_end' );

let corner_ = __modules__.poly2d.Boolean( __params__.model, off_, block_, 'intersect' );

let back_ = __modules__.poly2d.Boolean( __params__.model, block_, off_, 'difference' );

__modules__.attrib.Set(__params__.model, corner_, 'type',  'loc_loc' );

__modules__.attrib.Set(__params__.model, corner_, 'special',  'concave_corner' );

__modules__.attrib.Set(__params__.model, back_, 'class',  'leftover' );

__modules__.attrib.Set(__params__.model, back_, 'type',  'concave_corner' );

let new_parts_ = listFlat([corner_, back_]);

await exec_neighbourhood_node_7202sok1g5p__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', block_), __modules__.query.Get(__params__.model, '_e', new_parts_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_7202sok1g5p__transferEdgeAttribsBtwTouchingParts_(__params__, new_parts_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_7202sok1g5p__copyAttribs_(__params__, block_, new_parts_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, [block_, off_], 'delete_selected' );

return new_parts_;
}


async function exec_neighbourhood_node_7202sok1g5p__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_7202sok1g5p__cleanPgons_(__params__, pgons_) {

for (let  pgon_ of pgons_){

await exec_neighbourhood_node_7202sok1g5p__cleanPgonEdge_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_7202sok1g5p__cleanPgonAng_(__params__, pgon_);
if (__params__.terminated) { return __params__.model;}
}

return __modules__.query.Get(__params__.model, 'pg', pgons_);
}


async function exec_neighbourhood_node_7202sok1g5p__cleanPgonEdge_(__params__, pgon_) {

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


async function exec_neighbourhood_node_7202sok1g5p__cleanPgonAng_(__params__, pgon_) {

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_7202sok1g5p__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}


async function exec_neighbourhood_node_7202sok1g5p__getSitePlines_(__params__, site_, road_descr_) {

let posis_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', site_)){

if (__modules__.attrib.Get(__params__.model, edge_, 'road')== road_descr_){

let start_end_ = __modules__.query.Get(__params__.model, 'ps', edge_);

if (len(posis_) == 0 || start_end_[pythonList(0, start_end_.length)] != posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)]){

__modules__.list.Add( posis_, start_end_, 'to_end' );
}

else {

__modules__.list.Add( posis_[pythonList(-1, posis_.length)], start_end_[pythonList(1, start_end_.length)], 'to_end' );
}
}
}

if (len(posis_) == 0){

return [];
}

if (len(posis_) > 1 && posis_[pythonList(-1, posis_.length)][pythonList(-1, posis_[pythonList(-1, posis_.length)].length)] == posis_[pythonList(0, posis_.length)][pythonList(0, posis_[pythonList(0, posis_.length)].length)]){

let first_list_ = listJoin(posis_[pythonList(-1, posis_.length)], posis_[pythonList(0, posis_.length)].slice(1));

posis_[pythonList(0, posis_.length)] = first_list_;

posis_ = posis_.slice(0,-1);
}

let site_plines_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

return site_plines_;
}


async function exec_neighbourhood_node_7202sok1g5p__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_7202sok1g5p__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  __modules__.attrib.Get(__params__.model, from_edge_, 'road') );
}
}
}


async function exec_neighbourhood_node_7202sok1g5p__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_7202sok1g5p__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_7202sok1g5p__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_7202sok1g5p__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_7202sok1g5p(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid");

for (let  block_ of blocks_){

let new_parts_ = await exec_neighbourhood_node_7202sok1g5p_createOnGridCorners_(__params__, block_);
if (__params__.terminated) { return __params__.model;}

__modules__.visualize.Color( __params__.model, new_parts_, [1, 0, 1] );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_fhk0rwesgx7(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_v9lqtunuf4s(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_xxo579ai9rn_getCenBlk_(__params__, parts_, block_id_) {

let parts_cen_ = __modules__.query.Filter(__params__.model, parts_, ['block_id', null], '==', block_id_);

let parts_other_ = __modules__.query.Filter(__params__.model, parts_, ['block_id', null], '!=', block_id_);

return [parts_cen_, parts_other_];
}


async function exec_neighbourhood_node_xxo579ai9rn_processCenBlk_(__params__, parts_cen_, site_cen_, open_req_area_, amen_req_area_) {

let total_req_area_ = open_req_area_ + amen_req_area_;

let cen_areas_ = __modules__.calc.Area( __params__.model, parts_cen_ );

let cen_area_ = sum(cen_areas_);

if (cen_area_ < open_req_area_){

let curr_open_area_ = await exec_neighbourhood_node_xxo579ai9rn__cenBlkAllOpen_(__params__, parts_cen_, open_req_area_);
if (__params__.terminated) { return __params__.model;}

let main_park_hull_ = __modules__.poly2d.ConvexHull( __params__.model, parts_cen_ );

return [curr_open_area_, 0, main_park_hull_];
}

else {
if(cen_area_ < total_req_area_){

let result_ = await exec_neighbourhood_node_xxo579ai9rn__cenBlkOpenAndAmen_(__params__, parts_cen_, site_cen_, open_req_area_, amen_req_area_);
if (__params__.terminated) { return __params__.model;}

let curr_open_area_ = result_[pythonList(0, result_.length)];

let curr_amen_area_ = result_[pythonList(1, result_.length)];

return [curr_open_area_, curr_amen_area_, null];
}

else {

let parts_cen_og_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepOg_(__params__, parts_cen_);
if (__params__.terminated) { return __params__.model;}

let cen_og_areas_ = __modules__.calc.Area( __params__.model, parts_cen_og_ );

let cen_og_area_ = sum(cen_og_areas_);

if (cen_og_area_ < open_req_area_){

let resi_req_area_ = cen_area_ - total_req_area_;

let result_ = await exec_neighbourhood_node_xxo579ai9rn__cenBlkMixed_(__params__, parts_cen_, site_cen_, open_req_area_, amen_req_area_, resi_req_area_);
if (__params__.terminated) { return __params__.model;}

let curr_open_area_ = result_[pythonList(0, result_.length)];

let curr_amen_area_ = result_[pythonList(1, result_.length)];

return [curr_open_area_, curr_amen_area_, null];
}

else {

let loc_parts_ = __modules__.query.Filter(__params__.model, parts_cen_, ['type', null], '==', "loc");

let og_parts_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepOg_(__params__, parts_cen_);
if (__params__.terminated) { return __params__.model;}

let og_parts_edges_ = await exec_neighbourhood_node_xxo579ai9rn__sort_(__params__, og_parts_, site_cen_, null);
if (__params__.terminated) { return __params__.model;}

let result_ = await exec_neighbourhood_node_xxo579ai9rn_insertIntoBlks_(__params__, og_parts_edges_, loc_parts_, 0, open_req_area_, false);
if (__params__.terminated) { return __params__.model;}

let added_parts_ = result_[pythonList(0, result_.length)];

let new_loc_parts_ = result_[pythonList(1, result_.length)];

let curr_open_area_ = result_[pythonList(2, result_.length)];

await exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, added_parts_);
if (__params__.terminated) { return __params__.model;}

return [curr_open_area_, 0, null];
}
}
}

let x_ = "==============================";

return null;
}


async function exec_neighbourhood_node_xxo579ai9rn_insertIntoBlks_(__params__, og_parts_edges_, loc_parts_, curr_area_, req_area_, avoid_nei_) {

let result_ = await exec_neighbourhood_node_xxo579ai9rn__addOffGridPartsUntilReq_(__params__, og_parts_edges_, curr_area_, req_area_, avoid_nei_);
if (__params__.terminated) { return __params__.model;}

let added_parts_ = result_[pythonList(0, result_.length)];

let overlap_parts_ = result_[pythonList(1, result_.length)];

curr_area_ = result_[pythonList(2, result_.length)];

let all_new_loc_parts_ = [];

for (let  loc_part_ of loc_parts_){

let block_id_ = __modules__.attrib.Get(__params__.model, loc_part_, 'block_id');

let olaps_ = __modules__.query.Filter(__params__.model, overlap_parts_, ['block_id', null], '==', block_id_);

let olaps_o_ = __modules__.query.Filter(__params__.model, overlap_parts_, ['block_id', null], '==', block_id_ + "o");

let olaps_r_ = __modules__.query.Filter(__params__.model, overlap_parts_, ['block_id', null], '==', block_id_ + "r");

olaps_ = listFlat([olaps_, olaps_o_, olaps_r_]);

let isects_ = __modules__.poly2d.Boolean( __params__.model, olaps_, loc_part_, 'intersect' );

__modules__.list.Add( all_new_loc_parts_, isects_, 'extend_end' );

__modules__.list.Add( added_parts_, isects_, 'extend_end' );

if (len(isects_) > 0){

let new_loc_parts_ = __modules__.poly2d.Boolean( __params__.model, loc_part_, olaps_, 'difference' );

for (let  new_loc_part_ of new_loc_parts_){

let area_ = __modules__.calc.Area( __params__.model, new_loc_part_ );

if (area_ > 0.1){

__modules__.list.Add( all_new_loc_parts_, new_loc_part_, 'extend_end' );
}

else {

__modules__.modify.Delete( __params__.model, new_loc_part_, 'delete_selected' );
}
}

new_loc_parts_ = __modules__.query.Get(__params__.model, 'pg', new_loc_parts_);

await exec_neighbourhood_node_xxo579ai9rn__coptAttribs_(__params__, loc_part_, __modules__.query.Get(__params__.model, 'pg', new_loc_parts_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__transferEdgeAttribs_(__params__, __modules__.query.Get(__params__.model, '_e', loc_part_), __modules__.query.Get(__params__.model, '_e', new_loc_parts_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__coptAttribs_(__params__, loc_part_, isects_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__transferEdgeAttribs_(__params__, __modules__.query.Get(__params__.model, '_e', loc_part_), __modules__.query.Get(__params__.model, '_e', isects_));
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__transferEdgeAttribsBtwTouchingParts_(__params__, listJoin(isects_, new_loc_parts_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, loc_part_, 'delete_selected' );
}
}

__modules__.modify.Delete( __params__.model, overlap_parts_, 'delete_selected' );

return [added_parts_, all_new_loc_parts_, curr_area_];
}


async function exec_neighbourhood_node_xxo579ai9rn__addOffGridPartsUntilReq_(__params__, og_parts_edges_, curr_area_, req_area_, avoid_nei_) {

let added_parts_ = [];

let overlap_parts_ = [];

let nei_parts_ = [];

for (let  part_edge_ of og_parts_edges_){

let part_ = part_edge_[pythonList(0, part_edge_.length)];

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let edge_ = part_edge_[pythonList(1, part_edge_.length)];

let edge_type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (listHas(nei_parts_, part_)){

continue;
}

__modules__.list.Add( added_parts_, part_, 'extend_end' );

let area_ = __modules__.calc.Area( __params__.model, part_ );

curr_area_ = curr_area_ + area_;

if (type_ == "off_grid0" || type_ == "off_grid1"){

let edge_vec_ = __modules__.calc.Vector( __params__.model, edge_ );

let olap_dist_ = part_loc_d_ + 2;

if (edge_type_ == "sec"){

olap_dist_ = part_sec_d_ + 2;
}

let perp_vec_ = vecSetLen([edge_vec_[pythonList(1, edge_vec_.length)], -edge_vec_[pythonList(0, edge_vec_.length)], 0], olap_dist_);

let loc_overlap_ = __modules__.make.Extrude( __params__.model, edge_, perp_vec_, 1, 'quads' );

__modules__.modify.Weld( __params__.model, loc_overlap_, 'break_weld' );

__modules__.modify.Move( __params__.model, loc_overlap_, vecSetLen(perp_vec_, -1) );

__modules__.attrib.Set(__params__.model, loc_overlap_, 'block_id',  __modules__.attrib.Get(__params__.model, part_, 'block_id') );

__modules__.list.Add( overlap_parts_, loc_overlap_, 'to_end' );

area_ = __modules__.calc.Area( __params__.model, loc_overlap_ );

curr_area_ = curr_area_ + area_;
}

if (type_ == "off_grid1"){

let cluster_id_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_id');

if (!isUndef(cluster_id_)){

let cluster_parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['cluster_id', null], '==', cluster_id_);

__modules__.list.Remove( cluster_parts_, part_, 'first_value' );

for (let  back_ of cluster_parts_){

if (listHas(nei_parts_, back_)){

continue;
}

__modules__.list.Add( added_parts_, back_, 'extend_end' );

area_ = __modules__.calc.Area( __params__.model, part_ );

curr_area_ = curr_area_ + area_;
}
}
}

if (curr_area_ > req_area_){

break;
}

if (avoid_nei_){

for (let  added_part_ of added_parts_){

let nei_ = __modules__.query.Neighbor( __params__.model, 'pg', part_ );

nei_ = __modules__.query.Filter(__params__.model, nei_, ['type', null], '==',  __modules__.attrib.Get(__params__.model, part_, 'type'));

__modules__.list.Add( nei_parts_, nei_, 'extend_end' );
}
}
}

return [added_parts_, overlap_parts_, curr_area_];
}


async function exec_neighbourhood_node_xxo579ai9rn__getBackParts_(__params__, part_edge_, type_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', part_edge_[pythonList(0, part_edge_.length)]);

let len_edges_ = len(edges_);

let idx_ = listFind(edges_, part_edge_[pythonList(1, part_edge_.length)]);

let edges2_ = [];

for (let  i_ of range(len_edges_)){

__modules__.list.Add( edges2_, edges_[pythonList((idx_ + i_) % len_edges_, edges_.length)], 'to_end' );
}

let back_ = edges2_.slice(2, -1);

let back_edges_ = __modules__.query.Edge( __params__.model, back_, 'touching' );

back_edges_ = listFlat(back_edges_);

let back_pgons_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', back_edges_), ['type', null], '==', type_);

back_pgons_ = listFlat(back_pgons_);

return back_pgons_;
}


async function exec_neighbourhood_node_xxo579ai9rn__cenBlkAllOpen_(__params__, parts_, open_req_area_) {

let areas_ = __modules__.calc.Area( __params__.model, parts_ );

let curr_open_area_ = sum(areas_);

await exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}

let result_open_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_open_area_, open_req_area_);
if (__params__.terminated) { return __params__.model;}

return curr_open_area_;
}


async function exec_neighbourhood_node_xxo579ai9rn__cenBlkOpenAndAmen_(__params__, parts_, site_cen_, open_req_area_, amen_req_area_) {

let parts_cen_ = await exec_neighbourhood_node_xxo579ai9rn__sortPartsStrightDistToCen_(__params__, parts_, site_cen_);
if (__params__.terminated) { return __params__.model;}

parts_cen_ = listRev(parts_cen_);

let result_ = await exec_neighbourhood_node_xxo579ai9rn__divParts_(__params__, parts_cen_);
if (__params__.terminated) { return __params__.model;}

let parts_cor_ = result_[pythonList(0, result_.length)];

let parts_side_ = result_[pythonList(1, result_.length)].slice(0,-2);

let curr_amen_area_ = 0;

let curr_amen_ = [];

curr_amen_area_ = await exec_neighbourhood_node_xxo579ai9rn__addPartsUntilReqArea_(__params__, curr_amen_, parts_side_, curr_amen_area_, amen_req_area_);
if (__params__.terminated) { return __params__.model;}

let neighbours_ = __modules__.query.Neighbor( __params__.model, 'pg', curr_amen_ );

let corners_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepCorners_(__params__, neighbours_);
if (__params__.terminated) { return __params__.model;}

curr_amen_area_ = await exec_neighbourhood_node_xxo579ai9rn__addParts_(__params__, curr_amen_, corners_, curr_amen_area_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__makeAmen_(__params__, curr_amen_);
if (__params__.terminated) { return __params__.model;}

let parts_remainder_ = await exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, parts_, curr_amen_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, parts_remainder_);
if (__params__.terminated) { return __params__.model;}

let areas_ = __modules__.calc.Area( __params__.model, parts_remainder_ );

let curr_open_area_ = sum(areas_);

let result_open_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_open_area_, open_req_area_);
if (__params__.terminated) { return __params__.model;}

let result_amen_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_amen_area_, amen_req_area_);
if (__params__.terminated) { return __params__.model;}

return [curr_open_area_, curr_amen_area_];
}


async function exec_neighbourhood_node_xxo579ai9rn__cenBlkMixed_(__params__, parts_, site_cen_, open_req_area_, amen_req_area_, resi_req_area_) {

let parts_cen_ = await exec_neighbourhood_node_xxo579ai9rn__sortPartsStrightDistToCen_(__params__, parts_, site_cen_);
if (__params__.terminated) { return __params__.model;}

parts_cen_ = listRev(parts_cen_);

let result_ = await exec_neighbourhood_node_xxo579ai9rn__divParts_(__params__, parts_cen_);
if (__params__.terminated) { return __params__.model;}

let parts_cor_ = result_[pythonList(0, result_.length)];

let parts_side_ = result_[pythonList(1, result_.length)];

let parts_side0_ = parts_side_[pythonList(-1, parts_side_.length)];

let parts_side_remainder_ = parts_side_.slice(0,-1);

let parts_og_ = result_[pythonList(2, result_.length)];

let curr_amen_ = [];

let curr_amen_area_ = 0;

curr_amen_area_ = await exec_neighbourhood_node_xxo579ai9rn__addPartsUntilReqArea_(__params__, curr_amen_, parts_side_remainder_, curr_amen_area_, amen_req_area_);
if (__params__.terminated) { return __params__.model;}

parts_side_remainder_ = await exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, parts_side_remainder_, curr_amen_);
if (__params__.terminated) { return __params__.model;}

let neighbours_ = __modules__.query.Neighbor( __params__.model, 'pg', curr_amen_ );

let amen_corners_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepCorners_(__params__, neighbours_);
if (__params__.terminated) { return __params__.model;}

curr_amen_area_ = await exec_neighbourhood_node_xxo579ai9rn__addParts_(__params__, curr_amen_, amen_corners_, curr_amen_area_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__makeAmen_(__params__, curr_amen_);
if (__params__.terminated) { return __params__.model;}

let curr_resi_ = [];

let curr_resi_area_ = 0;

if (len(parts_side_remainder_)){

curr_resi_area_ = 0;

curr_resi_area_ = await exec_neighbourhood_node_xxo579ai9rn__addPartsUntilReqArea_(__params__, curr_resi_, parts_side_remainder_, curr_resi_area_, resi_req_area_);
if (__params__.terminated) { return __params__.model;}

neighbours_ = __modules__.query.Neighbor( __params__.model, 'pg', curr_resi_ );

let resi_corners_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepCorners_(__params__, neighbours_);
if (__params__.terminated) { return __params__.model;}

curr_resi_area_ = await exec_neighbourhood_node_xxo579ai9rn__addParts_(__params__, curr_resi_, resi_corners_, curr_resi_area_);
if (__params__.terminated) { return __params__.model;}
}

let parts_remainder_ = await exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, parts_, curr_resi_);
if (__params__.terminated) { return __params__.model;}

parts_remainder_ = await exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, parts_remainder_, curr_amen_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, parts_remainder_);
if (__params__.terminated) { return __params__.model;}

let areas_ = __modules__.calc.Area( __params__.model, parts_remainder_ );

let curr_open_area_ = sum(areas_);

let result_open_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_open_area_, open_req_area_);
if (__params__.terminated) { return __params__.model;}

let result_amen_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_amen_area_, amen_req_area_);
if (__params__.terminated) { return __params__.model;}

let result_resi_ = await exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_resi_area_, resi_req_area_);
if (__params__.terminated) { return __params__.model;}

return [curr_open_area_, curr_amen_area_];
}


async function exec_neighbourhood_node_xxo579ai9rn__printStr_(__params__, curr_, req_) {

let str_ = "current: " + numToStr(round(curr_)) + "m2,  req: " + round(req_) + " m2";

return str_;
}


async function exec_neighbourhood_node_xxo579ai9rn__sort_(__params__, parts_, site_cen_, main_park_hull_) {

let result_ = null;

if (main_park_hull_ != null){

result_ = await exec_neighbourhood_node_xxo579ai9rn__sortPartsDistEdgeToPark_(__params__, parts_, main_park_hull_);
if (__params__.terminated) { return __params__.model;}
}

else {

result_ = await exec_neighbourhood_node_xxo579ai9rn__sortPartsDistEdgeToCen_(__params__, parts_, site_cen_);
if (__params__.terminated) { return __params__.model;}
}

return result_;
}


async function exec_neighbourhood_node_xxo579ai9rn__sortPartsStrightDistToCen_(__params__, parts_, site_cen_) {

if (len(parts_) == 0){

return [];
}

let cens_ = __modules__.calc.Centroid( __params__.model, parts_, 'ps_average' );

let dists_ = vecLen(vecFromTo(site_cen_, cens_));

let sorted_ = listZip(listSort(listZip([parts_, dists_]), 1))[pythonList(0, listZip(listSort(listZip([parts_, dists_]), 1)).length)];

return sorted_;
}


async function exec_neighbourhood_node_xxo579ai9rn__sortPartsDistEdgeToCen_(__params__, parts_, site_cen_) {

if (len(parts_) == 0){

return [];
}

let unsorted_ = [];

for (let  part_ of parts_){

let edge_dist_ = await exec_neighbourhood_node_xxo579ai9rn__distEdgeToCen_(__params__, part_, site_cen_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( unsorted_, [part_, edge_dist_[pythonList(0, edge_dist_.length)], edge_dist_[pythonList(1, edge_dist_.length)]], 'to_end' );
}

let sorted_ = listSort(unsorted_, 2);

return sorted_;
}


async function exec_neighbourhood_node_xxo579ai9rn__sortPartsDistEdgeToPark_(__params__, parts_, main_park_hull_) {

if (len(parts_) == 0){

return [];
}

let unsorted_ = [];

for (let  part_ of parts_){

let edge_dist_ = await exec_neighbourhood_node_xxo579ai9rn__distEdgeToPark_(__params__, part_, main_park_hull_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( unsorted_, [part_, edge_dist_[pythonList(0, edge_dist_.length)], edge_dist_[pythonList(1, edge_dist_.length)]], 'to_end' );
}

let sorted_ = listSort(unsorted_, 2);

return sorted_;
}


async function exec_neighbourhood_node_xxo579ai9rn__distEdgeToPark_(__params__, part_, park_) {

let min_dist_ = Infinity;

let min_edge_ = null;

let acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "road_loc");

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "loc");
}

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "sec");
}

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Get(__params__.model, '_e', part_);
}

for (let  edge_ of acc_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, edge_, 'ps_average' );

let posi_ = __modules__.make.Position( __params__.model, cen_ );

let dist_ = __modules__.calc.Distance( __params__.model, posi_, __modules__.query.Get(__params__.model, '_w', park_), 'ps_to_w_distance' );

if (dist_ < min_dist_){

min_dist_ = dist_;

min_edge_ = edge_;
}
}

return [min_edge_, min_dist_];
}


async function exec_neighbourhood_node_xxo579ai9rn__distEdgeToCen_(__params__, part_, site_cen_) {

let min_dist_ = Infinity;

let min_edge_ = null;

let acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "road_loc");

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "loc");
}

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '==', "sec");
}

if (len(acc_edges_) == 0){

acc_edges_ = __modules__.query.Get(__params__.model, '_e', part_);
}

for (let  edge_ of acc_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, edge_, 'ps_average' );

let dist_ = distance(site_cen_, cen_);

if (dist_ < min_dist_){

min_dist_ = dist_;

min_edge_ = edge_;
}
}

return [min_edge_, min_dist_];
}


async function exec_neighbourhood_node_xxo579ai9rn__divParts_(__params__, parts_) {

let on_grid_parts_ = [];

let on_grid_corners_ = [];

let off_grid_parts_ = [];

for (let  part_ of parts_){

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

if (type_ == "off_grid0"){

__modules__.list.Add( off_grid_parts_, part_, 'to_end' );
}

else {
if(type_ == "loc" || type_ == "sec"){

__modules__.list.Add( on_grid_parts_, part_, 'to_end' );
}

else {

__modules__.list.Add( on_grid_corners_, part_, 'to_end' );
}
}
}

return [on_grid_corners_, on_grid_parts_, off_grid_parts_];
}


async function exec_neighbourhood_node_xxo579ai9rn__addPartsUntilReqArea_(__params__, curr_list_, parts_to_add_, curr_area_, req_area_) {

req_area_ = req_area_;

for (let  part_ of parts_to_add_){

if (curr_area_ < req_area_){

__modules__.list.Add( curr_list_, part_, 'to_end' );

let area_ = __modules__.calc.Area( __params__.model, part_ );

curr_area_ = curr_area_ + area_;
}

else {

break;
}
}

return curr_area_;
}


async function exec_neighbourhood_node_xxo579ai9rn__addParts_(__params__, curr_list_, parts_to_add_, curr_area_) {

for (let  part_ of parts_to_add_){

let area_ = __modules__.calc.Area( __params__.model, part_ );

__modules__.list.Add( curr_list_, part_, 'to_end' );

curr_area_ = curr_area_ + area_;
}

return curr_area_;
}


async function exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, parts_) {

for (let  part_ of parts_){

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

if (!strEnds(type_, "_os")){

__modules__.attrib.Set(__params__.model, part_, 'type',  type_ + "_os" );

__modules__.attrib.Set(__params__.model, part_, 'class',  "open_main" );
}

__modules__.visualize.Color( __params__.model, part_, [0, 0.5, 0] );
}
}


async function exec_neighbourhood_node_xxo579ai9rn__makeAmen_(__params__, parts_) {

for (let  part_ of parts_){

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

if (!strEnds(type_, "_am")){

__modules__.attrib.Set(__params__.model, part_, 'type',  type_ + "_am" );
}

__modules__.visualize.Color( __params__.model, part_, [0.5, 0, 0] );
}
}


async function exec_neighbourhood_node_xxo579ai9rn__filterKeepCorners_(__params__, parts_) {

let corners_ = [];

for (let  part_ of parts_){

if (__modules__.attrib.Get(__params__.model, part_, 'type')== "loc_loc" ||  __modules__.attrib.Get(__params__.model, part_, 'type')== "sec_loc"){

__modules__.list.Add( corners_, part_, 'to_end' );
}
}

return corners_;
}


async function exec_neighbourhood_node_xxo579ai9rn__filterKeepOg_(__params__, parts_) {

let og_ = [];

for (let  part_ of parts_){

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

if (type_ == "off_grid0" || type_ == "off_grid1"){

__modules__.list.Add( og_, part_, 'to_end' );
}
}

return og_;
}


async function exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, parts_, parts_to_rem_) {

let filtered_ = [];

for (let  part_ of parts_){

if (!listHas(parts_to_rem_, part_)){

__modules__.list.Add( filtered_, part_, 'to_end' );
}
}

return filtered_;
}


async function exec_neighbourhood_node_xxo579ai9rn__coptAttribs_(__params__, from_part_, to_part_) {

__modules__.attrib.Set(__params__.model, to_part_, 'type',  __modules__.attrib.Get(__params__.model, from_part_, 'type') );

__modules__.attrib.Set(__params__.model, to_part_, 'site',  __modules__.attrib.Get(__params__.model, from_part_, 'site') );

__modules__.attrib.Set(__params__.model, to_part_, 'block_type',  __modules__.attrib.Get(__params__.model, from_part_, 'block_type') );

__modules__.attrib.Set(__params__.model, to_part_, 'block_id',  __modules__.attrib.Get(__params__.model, from_part_, 'block_id') );

__modules__.attrib.Set(__params__.model, to_part_, 'class',  __modules__.attrib.Get(__params__.model, from_part_, 'class') );
}


async function exec_neighbourhood_node_xxo579ai9rn__transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_xxo579ai9rn__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_xxo579ai9rn__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_neighbourhood_node_xxo579ai9rn__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_xxo579ai9rn__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 0.1){

return edge_;
}
}

return null;
}

async function exec_neighbourhood_node_xxo579ai9rn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

for (let  site_name_ of __modules__.attrib.Get(__params__.model, null, 'site_names')){

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['site', null], '==', site_name_);

let site_cen_ = __modules__.attrib.Get( __params__.model, null, site_name_ + "_cen" );

let block_id_ = __modules__.attrib.Get( __params__.model, null, site_name_ + "_cen_block_id" );

__modules__.modify.Fuse( __params__.model, parts_, 0.1 );

parts_ = __modules__.query.Get(__params__.model, 'pg', parts_);

let site_area_ = __modules__.attrib.Get( __params__.model, null, site_name_ + "_area" );

let req_open_area_ = site_area_ * (open_percent_ / 100);

let req_amen_area_ = site_area_ * (amen_percent_ / 100);

let result_ = await exec_neighbourhood_node_xxo579ai9rn_getCenBlk_(__params__, parts_, block_id_);
if (__params__.terminated) { return __params__.model;}

let parts_cen_ = result_[pythonList(0, result_.length)];

let parts_other_ = result_[pythonList(1, result_.length)];

result_ = await exec_neighbourhood_node_xxo579ai9rn_processCenBlk_(__params__, parts_cen_, site_cen_, req_open_area_, req_amen_area_);
if (__params__.terminated) { return __params__.model;}

let curr_open_area_ = 0;

let curr_amen_area_ = 0;

let main_park_hull_ = null;

if (result_ != null){

curr_open_area_ = result_[pythonList(0, result_.length)];

curr_amen_area_ = result_[pythonList(1, result_.length)];

main_park_hull_ = result_[pythonList(2, result_.length)];
}

let loc_parts_ = __modules__.query.Filter(__params__.model, parts_other_, ['type', null], '==', "loc");

let sec_parts_ = __modules__.query.Filter(__params__.model, parts_other_, ['type', null], '==', "sec");

let ls_parts_ = listJoin(loc_parts_, sec_parts_);

let og_parts_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepOg_(__params__, parts_other_);
if (__params__.terminated) { return __params__.model;}

let og_parts_edges_ = await exec_neighbourhood_node_xxo579ai9rn__sort_(__params__, og_parts_, site_cen_, main_park_hull_);
if (__params__.terminated) { return __params__.model;}

result_ = await exec_neighbourhood_node_xxo579ai9rn_insertIntoBlks_(__params__, og_parts_edges_, ls_parts_, curr_amen_area_, req_amen_area_, true);
if (__params__.terminated) { return __params__.model;}

let added_parts_ = result_[pythonList(0, result_.length)];

let new_ls_parts_ = result_[pythonList(1, result_.length)];

curr_amen_area_ = result_[pythonList(2, result_.length)];

await exec_neighbourhood_node_xxo579ai9rn__makeAmen_(__params__, added_parts_);
if (__params__.terminated) { return __params__.model;}

parts_other_ = __modules__.query.Get(__params__.model, 'pg', parts_other_);

ls_parts_ = listJoin( __modules__.query.Get(__params__.model, 'pg', ls_parts_), new_ls_parts_);

og_parts_ = await exec_neighbourhood_node_xxo579ai9rn__filterKeepOg_(__params__, parts_other_);
if (__params__.terminated) { return __params__.model;}

og_parts_ = await exec_neighbourhood_node_xxo579ai9rn__filterRem_(__params__, og_parts_, added_parts_);
if (__params__.terminated) { return __params__.model;}

og_parts_edges_ = await exec_neighbourhood_node_xxo579ai9rn__sort_(__params__, og_parts_, site_cen_, main_park_hull_);
if (__params__.terminated) { return __params__.model;}

og_parts_edges_ = listRev(og_parts_edges_);

result_ = await exec_neighbourhood_node_xxo579ai9rn_insertIntoBlks_(__params__, og_parts_edges_, ls_parts_, curr_open_area_, req_open_area_, true);
if (__params__.terminated) { return __params__.model;}

added_parts_ = result_[pythonList(0, result_.length)];

let new_loc_parts_ = result_[pythonList(1, result_.length)];

curr_open_area_ = result_[pythonList(2, result_.length)];

await exec_neighbourhood_node_xxo579ai9rn__makeOpen_(__params__, added_parts_);
if (__params__.terminated) { return __params__.model;}

if (main_park_hull_ != null){

__modules__.modify.Delete( __params__.model, main_park_hull_, 'delete_selected' );
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_yukoezoo9n_createPath_(__params__, og_part_, parts_ls_) {

let block_id_ = __modules__.attrib.Get(__params__.model, og_part_, 'block_id');

if (strEnds(block_id_, "o") || strEnds(block_id_, "r")){

block_id_ = block_id_.slice(0,-1);
}

let block_type_ = __modules__.attrib.Get(__params__.model, og_part_, 'block_type');

let swap_orientation_ = __modules__.attrib.Get(__params__.model, og_part_, 'block_type')== "sec";

let block_parts_ls_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', parts_ls_), ['block_id', null], '==', block_id_);

let block_parts_ls_edges_ = __modules__.query.Get(__params__.model, '_e', block_parts_ls_);

let path_ray_ = await exec_neighbourhood_node_yukoezoo9n__getPathRay_(__params__, og_part_);
if (__params__.terminated) { return __params__.model;}

let path_cline_ = await exec_neighbourhood_node_yukoezoo9n__creatAccessPathCline_(__params__, og_part_, block_parts_ls_edges_, path_ray_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, og_part_, 'cluster_type',  __modules__.attrib.Get(__params__.model, parts_ls_[pythonList(0, parts_ls_.length)], 'type') );

if (path_cline_ != null){

__modules__.attrib.Set(__params__.model, og_part_, 'cluster_type',  __modules__.attrib.Get(__params__.model, path_cline_, 'type') );

__modules__.attrib.Set(__params__.model, og_part_, 'entr',  __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', path_cline_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', path_cline_).length)], 'xyz') );
}

return path_cline_;
}


async function exec_neighbourhood_node_yukoezoo9n_cutPaths_(__params__, path_clines_, part_, cluster_type_) {

let path_pgons_ = __modules__.poly2d.OffsetMitre( __params__.model, path_clines_, path_w_ / 2, path_w_, 'square_end' );

let parts2_ = __modules__.poly2d.Boolean( __params__.model, part_, path_pgons_, 'difference' );

let parts2_edges_ = __modules__.query.Get(__params__.model, '_e', parts2_);

await exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', part_), parts2_edges_);
if (__params__.terminated) { return __params__.model;}

let path_pgons_trim_ = __modules__.poly2d.Boolean( __params__.model, part_, path_pgons_, 'intersect' );

__modules__.modify.Delete( __params__.model, path_pgons_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, parts2_, 'class',  "part" );

__modules__.attrib.Set(__params__.model, parts2_, 'type',  cluster_type_ );

__modules__.attrib.Set(__params__.model, path_pgons_trim_, 'class',  "path" );

__modules__.attrib.Set(__params__.model, path_pgons_trim_, 'type',  "entr0" );

if (__modules__.attrib.Get(__params__.model, part_, 'block_type')== "cold"){

__modules__.attrib.Set(__params__.model, path_pgons_trim_, 'type',  "entr1" );
}

__modules__.attrib.Set(__params__.model, path_pgons_trim_, 'cluster_type',  cluster_type_ );

await exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsTouchingPart_(__params__, __modules__.query.Get(__params__.model, '_e', path_pgons_trim_), parts2_edges_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_yukoezoo9n__copyAttribs_(__params__, part_, parts2_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, part_, 'delete_selected' );

return [path_pgons_trim_, parts2_];
}


async function exec_neighbourhood_node_yukoezoo9n__convertPartToQuad_(__params__, part_) {

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let part_area_ = __modules__.calc.Area( __params__.model, part_ );

if (part_area_ < 100){

return null;
}

else {
if(len( __modules__.query.Get(__params__.model, '_v', part_)) < 4){

return null;
}
}

let quad_ = __modules__.make.Copy( __params__.model, part_, null );

let verts_ = __modules__.query.Get(__params__.model, '_v', quad_);

if (len(verts_) == 4){

await exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsClosest_(__params__, part_edges_, __modules__.query.Get(__params__.model, '_e', quad_));
if (__params__.terminated) { return __params__.model;}

return quad_;
}

let dots_ = [];

for (let  vert_ of verts_){

let dot_ = await exec_neighbourhood_node_yukoezoo9n__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( dots_, dot_, 'to_end' );
}

let sorted_verts_ = listRev(listSort(listZip([verts_, dots_]), 1));

for (let  i_ of range(len(verts_) - 4)){

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'ps', sorted_verts_[pythonList(i_, sorted_verts_.length)][pythonList(0, sorted_verts_[pythonList(i_, sorted_verts_.length)].length)]), 'delete_selected' );
}

await exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsClosest_(__params__, part_edges_, __modules__.query.Get(__params__.model, '_e', quad_));
if (__params__.terminated) { return __params__.model;}

return quad_;
}


async function exec_neighbourhood_node_yukoezoo9n__trimPgon_(__params__, base_, pgons_) {

let pgons2_ = __modules__.poly2d.Boolean( __params__.model, pgons_, base_, 'intersect' );

__modules__.modify.Delete( __params__.model, pgons_, 'delete_selected' );

return pgons2_;
}


async function exec_neighbourhood_node_yukoezoo9n__getPathRay_(__params__, part_) {

let swap_orientation_ = __modules__.attrib.Get(__params__.model, part_, 'block_type')== "sec";

let part_e_ = __modules__.query.Get(__params__.model, '_e', part_);

let cen_ = __modules__.calc.Centroid( __params__.model, part_, 'center_of_mass' );

let front_edge_ = part_e_[pythonList(0, part_e_.length)];

if (__modules__.attrib.Get(__params__.model, part_, 'type')!= "off_grid1"){

front_edge_ = await exec_neighbourhood_node_yukoezoo9n__getFrontEdge_(__params__, part_e_, cen_, swap_orientation_);
if (__params__.terminated) { return __params__.model;}
}

let entr_ = __modules__.calc.Centroid( __params__.model, front_edge_, 'ps_average' );

let idx_acc_ = listFind(part_e_, front_edge_);

__modules__.modify.Shift( __params__.model, part_, idx_acc_ );

let path_ray_ = rayMake(cen_, vecSetLen(vecFromTo(cen_, entr_), 100));

return path_ray_;
}


async function exec_neighbourhood_node_yukoezoo9n__getFrontEdge_(__params__, part_e_, cen_, swap_orientation_) {

let edges_loc_ = await exec_neighbourhood_node_yukoezoo9n__getParaPerpEdges_(__params__, __modules__.query.Filter(__params__.model, part_e_, ['road', null], '==', "loc"), swap_orientation_);
if (__params__.terminated) { return __params__.model;}

let edges_sec_ = [];

let edges_art_ = [];

let edge_acc_ = edges_loc_[pythonList(0, edges_loc_.length)];

if (len(edge_acc_) == 0){

edges_sec_ = await exec_neighbourhood_node_yukoezoo9n__getParaPerpEdges_(__params__, __modules__.query.Filter(__params__.model, part_e_, ['road', null], '==', "sec"), swap_orientation_);
if (__params__.terminated) { return __params__.model;}

edge_acc_ = edges_sec_[pythonList(0, edges_sec_.length)];
}

if (len(edge_acc_) == 0){

edge_acc_ = edges_loc_[pythonList(1, edges_loc_.length)];
}

if (len(edge_acc_) == 0){

edge_acc_ = edges_sec_[pythonList(1, edges_sec_.length)];
}

if (len(edge_acc_) == 0){

edges_art_ = await exec_neighbourhood_node_yukoezoo9n__getParaPerpEdges_(__params__, __modules__.query.Filter(__params__.model, part_e_, ['road', null], '==', "art"), swap_orientation_);
if (__params__.terminated) { return __params__.model;}

edge_acc_ = edges_art_[pythonList(1, edges_art_.length)];
}

if (len(edge_acc_) == 0){

edge_acc_ = edges_art_[pythonList(0, edges_art_.length)];
}

if (len(edge_acc_) == 0){

edge_acc_ = [part_e_[pythonList(0, part_e_.length)]];
}

let edge_ = await exec_neighbourhood_node_yukoezoo9n__closestEdge_(__params__, edge_acc_, cen_);
if (__params__.terminated) { return __params__.model;}

return edge_;
}


async function exec_neighbourhood_node_yukoezoo9n__getParaPerpEdges_(__params__, edges_, swap_orientation_) {

let part_e_para_ = [];

let part_e_perp_ = [];

let ortho_vec_y_ = __modules__.attrib.Get(__params__.model, null, ['ortho', 1]);

for (let  edge_ of edges_){

let vec_ = __modules__.calc.Vector( __params__.model, edge_ );

let dot_ = abs(vecDot(ortho_vec_y_, vecNorm(vec_)));

if (dot_ > 0.707){

__modules__.list.Add( part_e_para_, edge_, 'to_end' );
}

else {

__modules__.list.Add( part_e_perp_, edge_, 'to_end' );
}
}

if (swap_orientation_){

return [part_e_perp_, part_e_para_];
}

return [part_e_para_, part_e_perp_];
}


async function exec_neighbourhood_node_yukoezoo9n__creatAccessPathCline_(__params__, part_, ls_edges_, path_ray_) {

let road_edges_ = [];

let non_road_edges_ = [];

for (let  edge_ of ls_edges_){

let type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (type_ != undefined && strStarts(type_, "road")){

__modules__.list.Add( road_edges_, edge_, 'to_end' );
}

else {

__modules__.list.Add( non_road_edges_, edge_, 'to_end' );
}
}

let road_rays_ = __modules__.calc.Ray( __params__.model, road_edges_ );

let non_road_rays_ = __modules__.calc.Ray( __params__.model, non_road_edges_ );

let result0_ = await exec_neighbourhood_node_yukoezoo9n_isect_(__params__, path_ray_, non_road_rays_);
if (__params__.terminated) { return __params__.model;}

if (result0_ == null){

return null;
}

let isect0_ = result0_[pythonList(0, result0_.length)];

let idx0_ = result0_[pythonList(1, result0_.length)];

let vec_ = __modules__.calc.Vector( __params__.model, non_road_edges_[pythonList(idx0_, non_road_edges_.length)] );

let path_ray2_ = rayMake(isect0_, vecSetLen([-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0], 100));

let result1_ = await exec_neighbourhood_node_yukoezoo9n_isect_(__params__, path_ray2_, road_rays_);
if (__params__.terminated) { return __params__.model;}

if (result1_ == null){

return null;
}

let isect1_ = result1_[pythonList(0, result1_.length)];

let path_posis_ = __modules__.make.Position( __params__.model, [isect0_, isect1_] );

let path_cline_ = __modules__.make.Polyline( __params__.model, path_posis_, 'open' );

let loc_part_ = __modules__.query.Get(__params__.model, 'pg', non_road_edges_[pythonList(idx0_, non_road_edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'pg', non_road_edges_[pythonList(idx0_, non_road_edges_.length)]).length)];

let path_cline_type_ = __modules__.attrib.Get(__params__.model, loc_part_, 'type');

if (strEnds( __modules__.attrib.Get(__params__.model, part_, 'type'), "_am") && !strEnds(path_cline_type_, "_am")){

path_cline_type_ = path_cline_type_ + "_am";
}

__modules__.attrib.Set(__params__.model, path_cline_, 'type',  path_cline_type_ );

__modules__.attrib.Set(__params__.model, path_cline_, 'part',  loc_part_ );

__modules__.attrib.Set(__params__.model, path_cline_, 'cluster_type',  __modules__.attrib.Get(__params__.model, part_, 'type') );

return path_cline_;
}


async function exec_neighbourhood_node_yukoezoo9n__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_yukoezoo9n__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_neighbourhood_node_yukoezoo9n__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_yukoezoo9n__closestEdge_(__params__, edges_, xyz_) {

let min_dist_ = Infinity;

let close_edge_ = null;

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < min_dist_){

min_dist_ = d_;

close_edge_ = edge_;
}
}

return close_edge_;
}


async function exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_yukoezoo9n__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsClosest_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_yukoezoo9n__closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_yukoezoo9n__transferEdgeAttribsTouchingPart_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_yukoezoo9n__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let part_type_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'pg', from_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'pg', from_edge_).length)], 'type');

if (part_type_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  part_type_ );
}
}
}
}
}


async function exec_neighbourhood_node_yukoezoo9n__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_yukoezoo9n_isect_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let a_ray_ = rays_[pythonList(i_, rays_.length)];

let isect_ = intersect(ray_, a_ray_, 0);

if (isect_ != null){

return [isect_, i_];
}
}

return null;
}

async function exec_neighbourhood_node_yukoezoo9n(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let parts_og0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0");

let parts_og1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

let parts_og0_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_am");

let parts_og1_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_am");

let parts_white_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "leftover");

let og_parts_ = listFlat([parts_og0_, parts_og1_, parts_white_, parts_og0_am_, parts_og1_am_]);

let parts_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc");

let parts_loc_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_am");

parts_loc_ = listJoin(parts_loc_, parts_loc_am_);

let parts_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "sec");

let parts_sec_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "sec_am");

parts_sec_ = listJoin(parts_sec_, parts_sec_am_);

let parts_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "art");

let parts_lsa_ = listFlat([parts_loc_, parts_sec_, parts_art_]);

let clines_ = [];

for (let  og_part_ of og_parts_){

let area_ = __modules__.calc.Area( __params__.model, og_part_ );

if (area_ < (part_og_d_ * part_og_w_ * 0.5)){

__modules__.attrib.Set(__params__.model, og_part_, 'type',  "leftover" );

continue;
}

let cline_ = await exec_neighbourhood_node_yukoezoo9n_createPath_(__params__, og_part_, parts_loc_);
if (__params__.terminated) { return __params__.model;}

if (cline_ == null){

cline_ = await exec_neighbourhood_node_yukoezoo9n_createPath_(__params__, og_part_, parts_sec_);
if (__params__.terminated) { return __params__.model;}
}

if (cline_ == null){

cline_ = await exec_neighbourhood_node_yukoezoo9n_createPath_(__params__, og_part_, parts_art_);
if (__params__.terminated) { return __params__.model;}
}

if (cline_ != null){

__modules__.list.Add( clines_, cline_, 'to_end' );
}
}

for (let  part_lsa_ of parts_lsa_){

let path_clines_ = __modules__.query.Filter(__params__.model, clines_, ['part', null], '==', string(part_lsa_));

let cut_ = await exec_neighbourhood_node_yukoezoo9n_cutPaths_(__params__, path_clines_, part_lsa_, __modules__.attrib.Get(__params__.model, part_lsa_, 'type'));
if (__params__.terminated) { return __params__.model;}
}

let parts_og0_os_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_os");

let parts_og0_os2_ = __modules__.query.Filter(__params__.model, parts_og0_os_, ['cluster_type', null], '==', null);

__modules__.attrib.Set(__params__.model, parts_og0_os2_, 'cluster_type',  "loc_os" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_3ramsc3yphe_addAttribsCrvRoads_(__params__, parts_) {

for (let  part_ of parts_){

let part_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let art_ = await exec_neighbourhood_node_3ramsc3yphe__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_art");
if (__params__.terminated) { return __params__.model;}

let sec_ = await exec_neighbourhood_node_3ramsc3yphe__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let loc_ = await exec_neighbourhood_node_3ramsc3yphe__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_loc");
if (__params__.terminated) { return __params__.model;}

let road_types_ = listFlat([art_, sec_, loc_]);

__modules__.attrib.Set(__params__.model, part_, 'class',  "part" );

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, part_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type_ );
}

else {

let road_type0_ = road_types_[pythonList(0, road_types_.length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = road_types_[pythonList(1, road_types_.length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, part_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}
}


async function exec_neighbourhood_node_3ramsc3yphe__getCrvRoadEdgeTypes_(__params__, part_edges_, road_descr_) {

let edges_ = [[]];

for (let  edge_ of part_edges_){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_) == 2){

edges_ = listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}

else {

edges_ = edges_[pythonList(0, edges_.length)];
}

if (len(edges_) == 0){

return [];
}

if (len(edges_) == 1){

return [road_descr_];
}

let road_types_ = [road_descr_];

for (let  i_ of range(1, len(edges_))){

let ang_ = await exec_neighbourhood_node_3ramsc3yphe__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (abs(ang_ - 180) > 45){

__modules__.list.Add( road_types_, road_descr_, 'to_end' );
}
}

return road_types_;
}


async function exec_neighbourhood_node_3ramsc3yphe__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}

async function exec_neighbourhood_node_3ramsc3yphe(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'delete_selected' );

__modules__.attrib.Add( __params__.model, 'pg', 'string', "special" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_f7preu3ipr_slicePartIntoPlots_(__params__, part_, road_descr_, width_, depth_) {

let road_edges_ = await exec_neighbourhood_node_f7preu3ipr__getRoadEdges_(__params__, part_, road_descr_);
if (__params__.terminated) { return __params__.model;}

if (len(road_edges_) == 0){

return [part_];
}

if (len(road_edges_) > 1){

let len_ = __modules__.calc.Length( __params__.model, road_edges_[pythonList(0, road_edges_.length)] );

let ang_ = await exec_neighbourhood_node_f7preu3ipr__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(0, road_edges_.length)])[pythonList(1, __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(0, road_edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (len_ < (depth_ * 2) && ang_ < 120){

road_edges_ = road_edges_.slice(1);
}
}

if (len(road_edges_) > 1){

let len_ = __modules__.calc.Length( __params__.model, road_edges_[pythonList(-1, road_edges_.length)] );

let ang_ = await exec_neighbourhood_node_f7preu3ipr__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(-1, road_edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', road_edges_[pythonList(-1, road_edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (len_ < (depth_ * 2) && ang_ < 120){

road_edges_ = road_edges_.slice(0,-1);
}
}

let all_edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let other_edges_ = __modules__.query.Filter(__params__.model, all_edges_, ['road', null], '!=', road_descr_);

let plots_ = [];

let cut0_ = null;

let cut1_ = null;

let lengths_ = __modules__.calc.Length( __params__.model, road_edges_ );

let total_num_plots_ = round(sum(lengths_) / width_);

if (total_num_plots_ < 2){

return [part_];
}

let start_offset_ = 0;

for (let  edge_ of road_edges_){

let ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let dist_ = vecLen(ray_[pythonList(1, ray_.length)]);

let num_plots_ = round(dist_ / width_);

if (num_plots_ == 0){

continue;
}

let vec_ = vecDiv(ray_[pythonList(1, ray_.length)], num_plots_);

let vec_perp_ = vecSetLen([-vec_[pythonList(1, vec_.length)], vec_[pythonList(0, vec_.length)], 0], 1000);

for (let  i_ of range(1, num_plots_)){

cut0_ = cut1_;

let ori_ = vecAdd(ray_[pythonList(0, ray_.length)], vecMult(vec_, i_));

let ray_perp_ = rayMake(ori_, vec_perp_);

let isect_result_ = await exec_neighbourhood_node_f7preu3ipr__isect_(__params__, ray_perp_, other_edges_, []);
if (__params__.terminated) { return __params__.model;}

if (isect_result_[pythonList(0, isect_result_.length)] != null){

let posi0_ = __modules__.make.Position( __params__.model, ori_ );

let posi1_ = __modules__.make.Position( __params__.model, isect_result_[pythonList(0, isect_result_.length)] );

cut1_ = [posi0_, posi1_, edge_, isect_result_[pythonList(1, isect_result_.length)]];

let plot_ = await exec_neighbourhood_node_f7preu3ipr__makeLot_(__params__, all_edges_, cut0_, cut1_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'to_end' );
}
}

if (edge_ != road_edges_[pythonList(-1, road_edges_.length)]){

let vert_ = __modules__.query.Get(__params__.model, '_v', edge_)[pythonList(1, __modules__.query.Get(__params__.model, '_v', edge_).length)];

let ang_ = await exec_neighbourhood_node_f7preu3ipr__vertAng_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (ang_ > 250){

let posi0_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let ori_ = __modules__.attrib.Get(__params__.model, posi0_, 'xyz');

let edge_vecs_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', vert_) );

let edge_lens_ = vecLen(edge_vecs_);

edge_vecs_ = vecNorm(edge_vecs_);

let vec_cut_ = edge_vecs_[pythonList(0, edge_vecs_.length)];

if (edge_lens_[pythonList(0, edge_lens_.length)] > edge_lens_[pythonList(1, edge_lens_.length)]){

vec_cut_ = vecRev(edge_vecs_[pythonList(1, edge_vecs_.length)]);
}

vec_cut_ = vecSetLen(vec_cut_, 1000);

let ray_cut_ = rayMake(ori_, vec_cut_);

let isect_result_ = await exec_neighbourhood_node_f7preu3ipr__isect_(__params__, ray_cut_, other_edges_, []);
if (__params__.terminated) { return __params__.model;}

if (isect_result_[pythonList(0, isect_result_.length)] != null){

cut0_ = cut1_;

let posi1_ = __modules__.make.Position( __params__.model, isect_result_[pythonList(0, isect_result_.length)] );

cut1_ = [posi0_, posi1_, edge_, isect_result_[pythonList(1, isect_result_.length)]];

let plot_ = await exec_neighbourhood_node_f7preu3ipr__makeLot_(__params__, all_edges_, cut0_, cut1_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'to_end' );
}
}

else {
if(ang_ > 130){

let posi0_ = __modules__.query.Get(__params__.model, 'ps', vert_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', vert_).length)];

let ori_ = __modules__.attrib.Get(__params__.model, posi0_, 'xyz');

let edge_vecs_ = __modules__.calc.Vector( __params__.model, __modules__.query.Get(__params__.model, '_e', vert_) );

edge_vecs_ = vecNorm(edge_vecs_);

let edge_vecs_avg_ = vecNorm(vecSum(edge_vecs_));

let edge_vecs_perp_ = [-edge_vecs_avg_[pythonList(1, edge_vecs_avg_.length)], edge_vecs_avg_[pythonList(0, edge_vecs_avg_.length)], 0];

edge_vecs_perp_ = vecSetLen(edge_vecs_perp_, 1000);

let ray_perp_ = rayMake(ori_, edge_vecs_perp_);

let isect_result_ = await exec_neighbourhood_node_f7preu3ipr__isect_(__params__, ray_perp_, other_edges_, []);
if (__params__.terminated) { return __params__.model;}

if (isect_result_[pythonList(0, isect_result_.length)] != null){

cut0_ = cut1_;

let posi1_ = __modules__.make.Position( __params__.model, isect_result_[pythonList(0, isect_result_.length)] );

cut1_ = [posi0_, posi1_, edge_, isect_result_[pythonList(1, isect_result_.length)]];

let plot_ = await exec_neighbourhood_node_f7preu3ipr__makeLot_(__params__, all_edges_, cut0_, cut1_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'to_end' );
}
}
}
}
}

if (cut1_ != null){

let plot_ = await exec_neighbourhood_node_f7preu3ipr__makeLot_(__params__, all_edges_, cut1_, null);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'to_end' );
}

if (len(plots_) == 0){

return [part_];
}

await exec_neighbourhood_node_f7preu3ipr__transferEdgeAttribs_(__params__, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', part_), ['road', null], '!=', null), __modules__.query.Get(__params__.model, '_e', plots_));
if (__params__.terminated) { return __params__.model;}

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', plots_), ['road', null], '==', null);

__modules__.attrib.Set(__params__.model, edges_, 'road',  __modules__.attrib.Get(__params__.model, part_, 'type') );

await exec_neighbourhood_node_f7preu3ipr__copyAttribs_(__params__, part_, plots_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, part_, 'delete_selected' );

return plots_;
}


async function exec_neighbourhood_node_f7preu3ipr_addTypeAttribsCrvRoads_(__params__, plots_) {

for (let  plot_ of plots_){

let part_edges_ = __modules__.query.Get(__params__.model, '_e', plot_);

let art_ = await exec_neighbourhood_node_f7preu3ipr__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_art");
if (__params__.terminated) { return __params__.model;}

let sec_ = await exec_neighbourhood_node_f7preu3ipr__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_sec");
if (__params__.terminated) { return __params__.model;}

let loc_ = await exec_neighbourhood_node_f7preu3ipr__getCrvRoadEdgeTypes_(__params__, part_edges_, "road_loc");
if (__params__.terminated) { return __params__.model;}

let road_types_ = listFlat([art_, sec_, loc_]);

__modules__.attrib.Set(__params__.model, plot_, 'class',  "part" );

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, plot_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, plot_, 'type',  block_type_ );
}

else {

let road_type0_ = road_types_[pythonList(0, road_types_.length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = road_types_[pythonList(1, road_types_.length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, plot_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}
}


async function exec_neighbourhood_node_f7preu3ipr_addOrientAttribs_(__params__, plots_) {

let dict_simple_ = {"art": 1,"sec": 2,"loc": 3};

for (let  plot_ of plots_){

let plot_type_ = __modules__.attrib.Get(__params__.model, plot_, 'type');

let plot_is_simple_ = dict_simple_[pythonList(plot_type_, dict_simple_.length)] > 0;

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', plot_)){

let edge_type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

let edge_is_simple_ = dict_simple_[pythonList(edge_type_, dict_simple_.length)] > 0;

if (edge_type_ == undefined){

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );
}

else {
if(edge_type_.slice(0,4) == "road"){

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "front" );
}

else {
if(edge_type_ == "off_grid" || (plot_type_ != edge_type_ && plot_is_simple_ && edge_is_simple_)){

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "back" );
}

else {

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );
}
}
}
}
}
}


async function exec_neighbourhood_node_f7preu3ipr__copyAttribs_(__params__, pgon_from_, pgons_to_) {

let block_id_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type');

let site_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'site');

for (let  pgon_to_ of pgons_to_){

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  block_type_ );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  site_ );
}
}


async function exec_neighbourhood_node_f7preu3ipr__makeLot_(__params__, part_edges_, cut0_, cut1_) {

let ring_ = [];

if (cut0_ == null && cut1_ == null){

return null;
}

else {
if(cut0_ == null){

ring_ = [cut1_[pythonList(0, cut1_.length)], cut1_[pythonList(1, cut1_.length)]];

let posis_list_ = await exec_neighbourhood_node_f7preu3ipr__getPosisBetweenEdges_(__params__, part_edges_, cut1_[pythonList(3, cut1_.length)], cut1_[pythonList(2, cut1_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}

else {
if(cut1_ == null){

ring_ = [];

let posis_list_ = await exec_neighbourhood_node_f7preu3ipr__getPosisBetweenEdges_(__params__, part_edges_, cut0_[pythonList(2, cut0_.length)], cut0_[pythonList(3, cut0_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );

__modules__.list.Add( ring_, [cut0_[pythonList(1, cut0_.length)], cut0_[pythonList(0, cut0_.length)]], 'extend_end' );
}

else {

ring_ = [cut1_[pythonList(0, cut1_.length)], cut1_[pythonList(1, cut1_.length)]];

let posis_list_ = await exec_neighbourhood_node_f7preu3ipr__getPosisBetweenEdges_(__params__, part_edges_, cut1_[pythonList(3, cut1_.length)], cut0_[pythonList(3, cut0_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );

__modules__.list.Add( ring_, [cut0_[pythonList(1, cut0_.length)], cut0_[pythonList(0, cut0_.length)]], 'extend_end' );

posis_list_ = await exec_neighbourhood_node_f7preu3ipr__getPosisBetweenEdges_(__params__, part_edges_, cut0_[pythonList(2, cut0_.length)], cut1_[pythonList(2, cut1_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( ring_, posis_list_, 'extend_end' );
}
}
}

if (len(ring_) < 3){

return null;
}

let ring2_ = [];

let num_posis_ = len(ring_);

for (let  i_ of range(len(ring_))){

if (distance( __modules__.attrib.Get(__params__.model, ring_[pythonList(i_, ring_.length)], 'xyz'),  __modules__.attrib.Get(__params__.model, ring_[pythonList((i_ + 1) % num_posis_, ring_.length)], 'xyz')) > 0.1){

__modules__.list.Add( ring2_, ring_[pythonList(i_, ring_.length)], 'to_end' );
}
}

if (len(ring2_) > 2){

let lot_ = __modules__.make.Polygon( __params__.model, ring2_ );

return lot_;
}

return null;
}


async function exec_neighbourhood_node_f7preu3ipr__getRoadEdges_(__params__, part_, road_descr_) {

let edges_ = [[]];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', part_)){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_[pythonList(0, edges_.length)]) == 0){

return [];
}

if (len(edges_) == 1){

return edges_[pythonList(0, edges_.length)];
}

return listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}


async function exec_neighbourhood_node_f7preu3ipr__getPosisBetweenEdges_(__params__, edges_, edge0_, edge1_) {

if (edge0_ == edge1_){

return [];
}

let idx_ = listFind(edges_, edge0_);

let next_edge_ = edge0_;

idx_ = (idx_ + 1) % len(edges_);

let posis_ = [];

while (next_edge_ != edge1_){

next_edge_ = edges_[pythonList(idx_, edges_.length)];

__modules__.list.Add( posis_, __modules__.query.Get(__params__.model, 'ps', next_edge_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', next_edge_).length)], 'to_end' );

idx_ = (idx_ + 1) % len(edges_);
}

return posis_;
}


async function exec_neighbourhood_node_f7preu3ipr__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_f7preu3ipr__addTypeAttribs_(__params__, plots_) {

for (let  plot_ of plots_){

__modules__.attrib.Set(__params__.model, plot_, 'class',  "plot" );

let road_types_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', plot_)){

let road_type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (road_type_ != undefined && road_type_ != "cold"){

__modules__.list.Add( road_types_, road_type_, 'to_end' );
}
}

let block_types_dict_ = {"road_art": "art","road_sec": "sec","road_ter": "ter","road_loc": "loc"};

let cats_dict_ = {"road_art": 1,"road_sec": 2,"road_ter": 3,"road_loc": 4};

if (len(road_types_) == 0){

__modules__.attrib.Set(__params__.model, plot_, 'type',  "off_grid" );
}

else {
if(len(road_types_) == 1){

let road_type_ = road_types_[pythonList(0, road_types_.length)];

let block_type_ = string(block_types_dict_[pythonList(road_type_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, plot_, 'type',  block_type_ );
}

else {

let data_ = [];

for (let  road_type_ of road_types_){

__modules__.list.Add( data_, [road_type_, cats_dict_[pythonList(road_type_, cats_dict_.length)]], 'to_end' );
}

let sorted_data_ = listSort(data_, 1);

let road_type0_ = sorted_data_[pythonList(0, sorted_data_.length)][pythonList(0, sorted_data_[pythonList(0, sorted_data_.length)].length)];

let block_type0_ = string(block_types_dict_[pythonList(road_type0_, block_types_dict_.length)]);

let road_type1_ = sorted_data_[pythonList(1, sorted_data_.length)][pythonList(0, sorted_data_[pythonList(1, sorted_data_.length)].length)];

let block_type1_ = string(block_types_dict_[pythonList(road_type1_, block_types_dict_.length)]);

__modules__.attrib.Set(__params__.model, plot_, 'type',  block_type0_ + "_" + block_type1_ );
}
}
}
}


async function exec_neighbourhood_node_f7preu3ipr__transferEdgeAttribs_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_f7preu3ipr__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_neighbourhood_node_f7preu3ipr__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_neighbourhood_node_f7preu3ipr__getCrvRoadEdgeTypes_(__params__, part_edges_, road_descr_) {

let edges_ = [[]];

for (let  edge_ of part_edges_){

let edge_road_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

if (edge_road_ == road_descr_){

__modules__.list.Add( edges_[pythonList(-1, edges_.length)], edge_, 'to_end' );
}

else {

if (len(edges_[pythonList(-1, edges_.length)]) != 0){

__modules__.list.Add( edges_, [], 'to_end' );
}
}
}

if (len(edges_) == 2){

edges_ = listJoin(edges_[pythonList(1, edges_.length)], edges_[pythonList(0, edges_.length)]);
}

else {

edges_ = edges_[pythonList(0, edges_.length)];
}

if (len(edges_) == 0){

return [];
}

if (len(edges_) == 1){

return [road_descr_];
}

let road_types_ = [road_descr_];

for (let  i_ of range(1, len(edges_))){

let ang_ = await exec_neighbourhood_node_f7preu3ipr__vertAng_(__params__, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)])[pythonList(0, __modules__.query.Get(__params__.model, '_v', edges_[pythonList(i_, edges_.length)]).length)]);
if (__params__.terminated) { return __params__.model;}

if (abs(ang_ - 180) > 45){

__modules__.list.Add( road_types_, road_descr_, 'to_end' );
}
}

return road_types_;
}


async function exec_neighbourhood_node_f7preu3ipr__isect_(__params__, ray_, edges_, subdivs_) {

let rays_ = __modules__.calc.Ray( __params__.model, edges_ );

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', subdivs_)){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

return [null, null];
}
}

let isect_min_ = null;

let dist_min_ = Infinity;

let edge_min_ = null;

for (let  edge_ of edges_){

let edge_ray_ = __modules__.calc.Ray( __params__.model, edge_ );

let isect_ = intersect(ray_, edge_ray_, 0);

if (isect_ != null){

let dist_ = distance(isect_, ray_[pythonList(0, ray_.length)]);

if (dist_ < dist_min_){

isect_min_ = isect_;

dist_min_ = dist_;

edge_min_ = edge_;
}
}
}

return [isect_min_, edge_min_];
}

async function exec_neighbourhood_node_f7preu3ipr(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let corners_ = {"art_art": 1,"art_sec": 2,"art_loc": 3,"sec_sec": 4,"sec_loc": 5,"loc_loc": 6};

for (let  pgon_ of __modules__.query.Get(__params__.model, 'pg', null)){

let type_ = __modules__.attrib.Get(__params__.model, pgon_, 'type');

let plots_ = [];

if (type_ == "art"){

plots_ = await exec_neighbourhood_node_f7preu3ipr_slicePartIntoPlots_(__params__, pgon_, "road_art", plot_art_w_, part_art_d_);
if (__params__.terminated) { return __params__.model;}
}

else {
if(type_ == "sec"){

plots_ = await exec_neighbourhood_node_f7preu3ipr_slicePartIntoPlots_(__params__, pgon_, "road_sec", plot_sec_w_, part_sec_d_);
if (__params__.terminated) { return __params__.model;}
}

else {
if(type_ == "loc"){

plots_ = await exec_neighbourhood_node_f7preu3ipr_slicePartIntoPlots_(__params__, pgon_, "road_loc", plot_loc_w_, part_loc_d_);
if (__params__.terminated) { return __params__.model;}
}

else {
if(corners_[pythonList(type_, corners_.length)] != undefined){

plots_ = [pgon_];
}
}
}
}

if (len(plots_) > 0){

await exec_neighbourhood_node_f7preu3ipr_addTypeAttribsCrvRoads_(__params__, plots_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_f7preu3ipr_addOrientAttribs_(__params__, plots_);
if (__params__.terminated) { return __params__.model;}
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_235242jqglv_mergeParts_(__params__, parts_, expected_areas_) {

for (let  part_ of parts_){

let exists_ = __modules__.query.Type( __params__.model, part_, 'exists' );

if (!exists_){

continue;
}

let type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let expected_area_ = expected_areas_[pythonList(type_, expected_areas_.length)];

let area_ = __modules__.calc.Area( __params__.model, part_ );

if (expected_area_ != undefined && area_ < (expected_area_ * 0.6)){

let new_part_ = await exec_neighbourhood_node_235242jqglv__mergeWithNeighbour_(__params__, part_);
if (__params__.terminated) { return __params__.model;}

if (new_part_ != null){

__modules__.visualize.Color( __params__.model, new_part_, [1, 1, 0] );
}
}
}
}


async function exec_neighbourhood_node_235242jqglv__mergeWithNeighbour_(__params__, part_) {

let exists_ = __modules__.query.Type( __params__.model, part_, 'exists' );

if (!exists_){

return null;
}

let neighbours_ = __modules__.query.Neighbor( __params__.model, 'pg', part_ );

let chk_ = part_;

let pairs_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', part_)){

let nedge_ = await exec_neighbourhood_node_235242jqglv__getNeighbourEdge_(__params__, edge_);
if (__params__.terminated) { return __params__.model;}

if (nedge_ != null){

let length_ = __modules__.calc.Length( __params__.model, edge_ );

__modules__.list.Add( pairs_, [edge_, nedge_, length_], 'to_end' );
}
}

if (len(pairs_) > 0){

let sorted_ = listSort(pairs_, 2);

let longest_edge_ = sorted_[pythonList(-1, sorted_.length)];

let edge_posis_ = __modules__.query.Get(__params__.model, 'ps', longest_edge_[pythonList(0, longest_edge_.length)]);

let npart_ = __modules__.query.Get(__params__.model, 'pg', longest_edge_[pythonList(1, longest_edge_.length)])[pythonList(0, __modules__.query.Get(__params__.model, 'pg', longest_edge_[pythonList(1, longest_edge_.length)]).length)];

let posi_a_ = edge_posis_[pythonList(0, edge_posis_.length)];

let posi_b_ = edge_posis_[pythonList(1, edge_posis_.length)];

let posis0_ = __modules__.query.Get(__params__.model, 'ps', part_);

let len_posis0_ = len(posis0_);

posis0_ = listJoin(posis0_, posis0_);

let posis1_ = __modules__.query.Get(__params__.model, 'ps', npart_);

let len_posis1_ = len(posis1_);

posis1_ = listJoin(posis1_, posis1_);

let idx0_start_ = listFind(posis0_, posi_b_);

let idx0_end_ = listFind(posis0_, posi_a_);

if (idx0_end_ < idx0_start_){

idx0_end_ = idx0_end_ + len_posis0_;
}

let idx1_start_ = listFind(posis1_, posi_a_);

let idx1_end_ = listFind(posis1_, posi_b_);

if (idx1_end_ < idx1_start_){

idx1_end_ = idx1_end_ + len_posis1_;
}

let posis0_c_ = posis0_.slice(idx0_start_, idx0_end_);

let posis1_c_ = posis1_.slice(idx1_start_, idx1_end_);

let chk0_ = [idx0_start_, idx0_end_];

let chk1_ = [idx1_start_, idx1_end_];

let posis_ = listJoin(posis0_.slice(idx0_start_, idx0_end_), posis1_.slice(idx1_start_, idx1_end_));

await exec_neighbourhood_node_235242jqglv__removeCracks_(__params__, posis_);
if (__params__.terminated) { return __params__.model;}

let new_part_ = __modules__.make.Polygon( __params__.model, posis_ );

let old_parts_ = listFlat([part_, npart_]);

await exec_neighbourhood_node_235242jqglv__copyAttribs_(__params__, npart_, new_part_);
if (__params__.terminated) { return __params__.model;}

await exec_neighbourhood_node_235242jqglv__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', old_parts_), __modules__.query.Get(__params__.model, '_e', new_part_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, old_parts_, 'delete_selected' );

return new_part_;
}
}


async function exec_neighbourhood_node_235242jqglv__removeCracks_(__params__, posis_) {

let cull_ = null;

let len_posis_ = len(posis_);

for (let  i_ of range(len(posis_))){

if (posis_[pythonList(i_, posis_.length)] == posis_[pythonList((i_ + 2) % len_posis_, posis_.length)]){

cull_ = [(i_ + 1) % len_posis_, (i_ + 2) % len_posis_];

break;
}
}

if (cull_ != null){

__modules__.list.Remove( posis_, cull_[pythonList(1, cull_.length)], 'index' );

__modules__.list.Remove( posis_, cull_[pythonList(0, cull_.length)], 'index' );

await exec_neighbourhood_node_235242jqglv__removeCracks_(__params__, posis_);
if (__params__.terminated) { return __params__.model;}
}
}


async function exec_neighbourhood_node_235242jqglv__getNeighbourEdge_(__params__, edge_) {

let posis_ = __modules__.query.Get(__params__.model, 'ps', edge_);

let edges_ = __modules__.query.Get(__params__.model, '_e', posis_);

for (let  nedge_ of edges_){

if (nedge_ == edge_){

continue;
}

let nposis_ = __modules__.query.Get(__params__.model, 'ps', nedge_);

if (nposis_[pythonList(0, nposis_.length)] == posis_[pythonList(1, posis_.length)] && nposis_[pythonList(1, nposis_.length)] == posis_[pythonList(0, posis_.length)]){

return nedge_;
}
}

return null;
}


async function exec_neighbourhood_node_235242jqglv__copyAttribs_(__params__, pgon_from_, pgon_to_) {

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_id',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_id') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'block_type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'block_type') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'site',  __modules__.attrib.Get(__params__.model, pgon_from_, 'site') );

__modules__.attrib.Set(__params__.model, pgon_to_, 'type',  __modules__.attrib.Get(__params__.model, pgon_from_, 'type') );

let class_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'class');

if (class_ != undefined){

__modules__.attrib.Set(__params__.model, pgon_to_, 'class',  class_ );
}

let special_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'special');

if (special_ != undefined){

__modules__.attrib.Set(__params__.model, pgon_to_, 'special',  special_ );
}

let cluster_type_ = __modules__.attrib.Get(__params__.model, pgon_from_, 'cluster_type');

if (cluster_type_ != undefined){

__modules__.attrib.Set(__params__.model, pgon_to_, 'cluster_type',  cluster_type_ );
}
}


async function exec_neighbourhood_node_235242jqglv__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_neighbourhood_node_235242jqglv__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}

val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'orient');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'orient',  val_ );
}
}
}
}


async function exec_neighbourhood_node_235242jqglv__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_neighbourhood_node_235242jqglv__cleanPgonsAngs_(__params__, pgons_) {

for (let  pgon_ of pgons_){

__modules__.modify.Weld( __params__.model, pgon_, 'break_weld' );

let area_ = __modules__.calc.Area( __params__.model, pgon_ );

if (area_ < 1){

__modules__.modify.Delete( __params__.model, pgon_, 'delete_selected' );

continue;
}

let del_posis_ = [];

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', pgon_)){

let dot_ = await exec_neighbourhood_node_235242jqglv__angDot_(__params__, vert_);
if (__params__.terminated) { return __params__.model;}

if (abs(dot_) > 0.9999){

__modules__.list.Add( del_posis_, __modules__.query.Get(__params__.model, 'ps', vert_), 'to_end' );
}
}

__modules__.modify.Delete( __params__.model, del_posis_, 'delete_selected' );
}

pgons_ = __modules__.query.Get(__params__.model, 'pg', pgons_);

return pgons_;
}


async function exec_neighbourhood_node_235242jqglv__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}

async function exec_neighbourhood_node_235242jqglv(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pl', null), 'delete_selected' );

let expected_areas_ = {};

expected_areas_["art"] = part_art_d_ * plot_art_w_;

expected_areas_["sec"] = part_sec_d_ * plot_sec_w_;

expected_areas_["loc"] = part_loc_d_ * plot_loc_w_;

expected_areas_["art_art"] = part_art_d_ * part_art_d_;

expected_areas_["art_sec"] = part_art_d_ * part_sec_d_;

expected_areas_["art_loc"] = part_art_d_ * part_loc_d_;

expected_areas_["sec_sec"] = part_sec_d_ * part_sec_d_;

expected_areas_["sec_loc"] = part_sec_d_ * part_loc_d_;

expected_areas_["loc_loc"] = part_loc_d_ * part_loc_d_;

expected_areas_["off_grid0"] = part_og_d_ * part_og_w_;

expected_areas_["off_grid1"] = part_og_d_ * part_og_w_;

expected_areas_["off_grid2"] = part_og_d_ * part_og_w_;

expected_areas_["white"] = part_og_d_ * part_og_w_;

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "part");

__modules__.modify.Fuse( __params__.model, parts_, 0.1 );

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "part");

await exec_neighbourhood_node_235242jqglv_mergeParts_(__params__, parts_, expected_areas_);
if (__params__.terminated) { return __params__.model;}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "part");

await exec_neighbourhood_node_235242jqglv_mergeParts_(__params__, parts_, expected_areas_);
if (__params__.terminated) { return __params__.model;}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "part");

let new_parts_ = await exec_neighbourhood_node_235242jqglv__cleanPgonsAngs_(__params__, parts_);
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_we705vs9sg_applyColours_(__params__, colors_dict_, pgons_) {

let pgons_lists_ = {};

let cols_ = {};

let keys_ = [];

for (let  pgon_ of pgons_){

let type_ = __modules__.attrib.Get(__params__.model, pgon_, 'type');

let col_ = colors_dict_[pythonList(type_, colors_dict_.length)];

if (col_ != undefined){

let key_ = string(col_);

let pgons_list_ = pgons_lists_[pythonList(key_, pgons_lists_.length)];

if (pgons_list_ == undefined){

pgons_list_ = [];

pgons_lists_[pythonList(key_, pgons_lists_.length)] = pgons_list_;

cols_[pythonList(key_, cols_.length)] = col_;

__modules__.list.Add( keys_, key_, 'to_end' );
}

__modules__.list.Add( pgons_list_, pgon_, 'to_end' );
}
}

for (let  key_ of keys_){

pgons_ = pgons_lists_[pythonList(key_, pgons_lists_.length)];

let col_ = cols_[pythonList(key_, cols_.length)];

__modules__.visualize.Color( __params__.model, pgons_, col_ );
}
}

async function exec_neighbourhood_node_we705vs9sg(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let colors_dict_bldg_ = {};

colors_dict_bldg_["off_grid_too_small"] = [1, 0.7, 1];

colors_dict_bldg_["too_deep"] = [1, 0.7, 1];

colors_dict_bldg_["concave_corner"] = [1, 0.7, 1];

colors_dict_bldg_["leftover"] = [1, 0.7, 1];

colors_dict_bldg_["art_art"] = [0.8, 0.18, 0.12];

colors_dict_bldg_["art_sec"] = [0.85, 0.3, 0.25];

colors_dict_bldg_["art_loc"] = [0.9, 0.48, 0.45];

colors_dict_bldg_["art"] = [0.93, 0.59, 0.56];

colors_dict_bldg_["sec_sec"] = [0.98, 0.55, 0.24];

colors_dict_bldg_["sec_loc"] = [0.98, 0.65, 0.44];

colors_dict_bldg_["sec"] = [0.98, 0.75, 0.59];

colors_dict_bldg_["loc_loc"] = [0.98, 0.83, 0.34];

colors_dict_bldg_["loc"] = [0.98, 0.89, 0.59];

colors_dict_bldg_["off_grid"] = [0.54, 0.78, 0.9];

colors_dict_bldg_["off_grid0"] = [0.54, 0.78, 0.9];

colors_dict_bldg_["off_grid1"] = [0.54, 0.78, 0.9];

colors_dict_bldg_["off_grid2"] = [0.36, 0.66, 0.8];

colors_dict_bldg_["off_grid0_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["off_grid1_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["off_grid2_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["loc_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["loc_loc_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["sec_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["sec_loc_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["sec_sec_am"] = [0.75, 0.38, 0.47];

colors_dict_bldg_["off_grid0_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["off_grid1_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["off_grid2_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["loc_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["loc_loc_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["sec_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["sec_loc_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["sec_sec_os"] = [0.75, 0.9, 0.67];

colors_dict_bldg_["corner_park"] = [0.75, 0.9, 0.67];

await exec_neighbourhood_node_we705vs9sg_applyColours_(__params__, colors_dict_bldg_, __modules__.query.Get(__params__.model, 'pg', null));
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_xhn24gz6dr(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let plot_dims_ = {};

plot_dims_['part_art_d'] = part_art_d_;

plot_dims_['plot_art_w'] = plot_art_w_;

plot_dims_['part_sec_d'] = part_sec_d_;

plot_dims_['plot_sec_w'] = plot_sec_w_;

plot_dims_['part_loc_d'] = part_loc_d_;

plot_dims_['plot_loc_w'] = plot_loc_w_;

plot_dims_['part_og_w'] = part_og_w_;

__modules__.attrib.Set(__params__.model, null, 'plot_dims',  plot_dims_ );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}


async function exec_neighbourhood_node_7mifpl7ekj6_checkAreas_(__params__, pgons_) {

let areas0_ = __modules__.calc.Area( __params__.model, listFlat(pgons_) );

let area0_ = sum(areas0_);

let area1_ = 0;

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_art_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_art_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_art_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_sec_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_sec_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'lot_loc_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_area');

let check_missing_area_ = area0_ - area1_;
printFunc(__params__.console,'check_missing_area', check_missing_area_);
}


async function exec_neighbourhood_node_7mifpl7ekj6_checkExtrude_(__params__, pgons_, col_) {

let check_ = __modules__.make.Extrude( __params__.model, pgons_, 10, 1, 'quads' );

__modules__.visualize.Color( __params__.model, check_, col_ );
}

async function exec_neighbourhood_node_7mifpl7ekj6(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "art");

let art_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "art_art");

let art_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "art_sec");

let art_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "art_loc");

let sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "sec");

let sec_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "sec_sec");

let sec_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "sec_loc");

let loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc");

let loc_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_loc");

let entr0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr0");

let entr0_on_art_ = __modules__.query.Filter(__params__.model, entr0_, ['cluster_type', null], '==', "art");

let entr0_on_sec_ = __modules__.query.Filter(__params__.model, entr0_, ['cluster_type', null], '==', "sec");

let entr0_on_loc_ = __modules__.query.Filter(__params__.model, entr0_, ['cluster_type', null], '==', "loc");

let entr1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr1");

let entr1_on_loc_ = __modules__.query.Filter(__params__.model, entr1_, ['cluster_type', null], '==', "loc");

__modules__.attrib.Set(__params__.model, null, 'lot_art_art_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, art_art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_art_sec_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, art_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_art_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, art_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_art_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_sec_sec_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, sec_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_sec_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, sec_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_sec_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'lot_loc_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, loc_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_art_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, entr0_on_art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_sec_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, entr0_on_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, entr0_on_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_entr1_on_loc_area',  await exec_neighbourhood_node_7mifpl7ekj6_areaSum_(__params__, entr1_on_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_art_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_art_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_sec_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'og_entr0_on_loc_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'og_entr1_on_loc_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'lot_art_art_num',  len(art_art_) );

__modules__.attrib.Set(__params__.model, null, 'lot_art_sec_num',  len(art_sec_) );

__modules__.attrib.Set(__params__.model, null, 'lot_art_loc_num',  len(art_loc_) );

__modules__.attrib.Set(__params__.model, null, 'lot_art_num',  len(art_) );

__modules__.attrib.Set(__params__.model, null, 'lot_sec_sec_num',  len(sec_sec_) );

__modules__.attrib.Set(__params__.model, null, 'lot_sec_loc_num',  len(sec_loc_) );

__modules__.attrib.Set(__params__.model, null, 'lot_sec_num',  len(sec_) );

__modules__.attrib.Set(__params__.model, null, 'lot_loc_loc_num',  len(loc_loc_) );

__modules__.attrib.Set(__params__.model, null, 'lot_loc_num',  len(loc_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}


async function exec_neighbourhood_node_z1a7a2icmxc_checkAreas_(__params__, pgons_) {

let areas0_ = __modules__.calc.Area( __params__.model, listFlat(pgons_) );

let area0_ = sum(areas0_);

let area1_ = 0;

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_clus1_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'og_clus2_on_loc_area');

let check_missing_area_ = area0_ - area1_;
printFunc(__params__.console,'check_missing_area', check_missing_area_);
}


async function exec_neighbourhood_node_z1a7a2icmxc_checkExtrude_(__params__, pgons_, col_) {

let check_ = __modules__.make.Extrude( __params__.model, pgons_, 10, 1, 'quads' );

__modules__.visualize.Color( __params__.model, check_, col_ );
}

async function exec_neighbourhood_node_z1a7a2icmxc(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let og0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0");

let og0_art_ = __modules__.query.Filter(__params__.model, og0_, ['cluster_type', null], '==', "art");

let og0_sec_ = __modules__.query.Filter(__params__.model, og0_, ['cluster_type', null], '==', "sec");

let og0_loc_ = __modules__.query.Filter(__params__.model, og0_, ['cluster_type', null], '==', "loc");

let og1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

let og2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2");

let leftover_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "leftover");

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_art_area',  await exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, og0_art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_sec_area',  await exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, og0_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_loc_area',  await exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, og0_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus1_on_loc_area',  await exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, og1_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus2_on_loc_area',  await exec_neighbourhood_node_z1a7a2icmxc_areaSum_(__params__, listFlat([og2_, leftover_])) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_art_num',  len(og0_art_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_sec_num',  len(og0_sec_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_loc_num',  len(og0_loc_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus1_on_loc_num',  len(og1_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus2_on_loc_num',  len(og2_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}


async function exec_neighbourhood_node_5bvz2l9smwf_checkAreas_(__params__, pgons_) {

let areas0_ = __modules__.calc.Area( __params__.model, listFlat(pgons_) );

let area0_ = sum(areas0_);

let area1_ = 0;

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_loc_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus1_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus2_on_loc_area');

let check_missing_area_ = area0_ - area1_;
printFunc(__params__.console,'check_missing_area', check_missing_area_);
}


async function exec_neighbourhood_node_5bvz2l9smwf_checkExtrude_(__params__, pgons_, col_) {

let check_ = __modules__.make.Extrude( __params__.model, pgons_, 10, 1, 'quads' );

__modules__.visualize.Color( __params__.model, check_, col_ );
}

async function exec_neighbourhood_node_5bvz2l9smwf(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let open_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_os");

let open_loc_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_loc_os");

let open_og0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_os");

let open_og0_art_ = __modules__.query.Filter(__params__.model, open_og0_, ['cluster_type', null], '==', "art_os");

let open_og0_sec_ = __modules__.query.Filter(__params__.model, open_og0_, ['cluster_type', null], '==', "sec_os");

let open_og0_loc_ = __modules__.query.Filter(__params__.model, open_og0_, ['cluster_type', null], '==', "loc_os");

let open_og1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_os");

let open_og2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2_os");

__modules__.attrib.Set(__params__.model, null, 'open_loc_loc_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_loc_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_loc_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_art_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_og0_art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_sec_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_og0_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_loc_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_og0_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_og_clus1_on_loc_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_og1_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'open_og_clus2_on_loc_area',  await exec_neighbourhood_node_5bvz2l9smwf_areaSum_(__params__, open_og2_) );
if (__params__.terminated) { return __params__.model;}

let total_ = __modules__.attrib.Get(__params__.model, null, 'open_loc_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'open_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_art_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_sec_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus1_on_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'open_og_clus2_on_loc_area');

__modules__.attrib.Set(__params__.model, null, 'open_total_area',  total_ );

__modules__.attrib.Set(__params__.model, null, 'open_loc_num',  len(open_loc_) );

__modules__.attrib.Set(__params__.model, null, 'open_loc_loc_num',  len(open_loc_loc_) );

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_art_num',  len(open_og0_art_) );

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_sec_num',  len(open_og0_sec_) );

__modules__.attrib.Set(__params__.model, null, 'open_og_clus0_on_loc_num',  len(open_og0_loc_) );

__modules__.attrib.Set(__params__.model, null, 'open_og_clus1_on_loc_num',  len(open_og1_) );

__modules__.attrib.Set(__params__.model, null, 'open_og_clus2_on_loc_num',  len(open_og2_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}


async function exec_neighbourhood_node_w16vp93fw5m_checkAreas_(__params__, pgons_) {

let areas0_ = __modules__.calc.Area( __params__.model, listFlat(pgons_) );

let area0_ = sum(areas0_);

let area1_ = 0;

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_loc_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_art_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus1_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus2_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus2_on_loc_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_entr0_on_sec_area');

area1_ = area1_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_entr0_on_loc_area');

let check_missing_area_ = area0_ - area1_;
printFunc(__params__.console,'check_missing_area', check_missing_area_);
}


async function exec_neighbourhood_node_w16vp93fw5m_checkExtrude_(__params__, pgons_, col_) {

let check_ = __modules__.make.Extrude( __params__.model, pgons_, 10, 1, 'quads' );

__modules__.visualize.Color( __params__.model, check_, col_ );
}

async function exec_neighbourhood_node_w16vp93fw5m(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let amen_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_am");

let amen_loc_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "loc_loc_am");

let amen_og0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_am");

let amen_og0_art_ = __modules__.query.Filter(__params__.model, amen_og0_, ['cluster_type', null], '==', "art_am");

let amen_og0_sec_ = __modules__.query.Filter(__params__.model, amen_og0_, ['cluster_type', null], '==', "sec_am");

let amen_og0_loc_ = __modules__.query.Filter(__params__.model, amen_og0_, ['cluster_type', null], '==', "loc_am");

let amen_og1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_am");

let amen_og2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2_am");

let amen_entr0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr0");

let amen_entr1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr1");

let amen_entr0_on_sec_ = __modules__.query.Filter(__params__.model, amen_entr0_, ['cluster_type', null], '==', "sec_am");

let amen_entr0_on_loc_ = __modules__.query.Filter(__params__.model, amen_entr0_, ['cluster_type', null], '==', "loc_am");

let amen_entr1_on_loc_ = __modules__.query.Filter(__params__.model, amen_entr1_, ['cluster_type', null], '==', "loc_am");

__modules__.attrib.Set(__params__.model, null, 'amen_loc_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_loc_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_art_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_og0_art_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_sec_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_og0_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_og0_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus1_on_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_og1_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus2_on_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_og2_) );
if (__params__.terminated) { return __params__.model;}

let total_ = __modules__.attrib.Get(__params__.model, null, 'amen_loc_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'amen_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_art_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_sec_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus1_on_loc_area');

total_ = total_ +  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus2_on_loc_area');

__modules__.attrib.Set(__params__.model, null, 'amen_total_area',  total_ );

__modules__.attrib.Set(__params__.model, null, 'amen_loc_num',  len(amen_loc_) );

__modules__.attrib.Set(__params__.model, null, 'amen_loc_loc_num',  len(amen_loc_loc_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_art_num',  len(amen_og0_art_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_sec_num',  len(amen_og0_sec_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus0_on_loc_num',  len(amen_og0_loc_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus1_on_loc_num',  len(amen_og1_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_clus2_on_loc_num',  len(amen_og2_) );

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr0_on_sec_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_entr0_on_sec_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr0_on_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_entr0_on_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr1_on_loc_area',  await exec_neighbourhood_node_w16vp93fw5m_areaSum_(__params__, amen_entr1_on_loc_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr0_on_sec_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr0_on_loc_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_area')/ path_w_ );

__modules__.attrib.Set(__params__.model, null, 'amen_og_entr1_on_loc_len',  __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_area')/ path_w_ );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_lwbhkxpvif(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.attrib.Set(__params__.model, null, 'add_trees',  add_trees_ );

__modules__.attrib.Set(__params__.model, null, 'tree_spacing',  tree_spacing_ );

__modules__.attrib.Set(__params__.model, null, 'tree_height_start',  tree_height_start_ );

__modules__.attrib.Set(__params__.model, null, 'tree_height_max',  tree_height_max_ );

if (add_trees_){

let os_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "open_main");

let loc_os_ = __modules__.query.Filter(__params__.model, os_, ['type', null], '==', "loc_os");

let loc_loc_os_ = __modules__.query.Filter(__params__.model, os_, ['type', null], '==', "loc_loc_os");

let og2_os_ = __modules__.query.Filter(__params__.model, os_, ['type', null], '==', "off_grid2_os");

let all_os_ = listFlat([loc_os_, loc_loc_os_, og2_os_]);

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, all_os_, -part_loc_d_ / 3, 1, 'square_end' );

let plines_ = [];

for (let  edge_ of __modules__.query.Get(__params__.model, '_e', off_)){

let edge_len_ = __modules__.calc.Length( __params__.model, edge_ );

if (edge_len_ > (part_loc_d_ / 3) - 1){

let pline_ = __modules__.make.Polyline( __params__.model, edge_, 'open' );

let div_ = __modules__.make.Divide( __params__.model, pline_, 12, 'by_max_length' );

__modules__.list.Add( plines_, pline_, 'to_end' );
}
}

let posis_ = __modules__.query.Get(__params__.model, 'ps', plines_);

let trees_ = __modules__.make.Point( __params__.model, posis_ );

__modules__.attrib.Set(__params__.model, trees_, 'type',  "tree" );

let ex_ = __modules__.make.Extrude( __params__.model, posis_, 2, 1, 'quads' );

__modules__.modify.Delete( __params__.model, plines_, 'delete_selected' );

__modules__.modify.Delete( __params__.model, off_, 'delete_selected' );
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_589k9kw6og4_makeTreesAtCentroid_(__params__, edges_, min_length_) {

let long_edges_ = [];

for (let  edge_ of edges_){

let edge_len_ = __modules__.calc.Length( __params__.model, edge_ );

if (edge_len_ > min_length_){

__modules__.list.Add( long_edges_, edge_, 'to_end' );
}
}

let xyzs_ = __modules__.calc.Centroid( __params__.model, long_edges_, 'ps_average' );

let tree_posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let tree_pts_ = __modules__.make.Point( __params__.model, tree_posis_ );

__modules__.attrib.Set(__params__.model, tree_pts_, 'type',  "tree" );

let ex_ = __modules__.make.Extrude( __params__.model, tree_posis_, 2, 1, 'quads' );

return [tree_pts_, ex_];
}

async function exec_neighbourhood_node_589k9kw6og4(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

let zones_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "zone");

let zones2_ = __modules__.poly2d.OffsetMitre( __params__.model, zones_, -0.1, 1, 'square_end' );

let trees_canopy_ = [];

let pavements_ = [];

let all_trees_ = [];

for (let  block_ of blocks_){

let pav1_ = __modules__.poly2d.OffsetRound( __params__.model, block_, pavement_w_, 0.2, 'square_end' );

let pav2_ = __modules__.poly2d.Boolean( __params__.model, pav1_, zones2_, 'intersect' );

let pav3_ = __modules__.poly2d.Boolean( __params__.model, pav2_, block_, 'difference' );

__modules__.list.Add( pavements_, pav3_, 'extend_end' );

let min_length_ = tree_spacing_ * 0.5;

if (add_trees_){

let tree_lines1_ = __modules__.poly2d.OffsetMitre( __params__.model, block_, pavement_w_ - 1, 1, 'square_end' );

let tree_lines2_ = __modules__.make.Polyline( __params__.model, __modules__.query.Get(__params__.model, '_e', tree_lines1_), 'open' );

let tree_lines3_ = __modules__.poly2d.Boolean( __params__.model, tree_lines2_, zones2_, 'intersect' );

let div_ = __modules__.make.Divide( __params__.model, tree_lines3_, tree_spacing_, 'by_max_length' );

let trees_ = await exec_neighbourhood_node_589k9kw6og4_makeTreesAtCentroid_(__params__, div_, min_length_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_trees_, trees_, 'extend_end' );
}
}

__modules__.modify.Delete( __params__.model, [pavements_, all_trees_], 'keep_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_hka2ruaijne(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let road_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_art");

let road_sec_ = listJoin( __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec"),  __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pl', null), ['type', null], '==', "road_sec_new"));

let subsites_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "landowner");

road_art_ = __modules__.poly2d.OffsetMitre( __params__.model, road_art_, road_art_w_ / 2, 20, 'square_end' );

road_sec_ = __modules__.poly2d.OffsetMitre( __params__.model, road_sec_, road_sec_w_ / 2, 20, 'square_end' );

let road_area_art_ = __modules__.poly2d.Boolean( __params__.model, road_art_, subsites_, 'intersect' );

let subsites2_ = __modules__.poly2d.Boolean( __params__.model, subsites_, road_art_, 'difference' );

let road_area_sec_ = __modules__.poly2d.Boolean( __params__.model, road_sec_, subsites2_, 'intersect' );

__modules__.modify.Delete( __params__.model, [road_area_art_, road_area_sec_], 'keep_selected' );

__modules__.attrib.Set(__params__.model, road_area_art_, 'type',  "road_art" );

__modules__.attrib.Set(__params__.model, road_area_sec_, 'type',  "road_sec" );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_jqb4ugluqa(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let roads_art_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "road_art");

let roads_sec_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "road_sec");

let roads_loc_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "road_loc");

let blocks_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "block");

__modules__.visualize.Color( __params__.model, roads_art_, [1, 0, 0] );

__modules__.visualize.Color( __params__.model, roads_sec_, [0, 1, 0] );

__modules__.visualize.Color( __params__.model, roads_loc_, [0, 0, 1] );

__modules__.visualize.Color( __params__.model, blocks_, [0, 1, 1] );

let areas_roads_art_ = __modules__.calc.Area( __params__.model, roads_art_ );

let areas_roads_sec_ = __modules__.calc.Area( __params__.model, roads_sec_ );

let areas_roads_loc_ = __modules__.calc.Area( __params__.model, roads_loc_ );

let area_blocks_ = __modules__.calc.Area( __params__.model, blocks_ );

__modules__.attrib.Set(__params__.model, null, 'road_area_art',  sum(areas_roads_art_) );

__modules__.attrib.Set(__params__.model, null, 'road_area_sec',  sum(areas_roads_sec_) );

__modules__.attrib.Set(__params__.model, null, 'road_area_loc',  sum(areas_roads_loc_) );

__modules__.attrib.Set(__params__.model, null, 'blocks_area',  sum(area_blocks_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_7mmbdhs4dnl(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

__modules__.modify.Delete( __params__.model, __modules__.query.Get(__params__.model, 'pg', null), 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_neighbourhood_node_n3co18ggnv(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_neighbourhood_node_xugmmg82t6o_debugCheckAreas_(__params__, data_) {

let check_col_l_ = await exec_neighbourhood_node_xugmmg82t6o_checkTotalsColL_(__params__, data_);
if (__params__.terminated) { return __params__.model;}

let check_col_m_ = await exec_neighbourhood_node_xugmmg82t6o_checkTotalsColM_(__params__, data_);
if (__params__.terminated) { return __params__.model;}

let check_col_o_ = await exec_neighbourhood_node_xugmmg82t6o_checkTotalsColO_(__params__, data_);
if (__params__.terminated) { return __params__.model;}

let check_col_g_ = await exec_neighbourhood_node_xugmmg82t6o_checkTotalsColG_(__params__, data_);
if (__params__.terminated) { return __params__.model;}

let deubg_ = "===";
printFunc(__params__.console,'deubg', deubg_);

let check_cols_lmo_total_ = check_col_l_ + check_col_m_ + check_col_o_;
printFunc(__params__.console,'check_cols_lmo_total', check_cols_lmo_total_);

let check_blocks_area_ = __modules__.attrib.Get(__params__.model, null, 'blocks_area');
printFunc(__params__.console,'check_blocks_area', check_blocks_area_);

let check_blocks_missing_ = check_blocks_area_ - check_cols_lmo_total_;
printFunc(__params__.console,'check_blocks_missing', check_blocks_missing_);

let check_blocks_error_ = string(100 * (check_blocks_missing_ / check_blocks_area_)) + "%";
printFunc(__params__.console,'check_blocks_error', check_blocks_error_);

deubg_ = "===";
printFunc(__params__.console,'deubg', deubg_);

let check_cols_lmog_total_ = check_col_l_ + check_col_m_ + check_col_o_ + check_col_g_;
printFunc(__params__.console,'check_cols_lmog_total', check_cols_lmog_total_);

let check_site_area_ = __modules__.attrib.Get(__params__.model, null, 'site_area');
printFunc(__params__.console,'check_site_area', check_site_area_);

let check_site_missing_ = check_site_area_ - check_cols_lmog_total_;
printFunc(__params__.console,'check_site_missing', check_site_missing_);

let check_site_error_ = string(100 * (check_site_missing_ / check_site_area_)) + "%";
printFunc(__params__.console,'check_site_error', check_site_error_);
}


async function exec_neighbourhood_node_xugmmg82t6o_checkTotalsColL_(__params__, data_) {

let total_ = 0;

total_ = total_ + data_["open_loc_loc_area"];

total_ = total_ + data_["open_loc_area"];

total_ = total_ + data_["open_og_clus0_on_art_area"];

total_ = total_ + data_["open_og_clus0_on_sec_area"];

total_ = total_ + data_["open_og_clus0_on_loc_area"];

total_ = total_ + data_["open_og_clus1_on_loc_area"];

total_ = total_ + data_["open_og_clus2_on_loc_area"];

return total_;
}


async function exec_neighbourhood_node_xugmmg82t6o_checkTotalsColM_(__params__, data_) {

let total_ = 0;

total_ = total_ + data_["amen_loc_loc_area"];

total_ = total_ + data_["amen_loc_area"];

total_ = total_ + data_["amen_og_clus0_on_art_area"];

total_ = total_ + data_["amen_og_clus0_on_sec_area"];

total_ = total_ + data_["amen_og_clus0_on_loc_area"];

total_ = total_ + data_["amen_og_clus1_on_loc_area"];

total_ = total_ + data_["amen_og_clus2_on_loc_area"];

return total_;
}


async function exec_neighbourhood_node_xugmmg82t6o_checkTotalsColO_(__params__, data_) {

let total_ = 0;

total_ = total_ + data_["lot_art_art_area"];

total_ = total_ + data_["lot_art_sec_area"];

total_ = total_ + data_["lot_art_loc_area"];

total_ = total_ + data_["lot_art_area"];

total_ = total_ + data_["lot_sec_sec_area"];

total_ = total_ + data_["lot_sec_loc_area"];

total_ = total_ + data_["lot_sec_area"];

total_ = total_ + data_["lot_loc_loc_area"];

total_ = total_ + data_["lot_loc_area"];

total_ = total_ + data_["og_clus0_on_art_area"];

total_ = total_ + data_["og_clus0_on_sec_area"];

total_ = total_ + data_["og_clus0_on_loc_area"];

total_ = total_ + data_["og_clus1_on_loc_area"];

total_ = total_ + data_["og_clus2_on_loc_area"];

return total_;
}


async function exec_neighbourhood_node_xugmmg82t6o_checkTotalsColG_(__params__, data_) {

let total_ = 0;

total_ = total_ + data_["road_area_art"];

total_ = total_ + data_["road_area_sec"];

total_ = total_ + data_["road_area_loc"];

return total_;
}

async function exec_neighbourhood_node_xugmmg82t6o(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let data_ = {};

data_["road_len_art_100"] = 0;

data_["road_len_sec_100"] = __modules__.attrib.Get(__params__.model, null, 'road_len_sec_100');

data_["road_len_loc_100"] = __modules__.attrib.Get(__params__.model, null, 'road_len_loc_100');

data_["road_len_art_50"] = __modules__.attrib.Get(__params__.model, null, 'road_len_art_50');

data_["road_len_sec_50"] = __modules__.attrib.Get(__params__.model, null, 'road_len_sec_50');

data_["road_len_loc_50"] = 0;

data_["open_art_art_area"] = 0;

data_["open_art_sec_area"] = 0;

data_["open_art_loc_area"] = 0;

data_["open_art_area"] = 0;

data_["open_sec_sec_area"] = 0;

data_["open_sec_loc_area"] = 0;

data_["open_sec_area"] = 0;

data_["open_loc_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'open_loc_loc_area');

data_["open_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'open_loc_area');

data_["open_og_clus0_on_art_area"] = __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_art_area');

data_["open_og_clus0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_sec_area');

data_["open_og_clus0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_loc_area');

data_["open_og_clus1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'open_og_clus1_on_loc_area');

data_["open_og_clus2_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'open_og_clus2_on_loc_area');

data_["open_total_area"] = __modules__.attrib.Get(__params__.model, null, 'open_total_area');

data_["amen_art_art_area"] = 0;

data_["amen_art_sec_area"] = 0;

data_["amen_art_loc_area"] = 0;

data_["amen_art_area"] = 0;

data_["amen_sec_sec_area"] = 0;

data_["amen_sec_loc_area"] = 0;

data_["amen_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_entr0_on_sec_area');

data_["amen_loc_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_loc_loc_area');

data_["amen_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_entr0_on_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_entr1_on_loc_area');

data_["amen_og_clus0_on_art_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_art_area');

data_["amen_og_clus0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_sec_area');

data_["amen_og_clus0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_loc_area');

data_["amen_og_clus1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_clus1_on_loc_area');

data_["amen_og_clus2_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_og_clus2_on_loc_area');

data_["amen_total_area"] = __modules__.attrib.Get(__params__.model, null, 'amen_total_area');

data_["lot_art_art_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_art_area');

data_["lot_art_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_sec_area');

data_["lot_art_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_loc_area');

data_["lot_art_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_area')+  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_art_area');

data_["lot_sec_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_sec_area');

data_["lot_sec_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_loc_area');

data_["lot_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_area')+  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_area');

data_["lot_loc_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_loc_loc_area');

data_["lot_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'lot_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_area')+  __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_area');

data_["og_clus0_on_art_area"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_art_area');

data_["og_clus0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_sec_area');

data_["og_clus0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_loc_area');

data_["og_clus1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_clus1_on_loc_area');

data_["og_clus2_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_clus2_on_loc_area');

data_["lot_art_art_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_art_num');

data_["lot_art_sec_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_sec_num');

data_["lot_art_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_loc_num');

data_["lot_art_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_art_num');

data_["lot_sec_sec_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_sec_num');

data_["lot_sec_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_loc_num');

data_["lot_sec_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_sec_num');

data_["lot_loc_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_loc_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'open_loc_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_loc_loc_num');

data_["lot_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'lot_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'open_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_loc_num');

data_["road_area_art"] = __modules__.attrib.Get(__params__.model, null, 'road_area_art')+  __modules__.attrib.Get(__params__.model, null, 'site_on_art_roads_area');

data_["road_area_sec"] = __modules__.attrib.Get(__params__.model, null, 'road_area_sec')+  __modules__.attrib.Get(__params__.model, null, 'site_on_sec_roads_area');

data_["road_area_loc"] = __modules__.attrib.Get(__params__.model, null, 'road_area_loc');

data_["og_clus0_on_art_num"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_art_num');

data_["og_clus0_on_sec_num"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_sec_num');

data_["og_clus0_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_loc_num');

data_["og_clus1_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_clus1_on_loc_num');

data_["og_clus2_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_clus2_on_loc_num');

data_["og_entr0_on_art_area"] = 0;

data_["og_entr0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_area');

data_["og_entr0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_area');

data_["og_entr1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_area');

data_["site_total_area"] = __modules__.attrib.Get(__params__.model, null, 'site_total_area');

data_["param_ogc_w"] = part_og_w_;

data_["param_lot_art_d"] = part_art_d_;

data_["param_lot_sec_d"] = part_sec_d_;

data_["param_lot_loc_d"] = part_loc_d_;

data_["param_lot_art_w"] = plot_art_w_;

data_["param_lot_sec_w"] = plot_sec_w_;

data_["param_lot_loc_w"] = plot_loc_w_;

await exec_neighbourhood_node_xugmmg82t6o_debugCheckAreas_(__params__, data_);
if (__params__.terminated) { return __params__.model;}

let __return_value__ = __modules__._Output.Return(__params__.model, data_);
return __return_value__;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_neighbourhood_node_y5ihk9v8he = __params__.model;
console.log("Executing Node: import");

__params__.model = result_exec_neighbourhood_node_y5ihk9v8he;

let result_exec_neighbourhood_node_a8gsb2eusm4 = await exec_neighbourhood_node_a8gsb2eusm4(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: divide landowners");

__params__.model = duplicateModel(result_exec_neighbourhood_node_a8gsb2eusm4);

let result_exec_neighbourhood_node_whd8yyh3oy = await exec_neighbourhood_node_whd8yyh3oy(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge landowners into zones");

__params__.model = result_exec_neighbourhood_node_whd8yyh3oy;

let result_exec_neighbourhood_node_vpoahaxtcn = await exec_neighbourhood_node_vpoahaxtcn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: art sec roads centrelines");

__params__.model = duplicateModel(result_exec_neighbourhood_node_vpoahaxtcn);

let result_exec_neighbourhood_node_x79axdhvvk = await exec_neighbourhood_node_x79axdhvvk(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: trim zones create subsites");

__params__.model = duplicateModel(result_exec_neighbourhood_node_vpoahaxtcn);

let result_exec_neighbourhood_node_7fnrhogzg74 = await exec_neighbourhood_node_7fnrhogzg74(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: analyse edges");

__params__.model = result_exec_neighbourhood_node_7fnrhogzg74;

let result_exec_neighbourhood_node_iklrzos79z = await exec_neighbourhood_node_iklrzos79z(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: subsites");

__params__.model = result_exec_neighbourhood_node_iklrzos79z;

let result_exec_neighbourhood_node_67npumy41d8 = await exec_neighbourhood_node_67npumy41d8(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: subsite plines");

__params__.model = duplicateModel(result_exec_neighbourhood_node_67npumy41d8);

let result_exec_neighbourhood_node_zeo6w17m8rl = await exec_neighbourhood_node_zeo6w17m8rl(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: generate blocks");

__params__.model = result_exec_neighbourhood_node_67npumy41d8;

let result_exec_neighbourhood_node_4t3i7oliqol = await exec_neighbourhood_node_4t3i7oliqol(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: local roads");

__params__.model = mergeInputs([result_exec_neighbourhood_node_x79axdhvvk, result_exec_neighbourhood_node_4t3i7oliqol]);

let result_exec_neighbourhood_node_w72lans74pm = await exec_neighbourhood_node_w72lans74pm(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: delete road centrelines");

__params__.model = result_exec_neighbourhood_node_w72lans74pm;

let result_exec_neighbourhood_node_r87elly7i1o = await exec_neighbourhood_node_r87elly7i1o(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: warm blocks");

__params__.model = duplicateModel(result_exec_neighbourhood_node_4t3i7oliqol);

let result_exec_neighbourhood_node_pbk9rrj44pa = await exec_neighbourhood_node_pbk9rrj44pa(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: central block");

__params__.model = result_exec_neighbourhood_node_pbk9rrj44pa;

let result_exec_neighbourhood_node_goxpt3ubo5 = await exec_neighbourhood_node_goxpt3ubo5(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: generate parts with off grid");

__params__.model = result_exec_neighbourhood_node_goxpt3ubo5;

let result_exec_neighbourhood_node_r7u523pwoy = await exec_neighbourhood_node_r7u523pwoy(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: generate art sec parts no offgrid ");

__params__.model = duplicateModel(result_exec_neighbourhood_node_r7u523pwoy);

let result_exec_neighbourhood_node_8qtios62jgj = await exec_neighbourhood_node_8qtios62jgj(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: generate loc parts no offgrid");

__params__.model = duplicateModel(result_exec_neighbourhood_node_r7u523pwoy);

let result_exec_neighbourhood_node_4x3r91t8fdq = await exec_neighbourhood_node_4x3r91t8fdq(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: subdiv off grid into parts");

__params__.model = result_exec_neighbourhood_node_r7u523pwoy;

let result_exec_neighbourhood_node_dryl9a4rtkm = await exec_neighbourhood_node_dryl9a4rtkm(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: cold blocks");

__params__.model = duplicateModel(result_exec_neighbourhood_node_4t3i7oliqol);

let result_exec_neighbourhood_node_gs8x34qm5m = await exec_neighbourhood_node_gs8x34qm5m(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: sub div cold blocks that wrap around");

__params__.model = result_exec_neighbourhood_node_gs8x34qm5m;

let result_exec_neighbourhood_node_8d4k78tygln = await exec_neighbourhood_node_8d4k78tygln(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: sub div cold blocks at concave corners");

__params__.model = result_exec_neighbourhood_node_8d4k78tygln;

let result_exec_neighbourhood_node_xztzuyg833 = await exec_neighbourhood_node_xztzuyg833(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: get blocks");

__params__.model = duplicateModel(result_exec_neighbourhood_node_xztzuyg833);

let result_exec_neighbourhood_node_k375z2278a = await exec_neighbourhood_node_k375z2278a(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: add on grid strips art sec loc");

__params__.model = result_exec_neighbourhood_node_k375z2278a;

let result_exec_neighbourhood_node_9jblow0n6mn = await exec_neighbourhood_node_9jblow0n6mn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: sub div on grid corners convex");

__params__.model = result_exec_neighbourhood_node_9jblow0n6mn;

let result_exec_neighbourhood_node_elnd381vmpj = await exec_neighbourhood_node_elnd381vmpj(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: sub div off grid");

__params__.model = result_exec_neighbourhood_node_elnd381vmpj;

let result_exec_neighbourhood_node_n60w7v18kc = await exec_neighbourhood_node_n60w7v18kc(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: split off grid too deep");

__params__.model = result_exec_neighbourhood_node_n60w7v18kc;

let result_exec_neighbourhood_node_k4g078ggrun = await exec_neighbourhood_node_k4g078ggrun(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: create off grid cold");

__params__.model = result_exec_neighbourhood_node_k4g078ggrun;

let result_exec_neighbourhood_node_up1knuxeaft = await exec_neighbourhood_node_up1knuxeaft(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge small pgons off_grid1");

__params__.model = result_exec_neighbourhood_node_up1knuxeaft;

let result_exec_neighbourhood_node_9f3jvzoiyii = await exec_neighbourhood_node_9f3jvzoiyii(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: get concave corners");

__params__.model = result_exec_neighbourhood_node_xztzuyg833;

let result_exec_neighbourhood_node_3iw5zgr7ft5 = await exec_neighbourhood_node_3iw5zgr7ft5(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: add on grid strips art sec");

__params__.model = result_exec_neighbourhood_node_3iw5zgr7ft5;

let result_exec_neighbourhood_node_q3orqudm4dg = await exec_neighbourhood_node_q3orqudm4dg(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: add  on grid strips concave corners");

__params__.model = result_exec_neighbourhood_node_q3orqudm4dg;

let result_exec_neighbourhood_node_7202sok1g5p = await exec_neighbourhood_node_7202sok1g5p(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge all cold parts");

__params__.model = mergeInputs([result_exec_neighbourhood_node_9f3jvzoiyii, result_exec_neighbourhood_node_7202sok1g5p]);

let result_exec_neighbourhood_node_fhk0rwesgx7 = await exec_neighbourhood_node_fhk0rwesgx7(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge");

__params__.model = mergeInputs([result_exec_neighbourhood_node_dryl9a4rtkm, result_exec_neighbourhood_node_fhk0rwesgx7]);

let result_exec_neighbourhood_node_v9lqtunuf4s = await exec_neighbourhood_node_v9lqtunuf4s(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: open and amen");

__params__.model = result_exec_neighbourhood_node_v9lqtunuf4s;

let result_exec_neighbourhood_node_xxo579ai9rn = await exec_neighbourhood_node_xxo579ai9rn(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: create path cuts");

__params__.model = result_exec_neighbourhood_node_xxo579ai9rn;

let result_exec_neighbourhood_node_yukoezoo9n = await exec_neighbourhood_node_yukoezoo9n(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge");

__params__.model = mergeInputs([result_exec_neighbourhood_node_8qtios62jgj, result_exec_neighbourhood_node_4x3r91t8fdq, result_exec_neighbourhood_node_yukoezoo9n]);

let result_exec_neighbourhood_node_3ramsc3yphe = await exec_neighbourhood_node_3ramsc3yphe(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: create lots");

__params__.model = result_exec_neighbourhood_node_3ramsc3yphe;

let result_exec_neighbourhood_node_f7preu3ipr = await exec_neighbourhood_node_f7preu3ipr(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge small pgons");

__params__.model = result_exec_neighbourhood_node_f7preu3ipr;

let result_exec_neighbourhood_node_235242jqglv = await exec_neighbourhood_node_235242jqglv(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: colors");

__params__.model = result_exec_neighbourhood_node_235242jqglv;

let result_exec_neighbourhood_node_we705vs9sg = await exec_neighbourhood_node_we705vs9sg(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: plot dims");

__params__.model = result_exec_neighbourhood_node_we705vs9sg;

let result_exec_neighbourhood_node_xhn24gz6dr = await exec_neighbourhood_node_xhn24gz6dr(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: calc areas and counts on grid");

__params__.model = result_exec_neighbourhood_node_xhn24gz6dr;

let result_exec_neighbourhood_node_7mifpl7ekj6 = await exec_neighbourhood_node_7mifpl7ekj6(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: calc areas and counts off grid");

__params__.model = result_exec_neighbourhood_node_7mifpl7ekj6;

let result_exec_neighbourhood_node_z1a7a2icmxc = await exec_neighbourhood_node_z1a7a2icmxc(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: calc areas and counts open");

__params__.model = result_exec_neighbourhood_node_z1a7a2icmxc;

let result_exec_neighbourhood_node_5bvz2l9smwf = await exec_neighbourhood_node_5bvz2l9smwf(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: calc areas and counts amen");

__params__.model = result_exec_neighbourhood_node_5bvz2l9smwf;

let result_exec_neighbourhood_node_w16vp93fw5m = await exec_neighbourhood_node_w16vp93fw5m(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: trees");

__params__.model = result_exec_neighbourhood_node_w16vp93fw5m;

let result_exec_neighbourhood_node_lwbhkxpvif = await exec_neighbourhood_node_lwbhkxpvif(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: pavements and trees");

__params__.model = mergeInputs([result_exec_neighbourhood_node_vpoahaxtcn, result_exec_neighbourhood_node_4t3i7oliqol]);

let result_exec_neighbourhood_node_589k9kw6og4 = await exec_neighbourhood_node_589k9kw6og4(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: art sec roads areas new and widen roads");

__params__.model = result_exec_neighbourhood_node_a8gsb2eusm4;

let result_exec_neighbourhood_node_hka2ruaijne = await exec_neighbourhood_node_hka2ruaijne(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: calculate areas");

__params__.model = mergeInputs([result_exec_neighbourhood_node_4t3i7oliqol, result_exec_neighbourhood_node_hka2ruaijne]);

let result_exec_neighbourhood_node_jqb4ugluqa = await exec_neighbourhood_node_jqb4ugluqa(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: delete road polygons");

__params__.model = result_exec_neighbourhood_node_jqb4ugluqa;

let result_exec_neighbourhood_node_7mmbdhs4dnl = await exec_neighbourhood_node_7mmbdhs4dnl(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: merge");

__params__.model = mergeInputs([result_exec_neighbourhood_node_x79axdhvvk, result_exec_neighbourhood_node_zeo6w17m8rl, result_exec_neighbourhood_node_r87elly7i1o, result_exec_neighbourhood_node_589k9kw6og4, result_exec_neighbourhood_node_7mmbdhs4dnl]);

let result_exec_neighbourhood_node_n3co18ggnv = await exec_neighbourhood_node_n3co18ggnv(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);
console.log("Executing Node: End");

__params__.model = mergeInputs([result_exec_neighbourhood_node_lwbhkxpvif, result_exec_neighbourhood_node_n3co18ggnv]);

let result_exec_neighbourhood_node_xugmmg82t6o = await exec_neighbourhood_node_xugmmg82t6o(__params__, in_model_, road_art_w_, road_sec_w_, road_loc_w_, part_art_d_, part_sec_d_, part_loc_d_, part_og_d_, part_og_w_, plot_art_w_, plot_sec_w_, plot_loc_w_, blk_art_num_og_d_, blk_art_num_og_w_, blk_sec_num_og_d_, blk_sec_num_og_w_, blk_loc_num_og_d_, blk_loc_num_og_w_, path_w_, open_percent_, amen_percent_, pavement_w_, add_trees_, tree_spacing_, tree_height_start_, tree_height_max_);

return result_exec_neighbourhood_node_xugmmg82t6o;
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
function printInp(in_model,road_art_w,road_sec_w,road_loc_w,part_art_d,part_sec_d,part_loc_d,part_og_d,part_og_w,plot_art_w,plot_sec_w,plot_loc_w,blk_art_num_og_d,blk_art_num_og_w,blk_sec_num_og_d,blk_sec_num_og_w,blk_loc_num_og_d,blk_loc_num_og_w,path_w,open_percent,amen_percent,pavement_w,add_trees,tree_spacing,tree_height_start,tree_height_max){
console.log("Calling function neighbourhood() with the following arguments:\n" +
"  in_model = " + in_model + "\n" +
"  road_art_w = " + road_art_w + "\n" +
"  road_sec_w = " + road_sec_w + "\n" +
"  road_loc_w = " + road_loc_w + "\n" +
"  part_art_d = " + part_art_d + "\n" +
"  part_sec_d = " + part_sec_d + "\n" +
"  part_loc_d = " + part_loc_d + "\n" +
"  part_og_d = " + part_og_d + "\n" +
"  part_og_w = " + part_og_w + "\n" +
"  plot_art_w = " + plot_art_w + "\n" +
"  plot_sec_w = " + plot_sec_w + "\n" +
"  plot_loc_w = " + plot_loc_w + "\n" +
"  blk_art_num_og_d = " + blk_art_num_og_d + "\n" +
"  blk_art_num_og_w = " + blk_art_num_og_w + "\n" +
"  blk_sec_num_og_d = " + blk_sec_num_og_d + "\n" +
"  blk_sec_num_og_w = " + blk_sec_num_og_w + "\n" +
"  blk_loc_num_og_d = " + blk_loc_num_og_d + "\n" +
"  blk_loc_num_og_w = " + blk_loc_num_og_w + "\n" +
"  path_w = " + path_w + "\n" +
"  open_percent = " + open_percent + "\n" +
"  amen_percent = " + amen_percent + "\n" +
"  pavement_w = " + pavement_w + "\n" +
"  add_trees = " + add_trees + "\n" +
"  tree_spacing = " + tree_spacing + "\n" +
"  tree_height_start = " + tree_height_start + "\n" +
"  tree_height_max = " + tree_height_max + "\n" +
'')};


// printInp(in_model,road_art_w,road_sec_w,road_loc_w,part_art_d,part_sec_d,part_loc_d,part_og_d,part_og_w,plot_art_w,plot_sec_w,plot_loc_w,blk_art_num_og_d,blk_art_num_og_w,blk_sec_num_og_d,blk_sec_num_og_w,blk_loc_num_og_d,blk_loc_num_og_w,path_w,open_percent,amen_percent,pavement_w,add_trees,tree_spacing,tree_height_start,tree_height_max);
const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_neighbourhood(__params__, in_model, road_art_w, road_sec_w, road_loc_w, part_art_d, part_sec_d, part_loc_d, part_og_d, part_og_w, plot_art_w, plot_sec_w, plot_loc_w, blk_art_num_og_d, blk_art_num_og_w, blk_sec_num_og_d, blk_sec_num_og_w, blk_loc_num_og_d, blk_loc_num_og_w, path_w, open_percent, amen_percent, pavement_w, add_trees, tree_spacing, tree_height_start, tree_height_max);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default neighbourhood;
