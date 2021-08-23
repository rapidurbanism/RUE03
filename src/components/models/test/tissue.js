/**
 * to use this code: import Tissue from this js file as well as the GI module
 * run Tissue with the GI module as input along with other start node input
 * e.g.:
 * const Tissue = require('./Tissue.js').Tissue
 * const module = require('gi-module')
 * const result = await Tissue(module, start_input_1, start_input_2, ...);
 *
 * returns: a json object:
 *   _ result.model -> gi model of the flowchart
 *   _ result.result -> returned output of the flowchart, if the flowchart does not return any value, result.result is the model of the flowchart
 */

// Parameter: {"name":"in_model","value":"''","type":0}
// Parameter: {"name":"fire","value":false,"type":2}
// Parameter: {"name":"off_art_front","value":5,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_art_side","value":2.2,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_art_back","value":3.4,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_sec_front","value":2.4,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_sec_side","value":0,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_sec_back","value":1.5,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_loc_front","value":0,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_loc_side","value":1,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_loc_back","value":1.7,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_og_front","value":1.1,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_og_side","value":0,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"off_og_back","value":1.8,"type":1,"min":"0","max":"10","step":"0.1"}
// Parameter: {"name":"ogc_plot_w","value":"8","type":1,"min":"3","max":"12","step":"0.1"}
// Parameter: {"name":"ogc_path_w","value":3,"type":1,"min":"3","max":"10","step":"0.1"}
// Parameter: {"name":"ogc_open_w","value":10,"type":1,"min":"3","max":"10","step":"v"}
// Parameter: {"name":"ogc_open_l","value":5.2,"type":1,"min":"0","max":"15","step":"0.1"}
// Parameter: {"name":"ogc2_plot_w","value":4.1,"type":1,"min":"3","max":"12","step":"0.1"}
// Parameter: {"name":"ogc2_plot_d","value":10,"type":1,"min":"10","max":"25","step":"0.1"}
// Parameter: {"name":"ogc2_path_w","value":3.7,"type":1,"min":"3","max":"10","step":"0.1"}
// Parameter: {"name":"ogc2_xpath_w","value":"5","type":1,"min":"3","max":"10","step":"0.1"}
// Parameter: {"name":"floors_art","value":5,"type":1,"min":"1","max":"10","step":"1"}
// Parameter: {"name":"floors_sec","value":4,"type":1,"min":"1","max":"10","step":"1"}
// Parameter: {"name":"floors_loc","value":3,"type":1,"min":"1","max":"10","step":"1"}
// Parameter: {"name":"floors_og","value":2,"type":1,"min":"1","max":"10","step":"1"}
// Parameter: {"name":"m_floors_art","value":27,"type":1,"min":"1","max":"100","step":"1"}
// Parameter: {"name":"m_floors_sec","value":"50","type":1,"min":"1","max":"100","step":"1"}
// Parameter: {"name":"m_floors_loc","value":93,"type":1,"min":"1","max":"100","step":"1"}


