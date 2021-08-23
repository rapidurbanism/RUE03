/**
 * to use this code: import Building_max from this js file as well as the GI module
 * run Building_max with the GI module as input along with other start node input
 * e.g.:
 * const Building_max = require('./Building_max.js').Building_max
 * const module = require('gi-module')
 * const result = await Building_max(module, start_input_1, start_input_2, ...);
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


async function Building_max(__modules__, in_model, pcen_art_art_w, pcen_art_art_d, pcen_art_art_f, pcen_art_sec_w, pcen_art_sec_d, pcen_art_sec_f, pcen_art_loc_w, pcen_art_loc_d, pcen_art_loc_f, pcen_art_w, pcen_art_d, pcen_art_f, pcen_sec_sec_w, pcen_sec_sec_d, pcen_sec_sec_f, pcen_sec_loc_w, pcen_sec_loc_d, pcen_sec_loc_f, pcen_sec_w, pcen_sec_d, pcen_sec_f, pcen_loc_loc_w, pcen_loc_loc_d, pcen_loc_loc_f, pcen_loc_w, pcen_loc_d, pcen_loc_f, pcen_og_w, pcen_og_d, pcen_og_f, pcen_og2_w, pcen_og2_d, pcen_og2_f) {

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


async function exec_Building_max(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){

async function exec_Building_max_node_45a8co2an3(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let coll_tissue_ = await __modules__.io.Import( __params__.model, in_model_, 'gi' );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_Building_max_node_nkkbwfhulom(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let footprints_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pg', null), ['class', null], '==', "max_footprint");

for (let  footprint_ of footprints_){

let num_floors_ = __modules__.attrib.Get(__params__.model, footprint_, 'max_floors');

if (num_floors_ > 0){

let bldg_ = __modules__.make.Extrude( __params__.model, footprint_, num_floors_ * 3, num_floors_, 'quads' );

__modules__.attrib.Set(__params__.model, bldg_, 'type',  __modules__.attrib.Get(__params__.model, footprint_, 'type') );

__modules__.attrib.Set(__params__.model, bldg_.slice(0,-1), 'class',  "bldg_facade" );

__modules__.attrib.Set(__params__.model, bldg_[pythonList(-1, bldg_.length)], 'class',  "bldg_roof" );
}
}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_max_node_l2svedb9d2_applyColours_(__params__, colors_dict_, pgons_) {

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

async function exec_Building_max_node_l2svedb9d2(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
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

await exec_Building_max_node_l2svedb9d2_applyColours_(__params__, colors_dict_bldg_, listFlat([footprints_, facades_, roofs_]));
if (__params__.terminated) { return __params__.model;}
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}



async function exec_Building_max_node_qrfyegrokq_tree4half_(__params__, height_) {

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


async function exec_Building_max_node_qrfyegrokq_tree4_(__params__, posi_, height_) {

let all_xyzs_ = [];

let cen_ = __modules__.attrib.Get(__params__.model, posi_, 'xyz');

let pln_ = [cen_, [1, 0, 0], [0, 1, 0]];

pln_ = plnLRotZ(pln_, JSON.parse(JSON.stringify(PI)) * rand(0, 1));

let height_step_ = height_ / 6;

height_ = height_ + rand(-height_step_, height_step_);

for (let  i_ of range(2)){

pln_ = plnLRotZ(pln_, (JSON.parse(JSON.stringify(PI)) / 2) * i_);

let xyzs_ = await exec_Building_max_node_qrfyegrokq_tree4half_(__params__, height_);
if (__params__.terminated) { return __params__.model;}

let xyzs2_ = vecGtoL(xyzs_, pln_);

__modules__.list.Add( all_xyzs_, xyzs2_, 'to_end' );
}

let posis_ = __modules__.make.Position( __params__.model, all_xyzs_ );

let canopy_ = __modules__.make.Polygon( __params__.model, posis_ );

return canopy_;
}

async function exec_Building_max_node_qrfyegrokq(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

let trees_ = [];

if (__modules__.attrib.Get(__params__.model, null, 'add_trees')){

let tree_pts_ = __modules__.query.Filter(__params__.model,  __modules__.query.Get(__params__.model, 'pt', null), ['type', null], '==', "tree");

for (let  tree_pt_ of tree_pts_){

let tree_ = await exec_Building_max_node_qrfyegrokq_tree4_(__params__, __modules__.query.Get(__params__.model, 'ps', tree_pt_)[pythonList(0, __modules__.query.Get(__params__.model, 'ps', tree_pt_).length)], __modules__.attrib.Get(__params__.model, null, 'tree_height_max'));
if (__params__.terminated) { return __params__.model;}

__modules__.list.Add( trees_, tree_, 'extend_end' );
}
}

__modules__.visualize.Color( __params__.model, trees_, [0.5, 1, 0.5] );
__modules__._model.__postprocess__( __params__.model);
break; }
return __params__.model;
}


async function exec_Building_max_node_9f040gjcy4(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_){
while (true) {
__modules__._model.__preprocess__( __params__.model);

return null;
break; }
}

var merged;
console.log("Executing Node: Start");
let result_exec_Building_max_node_4dg3sbnb261 = __params__.model;
console.log("Executing Node: import");

__params__.model = result_exec_Building_max_node_4dg3sbnb261;

let result_exec_Building_max_node_45a8co2an3 = await exec_Building_max_node_45a8co2an3(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: extrude tissue");

__params__.model = result_exec_Building_max_node_45a8co2an3;

let result_exec_Building_max_node_nkkbwfhulom = await exec_Building_max_node_nkkbwfhulom(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: colors");

__params__.model = result_exec_Building_max_node_nkkbwfhulom;

let result_exec_Building_max_node_l2svedb9d2 = await exec_Building_max_node_l2svedb9d2(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: trees");

__params__.model = result_exec_Building_max_node_l2svedb9d2;

let result_exec_Building_max_node_qrfyegrokq = await exec_Building_max_node_qrfyegrokq(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);
console.log("Executing Node: End");

__params__.model = result_exec_Building_max_node_qrfyegrokq;

let result_exec_Building_max_node_9f040gjcy4 = await exec_Building_max_node_9f040gjcy4(__params__, in_model_, pcen_art_art_w_, pcen_art_art_d_, pcen_art_art_f_, pcen_art_sec_w_, pcen_art_sec_d_, pcen_art_sec_f_, pcen_art_loc_w_, pcen_art_loc_d_, pcen_art_loc_f_, pcen_art_w_, pcen_art_d_, pcen_art_f_, pcen_sec_sec_w_, pcen_sec_sec_d_, pcen_sec_sec_f_, pcen_sec_loc_w_, pcen_sec_loc_d_, pcen_sec_loc_f_, pcen_sec_w_, pcen_sec_d_, pcen_sec_f_, pcen_loc_loc_w_, pcen_loc_loc_d_, pcen_loc_loc_f_, pcen_loc_w_, pcen_loc_d_, pcen_loc_f_, pcen_og_w_, pcen_og_d_, pcen_og_f_, pcen_og2_w_, pcen_og2_d_, pcen_og2_f_);

return result_exec_Building_max_node_9f040gjcy4;
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
function printInp(in_model,pcen_art_art_w,pcen_art_art_d,pcen_art_art_f,pcen_art_sec_w,pcen_art_sec_d,pcen_art_sec_f,pcen_art_loc_w,pcen_art_loc_d,pcen_art_loc_f,pcen_art_w,pcen_art_d,pcen_art_f,pcen_sec_sec_w,pcen_sec_sec_d,pcen_sec_sec_f,pcen_sec_loc_w,pcen_sec_loc_d,pcen_sec_loc_f,pcen_sec_w,pcen_sec_d,pcen_sec_f,pcen_loc_loc_w,pcen_loc_loc_d,pcen_loc_loc_f,pcen_loc_w,pcen_loc_d,pcen_loc_f,pcen_og_w,pcen_og_d,pcen_og_f,pcen_og2_w,pcen_og2_d,pcen_og2_f){
console.log("Calling function Building_max() with the following arguments:\n" +
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
const result = await exec_Building_max(__params__, in_model, pcen_art_art_w, pcen_art_art_d, pcen_art_art_f, pcen_art_sec_w, pcen_art_sec_d, pcen_art_sec_f, pcen_art_loc_w, pcen_art_loc_d, pcen_art_loc_f, pcen_art_w, pcen_art_d, pcen_art_f, pcen_sec_sec_w, pcen_sec_sec_d, pcen_sec_sec_f, pcen_sec_loc_w, pcen_sec_loc_d, pcen_sec_loc_f, pcen_sec_w, pcen_sec_d, pcen_sec_f, pcen_loc_loc_w, pcen_loc_loc_d, pcen_loc_loc_f, pcen_loc_w, pcen_loc_d, pcen_loc_f, pcen_og_w, pcen_og_d, pcen_og_f, pcen_og2_w, pcen_og2_d, pcen_og2_f);
if (result === __params__.model) { return { "model": __params__.model, "result": null };}
return {"model": __params__.model, "result": result};
/** * **/

}

export default Building_max;
