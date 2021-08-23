/**
 * to use this code: import Building_starter from this js file as well as the GI module
 * run Building_starter with the GI module as input along with other start node input
 * e.g.:
 * const Building_starter = require('./Building_starter.js').Building_starter
 * const module = require('gi-module')
 * const result = await Building_starter(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"in_model","value":"''","type":0}
// Parameter: {"name":"pcen_art_art_w","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_art_d","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_art_f","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_sec_w","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_sec_d","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_sec_f","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_loc_w","value":0,"type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_loc_d","value":0,"type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_loc_f","value":0,"type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_w","value":"100","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_d","value":"60","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_art_f","value":"80","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_sec_w","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_sec_d","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_sec_f","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_loc_w","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_loc_d","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_loc_f","value":"0","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_w","value":"100","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_d","value":"70","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_sec_f","value":"80","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_loc_w","value":"100","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_loc_d","value":"100","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_loc_f","value":"60","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_w","value":"100","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_d","value":"50","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_loc_f","value":"60","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og_w","value":"50","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og_d","value":"50","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og_f","value":"50","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og2_w","value":100,"type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og2_d","value":"30","type":1,"min":"0","max":"100","step":"1"}
// Parameter: {"name":"pcen_og2_f","value":"50","type":1,"min":"0","max":"100","step":"1"}


async function Building_starter(__modules__, in_model, pcen_art_art_w, pcen_art_art_d, pcen_art_art_f, pcen_art_sec_w, pcen_art_sec_d, pcen_art_sec_f, pcen_art_loc_w, pcen_art_loc_d, pcen_art_loc_f, pcen_art_w, pcen_art_d, pcen_art_f, pcen_sec_sec_w, pcen_sec_sec_d, pcen_sec_sec_f, pcen_sec_loc_w, pcen_sec_loc_d, pcen_sec_loc_f, pcen_sec_w, pcen_sec_d, pcen_sec_f, pcen_loc_loc_w, pcen_loc_loc_d, pcen_loc_loc_f, pcen_loc_w, pcen_loc_d, pcen_loc_f, pcen_og_w, pcen_og_d, pcen_og_f, pcen_og2_w, pcen_og2_d, pcen_og2_f) {

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


async function exec_Building_starter(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){

async function exec_Building_starter_node_wz73f8oew4(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let coll_tissue_ = await __modules__.io.Import( __params__.model, in_model_, 'gi' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_starter_node_549psa6t6a_createBldg_(__params__, footprint_) {

let type_ = __modules__.attrib.Get(__params__.model, footprint_, 'type');

let bldg_parms_ = await exec_Building_starter_node_549psa6t6a_getBldgParams_(__params__, type_);
if (__params__.terminated) { return __params__.model;}

if ((bldg_parms_[pythonList(0, bldg_parms_.length)] == 0 && bldg_parms_[pythonList(1, bldg_parms_.length)] == 0) || (bldg_parms_[pythonList(2, bldg_parms_.length)] == 0)){

return [];
}

let edges_ = __modules__.query.Get(__params__.model, '_e', footprint_);

let edge_rays_ = __modules__.calc.Ray( __params__.model, edges_ );

for (let  edge_ray_ of edge_rays_){

edge_ray_[pythonList(0, edge_ray_.length)] = [edge_ray_[pythonList(0, edge_ray_.length)][pythonList(0, edge_ray_[pythonList(0, edge_ray_.length)].length)], edge_ray_[pythonList(0, edge_ray_.length)][pythonList(1, edge_ray_[pythonList(0, edge_ray_.length)].length)], 0];
}

let front_ = await exec_Building_starter_node_549psa6t6a_getFront_(__params__, edges_, edge_rays_);
if (__params__.terminated) { return __params__.model;}
printFunc(__params__.console,'front', front_);

if (front_ == null){

return [];
}

let main_axis_ = await exec_Building_starter_node_549psa6t6a_mainAxis_(__params__, front_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if (main_axis_ == null){

return [];
}

let cross_axes_ = await exec_Building_starter_node_549psa6t6a_searchCrossAxes_(__params__, main_axis_, edge_rays_, 3, [0.1, Infinity, Infinity]);
if (__params__.terminated) { return __params__.model;}

if (cross_axes_ != null){

let next_ = cross_axes_[pythonList(2, cross_axes_.length)];

cross_axes_ = await exec_Building_starter_node_549psa6t6a_searchCrossAxes_(__params__, main_axis_, edge_rays_, 1, next_);
if (__params__.terminated) { return __params__.model;}
}

if (cross_axes_ != null){

let next_ = cross_axes_[pythonList(2, cross_axes_.length)];

cross_axes_ = await exec_Building_starter_node_549psa6t6a_searchCrossAxes_(__params__, main_axis_, edge_rays_, 0.2, next_);
if (__params__.terminated) { return __params__.model;}
}

if (cross_axes_ == null){

return [];
}

let bldg_dims_ = await exec_Building_starter_node_549psa6t6a_getBldgDims_(__params__, type_);
if (__params__.terminated) { return __params__.model;}

let start_ = await exec_Building_starter_node_549psa6t6a_getFrontStart_(__params__, front_, main_axis_[pythonList(0, main_axis_.length)], cross_axes_, bldg_dims_);
if (__params__.terminated) { return __params__.model;}

let mid_ = [main_axis_[pythonList(1, main_axis_.length)][pythonList(0, main_axis_[pythonList(1, main_axis_.length)].length)], main_axis_[pythonList(1, main_axis_.length)][pythonList(1, main_axis_[pythonList(1, main_axis_.length)].length)], 0];

let bldg_footprint_ = await exec_Building_starter_node_549psa6t6a_createBldgFootprint_(__params__, footprint_, start_, mid_, cross_axes_[pythonList(1, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(1, cross_axes_.length)].length)], bldg_dims_);
if (__params__.terminated) { return __params__.model;}

if (bldg_footprint_ == null){

return [];
}

__modules__.modify.Move( __params__.model, bldg_footprint_, [0, 0, 0.1] );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'type',  type_ );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'class',  "bldg_footprint" );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'max_floors',  __modules__.attrib.Get(__params__.model, footprint_, 'max_floors') );

return [bldg_footprint_];
}


async function exec_Building_starter_node_549psa6t6a_createBldgAmen_(__params__, footprint_) {

let bldg_footprint_ = __modules__.make.Copy( __params__.model, footprint_, [0, 0, 0.05] );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'type',  __modules__.attrib.Get(__params__.model, footprint_, 'type') );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'class',  "bldg_footprint" );

__modules__.attrib.Set(__params__.model, bldg_footprint_, 'max_floors',  __modules__.attrib.Get(__params__.model, footprint_, 'max_floors') );

return [bldg_footprint_];
}


async function exec_Building_starter_node_549psa6t6a_getFront_(__params__, edges_, edge_rays_) {

let fronts_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "road_art");

if (len(fronts_) == 0){

fronts_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "road_sec");
}

if (len(fronts_) == 0){

fronts_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "road_loc");
}

if (len(fronts_) == 0){

fronts_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "path");
}

if (len(fronts_) == 0){

fronts_ = __modules__.query.Filter(__params__.model, edges_, ['road', null], '==', "green");
}

if (len(fronts_) == 0){

fronts_ = [edges_[pythonList(0, edges_.length)]];
}

if (len(fronts_) > 1){

let lengths_ = __modules__.calc.Length( __params__.model, fronts_ );

fronts_ = listZip(listSort(listZip([fronts_, lengths_]), 1))[pythonList(0, listZip(listSort(listZip([fronts_, lengths_]), 1)).length)];
}

for (let  edge_ray_ of edge_rays_){

edge_ray_[pythonList(0, edge_ray_.length)] = [edge_ray_[pythonList(0, edge_ray_.length)][pythonList(0, edge_ray_[pythonList(0, edge_ray_.length)].length)], edge_ray_[pythonList(0, edge_ray_.length)][pythonList(1, edge_ray_[pythonList(0, edge_ray_.length)].length)], 0];
}

let front_ = fronts_[pythonList(-1, fronts_.length)];

return front_;
}


async function exec_Building_starter_node_549psa6t6a_mainAxis_(__params__, front_, edge_rays_) {

let front_vec_ = __modules__.calc.Vector( __params__.model, front_ );

let front_cen_ = __modules__.calc.Centroid( __params__.model, front_, 'ps_average' );

front_cen_[pythonList(2, front_cen_.length)] = 0;

let vec_ = vecSetLen([-front_vec_[pythonList(1, front_vec_.length)], front_vec_[pythonList(0, front_vec_.length)], 0], 200);

let ray_ = rayLMove(rayMake(front_cen_, vec_), 0.1);

let isect_ = await exec_Building_starter_node_549psa6t6a__isect_(__params__, ray_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if (isect_ == null){

return null;
}

let depth_vec_ = vecFromTo(front_cen_, isect_[pythonList(0, isect_.length)]);

ray_ = rayMake(front_cen_, depth_vec_);

return ray_;
}


async function exec_Building_starter_node_549psa6t6a_searchCrossAxes_(__params__, main_axis_, edge_rays_, incr_, dist_min_leftright_) {

let dist_start_ = dist_min_leftright_[pythonList(0, dist_min_leftright_.length)];

let min_left_dist_ = dist_min_leftright_[pythonList(1, dist_min_leftright_.length)];

let min_right_dist_ = dist_min_leftright_[pythonList(2, dist_min_leftright_.length)];

let front_cen_ = main_axis_[pythonList(0, main_axis_.length)];

let depth_vec_ = main_axis_[pythonList(1, main_axis_.length)];

let right_vec_ = [depth_vec_[pythonList(1, depth_vec_.length)], -depth_vec_[pythonList(0, depth_vec_.length)], 0];

let max_area_ = 0;

let ray_left_ = null;

let ray_right_ = null;

let dist_end_ = vecLen(depth_vec_);

let dist_ = dist_start_;

while (dist_ < dist_end_){

let this_start_ = vecAdd(front_cen_, vecSetLen(depth_vec_, dist_));

let this_ray_left_ = rayMake(this_start_, vecSetLen(right_vec_, -100));

let this_ray_right_ = rayMake(this_start_, vecSetLen(right_vec_, 100));

let isect_left_ = await exec_Building_starter_node_549psa6t6a__isect_(__params__, this_ray_left_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

let isect_right_ = await exec_Building_starter_node_549psa6t6a__isect_(__params__, this_ray_right_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if (isect_left_ == null || isect_right_ == null){

dist_ = dist_ + incr_;

continue;
}

this_ray_left_ = rayMake(this_start_, vecFromTo(this_start_, isect_left_[pythonList(0, isect_left_.length)]));

let this_left_dist_ = vecLen(this_ray_left_[pythonList(1, this_ray_left_.length)]);

if (this_left_dist_ < min_left_dist_){

min_left_dist_ = this_left_dist_;
}

else {

this_ray_left_[pythonList(1, this_ray_left_.length)] = vecSetLen(this_ray_left_[pythonList(1, this_ray_left_.length)], min_left_dist_);
}

this_ray_right_ = rayMake(this_start_, vecFromTo(this_start_, isect_right_[pythonList(0, isect_right_.length)]));

let this_right_dist_ = vecLen(this_ray_right_[pythonList(1, this_ray_right_.length)]);

if (this_right_dist_ < min_right_dist_){

min_right_dist_ = this_right_dist_;
}

else {

this_ray_right_[pythonList(1, this_ray_right_.length)] = vecSetLen(this_ray_right_[pythonList(1, this_ray_right_.length)], min_right_dist_);
}

let this_area_ = (vecLen(this_ray_left_[pythonList(1, this_ray_left_.length)]) + vecLen(this_ray_right_[pythonList(1, this_ray_right_.length)])) * dist_;

if (this_area_ > max_area_){

ray_left_ = this_ray_left_;

ray_right_ = this_ray_right_;

max_area_ = this_area_;
}

dist_ = dist_ + incr_;
}

let next_dist_start_ = dist_ - (2 * incr_);

if (next_dist_start_ < 0){

next_dist_start_ = dist_start_;
}

let next_dist_min_lr_ = [next_dist_start_, vecLen(ray_left_[pythonList(1, ray_left_.length)]), vecLen(ray_right_[pythonList(1, ray_right_.length)])];

if (ray_left_ == null || ray_right_ == null){

let chk_ = "rays are null";
}

return [ray_left_, ray_right_, next_dist_min_lr_];
}


async function exec_Building_starter_node_549psa6t6a_createRectMax_(__params__, main_axis_, cross_axes_) {

let xyz0_ = vecAdd(main_axis_[pythonList(0, main_axis_.length)], cross_axes_[pythonList(0, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(0, cross_axes_.length)].length)]);

let xyz1_ = vecAdd(main_axis_[pythonList(0, main_axis_.length)], cross_axes_[pythonList(1, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(1, cross_axes_.length)].length)]);

let xyz2_ = vecAdd(cross_axes_[pythonList(0, cross_axes_.length)][pythonList(0, cross_axes_[pythonList(0, cross_axes_.length)].length)], cross_axes_[pythonList(1, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(1, cross_axes_.length)].length)]);

let xyz3_ = vecAdd(cross_axes_[pythonList(0, cross_axes_.length)][pythonList(0, cross_axes_[pythonList(0, cross_axes_.length)].length)], cross_axes_[pythonList(0, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(0, cross_axes_.length)].length)]);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pline_ = __modules__.make.Polyline( __params__.model, posis_, 'close' );

return pline_;
}


async function exec_Building_starter_node_549psa6t6a_createBldgFootprint_(__params__, permis_footprint_, start_, vec_main_, vec_right_, bldg_dims_) {

let bldg_width_ = bldg_dims_[pythonList(0, bldg_dims_.length)];

let bldg_depth_ = bldg_dims_[pythonList(1, bldg_dims_.length)];

if (bldg_width_ == 0 || bldg_depth_ == 0){

return null;
}

let xyz1_ = vecAdd(start_, vecSetLen(vec_right_, bldg_width_));

let xyz2_ = vecAdd(xyz1_, vecSetLen(vec_main_, bldg_depth_));

let xyz3_ = vecAdd(xyz2_, vecSetLen(vec_right_, -bldg_width_));

let posis_ = __modules__.make.Position( __params__.model, [start_, xyz1_, xyz2_, xyz3_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

let trim_ = __modules__.poly2d.Boolean( __params__.model, pgon_, permis_footprint_, 'intersect' );

__modules__.modify.Delete( __params__.model, pgon_, 'delete_selected' );

return trim_;
}


async function exec_Building_starter_node_549psa6t6a_getPermisDims_(__params__, plot_type_) {

let plot_dims_ = __modules__.attrib.Get(__params__.model, null, 'plot_dims');

if (plot_type_ == "art_art"){

let w_ = plot_dims_["part_art_d"] - plot_dims_["sb_art_front"] - plot_dims_["sb_art_side"];

let d_ = w_;

return [w_, d_];
}

if (plot_type_ == "art_sec"){

let w_ = plot_dims_["part_sec_d"] - plot_dims_["sb_sec_front"] - plot_dims_["sb_art_side"];

let d_ = plot_dims_["part_art_d"] - plot_dims_["sb_art_front"] - plot_dims_["sb_sec_side"];

return [w_, d_];
}

if (plot_type_ == "art_loc"){

let w_ = plot_dims_["part_loc_d"] - plot_dims_["sb_loc_front"] - plot_dims_["sb_art_side"];

let d_ = plot_dims_["part_art_d"] - plot_dims_["sb_art_front"] - plot_dims_["sb_loc_side"];

return [w_, d_];
}

if (plot_type_ == "art"){

let w_ = plot_dims_["plot_art_w"] - (2 * plot_dims_["sb_art_side"]);

let d_ = plot_dims_["part_art_d"] - plot_dims_["sb_art_front"] - plot_dims_["sb_art_back"];

return [w_, d_];
}

if (plot_type_ == "sec_sec"){

let w_ = plot_dims_["part_sec_d"] - plot_dims_["sb_sec_front"] - plot_dims_["sb_sec_side"];

let d_ = w_;

return [w_, d_];
}

if (plot_type_ == "sec_loc"){

let w_ = plot_dims_["part_loc_d"] - plot_dims_["sb_loc_front"] - plot_dims_["sb_sec_side"];

let d_ = plot_dims_["part_sec_d"] - plot_dims_["sb_sec_front"] - plot_dims_["sb_loc_side"];

return [w_, d_];
}

if (plot_type_ == "sec"){

let w_ = plot_dims_["plot_sec_w"] - (2 * plot_dims_["sb_sec_side"]);

let d_ = plot_dims_["part_sec_d"] - plot_dims_["sb_sec_front"] - plot_dims_["sb_sec_back"];

return [w_, d_];
}

if (plot_type_ == "loc_loc"){

let w_ = plot_dims_["part_loc_d"] - plot_dims_["sb_loc_front"] - plot_dims_["sb_loc_side"];

let d_ = w_;

return [w_, d_];
}

if (plot_type_ == "loc"){

let w_ = plot_dims_["plot_loc_w"] - (2 * plot_dims_["sb_loc_side"]);

let d_ = plot_dims_["part_loc_d"] - plot_dims_["sb_loc_front"] - plot_dims_["sb_loc_back"];

return [w_, d_];
}

if (plot_type_ == "off_grid0" || plot_type_ == "off_grid1"){

let w_ = plot_dims_["plot_og_w"] - (2 * plot_dims_["sb_og_side"]);

let d_ = plot_dims_["plot_og_d"] - plot_dims_["sb_og_front"] - plot_dims_["sb_og_back"];

return [w_, d_];
}

if (plot_type_ == "off_grid2"){

let w_ = plot_dims_["plot_og2_w"] - (2 * plot_dims_["sb_og_side"]);

let d_ = plot_dims_["plot_og2_d"] - plot_dims_["sb_og_front"] - plot_dims_["sb_og_back"];

return [w_, d_];
}

let type_not_found_ = plot_type_;

return [0, 0];
}


async function exec_Building_starter_node_549psa6t6a_getBldgParams_(__params__, plot_type_) {

let result_ = [0, 0, 0];

if (plot_type_ == "art_art"){

return [pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_];
}

if (plot_type_ == "art_sec"){

return [pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_];
}

if (plot_type_ == "art_loc"){

return [pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_];
}

if (plot_type_ == "art"){

return [pcen_art_w_, pcen_art_d_, pcen_art_f_];
}

if (plot_type_ == "sec_sec"){

return [pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_];
}

if (plot_type_ == "sec_loc"){

return [pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_];
}

if (plot_type_ == "sec"){

return [pcen_sec_w_, pcen_sec_d_, pcen_sec_f_];
}

if (plot_type_ == "loc_loc"){

return [pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_];
}

if (plot_type_ == "loc"){

return [pcen_loc_w_, pcen_loc_d_, pcen_loc_f_];
}

if (plot_type_ == "off_grid2"){

return [pcen_og2_w_, pcen_og2_d_, pcen_og2_f_];
}

if (strStarts(plot_type_, "off")){

return [pcen_og_w_, pcen_og_d_, pcen_og_f_];
}

return result_;
}


async function exec_Building_starter_node_549psa6t6a_getBldgDims_(__params__, plot_type_) {

let result_ = await exec_Building_starter_node_549psa6t6a_getPermisDims_(__params__, plot_type_);
if (__params__.terminated) { return __params__.model;}

let w_ = result_[pythonList(0, result_.length)];

let d_ = result_[pythonList(1, result_.length)];

result_ = await exec_Building_starter_node_549psa6t6a_getBldgParams_(__params__, plot_type_);
if (__params__.terminated) { return __params__.model;}

let pcen_w_ = result_[pythonList(0, result_.length)];

let pcen_d_ = result_[pythonList(1, result_.length)];

return [w_ * (pcen_w_ / 100), d_ * (pcen_d_ / 100)];
}


async function exec_Building_starter_node_549psa6t6a_getFrontStart_(__params__, front_, mid_, cross_axes_, bldg_dims_) {

let bldg_w_ = bldg_dims_[pythonList(0, bldg_dims_.length)];

let verts_ = __modules__.query.Get(__params__.model, '_v', front_);

let next_edge_ = __modules__.query.Get(__params__.model, '_e', verts_[pythonList(1, verts_.length)])[pythonList(1, __modules__.query.Get(__params__.model, '_e', verts_[pythonList(1, verts_.length)]).length)];

let next_type_ = __modules__.attrib.Get(__params__.model, next_edge_, 'road');

let next_len_ = __modules__.calc.Length( __params__.model, next_edge_ );

let corner_ = 0;

if (next_len_ > 0.2 && next_type_){

if (strStarts(next_type_, "road")){

corner_ = 1;
}

else {
if(strStarts(next_type_, "entr")){

corner_ = 1;
}

else {
if(next_type_ == "green" || next_type_ == "path"){

corner_ = 1;
}
}
}
}

let front_len_ = __modules__.calc.Length( __params__.model, front_ );

let front_xyzs_ = __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', verts_), 'xyz');

let front_left_ = front_xyzs_[pythonList(0, front_xyzs_.length)];

let front_right_ = front_xyzs_[pythonList(1, front_xyzs_.length)];

let cross_left_ = vecAdd(mid_, cross_axes_[pythonList(0, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(0, cross_axes_.length)].length)]);

let cross_right_ = vecAdd(mid_, cross_axes_[pythonList(1, cross_axes_.length)][pythonList(1, cross_axes_[pythonList(1, cross_axes_.length)].length)]);

let vec_left_ = vecNorm(vecFromTo(mid_, front_left_));

let vec_right_ = vecNorm(vecFromTo(mid_, front_right_));

let dist_to_c_left_ = vecDot(vecFromTo(mid_, cross_left_), vec_left_);

let dist_to_c_right_ = vecDot(vecFromTo(mid_, cross_right_), vec_right_);

let dist_to_f_left_ = vecDot(vecFromTo(mid_, front_left_), vec_left_);

let dist_to_f_right_ = vecDot(vecFromTo(mid_, front_right_), vec_right_);

let olap_left_ = front_left_;

let olap_right_ = front_right_;

if (dist_to_c_left_ < dist_to_f_left_){

olap_left_ = cross_left_;
}

if (dist_to_c_right_ < dist_to_f_right_){

olap_right_ = cross_right_;
}

let len_overlap_ = distance(olap_left_, olap_right_);

if (corner_ == 0 && bldg_w_ < len_overlap_){

return olap_left_;
}

if (corner_ == 1 && bldg_w_ < len_overlap_){

return vecAdd(olap_right_, vecSetLen(vec_left_, bldg_w_));
}

let len_olap_left_cross_right_ = distance(olap_left_, cross_right_);

if (corner_ == 0 && bldg_w_ < len_olap_left_cross_right_){

return olap_left_;
}

let len_cross_left_olap_right_ = distance(cross_left_, olap_right_);

if (corner_ == 1 && bldg_w_ < len_cross_left_olap_right_){

return vecAdd(olap_right_, vecSetLen(vec_left_, bldg_w_));
}

if (bldg_w_ < len_olap_left_cross_right_){

return olap_left_;
}

if (bldg_w_ < len_cross_left_olap_right_){

return vecAdd(olap_right_, vecSetLen(vec_left_, bldg_w_));
}

if (bldg_w_ < distance(cross_left_, cross_right_)){

return cross_left_;
}

return front_left_;
}


async function exec_Building_starter_node_549psa6t6a__isect_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let a_ray_ = rays_[pythonList(i_, rays_.length)];

let isect_ = intersect(ray_, a_ray_, 0);

if (isect_ != null){

return [isect_, i_];
}
}

return null;
}

async function exec_Building_starter_node_549psa6t6a(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let footprints_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "max_footprint");

for (let  footprint_ of footprints_){

if (strEnds( __modules__.attrib.Get(__params__.model, footprint_, 'type'), "am")){

let am_bldg_footprints_ = await exec_Building_starter_node_549psa6t6a_createBldgAmen_(__params__, footprint_);
if (__params__.terminated) { return __params__.model;}
}

else {

let bldg_footprints_ = await exec_Building_starter_node_549psa6t6a_createBldg_(__params__, footprint_);
if (__params__.terminated) { return __params__.model;}
}
}

__modules__.modify.Delete( __params__.model, footprints_, 'delete_selected' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_starter_node_dn467r9w96k_getNumFloors_(__params__, footprint_, plot_type_) {

if (strEnds(plot_type_, "_am")){

plot_type_ = plot_type_.slice(0,-3);
}

let pcen_floors_ = await exec_Building_starter_node_dn467r9w96k__getBldgParams_(__params__, plot_type_);
if (__params__.terminated) { return __params__.model;}

let max_floors_ = __modules__.attrib.Get(__params__.model, footprint_, 'max_floors');

return ceil(max_floors_ * (pcen_floors_ / 100));
}


async function exec_Building_starter_node_dn467r9w96k__getBldgParams_(__params__, plot_type_) {

let result_ = 0;

if (plot_type_ == "art_art"){

return pcen_art_art_f_;
}

if (plot_type_ == "art_sec"){

return pcen_art_sec_f_;
}

if (plot_type_ == "art_loc"){

return pcen_art_loc_f_;
}

if (plot_type_ == "art"){

return pcen_art_f_;
}

if (plot_type_ == "sec_sec"){

return pcen_sec_sec_f_;
}

if (plot_type_ == "sec_loc"){

return pcen_sec_loc_f_;
}

if (plot_type_ == "sec"){

return pcen_sec_f_;
}

if (plot_type_ == "loc_loc"){

return pcen_loc_loc_f_;
}

if (plot_type_ == "loc"){

return pcen_loc_f_;
}

if (plot_type_ == "off_grid2"){

return pcen_og2_f_;
}

if (strStarts(plot_type_, "off")){

return pcen_og_f_;
}

return result_;
}

async function exec_Building_starter_node_dn467r9w96k(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let footprints_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "bldg_footprint");

for (let  footprint_ of footprints_){

let type_ = __modules__.attrib.Get(__params__.model, footprint_, 'type');

let num_floors_ = await exec_Building_starter_node_dn467r9w96k_getNumFloors_(__params__, footprint_, type_);
if (__params__.terminated) { return __params__.model;}

if (num_floors_ > 0){

let bldg_ = __modules__.make.Extrude( __params__.model, footprint_, num_floors_ * 3, num_floors_, 'quads' );

__modules__.attrib.Set(__params__.model, bldg_, 'type',  type_ );

__modules__.attrib.Set(__params__.model, bldg_.slice(0,-1), 'class',  "bldg_facade" );

__modules__.attrib.Set(__params__.model, bldg_[pythonList(-1, bldg_.length)], 'class',  "bldg_roof" );
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_starter_node_8lrb9z2ypba_applyColours_(__params__, colors_dict_, pgons_) {

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

async function exec_Building_starter_node_8lrb9z2ypba(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let colors_dict_land_ = {};

colors_dict_land_["art_art"] = [0.8, 0.51, 0.48];

colors_dict_land_["art_sec"] = [0.85, 0.62, 0.6];

colors_dict_land_["art_loc"] = [0.9, 0.73, 0.72];

colors_dict_land_["art"] = [0.92, 0.79, 0.78];

colors_dict_land_["sec_sec"] = [0.98, 0.81, 0.69];

colors_dict_land_["sec_loc"] = [0.98, 0.86, 0.78];

colors_dict_land_["sec"] = [0.98, 0.91, 0.86];

colors_dict_land_["loc_loc"] = [0.98, 0.92, 0.73];

colors_dict_land_["loc"] = [0.98, 0.95, 0.83];

colors_dict_land_["entr0"] = [1, 0.98, 0.92];

colors_dict_land_["entr1"] = [1, 0.98, 0.92];

colors_dict_land_["off_grid"] = [0.81, 0.9, 0.95];

colors_dict_land_["off_grid0"] = [0.81, 0.9, 0.95];

colors_dict_land_["off_grid1"] = [0.68, 0.83, 0.9];

colors_dict_land_["off_grid2"] = [0.68, 0.83, 0.9];

colors_dict_land_["path0"] = [0.93, 1, 0.9];

colors_dict_land_["path1"] = [0.93, 1, 0.9];

colors_dict_land_["path2"] = [0.93, 1, 0.9];

colors_dict_land_["green0"] = [0.86, 0.95, 0.81];

colors_dict_land_["green1"] = [0.86, 0.95, 0.81];

colors_dict_land_["green2"] = [0.86, 0.95, 0.81];

colors_dict_land_["off_grid0_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["off_grid1_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["off_grid2_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["loc_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["loc_loc_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["sec_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["sec_loc_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["sec_sec_os"] = [0.75, 0.9, 0.67];

colors_dict_land_["corner_park"] = [0.75, 0.9, 0.67];

colors_dict_land_["off_grid0_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["off_grid1_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["off_grid2_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["loc_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["loc_loc_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["sec_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["sec_loc_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["sec_sec_am"] = [0.85, 0.6, 0.66];

colors_dict_land_["off_grid_too_small"] = [1, 0.7, 1];

colors_dict_land_["too_deep"] = [1, 0.7, 1];

colors_dict_land_["concave_corner"] = [1, 0.7, 1];

colors_dict_land_["leftover"] = [1, 0.7, 1];

let colors_dict_bldg_ = {};

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

let footprints_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "bldg_footprint");

let facades_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "bldg_facade");

let roofs_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "bldg_roof");

await exec_Building_starter_node_8lrb9z2ypba_applyColours_(__params__, colors_dict_bldg_, listFlat([footprints_, facades_, roofs_]));
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_starter_node_4fznbcf45t_tree4half_(__params__, height_) {

let height_step_ = height_ / 6;

let width_ = (height_ / 3);

let width_step_ = width_ / 6;

let xyz0_ = [0, 0, 0];

let xyz1_ = [0.25, 0, 0];

let xyz2_ = [0.15, 0, height_step_ * 2];

let xyz3_ = [width_step_ * 3, 0, height_step_ * 3];

let xyz4_ = [width_, 0, height_step_ * 4];

let xyz5_ = [width_step_ * 3, 0, height_step_ * 5];

let xyz6_ = [0, 0, height_];

let xyzs_ = [xyz0_, xyz1_, xyz2_, xyz3_, xyz4_, xyz5_, xyz6_];

let mirror_ = [];

for (let  i_ of range(0, len(xyzs_))){

if (i_ > 0 && i_ < len(xyzs_) - 1){

let xyzs_mirror_ = [xyzs_[pythonList(i_, xyzs_.length)][pythonList(0, xyzs_[pythonList(i_, xyzs_.length)].length)] * -1, 0, xyzs_[pythonList(i_, xyzs_.length)][pythonList(2, xyzs_[pythonList(i_, xyzs_.length)].length)]];

__modules__.list.Add( mirror_, xyzs_mirror_, 'to_start' );
}
}

xyzs_ = listJoin(xyzs_, mirror_);

for (let  i_ of range(0, len(xyzs_))){

if (i_ > 2 && i_ < len(xyzs_) - 2 && i_ != 6){

xyzs_[pythonList(i_, xyzs_.length)][pythonList(2, xyzs_[pythonList(i_, xyzs_.length)].length)] = xyzs_[pythonList(i_, xyzs_.length)][pythonList(2, xyzs_[pythonList(i_, xyzs_.length)].length)] + rand(-height_step_, height_step_);

xyzs_[pythonList(i_, xyzs_.length)][pythonList(0, xyzs_[pythonList(i_, xyzs_.length)].length)] = xyzs_[pythonList(i_, xyzs_.length)][pythonList(0, xyzs_[pythonList(i_, xyzs_.length)].length)] + rand(-width_step_, width_step_);
}
}

return xyzs_;
}


async function exec_Building_starter_node_4fznbcf45t_tree4_(__params__, posi_, height_) {

let all_xyzs_ = [];

let cen_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let pln_ = [cen_, [1, 0, 0], [0, 1, 0]];

pln_ = plnLRotZ(pln_, JSON.parse(JSON.stringify(PI)) * rand(0, 1));

let height_step_ = height_ / 6;

height_ = height_ + rand(-height_step_, height_step_);

for (let  i_ of range(2)){

pln_ = plnLRotZ(pln_, (JSON.parse(JSON.stringify(PI)) / 2) * i_);

let xyzs_ = await exec_Building_starter_node_4fznbcf45t_tree4half_(__params__, height_);
if (__params__.terminated) { return __params__.model;}

let xyzs2_ = vecGtoL(xyzs_, pln_);

__modules__.list.Add( all_xyzs_, xyzs2_, 'to_end' );
}

let posis_ = __modules__.make.Position( __params__.model, all_xyzs_ );

let canopy_ = __modules__.make.Polygon( __params__.model, posis_ );

return canopy_;
}

async function exec_Building_starter_node_4fznbcf45t(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let trees_ = [];

if (__modules__.attrib.Get(__params__.model, null, 'add_trees')){

let tree_pts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pt', null), ['type', null], '==', "tree");

for (let  tree_pt_ of tree_pts_){

let tree_ = await exec_Building_starter_node_4fznbcf45t_tree4_(__params__, __modules__.query.Get(__params__.model, 'ps', tree_pt_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', tree_pt_).length)], __modules__.attrib.Get(__params__.model, null, 'tree_height_start'));
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( trees_, tree_, 'extend_end' );
}
}

__modules__.visualize.Color( __params__.model, trees_, [0.5, 1, 0.5] );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_Building_starter_node_7gepyjg285l(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let data_ = {};

data_["param_pcen_art_art_w"] = pcen_art_art_w_;

data_["param_pcen_art_sec_w"] = pcen_art_sec_w_;

data_["param_pcen_art_loc_w"] = pcen_art_loc_w_;

data_["param_pcen_art_w"] = pcen_art_w_;

data_["param_pcen_sec_sec_w"] = pcen_sec_sec_w_;

data_["param_pcen_sec_loc_w"] = pcen_sec_loc_w_;

data_["param_pcen_sec_w"] = pcen_sec_w_;

data_["param_pcen_loc_loc_w"] = pcen_loc_loc_w_;

data_["param_pcen_loc_w"] = pcen_loc_w_;

data_["param_pcen_og_w"] = pcen_og_w_;

data_["param_pcen_og2_w"] = pcen_og2_w_;

data_["param_pcen_art_art_d"] = pcen_art_art_d_;

data_["param_pcen_art_sec_d"] = pcen_art_sec_d_;

data_["param_pcen_art_loc_d"] = pcen_art_loc_d_;

data_["param_pcen_art_d"] = pcen_art_d_;

data_["param_pcen_sec_sec_d"] = pcen_sec_sec_d_;

data_["param_pcen_sec_loc_d"] = pcen_sec_loc_d_;

data_["param_pcen_sec_d"] = pcen_sec_d_;

data_["param_pcen_loc_loc_d"] = pcen_loc_loc_d_;

data_["param_pcen_loc_d"] = pcen_loc_d_;

data_["param_pcen_og_d"] = pcen_og_d_;

data_["param_pcen_og2_d"] = pcen_og2_d_;

data_["param_pcen_art_art_f"] = pcen_art_art_f_;

data_["param_pcen_art_sec_f"] = pcen_art_sec_f_;

data_["param_pcen_art_loc_f"] = pcen_art_loc_f_;

data_["param_pcen_art_f"] = pcen_art_f_;

data_["param_pcen_sec_sec_f"] = pcen_sec_sec_f_;

data_["param_pcen_sec_loc_f"] = pcen_sec_loc_f_;

data_["param_pcen_sec_f"] = pcen_sec_f_;

data_["param_pcen_loc_loc_f"] = pcen_loc_loc_f_;

data_["param_pcen_loc_f"] = pcen_loc_f_;

data_["param_pcen_og_f"] = pcen_og_f_;

data_["param_pcen_og2_f"] = pcen_og2_f_;

let __return_value__ = __modules__._Output.Return(__params__.model, data_);
return __return_value__;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_Building_starter_node_w5xf0jmbotm = __params__.model;
console.log("Executing Node: import");

__params__.model = result_exec_Building_starter_node_w5xf0jmbotm;

let result_exec_Building_starter_node_wz73f8oew4 = await exec_Building_starter_node_wz73f8oew4(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: gen footprints by axes");

__params__.model = result_exec_Building_starter_node_wz73f8oew4;

let result_exec_Building_starter_node_549psa6t6a = await exec_Building_starter_node_549psa6t6a(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: floors");

__params__.model = result_exec_Building_starter_node_549psa6t6a;

let result_exec_Building_starter_node_dn467r9w96k = await exec_Building_starter_node_dn467r9w96k(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: colors");

__params__.model = result_exec_Building_starter_node_dn467r9w96k;

let result_exec_Building_starter_node_8lrb9z2ypba = await exec_Building_starter_node_8lrb9z2ypba(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: trees");

__params__.model = result_exec_Building_starter_node_8lrb9z2ypba;

let result_exec_Building_starter_node_4fznbcf45t = await exec_Building_starter_node_4fznbcf45t(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: End");

__params__.model = result_exec_Building_starter_node_4fznbcf45t;

let result_exec_Building_starter_node_7gepyjg285l = await exec_Building_starter_node_7gepyjg285l(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);

return result_exec_Building_starter_node_7gepyjg285l;
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
    // console.log(name + ' = ' + val);
    return val;
}
function printInp(in_model,pcen_art_art_w,pcen_art_art_d,pcen_art_art_f,pcen_art_sec_w,pcen_art_sec_d,pcen_art_sec_f,pcen_art_loc_w,pcen_art_loc_d,pcen_art_loc_f,pcen_art_w,pcen_art_d,pcen_art_f,pcen_sec_sec_w,pcen_sec_sec_d,pcen_sec_sec_f,pcen_sec_loc_w,pcen_sec_loc_d,pcen_sec_loc_f,pcen_sec_w,pcen_sec_d,pcen_sec_f,pcen_loc_loc_w,pcen_loc_loc_d,pcen_loc_loc_f,pcen_loc_w,pcen_loc_d,pcen_loc_f,pcen_og_w,pcen_og_d,pcen_og_f,pcen_og2_w,pcen_og2_d,pcen_og2_f){
console.log("Calling function Building_starter() with the following arguments:\n" +
"  in_model = " + in_model + "\n" +
"  pcen_art_art_w = " + pcen_art_art_w + "\n" +
"  pcen_art_art_d = " + pcen_art_art_d + "\n" +
"  pcen_art_art_f = " + pcen_art_art_f + "\n" +
"  pcen_art_sec_w = " + pcen_art_sec_w + "\n" +
"  pcen_art_sec_d = " + pcen_art_sec_d + "\n" +
"  pcen_art_sec_f = " + pcen_art_sec_f + "\n" +
"  pcen_art_loc_w = " + pcen_art_loc_w + "\n" +
"  pcen_art_loc_d = " + pcen_art_loc_d + "\n" +
"  pcen_art_loc_f = " + pcen_art_loc_f + "\n" +
"  pcen_art_w = " + pcen_art_w + "\n" +
"  pcen_art_d = " + pcen_art_d + "\n" +
"  pcen_art_f = " + pcen_art_f + "\n" +
"  pcen_sec_sec_w = " + pcen_sec_sec_w + "\n" +
"  pcen_sec_sec_d = " + pcen_sec_sec_d + "\n" +
"  pcen_sec_sec_f = " + pcen_sec_sec_f + "\n" +
"  pcen_sec_loc_w = " + pcen_sec_loc_w + "\n" +
"  pcen_sec_loc_d = " + pcen_sec_loc_d + "\n" +
"  pcen_sec_loc_f = " + pcen_sec_loc_f + "\n" +
"  pcen_sec_w = " + pcen_sec_w + "\n" +
"  pcen_sec_d = " + pcen_sec_d + "\n" +
"  pcen_sec_f = " + pcen_sec_f + "\n" +
"  pcen_loc_loc_w = " + pcen_loc_loc_w + "\n" +
"  pcen_loc_loc_d = " + pcen_loc_loc_d + "\n" +
"  pcen_loc_loc_f = " + pcen_loc_loc_f + "\n" +
"  pcen_loc_w = " + pcen_loc_w + "\n" +
"  pcen_loc_d = " + pcen_loc_d + "\n" +
"  pcen_loc_f = " + pcen_loc_f + "\n" +
"  pcen_og_w = " + pcen_og_w + "\n" +
"  pcen_og_d = " + pcen_og_d + "\n" +
"  pcen_og_f = " + pcen_og_f + "\n" +
"  pcen_og2_w = " + pcen_og2_w + "\n" +
"  pcen_og2_d = " + pcen_og2_d + "\n" +
"  pcen_og2_f = " + pcen_og2_f + "\n" +
'')};


// printInp(in_model,pcen_art_art_w,pcen_art_art_d,pcen_art_art_f,pcen_art_sec_w,pcen_art_sec_d,pcen_art_sec_f,pcen_art_loc_w,pcen_art_loc_d,pcen_art_loc_f,pcen_art_w,pcen_art_d,pcen_art_f,pcen_sec_sec_w,pcen_sec_sec_d,pcen_sec_sec_f,pcen_sec_loc_w,pcen_sec_loc_d,pcen_sec_loc_f,pcen_sec_w,pcen_sec_d,pcen_sec_f,pcen_loc_loc_w,pcen_loc_loc_d,pcen_loc_loc_f,pcen_loc_w,pcen_loc_d,pcen_loc_f,pcen_og_w,pcen_og_d,pcen_og_f,pcen_og2_w,pcen_og2_d,pcen_og2_f);
const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_Building_starter(__params__, in_model, pcen_art_art_w, pcen_art_art_d, pcen_art_art_f, pcen_art_sec_w, pcen_art_sec_d, pcen_art_sec_f, pcen_art_loc_w, pcen_art_loc_d, pcen_art_loc_f, pcen_art_w, pcen_art_d, pcen_art_f, pcen_sec_sec_w, pcen_sec_sec_d, pcen_sec_sec_f, pcen_sec_loc_w, pcen_sec_loc_d, pcen_sec_loc_f, pcen_sec_w, pcen_sec_d, pcen_sec_f, pcen_loc_loc_w, pcen_loc_loc_d, pcen_loc_loc_f, pcen_loc_w, pcen_loc_d, pcen_loc_f, pcen_og_w, pcen_og_d, pcen_og_f, pcen_og2_w, pcen_og2_d, pcen_og2_f);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default Building_starter;