async function Tissue(__modules__, in_model, fire, off_art_front, off_art_side, off_art_back, off_sec_front, off_sec_side, off_sec_back, off_loc_front, off_loc_side, off_loc_back, off_og_front, off_og_side, off_og_back, ogc_plot_w, ogc_path_w, ogc_open_w, ogc_open_l, ogc2_plot_w, ogc2_plot_d, ogc2_path_w, ogc2_xpath_w, floors_art, floors_sec, floors_loc, floors_og, m_floors_art, m_floors_sec, m_floors_loc) {

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


async function exec_Tissue(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){

async function exec_Tissue_node_a3ts9d64my4(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let coll_hood_ = await __modules__.io.Import( __params__.model, in_model_, 'gi' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_qaejaupmzo_createCluster_(__params__, part_, off_grid_type_) {

let is_off_grid2_ = off_grid_type_ == 2;

let block_id_ = __modules__.attrib.Get(__params__.model, part_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, part_, 'block_type');

let cluster_type_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_type');

let swap_orientation_ = __modules__.attrib.Get(__params__.model, part_, 'block_type')== "sec";

let result_ = await exec_Tissue_node_qaejaupmzo__divPartIntoPlots_(__params__, part_, is_off_grid2_);
if (__params__.terminated) { return __params__.model;}

if (result_ == null){

return null;
}

let cluster_plots_ = await exec_Tissue_node_qaejaupmzo__trimPgon_(__params__, part_, result_[pythonList(0, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_plots_, 'class',  "plot" );

__modules__.attrib.Set(__params__.model, cluster_plots_, 'type',  "off_grid" + off_grid_type_ );

let cluster_path_ = await exec_Tissue_node_qaejaupmzo__trimPgon_(__params__, part_, result_[pythonList(1, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_path_, 'class',  "path" );

__modules__.attrib.Set(__params__.model, cluster_path_, 'type',  "path" + off_grid_type_ );

let cluster_green_ = await exec_Tissue_node_qaejaupmzo__trimPgon_(__params__, part_, result_[pythonList(2, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_green_, 'class',  "path" );

__modules__.attrib.Set(__params__.model, cluster_green_, 'type',  "green" + off_grid_type_ );

let all_cluster_ = listFlat([cluster_plots_, cluster_path_, cluster_green_]);

__modules__.attrib.Set(__params__.model, all_cluster_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, all_cluster_, 'block_type',  block_type_ );

if (cluster_type_ != undefined){

__modules__.attrib.Set(__params__.model, all_cluster_, 'cluster_type',  cluster_type_ );
}

let cluster_plots_e_ = __modules__.query.Get(__params__.model, '_e', cluster_plots_);

await exec_Tissue_node_qaejaupmzo__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', part_), __modules__.query.Get(__params__.model, '_e', all_cluster_));
if (__params__.terminated) { return __params__.model;}

await exec_Tissue_node_qaejaupmzo__transferEdgeAttribsBtwTouchingParts_(__params__, all_cluster_);
if (__params__.terminated) { return __params__.model;}

let path_type_ = "path" + off_grid_type_;

let green_type_ = "green" + off_grid_type_;

for (let  plot_ of cluster_plots_){

let plot_e_ = __modules__.query.Get(__params__.model, '_e', plot_);

let edges_front_ = __modules__.query.Filter(__params__.model, plot_e_, ['road', null], '==', path_type_);

if (len(edges_front_) == 0){

edges_front_ = __modules__.query.Filter(__params__.model, plot_e_, ['road', null], '==', green_type_);
}

let idx_ = listFind(plot_e_, edges_front_[pythonList(0, edges_front_.length)]);

__modules__.modify.Shift( __params__.model, plot_, idx_ );
}

let part_off_ = __modules__.poly2d.OffsetMitre( __params__.model, part_, -off_og_back_, 10, 'square_end' );

let path_off_ = __modules__.poly2d.OffsetMitre( __params__.model, cluster_path_, off_og_front_, 10, 'square_end' );

let green_off_ = __modules__.poly2d.OffsetMitre( __params__.model, cluster_green_, off_og_front_, 10, 'square_end' );

let div_plines_ = __modules__.make.Polyline( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', cluster_plots_), ['road', null], '==', ("off_grid" + off_grid_type_)), 'open' );

let off_sides_ = off_og_side_;

if (off_sides_ == 0){

off_sides_ = 0.01;
}

let div_off_ = __modules__.poly2d.OffsetMitre( __params__.model, div_plines_, off_sides_, 10, 'square_end' );

let offs_ = listFlat([path_off_, green_off_, div_off_]);

let footprints_ = __modules__.poly2d.Boolean( __params__.model, part_off_, offs_, 'difference' );

for (let  footprint_ of footprints_){

let area_ = __modules__.calc.Area( __params__.model, footprint_ );

if (area_ < 10){

__modules__.modify.Delete( __params__.model, footprint_, 'delete_selected' );
}
}

footprints_ = __modules__.query.Get(__params__.model, 'pg', footprints_);

__modules__.attrib.Set(__params__.model, footprints_, 'type',  __modules__.attrib.Get(__params__.model, part_, 'type') );

__modules__.attrib.Set(__params__.model, footprints_, 'class',  "max_footprint" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', part_off_), 'road',  "" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', div_off_), 'road',  "off_grid" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', path_off_), 'road',  "path" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', green_off_), 'road',  "green" );

let all_off_ = listJoin(offs_, part_off_);

await exec_Tissue_node_qaejaupmzo__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', all_off_), __modules__.query.Get(__params__.model, '_e', footprints_));
if (__params__.terminated) { return __params__.model;}

let rem_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', footprints_), ['road', null], '==', null);

__modules__.attrib.Set(__params__.model, rem_edges_, 'road',  "side" );

__modules__.modify.Move( __params__.model, footprints_, [0, 0, 0.05] );

__modules__.modify.Delete( __params__.model, [part_, div_plines_, offs_, part_off_], 'delete_selected' );

return result_;
}


async function exec_Tissue_node_qaejaupmzo__divPartIntoPlots_(__params__, part_, is_off_grid2_) {

let entr_ = __modules__.attrib.Get(__params__.model, part_, 'entr');

if (entr_ == undefined){

return null;
}

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let dead_end_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_id')== undefined;

let front_vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(0, edges_.length)] );

let side_vecs_ = await exec_Tissue_node_qaejaupmzo__getSideVecs_(__params__, edges_);
if (__params__.terminated) { return __params__.model;}

let vec_ = vecAdd(side_vecs_[pythonList(0, side_vecs_.length)], side_vecs_[pythonList(1, side_vecs_.length)]);

let ray_ = rayMake(vecAdd(entr_, vecNorm(vec_)), vecSetLen(vec_, 500));

let edge_rays_ = __modules__.calc.Ray( __params__.model, edges_ );

let isect_ = await exec_Tissue_node_qaejaupmzo__isect_(__params__, ray_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if (isect_ == null){

return null;
}

if (is_off_grid2_){

let result_ = await exec_Tissue_node_qaejaupmzo__XXdivOG2PartToPlots_(__params__, part_, isect_[pythonList(0, isect_.length)], edge_rays_);
if (__params__.terminated) { return __params__.model;}

return result_;
}

dead_end_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_id')== undefined;

if (dead_end_){

let result_ = await exec_Tissue_node_qaejaupmzo__XXdivOG01DeadToPlots_(__params__, part_, isect_[pythonList(0, isect_.length)], edge_rays_);
if (__params__.terminated) { return __params__.model;}

return result_;
}

let result_ = await exec_Tissue_node_qaejaupmzo__XXdivOG1LinkToPlots_(__params__, part_, isect_[pythonList(0, isect_.length)]);
if (__params__.terminated) { return __params__.model;}

return result_;
}


async function exec_Tissue_node_qaejaupmzo__XXdivOG01DeadToPlots_(__params__, part_, ray_isect_, edge_rays_) {

let ____ = "_XXdivOG01DeadToPlots";

let plots_ = [];

let paths_ = [];

let greens_ = [];

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let entr_ = __modules__.attrib.Get(__params__.model, part_, 'entr');

let vec_ = vecFromTo(entr_, ray_isect_);

let cluster_length_ = vecLen(vec_);

let start_ = entr_;

let start_x_ = vecSub(entr_, vecSetLen(vec_, 100));

let end_ = entr_;

let num_plots_ = floor((cluster_length_ - (off_og_back_ * 2)) / ogc_plot_w_);

let num_open_plots_ = round(ogc_open_l_ / ogc_plot_w_);

if (num_open_plots_ > num_plots_){

num_open_plots_ = num_plots_;
}

let num_path_plots_ = num_plots_ - num_open_plots_;

if (num_plots_ < 1){

let plot_ = __modules__.make.Copy( __params__.model, part_, null );

__modules__.attrib.Set(__params__.model, plot_, 'axis',  vecNorm(vec_) );

return [[plot_], [], []];
}

if (num_plots_ == 2){

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG01DeadTo2Plots_(__params__, part_, start_, vec_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

return result_;
}

num_path_plots_ = num_path_plots_ - 1;

if (num_path_plots_ < 0){

num_path_plots_ = 0;
}

if (num_path_plots_ > 0){

let leng_ = (num_path_plots_ * ogc_plot_w_) + off_og_back_ - off_og_side_;

end_ = vecAdd(start_, vecSetLen(vec_, leng_));

let path_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, start_x_, end_, ogc_path_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( paths_, path_, 'to_end' );

let end2_ = start_;

for (let  i_ of range(num_path_plots_)){

let start2_ = end2_;

end2_ = vecAdd(start2_, vecSetLen(vec_, ogc_plot_w_));

if (start2_ == entr_){

end2_ = vecAdd(end2_, vecSetLen(vec_, off_og_back_ - off_og_side_));

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start_x_, end2_, ogc_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start2_, end2_, ogc_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}
}
}

____ = num_open_plots_;

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG01DeadOpenSpacePlots_(__params__, num_open_plots_, end_, ray_isect_, entr_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, result_[pythonList(0, result_.length)], 'extend_end' );

__modules__.list.Add( greens_, result_[pythonList(2, result_.length)], 'extend_end' );

return [plots_, paths_, greens_];
}


async function exec_Tissue_node_qaejaupmzo__XXdivOG1LinkToPlots_(__params__, part_, ray_isect_) {

let ____ = "_XXdivOG1LinkToPlots";

let plots_ = [];

let paths_ = [];

let greens_ = [];

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let entr_ = __modules__.attrib.Get(__params__.model, part_, 'entr');

let vec_ = vecFromTo(entr_, ray_isect_);

let cluster_length_ = vecLen(vec_);

let ray_ = rayMake(entr_, vec_);

let start_ = entr_;

let start_x_ = vecSub(entr_, vecSetLen(vec_, 100));

let end_ = entr_;

let num_plots_ = floor((cluster_length_ - off_og_back_ + off_og_side_) / ogc_plot_w_);

if (num_plots_ < 1){

return null;
}

let num_open_plots_ = round(ogc_open_l_ / ogc_plot_w_);

if (num_open_plots_ > num_plots_){

num_open_plots_ = num_plots_;
}

let num_path_plots_ = num_plots_ - num_open_plots_;

if (num_path_plots_ < 0){

num_path_plots_ = 0;
}

if (num_path_plots_ > 0){

let leng_ = (num_path_plots_ * ogc_plot_w_) + off_og_back_ - off_og_side_;

end_ = vecAdd(start_, vecSetLen(vec_, leng_));

let path_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, start_x_, end_, ogc_path_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( paths_, path_, 'to_end' );

let end2_ = start_;

for (let  i_ of range(num_path_plots_)){

let start2_ = end2_;

end2_ = vecAdd(start2_, vecSetLen(vec_, ogc_plot_w_));

if (start2_ == entr_){

end2_ = vecAdd(end2_, vecSetLen(vec_, off_og_back_ - off_og_side_));

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start_x_, end2_, ogc_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start2_, end2_, ogc_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}
}
}

let end2_ = vecSub(ray_isect_, vecSetLen(vec_, off_og_back_));

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG1LinkOpenSpacePlots_(__params__, num_open_plots_, end_, end2_, entr_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, result_[pythonList(0, result_.length)], 'extend_end' );

__modules__.list.Add( greens_, result_[pythonList(2, result_.length)], 'extend_end' );

let end3_ = vecAdd(ray_isect_, vecSetLen(vec_, 100));

let path_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, end2_, end3_, ogc2_path_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( paths_, path_, 'extend_end' );

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, end2_, end3_, ogc2_path_w_ / 2, ogc_open_w_ / 2);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );

let off_grid_parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['cluster_id', null], '==',  __modules__.attrib.Get(__params__.model, part_, 'cluster_id'));

let off_grid2_ = __modules__.query.Filter(__params__.model, off_grid_parts_, ['type', null], '==', "off_grid2");

__modules__.attrib.Set(__params__.model, off_grid2_, 'entr',  ray_isect_ );

edges_ = __modules__.query.Get(__params__.model, '_e', off_grid2_);

let front_edge_ = await exec_Tissue_node_qaejaupmzo__closestEdge_(__params__, edges_, entr_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Shift( __params__.model, off_grid2_, listFind(edges_, front_edge_) );

return [plots_, paths_, greens_];
}


async function exec_Tissue_node_qaejaupmzo__XXdivOG2PartToPlots_(__params__, part_, ray_isect_, edge_rays_) {

let ____ = "_XXdivOG2PartToPlots";

let entr_ = __modules__.attrib.Get(__params__.model, part_, 'entr');

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let plots_ = [];

let paths_ = [];

let greens_ = [];

let vec_ = vecFromTo(entr_, ray_isect_);

let cluster_length_ = vecLen(vec_) - ogc2_plot_d_ - ogc2_xpath_w_;

let ray_ = rayMake(entr_, vec_);

let start_ = entr_;

let start_x_ = vecSub(entr_, vecSetLen(vec_, 100));

let end_ = entr_;

let padding_start_ = off_og_back_ - off_og_side_;

let padding_end_ = off_og_front_ - off_og_side_;

let padding_ = padding_start_ + padding_end_;

let cluster_length_pad_ = cluster_length_ - padding_start_ - padding_end_;

let num_path_plots_ = floor(cluster_length_pad_ / ogc2_plot_w_);

if (num_path_plots_ < 0){

num_path_plots_ = 0;
}

if (num_path_plots_ > 0){

let path_length_ = (num_path_plots_ * ogc2_plot_w_) + padding_;

end_ = vecAdd(start_, vecSetLen(vec_, path_length_));

let path_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, start_x_, end_, ogc2_path_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( paths_, path_, 'to_end' );

let end2_ = start_;

for (let  i_ of range(num_path_plots_)){

let start2_ = end2_;

end2_ = vecAdd(start2_, vecSetLen(vec_, ogc2_plot_w_));

if (i_ == 0){

end2_ = vecAdd(end2_, vecSetLen(vec_, padding_start_));

if (num_path_plots_ == 1){

end2_ = vecAdd(end2_, vecSetLen(vec_, padding_end_));
}

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start_x_, end2_, ogc2_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {
if(i_ == num_path_plots_ - 1){

end2_ = vecAdd(end2_, vecSetLen(vec_, padding_end_));

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start2_, end2_, ogc2_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start2_, end2_, ogc2_path_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}
}
}
}

if (len(plots_) == 0){

let plot_ = __modules__.make.Copy( __params__.model, part_, null );

return [plot_, paths_, greens_];
}

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG2Cross_(__params__, end_, vec_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, result_[pythonList(0, result_.length)], 'extend_end' );

__modules__.list.Add( paths_, result_[pythonList(1, result_.length)], 'extend_end' );

__modules__.list.Add( greens_, result_[pythonList(2, result_.length)], 'extend_end' );

return [plots_, paths_, greens_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG01DeadTo2Plots_(__params__, part_, start_, vec_, edge_rays_) {

let width_ = ogc_path_w_;

let has_open_ = round(ogc_open_l_ / ogc_plot_w_) > 0;

if (has_open_){

width_ = ogc_open_w_;
}

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let xyz0_ = vecSub(start_, vecSetLen(vec_, 100));

let xyz1_ = vecAdd(start_, vecSetLen(vec_, ogc_plot_w_));

let xyz2_ = vecAdd(xyz1_, vecSetLen(vec_, 100));

vec_perp_ = vecSetLen(vec_perp_, width_ / 2);

let xyz0_left1_ = vecSub(xyz0_, vec_perp_);

let xyz1_left1_ = vecSub(xyz1_, vec_perp_);

let xyz0_right1_ = vecAdd(xyz0_, vec_perp_);

let xyz1_right1_ = vecAdd(xyz1_, vec_perp_);

vec_perp_ = vecSetLen(vec_perp_, 100);

let xyz0_left2_ = vecSub(xyz0_, vec_perp_);

let xyz2_left2_ = vecSub(xyz2_, vec_perp_);

let xyz0_right2_ = vecAdd(xyz0_, vec_perp_);

let xyz2_right2_ = vecAdd(xyz2_, vec_perp_);

let xyzs_ = [xyz1_left1_, xyz0_left1_, xyz0_right1_, xyz1_right1_];

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let path_ = __modules__.make.Polygon( __params__.model, posis_ );

xyzs_ = [xyz0_left1_, xyz1_left1_, xyz1_, xyz2_, xyz2_left2_, xyz0_left2_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_left_ = __modules__.make.Polygon( __params__.model, posis_ );

xyzs_ = [xyz1_, xyz1_right1_, xyz0_right1_, xyz0_right2_, xyz2_right2_, xyz2_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_right_ = __modules__.make.Polygon( __params__.model, posis_ );

let result_ = [[plot_left_, plot_right_], [path_], []];

if (has_open_){

result_ = [[plot_left_, plot_right_], [], [path_]];
}

return result_;
}


async function exec_Tissue_node_qaejaupmzo__makeOG01DeadOpenSpacePlots_(__params__, num_open_plots_, start_, end_, entr_) {

let vec_ = vecFromTo(start_, end_);

let greens_ = [];

let plots_ = [];

let start_x_ = vecSub(entr_, vecSetLen(vec_, 100));

let padding_front_ = off_og_back_ - off_og_side_;

let end2_ = start_;

if (num_open_plots_ > 0){

let open_length_ = num_open_plots_ * ogc_plot_w_;

end_ = vecAdd(start_, vecSetLen(vec_, open_length_));

let start3_ = start_;

if (start3_ == entr_){

open_length_ = (num_open_plots_ * ogc_plot_w_) + padding_front_;

end_ = vecAdd(start_, vecSetLen(vec_, open_length_));

start3_ = start_x_;
}

let green_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, start3_, end_, ogc_open_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( greens_, green_, 'extend_end' );

for (let  i_ of range(num_open_plots_)){

let start2_ = end2_;

end2_ = vecAdd(start2_, vecSetLen(vec_, ogc_plot_w_));

start3_ = start2_;

if (start3_ == entr_){

start3_ = start_x_;

end2_ = vecAdd(end2_, vecSetLen(vec_, padding_front_));
}

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start3_, end2_, ogc_open_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}
}

start_ = end2_;

end_ = vecAdd(start_, vec_);

let offset_ = 3;

if (num_open_plots_ > 0){

offset_ = ogc_open_w_ / 2;
}

else {
if(num_open_plots_ > 0){

offset_ = ogc_path_w_ / 2;
}
}

let plot_ = await exec_Tissue_node_qaejaupmzo__makeOG01DeadLastPlotPair_(__params__, start_, end_, offset_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );

return [plots_, [], greens_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG01DeadLastPlotPair_(__params__, start_, end_, offset_) {

let width_ = 200;

let vec_ = vecSetLen(vecFromTo(start_, end_), 200);

let vec_perp_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], width_);

let xyz0_ = vecSub(start_, vecSetLen(vec_perp_, offset_));

let xyz1_ = start_;

let xyz2_ = vecAdd(start_, vec_);

let xyz3_ = vecSub(xyz2_, vec_perp_);

let xyz4_ = vecSub(start_, vec_perp_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_, xyz4_] );

let pgon1_ = __modules__.make.Polygon( __params__.model, posis_ );

xyz0_ = start_;

xyz1_ = vecAdd(xyz0_, vecSetLen(vec_perp_, offset_));

xyz2_ = vecAdd(xyz0_, vec_perp_);

xyz3_ = vecAdd(xyz2_, vec_);

xyz4_ = end_;

posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_, xyz4_] );

let pgon2_ = __modules__.make.Polygon( __params__.model, posis_ );

return [pgon1_, pgon2_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG1LinkOpenSpacePlots_(__params__, num_open_plots_, start_, end_, entr_) {

let vec_ = vecFromTo(start_, end_);

let greens_ = [];

let plots_ = [];

let start_x_ = vecSub(entr_, vecSetLen(vec_, 100));

if (num_open_plots_ > 0){

let green_ = await exec_Tissue_node_qaejaupmzo__makePath_(__params__, start_, end_, ogc_open_w_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( greens_, green_, 'extend_end' );

let end2_ = start_;

for (let  i_ of range(num_open_plots_)){

let start2_ = end2_;

end2_ = vecAdd(start2_, vecSetLen(vec_, ogc_plot_w_));

if (i_ == num_open_plots_ - 1){

end2_ = vecAdd(start2_, vecSetLen(vec_, 100));
}

if (start2_ == entr_){

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start_x_, end2_, ogc_open_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {

let plot_ = await exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start2_, end2_, ogc_open_w_ / 2, 200);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}
}
}

return [plots_, [], greens_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG2Cross_(__params__, start_, vec_, edge_rays_) {

let plots_ = [];

let paths_ = [];

let greens_ = [];

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let start_bit_frwrd_ = vecAdd(start_, vecSetLen(vec_, 1));

let ray_left_ = rayMake(start_bit_frwrd_, vecSetLen(vec_perp_, -100));

let ray_right_ = rayMake(start_bit_frwrd_, vecSetLen(vec_perp_, 100));

let isect_left_ = await exec_Tissue_node_qaejaupmzo__isect_(__params__, ray_left_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

let isect_right_ = await exec_Tissue_node_qaejaupmzo__isect_(__params__, ray_right_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if ((isect_left_ == null || isect_right_ == null)){

let plot_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossOnePlot_(__params__, start_, vecAdd(start_, vecSetLen(vec_, 200)), 100);
if (__params__.terminated) { return __params__.model;}

return [[plot_], [], []];
}

let xyz_left_ = vecAdd(isect_left_[pythonList(0, isect_left_.length)], vecSetLen(vec_perp_, off_og_back_));

let xyz_right_ = vecSub(isect_right_[pythonList(0, isect_right_.length)], vecSetLen(vec_perp_, off_og_back_));

let cross_dist_ = distance(xyz_left_, xyz_right_);

let cross_num_ = floor(cross_dist_ / ogc2_plot_w_);

if (cross_num_ == 0){

cross_num_ = 1;
}

if (cross_num_ > 2){

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossRowPlots_(__params__, start_, vec_, xyz_left_, xyz_right_, cross_num_);
if (__params__.terminated) { return __params__.model;}

return result_;
}

else {

let result_ = await exec_Tissue_node_qaejaupmzo__makeOG2Cross2Plots_(__params__, start_, vec_, xyz_left_, xyz_right_, cross_num_);
if (__params__.terminated) { return __params__.model;}

return result_;
}

return [[], [], []];
}


async function exec_Tissue_node_qaejaupmzo__makeOG2CrossRowPlots_(__params__, start_, vec_, xyz_left_, xyz_right_, num_) {

let plots_ = [];

let paths_ = [];

let greens_ = [];

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let cross_dist_ = distance(xyz_left_, xyz_right_);

let cross_plot_width_ = cross_dist_ / num_;

vec_perp_ = vecSetLen(vec_perp_, cross_plot_width_);

let dist_left_ = distance(start_, xyz_left_) - cross_plot_width_;

let dist_right_ = distance(start_, xyz_right_) - cross_plot_width_;

if (dist_left_ < ogc2_path_w_ / 2){

dist_left_ = ogc2_path_w_ / 2;
}

if (dist_right_ < ogc2_path_w_ / 2){

dist_right_ = ogc2_path_w_ / 2;
}

let start2_ = vecSub(vecSub(xyz_left_, vecSetLen(vec_perp_, 100)), vecNorm(vec_));

let end2_ = vecAdd(start2_, vecSetLen(vec_, 100));

let plot_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossOnePlot_(__params__, start2_, end2_, 200 + (cross_plot_width_ * 2));
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );

start2_ = vecSub(vecAdd(xyz_right_, vecSetLen(vec_perp_, 100)), vecNorm(vec_));

end2_ = vecAdd(start2_, vecSetLen(vec_, 100));

plot_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossOnePlot_(__params__, start2_, end2_, 200 + (cross_plot_width_ * 2));
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );

let end_ = vecAdd(start_, vecSetLen(vec_, ogc2_xpath_w_));

let cross_path_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossPath_(__params__, start_, end_, dist_left_, dist_right_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( greens_, cross_path_, 'extend_end' );

vec_ = vecSetLen(vec_, ogc2_xpath_w_);

let xyz_left2_ = vecAdd(xyz_left_, vec_);

for (let  i_ of range(1, num_ - 1)){

start2_ = vecSub(vecAdd(xyz_left2_, vecMult(vec_perp_, i_ + 0.5)), vecNorm(vec_));

end2_ = vecAdd(start2_, vecSetLen(vec_, 100));

plot_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossOnePlot_(__params__, start2_, end2_, cross_plot_width_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

__modules__.attrib.Set(__params__.model, plots_, 'axis',  vecNorm(vec_) );

return [plots_, paths_, greens_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG2Cross2Plots_(__params__, start_, vec_, xyz_left_, xyz_right_, num_) {

let plots_ = [];

let paths_ = [];

let greens_ = [];

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let cross_dist_ = distance(xyz_left_, xyz_right_);

let cross_plot_width_ = cross_dist_ / num_;

vec_perp_ = vecSetLen(vec_perp_, cross_plot_width_);

let dist_left_ = distance(start_, xyz_left_);

let dist_right_ = distance(start_, xyz_right_);

if (dist_left_ < ogc2_path_w_ / 2){

dist_left_ = ogc2_path_w_ / 2;
}

if (dist_right_ < ogc2_path_w_ / 2){

dist_right_ = ogc2_path_w_ / 2;
}

let end_ = vecAdd(start_, vecSetLen(vec_, ogc2_xpath_w_));

let cross_path_ = await exec_Tissue_node_qaejaupmzo__makeOG2CrossPath_(__params__, start_, end_, ogc_open_w_ / 2, ogc_open_w_ / 2);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( greens_, cross_path_, 'extend_end' );

let mid_ = end_;

end_ = vecAdd(mid_, vecSetLen(vec_, 100));

let vec_perp2_ = vecSetLen(vec_perp_, ogc_open_w_ / 2);

let start_left_ = vecSub(start_, vec_perp2_);

let mid_left_ = vecSub(mid_, vec_perp2_);

let start_right_ = vecAdd(start_, vec_perp2_);

let mid_right_ = vecAdd(mid_, vec_perp2_);

let vec_perp3_ = vecSetLen(vec_perp_, 100);

let start_left2_ = vecSub(start_, vec_perp3_);

let mid_left2_ = vecSub(mid_, vec_perp3_);

let end_left2_ = vecSub(end_, vec_perp3_);

let start_right2_ = vecAdd(start_, vec_perp3_);

let mid_right2_ = vecAdd(mid_, vec_perp3_);

let end_right2_ = vecAdd(end_, vec_perp3_);

if (num_ == 2){

let xyzs_ = [mid_, end_, end_left2_, start_left2_, start_left_, mid_left_];

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_ = __modules__.make.Polygon( __params__.model, posis_ );

__modules__.list.Add( plots_, plot_, 'extend_end' );

xyzs_ = [mid_, mid_right_, start_right_, start_right2_, end_right2_, end_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

plot_ = __modules__.make.Polygon( __params__.model, posis_ );

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

else {

let xyzs_ = [start_left_, mid_left_, mid_right_, start_right_, start_right2_, end_right2_, end_left2_, start_left2_];

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_ = __modules__.make.Polygon( __params__.model, posis_ );

__modules__.list.Add( plots_, plot_, 'extend_end' );
}

__modules__.attrib.Set(__params__.model, plots_, 'axis',  vecNorm(vec_) );

return [plots_, paths_, greens_];
}


async function exec_Tissue_node_qaejaupmzo__makeOG2CrossPath_(__params__, start_, end_, width_left_, width_right_) {

let vec_ = vecFromTo(start_, end_);

let vec_left_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], -width_left_);

let vec_right_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], width_right_);

let xyz0_ = vecAdd(start_, vec_right_);

let xyz1_ = vecAdd(end_, vec_right_);

let xyz2_ = vecAdd(end_, vec_left_);

let xyz3_ = vecAdd(start_, vec_left_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_Tissue_node_qaejaupmzo__makeOG2OneBigPlot_(__params__, start_, end_, width_) {

let vec_ = vecFromTo(start_, end_);

let vec_perp_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], width_ / 2);

let xyz0_ = vecAdd(start_, vec_perp_);

let xyz1_ = vecAdd(end_, vec_perp_);

let xyz2_ = vecSub(end_, vec_perp_);

let xyz3_ = vecSub(start_, vec_perp_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_Tissue_node_qaejaupmzo__makeOG2CrossOnePlot_(__params__, start_, end_, width_) {

let vec_ = vecFromTo(start_, end_);

let vec_perp_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], width_ / 2);

let xyz0_ = vecAdd(start_, vec_perp_);

let xyz1_ = vecAdd(end_, vec_perp_);

let xyz2_ = vecSub(end_, vec_perp_);

let xyz3_ = vecSub(start_, vec_perp_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_Tissue_node_qaejaupmzo__makePlotPairs_(__params__, start_, end_, offset1_, offset2_) {

let vec_ = vecFromTo(start_, end_);

let vec_perp_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], offset2_ - offset1_);

let xyz0_ = vecSub(start_, vecSetLen(vec_perp_, offset1_));

let xyz1_ = vecAdd(xyz0_, vec_);

let xyz2_ = vecSub(xyz1_, vec_perp_);

let xyz3_ = vecSub(xyz2_, vec_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon1_ = __modules__.make.Polygon( __params__.model, posis_ );

xyz0_ = vecAdd(end_, vecSetLen(vec_perp_, offset1_));

xyz1_ = vecSub(xyz0_, vec_);

xyz2_ = vecAdd(xyz1_, vec_perp_);

xyz3_ = vecAdd(xyz2_, vec_);

posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon2_ = __modules__.make.Polygon( __params__.model, posis_ );

return [pgon1_, pgon2_];
}


async function exec_Tissue_node_qaejaupmzo__makePath_(__params__, start_, end_, width_) {

let vec_ = vecFromTo(start_, end_);

let vec_perp_ = vecSetLen([vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0], width_);

let xyz0_ = vecAdd(start_, vecMult(vec_perp_, 0.5));

let xyz1_ = vecAdd(xyz0_, vec_);

let xyz2_ = vecSub(xyz1_, vec_perp_);

let xyz3_ = vecSub(xyz2_, vec_);

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let pgon_ = __modules__.make.Polygon( __params__.model, posis_ );

return pgon_;
}


async function exec_Tissue_node_qaejaupmzo__trimPgon_(__params__, base_, pgons_) {

let pgons2_ = __modules__.poly2d.Boolean( __params__.model, pgons_, base_, 'intersect' );

__modules__.modify.Delete( __params__.model, pgons_, 'delete_selected' );

return pgons2_;
}


async function exec_Tissue_node_qaejaupmzo__getSideVecs_(__params__, edges_) {

let side_vecs_ = __modules__.calc.Vector( __params__.model, [edges_[pythonList(-1, edges_.length)], edges_[pythonList(1, edges_.length)]] );

let front_vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(0, edges_.length)] );

side_vecs_ = vecNorm(side_vecs_);

front_vec_ = vecNorm(front_vec_);

if (vecDot(side_vecs_[pythonList(0, side_vecs_.length)], front_vec_) > 0.9){

let vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(-2, edges_.length)] );

side_vecs_[pythonList(0, side_vecs_.length)] = vecNorm(vec_);
}

if (vecDot(front_vec_, side_vecs_[pythonList(1, side_vecs_.length)]) > 0.9){

let vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(2, edges_.length)] );

side_vecs_[pythonList(1, side_vecs_.length)] = vecNorm(vec_);
}

return [vecRev(side_vecs_[pythonList(0, side_vecs_.length)]), side_vecs_[pythonList(1, side_vecs_.length)]];
}


async function exec_Tissue_node_qaejaupmzo__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_Tissue_node_qaejaupmzo__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_Tissue_node_qaejaupmzo__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_Tissue_node_qaejaupmzo__closestEdge_(__params__, edges_, xyz_) {

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


async function exec_Tissue_node_qaejaupmzo__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_qaejaupmzo__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_Tissue_node_qaejaupmzo__transferEdgeAttribsClosest_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_qaejaupmzo__closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_Tissue_node_qaejaupmzo__transferEdgeAttribsTouchingPart_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_qaejaupmzo__touchingEdge_(__params__, from_edges_, cen_);
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


async function exec_Tissue_node_qaejaupmzo__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_Tissue_node_qaejaupmzo__touchingEdge_(__params__, from_edges_, cen_);
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


async function exec_Tissue_node_qaejaupmzo__isect_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let a_ray_ = rays_[pythonList(i_, rays_.length)];

let isect_ = intersect(ray_, a_ray_, 0);

if (isect_ != null){

return [isect_, i_];
}
}

return null;
}

async function exec_Tissue_node_qaejaupmzo(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_qaejaupmzo_createCluster_(__params__, part_, 0);
if (__params__.terminated) { return __params__.model;}
}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_qaejaupmzo_createCluster_(__params__, part_, 1);
if (__params__.terminated) { return __params__.model;}
}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_qaejaupmzo_createCluster_(__params__, part_, 2);
if (__params__.terminated) { return __params__.model;}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_Tissue_node_2uiwuh5jag9(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let off_grid0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0");

let off_grid1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1");

let off_grid2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2");

__modules__.attrib.Set(__params__.model, null, 'og_lot0_on_art_num',  len( __modules__.query.Filter(__params__.model, off_grid0_, ['cluster_type', null], '==', "art")) );

__modules__.attrib.Set(__params__.model, null, 'og_lot0_on_sec_num',  len( __modules__.query.Filter(__params__.model, off_grid0_, ['cluster_type', null], '==', "sec")) );

__modules__.attrib.Set(__params__.model, null, 'og_lot0_on_loc_num',  len( __modules__.query.Filter(__params__.model, off_grid0_, ['cluster_type', null], '==', "loc")) );

__modules__.attrib.Set(__params__.model, null, 'og_lot1_num',  len(off_grid1_) );

__modules__.attrib.Set(__params__.model, null, 'og_lot2_num',  len(off_grid2_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}

async function exec_Tissue_node_jo5b5cdweaf(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let entr0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr0");

let entr1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "entr1");

let path0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "path0");

let path1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "path1");

let path2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "path2");

let green0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green0");

let green1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green1");

let green2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green2");

__modules__.attrib.Set(__params__.model, null, 'og_path0_on_art_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, path0_, ['cluster_type', null], '==', "art")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_path0_on_sec_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, path0_, ['cluster_type', null], '==', "sec")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_path0_on_loc_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, path0_, ['cluster_type', null], '==', "loc")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_path1_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, path1_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_path2_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, path2_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_green0_on_art_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, green0_, ['cluster_type', null], '==', "art")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_green0_on_sec_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, green0_, ['cluster_type', null], '==', "sec")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_green0_on_loc_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, __modules__.query.Filter(__params__.model, green0_, ['cluster_type', null], '==', "loc")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_green1_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, green1_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_green2_area',  await exec_Tissue_node_jo5b5cdweaf_areaSum_(__params__, green2_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_art_con',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_art_len')+ ( __modules__.attrib.Get(__params__.model, null, 'og_path0_on_art_area')/ ogc_path_w_) + ( __modules__.attrib.Get(__params__.model, null, 'og_green0_on_art_area')/ ogc_open_w_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_sec_con',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_sec_len')+ ( __modules__.attrib.Get(__params__.model, null, 'og_path0_on_sec_area')/ ogc_path_w_) + ( __modules__.attrib.Get(__params__.model, null, 'og_green0_on_sec_area')/ ogc_open_w_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus0_on_loc_con',  __modules__.attrib.Get(__params__.model, null, 'og_entr0_on_loc_len')+ ( __modules__.attrib.Get(__params__.model, null, 'og_path0_on_loc_area')/ ogc_path_w_) + ( __modules__.attrib.Get(__params__.model, null, 'og_green0_on_loc_area')/ ogc_open_w_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus1_on_loc_con',  __modules__.attrib.Get(__params__.model, null, 'og_entr1_on_loc_len')+ ( __modules__.attrib.Get(__params__.model, null, 'og_path1_area')/ ogc_path_w_) + ( __modules__.attrib.Get(__params__.model, null, 'og_green1_area')/ ogc_open_w_) );

__modules__.attrib.Set(__params__.model, null, 'og_clus2_on_loc_con',  ( __modules__.attrib.Get(__params__.model, null, 'og_path2_area')/ ogc2_path_w_) + ( __modules__.attrib.Get(__params__.model, null, 'og_green2_area')/ ogc2_xpath_w_) );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_iu2usdoxy8j_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}

async function exec_Tissue_node_iu2usdoxy8j(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let off_grid0_os_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_os");

let off_grid1_os_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_os");

let off_grid2_os_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2_os");

__modules__.attrib.Set(__params__.model, null, 'og_open0_on_art_area',  0 );

__modules__.attrib.Set(__params__.model, null, 'og_open0_on_sec_area',  await exec_Tissue_node_iu2usdoxy8j_areaSum_(__params__, __modules__.query.Filter(__params__.model, off_grid0_os_, ['cluster_type', null], '==', "sec_os")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_open0_on_loc_area',  await exec_Tissue_node_iu2usdoxy8j_areaSum_(__params__, __modules__.query.Filter(__params__.model, off_grid0_os_, ['cluster_type', null], '==', "loc_os")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_open1_area',  await exec_Tissue_node_iu2usdoxy8j_areaSum_(__params__, off_grid1_os_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_open2_area',  await exec_Tissue_node_iu2usdoxy8j_areaSum_(__params__, off_grid2_os_) );
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_cevuhovjoh4_areaSum_(__params__, parts_) {

let areas_ = __modules__.calc.Area( __params__.model, listFlat(parts_) );

return sum(areas_);
}

async function exec_Tissue_node_cevuhovjoh4(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let off_grid0_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_am");

let off_grid1_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_am");

let off_grid2_am_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2_am");

__modules__.attrib.Set(__params__.model, null, 'og_amen0_on_art_area',  0 );

__modules__.attrib.Set(__params__.model, null, 'og_amen0_on_sec_area',  await exec_Tissue_node_cevuhovjoh4_areaSum_(__params__, __modules__.query.Filter(__params__.model, off_grid0_am_, ['cluster_type', null], '==', "sec_am")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_amen0_on_loc_area',  await exec_Tissue_node_cevuhovjoh4_areaSum_(__params__, __modules__.query.Filter(__params__.model, off_grid0_am_, ['cluster_type', null], '==', "loc_am")) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_amen1_area',  await exec_Tissue_node_cevuhovjoh4_areaSum_(__params__, off_grid1_am_) );
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, null, 'og_amen2_area',  await exec_Tissue_node_cevuhovjoh4_areaSum_(__params__, off_grid2_am_) );
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_urixia4999_createCluster_(__params__, part_, off_grid_type_) {

let is_off_grid2_ = off_grid_type_ == 2;

let block_id_ = __modules__.attrib.Get(__params__.model, part_, 'block_id');

let block_type_ = __modules__.attrib.Get(__params__.model, part_, 'block_type');

let cluster_type_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_type');

let swap_orientation_ = __modules__.attrib.Get(__params__.model, part_, 'block_type')== "sec";

let plot_ = __modules__.make.Copy( __params__.model, part_, null );

let result_ = [[plot_], [], []];

if (result_ == null){

return null;
}

let cluster_plots_ = await exec_Tissue_node_urixia4999__trimPgon_(__params__, part_, result_[pythonList(0, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_plots_, 'class',  "plot" );

__modules__.attrib.Set(__params__.model, cluster_plots_, 'type',  "off_grid" + off_grid_type_ + "_am" );

let cluster_path_ = await exec_Tissue_node_urixia4999__trimPgon_(__params__, part_, result_[pythonList(1, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_path_, 'class',  "path" );

__modules__.attrib.Set(__params__.model, cluster_path_, 'type',  "path" + off_grid_type_ );

let cluster_green_ = await exec_Tissue_node_urixia4999__trimPgon_(__params__, part_, result_[pythonList(2, result_.length)]);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, cluster_green_, 'class',  "path" );

__modules__.attrib.Set(__params__.model, cluster_green_, 'type',  "green" + off_grid_type_ );

let all_cluster_ = listFlat([cluster_plots_, cluster_path_, cluster_green_]);

__modules__.attrib.Set(__params__.model, all_cluster_, 'block_id',  block_id_ );

__modules__.attrib.Set(__params__.model, all_cluster_, 'block_type',  block_type_ );

if (cluster_type_ != undefined){

__modules__.attrib.Set(__params__.model, all_cluster_, 'cluster_type',  cluster_type_ );
}

let cluster_plots_e_ = __modules__.query.Get(__params__.model, '_e', cluster_plots_);

await exec_Tissue_node_urixia4999__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', part_), __modules__.query.Get(__params__.model, '_e', all_cluster_));
if (__params__.terminated) { return __params__.model;}

await exec_Tissue_node_urixia4999__transferEdgeAttribsBtwTouchingParts_(__params__, all_cluster_);
if (__params__.terminated) { return __params__.model;}

let path_type_ = "path" + off_grid_type_;

let green_type_ = "green" + off_grid_type_;

for ( plot_ of cluster_plots_){

let plot_e_ = __modules__.query.Get(__params__.model, '_e', plot_);

let edges_front_ = __modules__.query.Filter(__params__.model, plot_e_, ['road', null], '==', path_type_);

if (len(edges_front_) == 0){

edges_front_ = __modules__.query.Filter(__params__.model, plot_e_, ['road', null], '==', green_type_);
}

let idx_ = listFind(plot_e_, edges_front_[pythonList(0, edges_front_.length)]);

__modules__.modify.Shift( __params__.model, plot_, idx_ );
}

let part_off_ = __modules__.poly2d.OffsetMitre( __params__.model, part_, -off_og_back_ - 3, 10, 'square_end' );

let path_off_ = __modules__.poly2d.OffsetMitre( __params__.model, cluster_path_, off_og_front_, 10, 'square_end' );

let green_off_ = __modules__.poly2d.OffsetMitre( __params__.model, cluster_green_, off_og_front_, 10, 'square_end' );

let div_plines_ = __modules__.make.Polyline( __params__.model, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', cluster_plots_), ['road', null], '==', ("off_grid_plot" + off_grid_type_)), 'open' );

let off_sides_ = off_og_side_;

if (off_sides_ == 0){

off_sides_ = 0.01;
}

let div_off_ = __modules__.poly2d.OffsetMitre( __params__.model, div_plines_, off_sides_, 10, 'square_end' );

let offs_ = listFlat([path_off_, green_off_, div_off_]);

let footprints_ = __modules__.poly2d.Boolean( __params__.model, part_off_, offs_, 'difference' );

footprints_ = __modules__.query.Get(__params__.model, 'pg', footprints_);

__modules__.attrib.Set(__params__.model, footprints_, 'type',  __modules__.attrib.Get(__params__.model, part_, 'type') );

__modules__.attrib.Set(__params__.model, footprints_, 'class',  "max_footprint" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', part_off_), 'road',  "" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', div_off_), 'road',  "off_grid" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', path_off_), 'road',  "path" );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', green_off_), 'road',  "green" );

let all_off_ = listJoin(offs_, part_off_);

await exec_Tissue_node_urixia4999__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', all_off_), __modules__.query.Get(__params__.model, '_e', footprints_));
if (__params__.terminated) { return __params__.model;}

let rem_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', footprints_), ['road', null], '==', null);

__modules__.attrib.Set(__params__.model, rem_edges_, 'road',  "side" );

__modules__.modify.Move( __params__.model, footprints_, [0, 0, 0.05] );

__modules__.modify.Delete( __params__.model, [part_, div_plines_, offs_, part_off_], 'delete_selected' );

return result_;
}


async function exec_Tissue_node_urixia4999__divPartIntoPlots_(__params__, part_, is_off_grid2_) {

let entr_ = __modules__.attrib.Get(__params__.model, part_, 'entr');

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let dead_end_ = __modules__.attrib.Get(__params__.model, part_, 'cluster_id')== undefined;

let front_vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(0, edges_.length)] );

if (entr_ == undefined){

entr_ = __modules__.calc.Centroid( __params__.model, edges_[pythonList(0, edges_.length)], 'ps_average' );

__modules__.attrib.Set(__params__.model, part_, 'entr',  entr_ );
}

let side_vecs_ = await exec_Tissue_node_urixia4999__getSideVecs_(__params__, edges_);
if (__params__.terminated) { return __params__.model;}

let vec_ = vecAdd(side_vecs_[pythonList(0, side_vecs_.length)], side_vecs_[pythonList(1, side_vecs_.length)]);

let ray_ = rayMake(vecAdd(entr_, vecNorm(vec_)), vecSetLen(vec_, 500));

let edge_rays_ = __modules__.calc.Ray( __params__.model, edges_ );

let isect_ = await exec_Tissue_node_urixia4999__isect_(__params__, ray_, edge_rays_);
if (__params__.terminated) { return __params__.model;}

if (isect_ == null){

return null;
}

vec_ = vecFromTo(entr_, isect_[pythonList(0, isect_.length)]);

let result_ = await exec_Tissue_node_urixia4999__divCreateDeadPlot_(__params__, part_, entr_, vec_, edge_rays_);
if (__params__.terminated) { return __params__.model;}
}


async function exec_Tissue_node_urixia4999__divCreateLinkPlot_(__params__, part_, start_, vec_, edge_rays_) {

let green_depth_ = 5;

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let xyz0_ = vecSub(start_, vecSetLen(vec_, 100));

let xyz1_ = vecAdd(start_, vecSetLen(vec_, green_depth_));

let xyz2_ = vecAdd(xyz1_, vecSetLen(vec_, 100));

vec_perp_ = vecSetLen(vec_perp_, 100);

let xyz0_left_ = vecSub(xyz0_, vec_perp_);

let xyz0_right_ = vecAdd(xyz0_, vec_perp_);

let xyz1_left_ = vecSub(xyz1_, vec_perp_);

let xyz1_right_ = vecAdd(xyz1_, vec_perp_);

let xyz2_left_ = vecSub(xyz2_, vec_perp_);

let xyz2_right_ = vecAdd(xyz2_, vec_perp_);

let xyzs_ = [xyz1_left_, xyz0_left_, xyz0_right_, xyz1_right_];

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let green1_ = __modules__.make.Polygon( __params__.model, posis_ );

xyzs_ = [xyz2_left_, xyz1_left_, xyz1_, xyz2_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let green2_ = __modules__.make.Polygon( __params__.model, posis_ );

xyzs_ = [xyz2_, xyz1_, xyz1_right_, xyz2_right_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_ = __modules__.make.Polygon( __params__.model, posis_ );

let result_ = [[plot_], [green1_, green2_], []];

return result_;
}


async function exec_Tissue_node_urixia4999__divCreateDeadPlot_(__params__, part_, start_, vec_, edge_rays_) {

let green_depth_ = 5;

let vec_perp_ = [vec_[pythonList(1, vec_.length)], -vec_[pythonList(0, vec_.length)], 0];

let xyz0_ = vecSub(start_, vecSetLen(vec_, 100));

let xyz1_ = vecAdd(start_, vecSetLen(vec_, green_depth_));

let xyz2_ = vecAdd(xyz1_, vecSetLen(vec_, 100));

vec_perp_ = vecSetLen(vec_perp_, 100);

let xyz0_left_ = vecSub(xyz0_, vec_perp_);

let xyz0_right_ = vecAdd(xyz0_, vec_perp_);

let xyz1_left_ = vecSub(xyz1_, vec_perp_);

let xyz1_right_ = vecAdd(xyz1_, vec_perp_);

let xyz2_left_ = vecSub(xyz2_, vec_perp_);

let xyz2_right_ = vecAdd(xyz2_, vec_perp_);

let xyzs_ = [xyz1_left_, xyz0_left_, xyz0_right_, xyz1_right_];

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let green_ = __modules__.make.Polygon( __params__.model, posis_ );

xyzs_ = [xyz2_left_, xyz1_left_, xyz1_right_, xyz2_right_];

posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let plot_ = __modules__.make.Polygon( __params__.model, posis_ );

let result_ = [[plot_], [green_], []];

return result_;
}


async function exec_Tissue_node_urixia4999__trimPgon_(__params__, base_, pgons_) {

let pgons2_ = __modules__.poly2d.Boolean( __params__.model, pgons_, base_, 'intersect' );

__modules__.modify.Delete( __params__.model, pgons_, 'delete_selected' );

return pgons2_;
}


async function exec_Tissue_node_urixia4999__getSideVecs_(__params__, edges_) {

let side_vecs_ = __modules__.calc.Vector( __params__.model, [edges_[pythonList(-1, edges_.length)], edges_[pythonList(1, edges_.length)]] );

let front_vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(0, edges_.length)] );

side_vecs_ = vecNorm(side_vecs_);

front_vec_ = vecNorm(front_vec_);

if (vecDot(side_vecs_[pythonList(0, side_vecs_.length)], front_vec_) > 0.9){

let vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(-2, edges_.length)] );

side_vecs_[pythonList(0, side_vecs_.length)] = vecNorm(vec_);
}

if (vecDot(front_vec_, side_vecs_[pythonList(1, side_vecs_.length)]) > 0.9){

let vec_ = __modules__.calc.Vector( __params__.model, edges_[pythonList(2, edges_.length)] );

side_vecs_[pythonList(1, side_vecs_.length)] = vecNorm(vec_);
}

return [vecRev(side_vecs_[pythonList(0, side_vecs_.length)]), side_vecs_[pythonList(1, side_vecs_.length)]];
}


async function exec_Tissue_node_urixia4999__vertAng_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

if (len(edges_) == 1){

return 0;
}

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecRev(vecNorm(vecs_[pythonList(0, vecs_.length)]));

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return radToDeg(vecAng2(vec1_, vec0_, [0, 0, 1]));
}


async function exec_Tissue_node_urixia4999__angDot_(__params__, vert_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

let vecs_ = __modules__.calc.Vector( __params__.model, edges_ );

let vec0_ = vecNorm(vecs_[pythonList(0, vecs_.length)]);

let vec1_ = vecNorm(vecs_[pythonList(1, vecs_.length)]);

return vecDot(vec0_, vec1_);
}


async function exec_Tissue_node_urixia4999__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_Tissue_node_urixia4999__closestEdge_(__params__, edges_, xyz_) {

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


async function exec_Tissue_node_urixia4999__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_urixia4999__touchingEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_Tissue_node_urixia4999__transferEdgeAttribsClosest_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_urixia4999__closestEdge_(__params__, from_edges_, cen_);
if (__params__.terminated) { return __params__.model;}

if (from_edge_ != null){

let val_ = __modules__.attrib.Get(__params__.model, from_edge_, 'road');

if (val_ != undefined){

__modules__.attrib.Set(__params__.model, to_edge_, 'road',  val_ );
}
}
}
}


async function exec_Tissue_node_urixia4999__transferEdgeAttribsTouchingPart_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_urixia4999__touchingEdge_(__params__, from_edges_, cen_);
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


async function exec_Tissue_node_urixia4999__transferEdgeAttribsBtwTouchingParts_(__params__, parts_) {

let edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', parts_), ['road', null], '==', null);

for (let  to_edge_ of edges_){

if (__modules__.attrib.Get(__params__.model, to_edge_, 'road')== undefined){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let idx_ = listFind(edges_, to_edge_);

let from_edges_ = listJoin(edges_.slice(0,idx_), edges_.slice(idx_ + 1));

let from_edge_ = await exec_Tissue_node_urixia4999__touchingEdge_(__params__, from_edges_, cen_);
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


async function exec_Tissue_node_urixia4999__isect_(__params__, ray_, rays_) {

for (let  i_ of range(len(rays_))){

let a_ray_ = rays_[pythonList(i_, rays_.length)];

let isect_ = intersect(ray_, a_ray_, 0);

if (isect_ != null){

return [isect_, i_];
}
}

return null;
}

async function exec_Tissue_node_urixia4999(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let clusters_ = [];

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_am");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_urixia4999_createCluster_(__params__, part_, 0);
if (__params__.terminated) { return __params__.model;}

if (cluster_ != null){

__modules__.list.Add( clusters_, cluster_, 'to_end' );
}
}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_am");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_urixia4999_createCluster_(__params__, part_, 1);
if (__params__.terminated) { return __params__.model;}

if (cluster_ != null){

__modules__.list.Add( clusters_, cluster_, 'to_end' );
}
}

parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid2_am");

for (let  part_ of parts_){

let cluster_ = await exec_Tissue_node_urixia4999_createCluster_(__params__, part_, 2);
if (__params__.terminated) { return __params__.model;}

if (cluster_ != null){

__modules__.list.Add( clusters_, cluster_, 'to_end' );
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_7uadkj6ih56_calcSetbacksForOffGrid_(__params__, part_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let edge_types_ = __modules__.attrib.Get(__params__.model, edges_, 'road');

let part_type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let num_edges_ = len(edges_);

for (let  i_ of range(num_edges_)){

let edge_ = edges_[pythonList(i_, edges_.length)];

let edge_type_ = edge_types_[pythonList(i_, edge_types_.length)];

if (strStarts(edge_types_[pythonList(i_, edge_types_.length)], "path") || strStarts(edge_types_[pythonList(i_, edge_types_.length)], "green")){

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "front");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "front" );

continue;
}

if (strStarts(edge_types_[pythonList(i_, edge_types_.length)], "off_grid_plot")){

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "side");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );

continue;
}

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "back");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "back" );
}
}


async function exec_Tissue_node_7uadkj6ih56_calcSetbacksOnGrid_(__params__, part_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let edge_types_ = __modules__.attrib.Get(__params__.model, edges_, 'road');

let part_type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let num_edges_ = len(edges_);

for (let  i_ of range(num_edges_)){

let edge_ = edges_[pythonList(i_, edges_.length)];

let edge_type_ = edge_types_[pythonList(i_, edge_types_.length)];

if (edge_types_[pythonList(i_, edge_types_.length)] == undefined){

__modules__.attrib.Set(__params__.model, edge_, 'setback',  0 );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );

continue;
}

if (strStarts(edge_types_[pythonList(i_, edge_types_.length)], "road")){

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "front");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "front" );

continue;
}

let idx0_ = (i_ + num_edges_ - 1) % num_edges_;

let idx1_ = (i_ + 1) % num_edges_;

if (edge_types_[pythonList(idx0_, edge_types_.length)] == undefined || edge_types_[pythonList(idx1_, edge_types_.length)] == undefined){

__modules__.attrib.Set(__params__.model, edge_, 'setback',  0 );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );

continue;
}

if (strStarts(edge_types_[pythonList(idx0_, edge_types_.length)], "road") || strStarts(edge_types_[pythonList(idx1_, edge_types_.length)], "road")){

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "side");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "side" );

continue;
}

let setback_ = await exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, "back");
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, edge_, 'setback',  setback_ );

__modules__.attrib.Set(__params__.model, edge_, 'orient',  "back" );
}
}


async function exec_Tissue_node_7uadkj6ih56_processPart_(__params__, part_) {

let edges_ = __modules__.query.Get(__params__.model, '_e', part_);

let edge_types_ = __modules__.attrib.Get(__params__.model, edges_, 'road');

let part_type_ = __modules__.attrib.Get(__params__.model, part_, 'type');

let special_ = __modules__.attrib.Get(__params__.model, part_, 'special');

let num_edges_ = len(edges_);

let all_offs_ = [];

let offs_ = await exec_Tissue_node_7uadkj6ih56__createSetbackPgons_(__params__, __modules__.query.Filter(__params__.model, edges_, ['orient', null], '==', "front"), part_type_, "front");
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_offs_, offs_, 'extend_end' );

offs_ = await exec_Tissue_node_7uadkj6ih56__createSetbackPgons_(__params__, __modules__.query.Filter(__params__.model, edges_, ['orient', null], '==', "side"), part_type_, "side");
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_offs_, offs_, 'extend_end' );

offs_ = await exec_Tissue_node_7uadkj6ih56__createSetbackPgons_(__params__, __modules__.query.Filter(__params__.model, edges_, ['orient', null], '==', "back"), part_type_, "back");
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_offs_, offs_, 'extend_end' );

all_offs_ = listFlat(all_offs_);

for (let  vert_ of __modules__.query.Get(__params__.model, '_v', part_)){

let two_edges_ = __modules__.query.Get(__params__.model, '_e', vert_);

edge_types_ = __modules__.attrib.Get(__params__.model, two_edges_, 'road');

if (edge_types_[pythonList(0, edge_types_.length)] == undefined){

edge_types_[pythonList(0, edge_types_.length)] = '';
}

if (edge_types_[pythonList(1, edge_types_.length)] == undefined){

edge_types_[pythonList(1, edge_types_.length)] = '';
}

let is_corner_ = await exec_Tissue_node_7uadkj6ih56__isCorner_(__params__, part_type_, special_);
if (__params__.terminated) { return __params__.model;}

if (is_corner_ && !strStarts(edge_types_[pythonList(0, edge_types_.length)], "road") && !strStarts(edge_types_[pythonList(1, edge_types_.length)], "road")){

let corner_off_ = await exec_Tissue_node_7uadkj6ih56__createCornerStebackPgon_(__params__, vert_, two_edges_, part_type_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_offs_, corner_off_, 'extend_end' );
}
}

let footprints_ = __modules__.poly2d.Boolean( __params__.model, part_, all_offs_, 'difference' );

__modules__.attrib.Set(__params__.model, footprints_, 'type',  __modules__.attrib.Get(__params__.model, part_, 'type') );

__modules__.attrib.Set(__params__.model, footprints_, 'class',  "max_footprint" );

await exec_Tissue_node_7uadkj6ih56__transferEdgeAttribsTouching_(__params__, __modules__.query.Get(__params__.model, '_e', all_offs_), __modules__.query.Get(__params__.model, '_e', footprints_));
if (__params__.terminated) { return __params__.model;}

let rem_edges_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, '_e', footprints_), ['road', null], '==', null);

__modules__.modify.Delete( __params__.model, all_offs_, 'delete_selected' );

return footprints_;
}


async function exec_Tissue_node_7uadkj6ih56__isCorner_(__params__, type_, special_) {

if (special_ == "concave_corner"){

return false;
}

if (type_ == "loc_loc"){

return true;
}

if (type_ == "sec_loc" || type_ == "sec_sec"){

return true;
}

if (type_ == "art_sec" || type_ == "art_loc" || type_ == "art_art"){

return true;
}

return false;
}


async function exec_Tissue_node_7uadkj6ih56__createSetbackPgons_(__params__, edges_, part_type_, orient_) {

let offs_ = [];

for (let  edge_ of edges_){

let edge_type_ = __modules__.attrib.Get(__params__.model, edge_, 'road');

let dist_ = __modules__.attrib.Get(__params__.model, edge_, 'setback');

if (dist_ == 0){

continue;
}

let pline_ = __modules__.make.Polyline( __params__.model, __modules__.query.Get(__params__.model, 'ps', edge_), 'open' );

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, pline_, dist_, 10, 'square_end' );

__modules__.list.Add( offs_, off_, 'to_end' );

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

__modules__.attrib.Set(__params__.model, __modules__.query.Get(__params__.model, '_e', off_), 'road',  edge_type_ );
}

return offs_;
}


async function exec_Tissue_node_7uadkj6ih56__createCornerStebackPgon_(__params__, vert_, two_edges_, part_type_) {

let edge_vecs_ = __modules__.calc.Vector( __params__.model, two_edges_ );

let edge_types_ = __modules__.attrib.Get(__params__.model, two_edges_, 'road');

let edge_orients_ = __modules__.attrib.Get(__params__.model, two_edges_, 'orient');

let dist0_ = 3;

let dist1_ = 3;

if (!fire_){

let orient0_ = "back";

let is_corner0_ = await exec_Tissue_node_7uadkj6ih56__isCorner_(__params__, edge_types_[pythonList(0, edge_types_.length)], null);
if (__params__.terminated) { return __params__.model;}

if (is_corner0_){

orient0_ = "side";
}

dist0_ = await exec_Tissue_node_7uadkj6ih56__getSetback_(__params__, edge_types_[pythonList(0, edge_types_.length)], part_type_, orient0_);
if (__params__.terminated) { return __params__.model;}

let orient1_ = "back";

let is_corner1_ = await exec_Tissue_node_7uadkj6ih56__isCorner_(__params__, edge_types_[pythonList(1, edge_types_.length)], null);
if (__params__.terminated) { return __params__.model;}

if (is_corner1_){

orient1_ = "side";
}

dist1_ = await exec_Tissue_node_7uadkj6ih56__getSetback_(__params__, edge_types_[pythonList(1, edge_types_.length)], part_type_, orient1_);
if (__params__.terminated) { return __params__.model;}
}

if (dist0_ == 0 || dist1_ == 0){

return [];
}

let posi_xyz_ = ( __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', vert_), 'xyz'))[pythonList(0, ( __modules__.attrib.Get(__params__.model,  __modules__.query.Get(__params__.model, 'ps', vert_), 'xyz')).length)];

let vec0_ = vecSetLen(edge_vecs_[pythonList(0, edge_vecs_.length)], dist0_);

let vec1_ = vecSetLen(edge_vecs_[pythonList(1, edge_vecs_.length)], dist1_);

let xyz0_ = vecSub(vecAdd(posi_xyz_, vec0_), vec1_);

let xyz1_ = vecSub(xyz0_, vecMult(vec0_, 2));

let xyz2_ = vecAdd(xyz1_, vecMult(vec1_, 2));

let xyz3_ = vecAdd(xyz2_, vecMult(vec0_, 2));

let posis_ = __modules__.make.Position( __params__.model, [xyz0_, xyz1_, xyz2_, xyz3_] );

let corner_off_ = __modules__.make.Polygon( __params__.model, posis_ );

return [corner_off_];
}


async function exec_Tissue_node_7uadkj6ih56__getSetBackWithFire_(__params__, part_type_, edge_type_, orient_) {

let has_building1_ = await exec_Tissue_node_7uadkj6ih56__hasBuilding_(__params__, part_type_);
if (__params__.terminated) { return __params__.model;}

let has_building2_ = await exec_Tissue_node_7uadkj6ih56__hasBuilding_(__params__, edge_type_);
if (__params__.terminated) { return __params__.model;}

if (fire_ && has_building1_ && has_building2_ && part_type_ != edge_type_){

return 3;
}

let dist1_ = await exec_Tissue_node_7uadkj6ih56__getSetback_(__params__, part_type_, edge_type_, orient_);
if (__params__.terminated) { return __params__.model;}

if (strStarts(edge_type_, "off")){

if (dist1_ == 0){

return 0.01;
}

return dist1_;
}

if (has_building2_){

let dist2_ = await exec_Tissue_node_7uadkj6ih56__getSetback_(__params__, edge_type_, part_type_, orient_);
if (__params__.terminated) { return __params__.model;}

if (dist1_ == 0 || dist2_ == 0){

return 0.01;
}
}

if (dist1_ == 0){

return 0.01;
}

return dist1_;
}


async function exec_Tissue_node_7uadkj6ih56__hasBuilding_(__params__, part_type_) {

if (strStarts(part_type_, "loc") || strStarts(part_type_, "sec") || strStarts(part_type_, "art") || strStarts(part_type_, "off")){

return true;
}

return false;
}


async function exec_Tissue_node_7uadkj6ih56__getSetback_(__params__, part_type_, edge_type_, orient_) {

if (edge_type_ != null){

if (edge_type_ == "road_art"){

return off_art_front_;
}

if (edge_type_ == "road_sec"){

return off_sec_front_;
}

if (edge_type_ == "road_loc"){

return off_loc_front_;
}

if (strStarts(edge_type_, "path") || strStarts(edge_type_, "green")){

return off_og_front_;
}
}

if (part_type_ == undefined){

return 0;
}

if (strStarts(part_type_, "loc")){

if (orient_ == "side"){

return off_loc_side_;
}

return off_loc_back_;
}

if (strStarts(part_type_, "sec")){

if (orient_ == "side"){

return off_sec_side_;
}

return off_sec_back_;
}

if (strStarts(part_type_, "art")){

if (orient_ == "side"){

return off_art_side_;
}

return off_art_back_;
}

if (strStarts(part_type_, "off_grid_plot")){

if (orient_ == "side"){

return off_og_side_;
}

return off_og_back_;
}

if (part_type_ == "white"){

return off_og_back_;
}

return 0;
}


async function exec_Tissue_node_7uadkj6ih56__getAllPerimPlines_(__params__, edges_) {

let edge_types_ = __modules__.attrib.Get(__params__.model, edges_, 'road');

let edge_lists_ = [[edges_[pythonList(0, edges_.length)]]];

for (let  i_ of range(1, len(edges_))){

if (edge_types_[pythonList(i_, edge_types_.length)] == edge_types_[pythonList(i_ - 1, edge_types_.length)]){

__modules__.list.Add( edge_lists_[pythonList(-1, edge_lists_.length)], edges_[pythonList(i_, edges_.length)], 'to_end' );
}

else {

__modules__.list.Add( edge_lists_, [edges_[pythonList(i_, edges_.length)]], 'to_end' );
}
}

if (edge_types_[pythonList(0, edge_types_.length)] == edge_types_[pythonList(-1, edge_types_.length)]){

edge_lists_[pythonList(0, edge_lists_.length)] = listFlat([edge_lists_[pythonList(-1, edge_lists_.length)], edge_lists_[pythonList(0, edge_lists_.length)]]);

__modules__.list.Remove( edge_lists_, -1, 'index' );
}

return edge_lists_;
}


async function exec_Tissue_node_7uadkj6ih56__touchingEdge_(__params__, edges_, xyz_) {

for (let  edge_ of edges_){

let r_ = __modules__.calc.Ray( __params__.model, edge_ );

let d_ = distance(xyz_, project(xyz_, r_, 0));

if (d_ < 1){

return edge_;
}
}

return null;
}


async function exec_Tissue_node_7uadkj6ih56__transferEdgeAttribsTouching_(__params__, from_edges_, to_edges_) {

for (let  to_edge_ of to_edges_){

let cen_ = __modules__.calc.Centroid( __params__.model, to_edge_, 'ps_average' );

let from_edge_ = await exec_Tissue_node_7uadkj6ih56__touchingEdge_(__params__, from_edges_, cen_);
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

async function exec_Tissue_node_7uadkj6ih56(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let parts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "part");

let plots_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "plot");

plots_ = listJoin(parts_, plots_);

let all_footprints_ = [];

let off_grid_plots_ = [];

let on_grid_plots_ = [];

for (let  plot_ of plots_){

if (strStarts( __modules__.attrib.Get(__params__.model, plot_, 'type'), "off")){
}

else {

__modules__.list.Add( on_grid_plots_, plot_, 'extend_end' );

await exec_Tissue_node_7uadkj6ih56_calcSetbacksOnGrid_(__params__, plot_);
if (__params__.terminated) { return __params__.model;}
}
}

for (let  plot_ of on_grid_plots_){

let footprints_ = await exec_Tissue_node_7uadkj6ih56_processPart_(__params__, plot_);
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( all_footprints_, footprints_, 'extend_end' );
}

__modules__.modify.Weld( __params__.model, all_footprints_, 'break_weld' );

__modules__.modify.Move( __params__.model, all_footprints_, [0, 0, 0.05] );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_pq76x9zc05_getNumFloors_(__params__, type_) {

if (strStarts(type_, "off")){

return floors_og_;
}

if (type_ == "loc" || type_ == "loc_am"){

return floors_loc_;
}

if (type_ == "loc_loc"){

return floors_loc_ + round(floors_loc_ * (m_floors_loc_ / 100));
}

if (type_ == "loc_loc_am"){

return floors_loc_ + round(floors_loc_ * (m_floors_loc_ / 100));
}

if (type_ == "sec" || type_ == "sec_am"){

return floors_sec_;
}

if (type_ == "sec_sec"){

return floors_sec_ + round(floors_sec_ * (m_floors_sec_ / 100));
}

if (type_ == "sec_loc"){

return floors_sec_ + round(floors_sec_ * (m_floors_loc_ / 100));
}

if (type_ == "art"){

return floors_art_;
}

if (type_ == "art_art"){

return floors_art_ + round(floors_art_ * (m_floors_art_ / 100));
}

if (type_ == "art_sec"){

return floors_art_ + round(floors_art_ * (m_floors_sec_ / 100));
}

if (type_ == "art_loc"){

return floors_art_ + round(floors_art_ * (m_floors_loc_ / 100));
}

return 0;
}


async function exec_Tissue_node_pq76x9zc05_setModelAttribs_(__params__, ) {

let plot_dims_ = __modules__.attrib.Get(__params__.model, null, 'plot_dims');

plot_dims_["plot_og_w"] = ogc_plot_w_;

plot_dims_["plot_og_d"] = (plot_dims_["part_og_w"] - ogc_path_w_) / 2;

plot_dims_["plot_og2_w"] = ogc2_plot_w_;

plot_dims_["plot_og2_d"] = (plot_dims_["part_og_w"] - ogc2_path_w_) / 2;

plot_dims_["sb_art_front"] = off_art_front_;

plot_dims_["sb_art_side"] = off_art_side_;

plot_dims_["sb_art_back"] = off_art_back_;

plot_dims_["sb_sec_front"] = off_sec_front_;

plot_dims_["sb_sec_side"] = off_sec_side_;

plot_dims_["sb_sec_back"] = off_sec_back_;

plot_dims_["sb_loc_front"] = off_loc_front_;

plot_dims_["sb_loc_side"] = off_loc_side_;

plot_dims_["sb_loc_back"] = off_loc_back_;

plot_dims_["sb_og_front"] = off_og_front_;

plot_dims_["sb_og_side"] = off_og_side_;

plot_dims_["sb_og_back"] = off_og_back_;
}

async function exec_Tissue_node_pq76x9zc05(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let footprints_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "max_footprint");

for (let  footprint_ of footprints_){

let type_ = __modules__.attrib.Get(__params__.model, footprint_, 'type');

let num_floors_ = await exec_Tissue_node_pq76x9zc05_getNumFloors_(__params__, type_);
if (__params__.terminated) { return __params__.model;}

__modules__.attrib.Set(__params__.model, footprint_, 'max_floors',  num_floors_ );
}

await exec_Tissue_node_pq76x9zc05_setModelAttribs_(__params__);
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_eagr6qu3f5s_applyColours_(__params__, colors_dict_, pgons_) {

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

async function exec_Tissue_node_eagr6qu3f5s(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
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

await exec_Tissue_node_eagr6qu3f5s_applyColours_(__params__, colors_dict_land_, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '!=', "max_footprint"));
if (__params__.terminated) { return __params__.model;}

await exec_Tissue_node_eagr6qu3f5s_applyColours_(__params__, colors_dict_bldg_, __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "max_footprint"));
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Tissue_node_jsohmb5dp5k_makeTreesAtCentroid_(__params__, entity_) {

let xyzs_ = __modules__.calc.Centroid( __params__.model, entity_, 'ps_average' );

let tree_posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let tree_pts_ = __modules__.make.Point( __params__.model, tree_posis_ );

__modules__.attrib.Set(__params__.model, tree_pts_, 'type',  "tree" );

let ex_ = __modules__.make.Extrude( __params__.model, tree_posis_, 2, 1, 'quads' );

return tree_pts_;
}


async function exec_Tissue_node_jsohmb5dp5k_makeTreesAtPosi_(__params__, tree_posis_) {

let tree_pts_ = __modules__.make.Point( __params__.model, tree_posis_ );

__modules__.attrib.Set(__params__.model, tree_pts_, 'type',  "tree" );

let ex_ = __modules__.make.Extrude( __params__.model, tree_posis_, 2, 1, 'quads' );

return tree_pts_;
}


async function exec_Tissue_node_jsohmb5dp5k_placeTrees_(__params__, green_, l_, w_) {

if (l_ < 2 && w_ < 2){

return [];
}

let edges_ = __modules__.query.Get(__params__.model, '_e', green_);

if (l_ < 5 || len(edges_) != 4){

let tree_pts_ = await exec_Tissue_node_jsohmb5dp5k_makeTreesAtCentroid_(__params__, [green_]);
if (__params__.terminated) { return __params__.model;}

return tree_pts_;
}

if (w_ < 5){

let xyzs_ = __modules__.calc.Centroid( __params__.model, [edges_[pythonList(1, edges_.length)], edges_[pythonList(3, edges_.length)]], 'ps_average' );

let posis_ = __modules__.make.Position( __params__.model, xyzs_ );

let pline_ = __modules__.make.Polyline( __params__.model, posis_, 'open' );

let div_ = __modules__.make.Divide( __params__.model, pline_, __modules__.attrib.Get(__params__.model, null, 'tree_spacing'), 'by_max_length' );

let tree_pts_ = await exec_Tissue_node_jsohmb5dp5k_makeTreesAtCentroid_(__params__, div_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, pline_, 'delete_selected' );

return tree_pts_;
}

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, green_, -w_ / 4, 1, 'square_end' );

if (len(off_) == 0){

return [];
}

let off_edges_ = __modules__.query.Get(__params__.model, '_e', off_);

let side_edges_ = [off_edges_[pythonList(0, off_edges_.length)], off_edges_[pythonList(2, off_edges_.length)]];

let div_ = __modules__.make.Divide( __params__.model, side_edges_, __modules__.attrib.Get(__params__.model, null, 'tree_spacing'), 'by_max_length' );

let tree_pts_ = await exec_Tissue_node_jsohmb5dp5k_makeTreesAtCentroid_(__params__, div_);
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, off_, 'delete_selected' );

return tree_pts_;
}

async function exec_Tissue_node_jsohmb5dp5k(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

if (__modules__.attrib.Get(__params__.model, null, 'add_trees')){

let greens0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green0");

let greens1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green1");

let greens2_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "green2");

for (let  green_ of greens0_){

let trees_ = await exec_Tissue_node_jsohmb5dp5k_placeTrees_(__params__, green_, ogc_open_l_, ogc_open_w_);
if (__params__.terminated) { return __params__.model;}
}

for (let  green_ of greens1_){

let trees_ = await exec_Tissue_node_jsohmb5dp5k_placeTrees_(__params__, green_, ogc_open_l_, ogc_open_w_);
if (__params__.terminated) { return __params__.model;}
}

for (let  green_ of greens2_){

let trees_ = await exec_Tissue_node_jsohmb5dp5k_placeTrees_(__params__, green_, ogc2_xpath_w_, ogc_path_w_);
if (__params__.terminated) { return __params__.model;}
}

let amens0_ = __modules__.query.Filter(__params__.model,  __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid0_am"), ['class', null], '==', "plot");

let amens1_ = __modules__.query.Filter(__params__.model,  __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['type', null], '==', "off_grid1_am"), ['class', null], '==', "plot");

for (let  amen_ of listJoin(amens0_, amens1_)){

let off_ = __modules__.poly2d.OffsetMitre( __params__.model, amen_, -1.5, 1, 'square_end' );

let edges_ = __modules__.query.Get(__params__.model, '_e', off_);

let div_ = __modules__.make.Divide( __params__.model, [edges_[pythonList(0, edges_.length)], edges_[pythonList(2, edges_.length)]], __modules__.attrib.Get(__params__.model, null, 'tree_spacing'), 'by_max_length' );

let trees_ = await exec_Tissue_node_jsohmb5dp5k_makeTreesAtPosi_(__params__, __modules__.query.Get(__params__.model, 'ps', div_));
if (__params__.terminated) { return __params__.model;}

__modules__.modify.Delete( __params__.model, off_, 'delete_selected' );
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_Tissue_node_ebs5kmuknbw(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let data_ = {};

data_["og_lot0_on_art_num"] = __modules__.attrib.Get(__params__.model, null, 'og_lot0_on_art_num');

data_["og_lot0_on_sec_num"] = __modules__.attrib.Get(__params__.model, null, 'og_lot0_on_sec_num')+  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_sec_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_sec_num');

data_["og_lot0_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_lot0_on_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'open_og_clus0_on_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus0_on_loc_num');

data_["og_lot1_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_lot1_num')+  __modules__.attrib.Get(__params__.model, null, 'open_og_clus1_on_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus1_on_loc_num');

data_["og_lot2_on_loc_num"] = __modules__.attrib.Get(__params__.model, null, 'og_lot2_num')+  __modules__.attrib.Get(__params__.model, null, 'open_og_clus2_on_loc_num')+  __modules__.attrib.Get(__params__.model, null, 'amen_og_clus2_on_loc_num');

data_["og_clus0_on_art_con"] = 0;

data_["og_clus0_on_sec_con"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_sec_con');

data_["og_clus0_on_loc_con"] = __modules__.attrib.Get(__params__.model, null, 'og_clus0_on_loc_con');

data_["og_clus1_on_loc_con"] = __modules__.attrib.Get(__params__.model, null, 'og_clus1_on_loc_con');

data_["og_clus2_on_loc_con"] = __modules__.attrib.Get(__params__.model, null, 'og_clus2_on_loc_con');

data_["og_path0_on_art_area"] = 0;

data_["og_path0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'og_path0_on_sec_area');

data_["og_path0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_path0_on_loc_area');

data_["og_path1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_path1_area');

data_["og_path2_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_path2_area');

data_["og_green0_on_art_area"] = 0;

data_["og_green0_on_sec_area"] = __modules__.attrib.Get(__params__.model, null, 'og_green0_on_sec_area');

data_["og_green0_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_green0_on_loc_area');

data_["og_green1_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_green1_area');

data_["og_green2_on_loc_area"] = __modules__.attrib.Get(__params__.model, null, 'og_green2_area');

data_["param_og_path_w"] = ogc_path_w_;

data_["param_og2_path_w"] = ogc2_path_w_;

data_["param_lot_og_on_sec_w"] = ogc_plot_w_;

data_["param_lot_og_on_loc_w"] = ogc_plot_w_;

data_["param_lot_og2_w"] = ogc2_plot_w_;

data_["param_lot_art_fsb"] = off_art_front_;

data_["param_lot_sec_fsb"] = off_sec_front_;

data_["param_lot_loc_fsb"] = off_loc_front_;

data_["param_lot_og_on_sec_fsb"] = off_og_front_;

data_["param_lot_og_on_loc_fsb"] = off_og_front_;

data_["param_lot_og2_fsb"] = off_og_front_;

data_["param_lot_art_bsb"] = off_art_back_;

data_["param_lot_sec_bsb"] = off_sec_back_;

data_["param_lot_loc_bsb"] = off_loc_back_;

data_["param_lot_og_on_sec_bsb"] = off_og_back_;

data_["param_lot_og_on_loc_bsb"] = off_og_back_;

data_["param_lot_og2_bsb"] = off_og_back_;

data_["param_lot_art_ssb"] = off_art_side_;

data_["param_lot_sec_ssb"] = off_sec_side_;

data_["param_lot_loc_ssb"] = off_loc_side_;

data_["param_lot_og_on_sec_ssb"] = off_og_side_;

data_["param_lot_og_on_loc_ssb"] = off_og_side_;

data_["param_lot_og2_ssb"] = off_og_side_;

data_["param_lot_art_f"] = floors_art_;

data_["param_lot_sec_f"] = floors_sec_;

data_["param_lot_loc_f"] = floors_loc_;

data_["param_lot_og_f"] = floors_og_;

data_["param_lot_art_fm"] = m_floors_art_;

data_["param_lot_sec_fm"] = m_floors_sec_;

data_["param_lot_loc_fm"] = m_floors_loc_;

let __return_value__ = __modules__._Output.Return(__params__.model, data_);
return __return_value__;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_Tissue_node_euj6wfliq2 = __params__.model;
console.log("Executing Node: import");

__params__.model = result_exec_Tissue_node_euj6wfliq2;

let result_exec_Tissue_node_a3ts9d64my4 = await exec_Tissue_node_a3ts9d64my4(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: subdiv off-grid parts into lots and footprints");

__params__.model = result_exec_Tissue_node_a3ts9d64my4;

let result_exec_Tissue_node_qaejaupmzo = await exec_Tissue_node_qaejaupmzo(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: calc counts off-grid lots");

__params__.model = result_exec_Tissue_node_qaejaupmzo;

let result_exec_Tissue_node_2uiwuh5jag9 = await exec_Tissue_node_2uiwuh5jag9(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: calc areas and lengths paths");

__params__.model = result_exec_Tissue_node_2uiwuh5jag9;

let result_exec_Tissue_node_jo5b5cdweaf = await exec_Tissue_node_jo5b5cdweaf(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: calc areas open lots");

__params__.model = result_exec_Tissue_node_jo5b5cdweaf;

let result_exec_Tissue_node_iu2usdoxy8j = await exec_Tissue_node_iu2usdoxy8j(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: calc areas amen lots");

__params__.model = result_exec_Tissue_node_iu2usdoxy8j;

let result_exec_Tissue_node_cevuhovjoh4 = await exec_Tissue_node_cevuhovjoh4(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: off grid amen");

__params__.model = result_exec_Tissue_node_cevuhovjoh4;

let result_exec_Tissue_node_urixia4999 = await exec_Tissue_node_urixia4999(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: on grid footprints");

__params__.model = result_exec_Tissue_node_urixia4999;

let result_exec_Tissue_node_7uadkj6ih56 = await exec_Tissue_node_7uadkj6ih56(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: floors");

__params__.model = result_exec_Tissue_node_7uadkj6ih56;

let result_exec_Tissue_node_pq76x9zc05 = await exec_Tissue_node_pq76x9zc05(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: colors");

__params__.model = result_exec_Tissue_node_pq76x9zc05;

let result_exec_Tissue_node_eagr6qu3f5s = await exec_Tissue_node_eagr6qu3f5s(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: trees");

__params__.model = result_exec_Tissue_node_eagr6qu3f5s;

let result_exec_Tissue_node_jsohmb5dp5k = await exec_Tissue_node_jsohmb5dp5k(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);
console.log("Executing Node: End");

__params__.model = result_exec_Tissue_node_jsohmb5dp5k;

let result_exec_Tissue_node_ebs5kmuknbw = await exec_Tissue_node_ebs5kmuknbw(__params__, in_model_, fire_, off_art_front_, off_art_side_, off_art_back_, off_sec_front_, off_sec_side_, off_sec_back_, off_loc_front_, off_loc_side_, off_loc_back_, off_og_front_, off_og_side_, off_og_back_, ogc_plot_w_, ogc_path_w_, ogc_open_w_, ogc_open_l_, ogc2_plot_w_, ogc2_plot_d_, ogc2_path_w_, ogc2_xpath_w_, floors_art_, floors_sec_, floors_loc_, floors_og_, m_floors_art_, m_floors_sec_, m_floors_loc_);

return result_exec_Tissue_node_ebs5kmuknbw;
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
function printInp(in_model,fire,off_art_front,off_art_side,off_art_back,off_sec_front,off_sec_side,off_sec_back,off_loc_front,off_loc_side,off_loc_back,off_og_front,off_og_side,off_og_back,ogc_plot_w,ogc_path_w,ogc_open_w,ogc_open_l,ogc2_plot_w,ogc2_plot_d,ogc2_path_w,ogc2_xpath_w,floors_art,floors_sec,floors_loc,floors_og,m_floors_art,m_floors_sec,m_floors_loc){
console.log("Calling function Tissue() with the following arguments:\n" +
"  in_model = " + in_model + "\n" +
"  fire = " + fire + "\n" +
"  off_art_front = " + off_art_front + "\n" +
"  off_art_side = " + off_art_side + "\n" +
"  off_art_back = " + off_art_back + "\n" +
"  off_sec_front = " + off_sec_front + "\n" +
"  off_sec_side = " + off_sec_side + "\n" +
"  off_sec_back = " + off_sec_back + "\n" +
"  off_loc_front = " + off_loc_front + "\n" +
"  off_loc_side = " + off_loc_side + "\n" +
"  off_loc_back = " + off_loc_back + "\n" +
"  off_og_front = " + off_og_front + "\n" +
"  off_og_side = " + off_og_side + "\n" +
"  off_og_back = " + off_og_back + "\n" +
"  ogc_plot_w = " + ogc_plot_w + "\n" +
"  ogc_path_w = " + ogc_path_w + "\n" +
"  ogc_open_w = " + ogc_open_w + "\n" +
"  ogc_open_l = " + ogc_open_l + "\n" +
"  ogc2_plot_w = " + ogc2_plot_w + "\n" +
"  ogc2_plot_d = " + ogc2_plot_d + "\n" +
"  ogc2_path_w = " + ogc2_path_w + "\n" +
"  ogc2_xpath_w = " + ogc2_xpath_w + "\n" +
"  floors_art = " + floors_art + "\n" +
"  floors_sec = " + floors_sec + "\n" +
"  floors_loc = " + floors_loc + "\n" +
"  floors_og = " + floors_og + "\n" +
"  m_floors_art = " + m_floors_art + "\n" +
"  m_floors_sec = " + m_floors_sec + "\n" +
"  m_floors_loc = " + m_floors_loc + "\n" +
'')};


// printInp(in_model,fire,off_art_front,off_art_side,off_art_back,off_sec_front,off_sec_side,off_sec_back,off_loc_front,off_loc_side,off_loc_back,off_og_front,off_og_side,off_og_back,ogc_plot_w,ogc_path_w,ogc_open_w,ogc_open_l,ogc2_plot_w,ogc2_plot_d,ogc2_path_w,ogc2_xpath_w,floors_art,floors_sec,floors_loc,floors_og,m_floors_art,m_floors_sec,m_floors_loc);
const __params__ = {};
__params__["model"] = __modules__._model.__new__();
if (__model__) {
__modules__.io._importGI(__params__["model"], __model__);
}
__params__["model"].debug = __debug__;
__params__["console"] = [];
__params__["modules"] = __modules__;
const result = await exec_Tissue(__params__, in_model, fire, off_art_front, off_art_side, off_art_back, off_sec_front, off_sec_side, off_sec_back, off_loc_front, off_loc_side, off_loc_back, off_og_front, off_og_side, off_og_back, ogc_plot_w, ogc_path_w, ogc_open_w, ogc_open_l, ogc2_plot_w, ogc2_plot_d, ogc2_path_w, ogc2_xpath_w, floors_art, floors_sec, floors_loc, floors_og, m_floors_art, m_floors_sec, m_floors_loc);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default Tissue;
