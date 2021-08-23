import React, { useEffect, useState } from "react";
import { useStores } from "@stores/index";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { fs } from 'memfs';
import { useIdleTimer } from 'react-idle-timer'
import { updateDashboard } from "./function"

const Luckysheet = observer(() => {
  const { uiState, mobiusStore, neighbourhoodStore } = useStores();
  const { financeCompView, mobiusUpdated, setMobiusUpdated, setFinanceTableSaving, financialTableVisible, setDashboardProcessing, stepInitialValue, rendering, setRendering } = uiState;
  const { City, Neighbourhood, Tissue } = mobiusStore
  const { LSCreated, setLSCreated } = neighbourhoodStore

  // Q sheet's order of all sheets
  const Qnumber = 2;

  const updateData = (C, N, T) => {
    const financialData = JSON.parse(fs.readFileSync("/financial.data", "utf8"))

    const QCelldata = financialData[Qnumber - 1].celldata;
    const Q = JSON.parse(JSON.stringify(QCelldata));
    //* City to Q  */
    //E54-E59
    Q[Q.findIndex(o => o.r === 53 && o.c === 4)].v.v = C.landowner0_area_agri / 10000
    Q[Q.findIndex(o => o.r === 54 && o.c === 4)].v.v = C.landowner1_area_agri / 10000
    Q[Q.findIndex(o => o.r === 55 && o.c === 4)].v.v = C.landowner2_area_agri / 10000
    Q[Q.findIndex(o => o.r === 56 && o.c === 4)].v.v = C.landowner3_area_agri / 10000
    Q[Q.findIndex(o => o.r === 57 && o.c === 4)].v.v = C.landowner4_area_agri / 10000
    Q[Q.findIndex(o => o.r === 58 && o.c === 4)].v.v = C.landowner5_area_agri / 10000
    //B53
    Q[Q.findIndex(o => o.r === 52 && o.c === 1)].v.v = C.site_roads_area / 10000
    //B64
    Q[Q.findIndex(o => o.r === 63 && o.c === 1)].v.v = C.site_area_total

    //* Neighbourhood to Q  */
    //C3-C5
    Q[Q.findIndex(o => o.r === 2 && o.c === 2)].v.v = N.road_len_art_100
    Q[Q.findIndex(o => o.r === 3 && o.c === 2)].v.v = N.road_len_sec_100
    Q[Q.findIndex(o => o.r === 4 && o.c === 2)].v.v = N.road_len_loc_100

    //D3-D5
    Q[Q.findIndex(o => o.r === 2 && o.c === 3)].v.v = N.road_len_art_50
    Q[Q.findIndex(o => o.r === 3 && o.c === 3)].v.v = N.road_len_sec_50
    Q[Q.findIndex(o => o.r === 4 && o.c === 3)].v.v = N.road_len_loc_50

    //L14-L17
    Q[Q.findIndex(o => o.r === 13 && o.c === 11)].v.v = N.open_art_art_area
    Q[Q.findIndex(o => o.r === 14 && o.c === 11)].v.v = N.open_art_sec_area
    Q[Q.findIndex(o => o.r === 15 && o.c === 11)].v.v = N.open_art_loc_area
    Q[Q.findIndex(o => o.r === 16 && o.c === 11)].v.v = N.open_art_area

    //L19-L21
    Q[Q.findIndex(o => o.r === 18 && o.c === 11)].v.v = N.open_sec_sec_area
    Q[Q.findIndex(o => o.r === 19 && o.c === 11)].v.v = N.open_sec_loc_area
    Q[Q.findIndex(o => o.r === 20 && o.c === 11)].v.v = N.open_sec_area

    //L23-L24
    Q[Q.findIndex(o => o.r === 22 && o.c === 11)].v.v = N.open_loc_loc_area
    Q[Q.findIndex(o => o.r === 23 && o.c === 11)].v.v = N.open_loc_area

    //L26-L30
    Q[Q.findIndex(o => o.r === 25 && o.c === 11)].v.v = N.open_og_clus0_on_art_area
    Q[Q.findIndex(o => o.r === 26 && o.c === 11)].v.v = N.open_og_clus0_on_sec_area
    Q[Q.findIndex(o => o.r === 27 && o.c === 11)].v.v = N.open_og_clus0_on_loc_area
    Q[Q.findIndex(o => o.r === 28 && o.c === 11)].v.v = N.open_og_clus1_on_loc_area
    Q[Q.findIndex(o => o.r === 29 && o.c === 11)].v.v = N.open_og_clus2_on_loc_area


    //M14-M17
    Q[Q.findIndex(o => o.r === 13 && o.c === 12)].v.v = N.amen_art_art_area
    Q[Q.findIndex(o => o.r === 14 && o.c === 12)].v.v = N.amen_art_sec_area
    Q[Q.findIndex(o => o.r === 15 && o.c === 12)].v.v = N.amen_art_loc_area
    Q[Q.findIndex(o => o.r === 16 && o.c === 12)].v.v = N.amen_art_area

    //M19-M21
    Q[Q.findIndex(o => o.r === 18 && o.c === 12)].v.v = N.amen_sec_sec_area
    Q[Q.findIndex(o => o.r === 19 && o.c === 12)].v.v = N.amen_sec_loc_area
    Q[Q.findIndex(o => o.r === 20 && o.c === 12)].v.v = N.amen_sec_area

    //M23-M24
    Q[Q.findIndex(o => o.r === 22 && o.c === 12)].v.v = N.amen_loc_loc_area
    Q[Q.findIndex(o => o.r === 23 && o.c === 12)].v.v = N.amen_loc_area

    //M26-M30
    Q[Q.findIndex(o => o.r === 25 && o.c === 12)].v.v = N.amen_og_clus0_on_art_area
    Q[Q.findIndex(o => o.r === 26 && o.c === 12)].v.v = N.amen_og_clus0_on_sec_area
    Q[Q.findIndex(o => o.r === 27 && o.c === 12)].v.v = N.amen_og_clus0_on_loc_area
    Q[Q.findIndex(o => o.r === 28 && o.c === 12)].v.v = N.amen_og_clus1_on_loc_area
    Q[Q.findIndex(o => o.r === 29 && o.c === 12)].v.v = N.amen_og_clus2_on_loc_area

    //O14-O17
    Q[Q.findIndex(o => o.r === 13 && o.c === 14)].v.v = N.lot_art_art_area
    Q[Q.findIndex(o => o.r === 14 && o.c === 14)].v.v = N.lot_art_sec_area
    Q[Q.findIndex(o => o.r === 15 && o.c === 14)].v.v = N.lot_art_loc_area
    Q[Q.findIndex(o => o.r === 16 && o.c === 14)].v.v = N.lot_art_area

    //O19-O21
    Q[Q.findIndex(o => o.r === 18 && o.c === 14)].v.v = N.lot_sec_sec_area
    Q[Q.findIndex(o => o.r === 19 && o.c === 14)].v.v = N.lot_sec_loc_area
    Q[Q.findIndex(o => o.r === 20 && o.c === 14)].v.v = N.lot_sec_area

    //O23-O24
    Q[Q.findIndex(o => o.r === 22 && o.c === 14)].v.v = N.lot_loc_loc_area
    Q[Q.findIndex(o => o.r === 23 && o.c === 14)].v.v = N.lot_loc_area

    //O25-O30
    Q[Q.findIndex(o => o.r === 25 && o.c === 14)].v.v = N.og_clus0_on_art_area
    Q[Q.findIndex(o => o.r === 26 && o.c === 14)].v.v = N.og_clus0_on_sec_area
    Q[Q.findIndex(o => o.r === 27 && o.c === 14)].v.v = N.og_clus0_on_loc_area
    Q[Q.findIndex(o => o.r === 28 && o.c === 14)].v.v = N.og_clus1_on_loc_area
    Q[Q.findIndex(o => o.r === 29 && o.c === 14)].v.v = N.og_clus2_on_loc_area

    //X14-X17
    Q[Q.findIndex(o => o.r === 13 && o.c === 23)].v.v = N.lot_art_art_num
    Q[Q.findIndex(o => o.r === 14 && o.c === 23)].v.v = N.lot_art_sec_num
    Q[Q.findIndex(o => o.r === 15 && o.c === 23)].v.v = N.lot_art_loc_num
    Q[Q.findIndex(o => o.r === 16 && o.c === 23)].v.v = N.lot_art_num

    //X19-X21
    Q[Q.findIndex(o => o.r === 18 && o.c === 23)].v.v = N.lot_sec_sec_num
    Q[Q.findIndex(o => o.r === 19 && o.c === 23)].v.v = N.lot_sec_loc_num
    Q[Q.findIndex(o => o.r === 20 && o.c === 23)].v.v = N.lot_sec_num

    //X23-X24
    Q[Q.findIndex(o => o.r === 22 && o.c === 23)].v.v = N.lot_loc_loc_num
    Q[Q.findIndex(o => o.r === 23 && o.c === 23)].v.v = N.lot_loc_num

    //G33-G35
    Q[Q.findIndex(o => o.r === 32 && o.c === 6)].v.v = N.road_area_art
    Q[Q.findIndex(o => o.r === 33 && o.c === 6)].v.v = N.road_area_sec
    Q[Q.findIndex(o => o.r === 34 && o.c === 6)].v.v = N.road_area_loc

    //C45-C49
    Q[Q.findIndex(o => o.r === 44 && o.c === 2)].v.v = N.og_clus0_on_art_num
    Q[Q.findIndex(o => o.r === 45 && o.c === 2)].v.v = N.og_clus0_on_sec_num
    Q[Q.findIndex(o => o.r === 46 && o.c === 2)].v.v = N.og_clus0_on_loc_num
    Q[Q.findIndex(o => o.r === 47 && o.c === 2)].v.v = N.og_clus1_on_loc_num
    Q[Q.findIndex(o => o.r === 48 && o.c === 2)].v.v = N.og_clus2_on_loc_num

    //G45-G48
    Q[Q.findIndex(o => o.r === 44 && o.c === 6)].v.v = N.og_entr0_on_art_area
    Q[Q.findIndex(o => o.r === 45 && o.c === 6)].v.v = N.og_entr0_on_sec_area
    Q[Q.findIndex(o => o.r === 46 && o.c === 6)].v.v = N.og_entr0_on_loc_area
    Q[Q.findIndex(o => o.r === 47 && o.c === 6)].v.v = N.og_entr1_on_loc_area

    //Q37
    Q[Q.findIndex(o => o.r === 36 && o.c === 16)].v.v = N.site_total_area

    //V28
    Q[Q.findIndex(o => o.r === 27 && o.c === 21)].v.v = N.param_ogc_w

    //Y17, Y21, Y24
    Q[Q.findIndex(o => o.r === 16 && o.c === 24)].v.v = N.param_lot_art_d
    Q[Q.findIndex(o => o.r === 20 && o.c === 24)].v.v = N.param_lot_sec_d
    Q[Q.findIndex(o => o.r === 23 && o.c === 24)].v.v = N.param_lot_loc_d

    // Z17, Z21, Z24
    Q[Q.findIndex(o => o.r === 16 && o.c === 25)].v.v = N.param_lot_art_w
    Q[Q.findIndex(o => o.r === 20 && o.c === 25)].v.v = N.param_lot_sec_w
    Q[Q.findIndex(o => o.r === 23 && o.c === 25)].v.v = N.param_lot_loc_w


    //* Tissue to Q  */
    //X26-X30
    Q[Q.findIndex(o => o.r === 25 && o.c === 23)].v.v = T.og_lot0_on_art_num
    Q[Q.findIndex(o => o.r === 26 && o.c === 23)].v.v = T.og_lot0_on_sec_num
    Q[Q.findIndex(o => o.r === 27 && o.c === 23)].v.v = T.og_lot0_on_loc_num
    Q[Q.findIndex(o => o.r === 28 && o.c === 23)].v.v = T.og_lot1_on_loc_num
    Q[Q.findIndex(o => o.r === 29 && o.c === 23)].v.v = T.og_lot2_on_loc_num

    //D45-D49
    Q[Q.findIndex(o => o.r === 44 && o.c === 3)].v.v = T.og_clus0_on_art_con
    Q[Q.findIndex(o => o.r === 45 && o.c === 3)].v.v = T.og_clus0_on_sec_con
    Q[Q.findIndex(o => o.r === 46 && o.c === 3)].v.v = T.og_clus0_on_loc_con
    Q[Q.findIndex(o => o.r === 47 && o.c === 3)].v.v = T.og_clus1_on_loc_con
    Q[Q.findIndex(o => o.r === 48 && o.c === 3)].v.v = T.og_clus2_on_loc_con

    //H45-H49
    Q[Q.findIndex(o => o.r === 44 && o.c === 7)].v.v = T.og_path0_on_art_area
    Q[Q.findIndex(o => o.r === 45 && o.c === 7)].v.v = T.og_path0_on_sec_area
    Q[Q.findIndex(o => o.r === 46 && o.c === 7)].v.v = T.og_path0_on_loc_area
    Q[Q.findIndex(o => o.r === 47 && o.c === 7)].v.v = T.og_path1_on_loc_area
    Q[Q.findIndex(o => o.r === 48 && o.c === 7)].v.v = T.og_path2_on_loc_area

    //I45-I49
    Q[Q.findIndex(o => o.r === 44 && o.c === 8)].v.v = T.og_green0_on_art_area
    Q[Q.findIndex(o => o.r === 45 && o.c === 8)].v.v = T.og_green0_on_sec_area
    Q[Q.findIndex(o => o.r === 46 && o.c === 8)].v.v = T.og_green0_on_loc_area
    Q[Q.findIndex(o => o.r === 47 && o.c === 8)].v.v = T.og_green1_on_loc_area
    Q[Q.findIndex(o => o.r === 48 && o.c === 8)].v.v = T.og_green2_on_loc_area

    //W28, W30
    Q[Q.findIndex(o => o.r === 27 && o.c === 22)].v.v = T.param_og_path_w
    Q[Q.findIndex(o => o.r === 29 && o.c === 22)].v.v = T.param_og2_path_w

    //Z27, Z28, Z30
    Q[Q.findIndex(o => o.r === 26 && o.c === 25)].v.v = T.param_lot_og_on_sec_w
    Q[Q.findIndex(o => o.r === 27 && o.c === 25)].v.v = T.param_lot_og_on_loc_w
    Q[Q.findIndex(o => o.r === 29 && o.c === 25)].v.v = T.param_lot_og2_w

    //AB17, AB21, AB24, AB27, AB28, AB30
    Q[Q.findIndex(o => o.r === 16 && o.c === 27)].v.v = T.param_lot_art_fsb
    Q[Q.findIndex(o => o.r === 20 && o.c === 27)].v.v = T.param_lot_sec_fsb
    Q[Q.findIndex(o => o.r === 23 && o.c === 27)].v.v = T.param_lot_loc_fsb
    Q[Q.findIndex(o => o.r === 26 && o.c === 27)].v.v = T.param_lot_og_on_sec_fsb
    Q[Q.findIndex(o => o.r === 27 && o.c === 27)].v.v = T.param_lot_og_on_loc_fsb
    Q[Q.findIndex(o => o.r === 29 && o.c === 27)].v.v = T.param_lot_og2_fsb

    //AC17, AC21, AC24, AC27, AC28, AC30
    Q[Q.findIndex(o => o.r === 16 && o.c === 28)].v.v = T.param_lot_art_bsb
    Q[Q.findIndex(o => o.r === 20 && o.c === 28)].v.v = T.param_lot_sec_bsb
    Q[Q.findIndex(o => o.r === 23 && o.c === 28)].v.v = T.param_lot_loc_bsb
    Q[Q.findIndex(o => o.r === 26 && o.c === 28)].v.v = T.param_lot_og_on_sec_bsb
    Q[Q.findIndex(o => o.r === 27 && o.c === 28)].v.v = T.param_lot_og_on_loc_bsb
    Q[Q.findIndex(o => o.r === 29 && o.c === 28)].v.v = T.param_lot_og2_bsb

    //AE17, AE21, AE24, AE27, AE28, AE30
    Q[Q.findIndex(o => o.r === 16 && o.c === 30)].v.v = T.param_lot_art_ssb
    Q[Q.findIndex(o => o.r === 20 && o.c === 30)].v.v = T.param_lot_sec_ssb
    Q[Q.findIndex(o => o.r === 23 && o.c === 30)].v.v = T.param_lot_loc_ssb
    Q[Q.findIndex(o => o.r === 26 && o.c === 30)].v.v = T.param_lot_og_on_sec_ssb
    Q[Q.findIndex(o => o.r === 27 && o.c === 30)].v.v = T.param_lot_og_on_loc_ssb
    Q[Q.findIndex(o => o.r === 29 && o.c === 30)].v.v = T.param_lot_og2_ssb

    //AI17, AI21, AI24, AI28
    Q[Q.findIndex(o => o.r === 16 && o.c === 34)].v.v = T.param_lot_art_f
    Q[Q.findIndex(o => o.r === 20 && o.c === 34)].v.v = T.param_lot_sec_f
    Q[Q.findIndex(o => o.r === 23 && o.c === 34)].v.v = T.param_lot_loc_f
    Q[Q.findIndex(o => o.r === 27 && o.c === 34)].v.v = T.param_lot_og_f

    //AJ14, AJ15, AJ16
    Q[Q.findIndex(o => o.r === 13 && o.c === 35)].v.v = T.param_lot_art_fm / 100
    Q[Q.findIndex(o => o.r === 14 && o.c === 35)].v.v = T.param_lot_sec_fm / 100
    Q[Q.findIndex(o => o.r === 15 && o.c === 35)].v.v = T.param_lot_loc_fm / 100

    //AO14, AP14, AQ14
    Q[Q.findIndex(o => o.r === 13 && o.c === 40)].v.v = stepInitialValue.building.pcen_art_art_w / 100
    Q[Q.findIndex(o => o.r === 13 && o.c === 41)].v.v = stepInitialValue.building.pcen_art_art_d / 100
    Q[Q.findIndex(o => o.r === 13 && o.c === 42)].v.v = stepInitialValue.building.pcen_art_art_f / 100

    //AO15, AP15, AQ15
    Q[Q.findIndex(o => o.r === 14 && o.c === 40)].v.v = stepInitialValue.building.pcen_art_sec_w / 100
    Q[Q.findIndex(o => o.r === 14 && o.c === 41)].v.v = stepInitialValue.building.pcen_art_sec_d / 100
    Q[Q.findIndex(o => o.r === 14 && o.c === 42)].v.v = stepInitialValue.building.pcen_art_sec_f / 100

    //AO16, AP16, AQ16
    Q[Q.findIndex(o => o.r === 15 && o.c === 40)].v.v = stepInitialValue.building.pcen_art_loc_w / 100
    Q[Q.findIndex(o => o.r === 15 && o.c === 41)].v.v = stepInitialValue.building.pcen_art_loc_d / 100
    Q[Q.findIndex(o => o.r === 15 && o.c === 42)].v.v = stepInitialValue.building.pcen_art_loc_f / 100

    //AO17, AP17, AQ17
    Q[Q.findIndex(o => o.r === 16 && o.c === 40)].v.v = stepInitialValue.building.pcen_art_w / 100
    Q[Q.findIndex(o => o.r === 16 && o.c === 41)].v.v = stepInitialValue.building.pcen_art_d / 100
    Q[Q.findIndex(o => o.r === 16 && o.c === 42)].v.v = stepInitialValue.building.pcen_art_f / 100

    //AO19, AP19, AQ19
    Q[Q.findIndex(o => o.r === 18 && o.c === 40)].v.v = stepInitialValue.building.pcen_sec_sec_w / 100
    Q[Q.findIndex(o => o.r === 18 && o.c === 41)].v.v = stepInitialValue.building.pcen_sec_sec_d / 100
    Q[Q.findIndex(o => o.r === 18 && o.c === 42)].v.v = stepInitialValue.building.pcen_sec_sec_f / 100

    //AO20, AP20, AQ20
    Q[Q.findIndex(o => o.r === 19 && o.c === 40)].v.v = stepInitialValue.building.pcen_sec_loc_w / 100
    Q[Q.findIndex(o => o.r === 19 && o.c === 41)].v.v = stepInitialValue.building.pcen_sec_loc_d / 100
    Q[Q.findIndex(o => o.r === 19 && o.c === 42)].v.v = stepInitialValue.building.pcen_sec_loc_f / 100

    //AO21, AP21, AQ21
    Q[Q.findIndex(o => o.r === 20 && o.c === 40)].v.v = stepInitialValue.building.pcen_sec_w / 100
    Q[Q.findIndex(o => o.r === 20 && o.c === 41)].v.v = stepInitialValue.building.pcen_sec_d / 100
    Q[Q.findIndex(o => o.r === 20 && o.c === 42)].v.v = stepInitialValue.building.pcen_sec_f / 100

    //AO23, AP23, AQ23
    Q[Q.findIndex(o => o.r === 22 && o.c === 40)].v.v = stepInitialValue.building.pcen_loc_loc_w / 100
    Q[Q.findIndex(o => o.r === 22 && o.c === 41)].v.v = stepInitialValue.building.pcen_loc_loc_d / 100
    Q[Q.findIndex(o => o.r === 22 && o.c === 42)].v.v = stepInitialValue.building.pcen_loc_loc_f / 100

    //AO24, AP24, AQ24
    Q[Q.findIndex(o => o.r === 23 && o.c === 40)].v.v = stepInitialValue.building.pcen_loc_w / 100
    Q[Q.findIndex(o => o.r === 23 && o.c === 41)].v.v = stepInitialValue.building.pcen_loc_d / 100
    Q[Q.findIndex(o => o.r === 23 && o.c === 42)].v.v = stepInitialValue.building.pcen_loc_f / 100

    //AO28, AP28, AQ28
    Q[Q.findIndex(o => o.r === 27 && o.c === 40)].v.v = stepInitialValue.building.pcen_og_w / 100
    Q[Q.findIndex(o => o.r === 27 && o.c === 41)].v.v = stepInitialValue.building.pcen_og_d / 100
    Q[Q.findIndex(o => o.r === 27 && o.c === 42)].v.v = stepInitialValue.building.pcen_og_f / 100

    //AO30, AP30, AQ30
    Q[Q.findIndex(o => o.r === 29 && o.c === 40)].v.v = stepInitialValue.building.pcen_og2_w / 100
    Q[Q.findIndex(o => o.r === 29 && o.c === 41)].v.v = stepInitialValue.building.pcen_og2_d / 100
    Q[Q.findIndex(o => o.r === 29 && o.c === 42)].v.v = stepInitialValue.building.pcen_og2_f / 100

    const SheetQ = Object.assign(financialData[Qnumber - 1], { celldata: Q });

    const copy = JSON.parse(JSON.stringify(financialData))

    // remove the first 2 tabs including Q
    const _copy = copy.slice(Qnumber);
    // console.log("_copy", _copy)

    // add Q sheet 
    const sheets = [SheetQ].concat(_copy)

    // add back the first sheet
    sheets.unshift(financialData[0])
    fs.writeFileSync("/financial.data", JSON.stringify(sheets));
    return sheets;
  }

  useEffect(() => {
    const luckysheet = window.luckysheet;
    if (mobiusUpdated) {
      setDashboardProcessing(true)
      // if (financeCompView === "hide") {
      //   setMobiusUpdated(false)
      //   return;
      // }
      // luckysheet.destroy();

      const C = toJS(City.result);
      const N = toJS(Neighbourhood.result);
      const T = toJS(Tissue.result);
      // const _data = updateData(C, N, T);
      const _data = JSON.parse(fs.readFileSync("/financial.data", "utf8"))

      luckysheet.create({
        container: "luckysheet",
        data: _data,
        showinfobar: false,
        showtoolbar: false,
        showstatisticBar: false,
        forceCalculation: true,
        sheetFormulaBar: false,
        // rowHeaderWidth: 0,
        // columnHeaderHeight: 0,
        hook: {
          workbookCreateAfter: function (json) {
            setLSCreated(true)
          }
        }
      });
      setTimeout(() => {

        luckysheet.setSheetActive(Qnumber - 1)
        //* City to Q  */
        //E54-E59
        luckysheet.setCellValue(53, 4, C.landowner0_area_agri / 10000, { isRefresh: false })
        luckysheet.setCellValue(54, 4, C.landowner1_area_agri / 10000, { isRefresh: false })
        luckysheet.setCellValue(55, 4, C.landowner2_area_agri / 10000, { isRefresh: false })
        luckysheet.setCellValue(56, 4, C.landowner3_area_agri / 10000, { isRefresh: false })
        luckysheet.setCellValue(57, 4, C.landowner4_area_agri / 10000, { isRefresh: false })
        luckysheet.setCellValue(58, 4, C.landowner5_area_agri / 10000, { isRefresh: false })
        //B53
        luckysheet.setCellValue(52, 1, C.site_roads_area / 10000, { isRefresh: false })
        //B64
        luckysheet.setCellValue(63, 1, N.site_area_total, { isRefresh: false })

        //* Neighbourhood to Q  */
        //C3-C5
        luckysheet.setCellValue(2, 2, N.road_len_art_100, { isRefresh: false })
        luckysheet.setCellValue(3, 2, N.road_len_sec_100, { isRefresh: false })
        luckysheet.setCellValue(4, 2, N.road_len_loc_100, { isRefresh: false })
        //D3-D5
        luckysheet.setCellValue(2, 3, N.road_len_art_50, { isRefresh: false })
        luckysheet.setCellValue(3, 3, N.road_len_sec_50, { isRefresh: false })
        luckysheet.setCellValue(4, 3, N.road_len_loc_50, { isRefresh: false })
        //L14-L17
        luckysheet.setCellValue(13, 11, N.open_art_art_area, { isRefresh: false })
        luckysheet.setCellValue(14, 11, N.open_art_sec_area, { isRefresh: false })
        luckysheet.setCellValue(15, 11, N.open_art_loc_area, { isRefresh: false })
        luckysheet.setCellValue(16, 11, N.open_art_area, { isRefresh: false })
        //L19-L21
        luckysheet.setCellValue(18, 11, N.open_sec_sec_area, { isRefresh: false })
        luckysheet.setCellValue(19, 11, N.open_sec_loc_area, { isRefresh: false })
        luckysheet.setCellValue(20, 11, N.open_sec_area, { isRefresh: false })
        //L23-L24
        luckysheet.setCellValue(22, 11, N.open_loc_loc_area, { isRefresh: false })
        luckysheet.setCellValue(23, 11, N.open_loc_area, { isRefresh: false })
        //L26-L30
        luckysheet.setCellValue(25, 11, N.open_og_clus0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(26, 11, N.open_og_clus0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(27, 11, N.open_og_clus0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(28, 11, N.open_og_clus1_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(29, 11, N.open_og_clus2_on_loc_area, { isRefresh: false })
        //M14-M17
        luckysheet.setCellValue(13, 12, N.amen_art_art_area, { isRefresh: false })
        luckysheet.setCellValue(14, 12, N.amen_art_sec_area, { isRefresh: false })
        luckysheet.setCellValue(15, 12, N.amen_art_loc_area, { isRefresh: false })
        luckysheet.setCellValue(16, 12, N.amen_art_area, { isRefresh: false })
        //M19-M21
        luckysheet.setCellValue(18, 12, N.amen_sec_sec_area, { isRefresh: false })
        luckysheet.setCellValue(19, 12, N.amen_sec_loc_area, { isRefresh: false })
        luckysheet.setCellValue(20, 12, N.amen_sec_area, { isRefresh: false })
        //M23-M24
        luckysheet.setCellValue(22, 12, N.amen_loc_loc_area, { isRefresh: false })
        luckysheet.setCellValue(23, 12, N.amen_loc_area, { isRefresh: false })
        //M26-M30
        luckysheet.setCellValue(25, 12, N.amen_og_clus0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(26, 12, N.amen_og_clus0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(27, 12, N.amen_og_clus0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(28, 12, N.amen_og_clus1_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(29, 12, N.amen_og_clus2_on_loc_area, { isRefresh: false })
        //O14-O17
        luckysheet.setCellValue(13, 14, N.lot_art_art_area, { isRefresh: false })
        luckysheet.setCellValue(14, 14, N.lot_art_sec_area, { isRefresh: false })
        luckysheet.setCellValue(15, 14, N.lot_art_loc_area, { isRefresh: false })
        luckysheet.setCellValue(16, 14, N.lot_art_area, { isRefresh: false })
        //O19-O21
        luckysheet.setCellValue(18, 14, N.lot_sec_sec_area, { isRefresh: false })
        luckysheet.setCellValue(19, 14, N.lot_sec_loc_area, { isRefresh: false })
        luckysheet.setCellValue(20, 14, N.lot_sec_area, { isRefresh: false })
        //O23-O24
        luckysheet.setCellValue(22, 14, N.lot_loc_loc_area, { isRefresh: false })
        luckysheet.setCellValue(23, 14, N.lot_loc_area, { isRefresh: false })
        //O25-O30
        luckysheet.setCellValue(25, 14, N.og_clus0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(26, 14, N.og_clus0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(27, 14, N.og_clus0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(28, 14, N.og_clus1_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(29, 14, N.og_clus2_on_loc_area, { isRefresh: false })
        //X14-X17
        luckysheet.setCellValue(13, 23, N.lot_art_art_num, { isRefresh: false })
        luckysheet.setCellValue(14, 23, N.lot_art_sec_num, { isRefresh: false })
        luckysheet.setCellValue(15, 23, N.lot_art_loc_num, { isRefresh: false })
        luckysheet.setCellValue(16, 23, N.lot_art_num, { isRefresh: false })
        //X19-X21
        luckysheet.setCellValue(18, 23, N.lot_sec_sec_num, { isRefresh: false })
        luckysheet.setCellValue(19, 23, N.lot_sec_loc_num, { isRefresh: false })
        luckysheet.setCellValue(20, 23, N.lot_sec_num, { isRefresh: false })
        //X23-X24
        luckysheet.setCellValue(22, 23, N.lot_loc_loc_num, { isRefresh: false })
        luckysheet.setCellValue(23, 23, N.lot_loc_num, { isRefresh: false })
        //G33-G35
        luckysheet.setCellValue(32, 6, N.road_area_art, { isRefresh: false })
        luckysheet.setCellValue(33, 6, N.road_area_sec, { isRefresh: false })
        luckysheet.setCellValue(34, 6, N.road_area_loc, { isRefresh: false })
        //C45-C49
        luckysheet.setCellValue(44, 2, N.og_clus0_on_art_num, { isRefresh: false })
        luckysheet.setCellValue(45, 2, N.og_clus0_on_sec_num, { isRefresh: false })
        luckysheet.setCellValue(46, 2, N.og_clus0_on_loc_num, { isRefresh: false })
        luckysheet.setCellValue(47, 2, N.og_clus1_on_loc_num, { isRefresh: false })
        luckysheet.setCellValue(48, 2, N.og_clus2_on_loc_num, { isRefresh: false })
        //G45-G48
        luckysheet.setCellValue(44, 6, N.og_entr0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(45, 6, N.og_entr0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(46, 6, N.og_entr0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(47, 6, N.og_entr1_on_loc_area, { isRefresh: false })
        //Q37
        luckysheet.setCellValue(36, 16, N.site_total_area, { isRefresh: false })
        //V28
        luckysheet.setCellValue(27, 21, N.param_ogc_w, { isRefresh: false })
        //Y17, Y21, Y24
        luckysheet.setCellValue(16, 24, N.param_lot_art_d, { isRefresh: false })
        luckysheet.setCellValue(20, 24, N.param_lot_sec_d, { isRefresh: false })
        luckysheet.setCellValue(23, 24, N.param_lot_loc_d, { isRefresh: false })
        //Z17, Z21, Z24
        luckysheet.setCellValue(16, 25, N.param_lot_art_w, { isRefresh: false })
        luckysheet.setCellValue(20, 25, N.param_lot_sec_w, { isRefresh: false })
        luckysheet.setCellValue(23, 25, N.param_lot_loc_w, { isRefresh: false })
        //* Tissue to Q  */
        //X26-X30
        luckysheet.setCellValue(25, 23, T.og_lot0_on_art_num, { isRefresh: false })
        luckysheet.setCellValue(26, 23, T.og_lot0_on_sec_num, { isRefresh: false })
        luckysheet.setCellValue(27, 23, T.og_lot0_on_loc_num, { isRefresh: false })
        luckysheet.setCellValue(28, 23, T.og_lot1_on_loc_num, { isRefresh: false })
        luckysheet.setCellValue(29, 23, T.og_lot2_on_loc_num, { isRefresh: false })
        //D45-D49
        luckysheet.setCellValue(44, 3, T.og_clus0_on_art_con, { isRefresh: false })
        luckysheet.setCellValue(45, 3, T.og_clus0_on_sec_con, { isRefresh: false })
        luckysheet.setCellValue(46, 3, T.og_clus0_on_loc_con, { isRefresh: false })
        luckysheet.setCellValue(47, 3, T.og_clus1_on_loc_con, { isRefresh: false })
        luckysheet.setCellValue(48, 3, T.og_clus2_on_loc_con, { isRefresh: false })
        //H45-H49
        luckysheet.setCellValue(44, 7, T.og_path0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(45, 7, T.og_path0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(46, 7, T.og_path0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(47, 7, T.og_path1_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(48, 7, T.og_path2_on_loc_area, { isRefresh: false })
        //I45-I49
        luckysheet.setCellValue(44, 8, T.og_green0_on_art_area, { isRefresh: false })
        luckysheet.setCellValue(45, 8, T.og_green0_on_sec_area, { isRefresh: false })
        luckysheet.setCellValue(46, 8, T.og_green0_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(47, 8, T.og_green1_on_loc_area, { isRefresh: false })
        luckysheet.setCellValue(48, 8, T.og_green2_on_loc_area, { isRefresh: false })
        //W28, W30
        luckysheet.setCellValue(27, 22, T.param_og_path_w, { isRefresh: false })
        luckysheet.setCellValue(29, 22, T.param_og2_path_w, { isRefresh: false })
        //Z27, Z28, Z30
        luckysheet.setCellValue(26, 25, T.param_lot_og_on_sec_w, { isRefresh: false })
        luckysheet.setCellValue(27, 25, T.param_lot_og_on_loc_w, { isRefresh: false })
        luckysheet.setCellValue(29, 25, T.param_lot_og2_w, { isRefresh: false })
        //AB17, AB21, AB24, AB27, AB28, AB30
        luckysheet.setCellValue(16, 27, T.param_lot_art_fsb, { isRefresh: false })
        luckysheet.setCellValue(20, 27, T.param_lot_sec_fsb, { isRefresh: false })
        luckysheet.setCellValue(23, 27, T.param_lot_loc_fsb, { isRefresh: false })
        luckysheet.setCellValue(26, 27, T.param_lot_og_on_sec_fsb, { isRefresh: false })
        luckysheet.setCellValue(27, 27, T.param_lot_og_on_loc_fsb, { isRefresh: false })
        luckysheet.setCellValue(28, 27, T.param_lot_og2_fsb, { isRefresh: false })
        //AC17, AC21, AC24, AC27, AC28, AC30
        luckysheet.setCellValue(16, 28, T.param_lot_art_bsb, { isRefresh: false })
        luckysheet.setCellValue(20, 28, T.param_lot_sec_bsb, { isRefresh: false })
        luckysheet.setCellValue(23, 28, T.param_lot_loc_bsb, { isRefresh: false })
        luckysheet.setCellValue(26, 28, T.param_lot_og_on_sec_bsb, { isRefresh: false })
        luckysheet.setCellValue(27, 28, T.param_lot_og_on_loc_bsb, { isRefresh: false })
        luckysheet.setCellValue(28, 28, T.param_lot_og2_bsb, { isRefresh: false })
        //AE17, AE21, AE24, AE27, AE28, AE30
        luckysheet.setCellValue(16, 30, T.param_lot_art_ssb, { isRefresh: false })
        luckysheet.setCellValue(20, 30, T.param_lot_sec_ssb, { isRefresh: false })
        luckysheet.setCellValue(23, 30, T.param_lot_loc_ssb, { isRefresh: false })
        luckysheet.setCellValue(26, 30, T.param_lot_og_on_sec_ssb, { isRefresh: false })
        luckysheet.setCellValue(27, 30, T.param_lot_og_on_loc_ssb, { isRefresh: false })
        luckysheet.setCellValue(28, 30, T.param_lot_og2_ssb, { isRefresh: false })
        //AI17, AI21, AI24, AI28
        luckysheet.setCellValue(16, 34, T.param_lot_art_f, { isRefresh: false })
        luckysheet.setCellValue(20, 34, T.param_lot_sec_f, { isRefresh: false })
        luckysheet.setCellValue(23, 34, T.param_lot_loc_f, { isRefresh: false })
        luckysheet.setCellValue(27, 34, T.param_lot_og_f, { isRefresh: false })
        //AJ14, AJ15, AJ16
        luckysheet.setCellValue(13, 35, T.param_lot_art_fm / 100, { isRefresh: false })
        luckysheet.setCellValue(14, 35, T.param_lot_sec_fm / 100, { isRefresh: false })
        luckysheet.setCellValue(15, 35, T.param_lot_loc_fm / 100, { isRefresh: false })
        //AO14, AP14, AQ14
        luckysheet.setCellValue(13, 40, stepInitialValue.building.pcen_art_art_w / 100, { isRefresh: false })
        luckysheet.setCellValue(13, 41, stepInitialValue.building.pcen_art_art_d / 100, { isRefresh: false })
        luckysheet.setCellValue(13, 42, stepInitialValue.building.pcen_art_art_f / 100, { isRefresh: false })
        //AO15, AP15, AQ15
        luckysheet.setCellValue(14, 40, stepInitialValue.building.pcen_art_sec_w / 100, { isRefresh: false })
        luckysheet.setCellValue(14, 41, stepInitialValue.building.pcen_art_sec_d / 100, { isRefresh: false })
        luckysheet.setCellValue(14, 42, stepInitialValue.building.pcen_art_sec_f / 100, { isRefresh: false })
        //AO16, AP16, AQ16
        luckysheet.setCellValue(15, 40, stepInitialValue.building.pcen_art_loc_w / 100, { isRefresh: false })
        luckysheet.setCellValue(15, 41, stepInitialValue.building.pcen_art_loc_d / 100, { isRefresh: false })
        luckysheet.setCellValue(15, 42, stepInitialValue.building.pcen_art_loc_f / 100, { isRefresh: false })
        //AO17, AP17, AQ17
        luckysheet.setCellValue(16, 40, stepInitialValue.building.pcen_art_w / 100, { isRefresh: false })
        luckysheet.setCellValue(16, 41, stepInitialValue.building.pcen_art_d / 100, { isRefresh: false })
        luckysheet.setCellValue(16, 42, stepInitialValue.building.pcen_art_f / 100, { isRefresh: false })
        //AO19, AP19, AQ19
        luckysheet.setCellValue(18, 40, stepInitialValue.building.pcen_sec_sec_w / 100, { isRefresh: false })
        luckysheet.setCellValue(18, 41, stepInitialValue.building.pcen_sec_sec_d / 100, { isRefresh: false })
        luckysheet.setCellValue(18, 42, stepInitialValue.building.pcen_sec_sec_f / 100, { isRefresh: false })
        //AO20, AP20, AQ20
        luckysheet.setCellValue(19, 40, stepInitialValue.building.pcen_sec_loc_w / 100, { isRefresh: false })
        luckysheet.setCellValue(19, 41, stepInitialValue.building.pcen_sec_loc_d / 100, { isRefresh: false })
        luckysheet.setCellValue(19, 42, stepInitialValue.building.pcen_sec_loc_f / 100, { isRefresh: false })
        //AO21, AP21, AQ21
        luckysheet.setCellValue(20, 40, stepInitialValue.building.pcen_sec_w / 100, { isRefresh: false })
        luckysheet.setCellValue(20, 41, stepInitialValue.building.pcen_sec_d / 100, { isRefresh: false })
        luckysheet.setCellValue(20, 42, stepInitialValue.building.pcen_sec_f / 100, { isRefresh: false })
        //AO23, AP23, AQ23
        luckysheet.setCellValue(22, 40, stepInitialValue.building.pcen_loc_loc_w / 100, { isRefresh: false })
        luckysheet.setCellValue(22, 41, stepInitialValue.building.pcen_loc_loc_d / 100, { isRefresh: false })
        luckysheet.setCellValue(22, 42, stepInitialValue.building.pcen_loc_loc_f / 100, { isRefresh: false })
        //AO24, AP24, AQ24
        luckysheet.setCellValue(23, 40, stepInitialValue.building.pcen_loc_w / 100, { isRefresh: false })
        luckysheet.setCellValue(23, 41, stepInitialValue.building.pcen_loc_d / 100, { isRefresh: false })
        luckysheet.setCellValue(23, 42, stepInitialValue.building.pcen_loc_f / 100, { isRefresh: false })
        //AO28, AP28, AQ28
        luckysheet.setCellValue(27, 40, stepInitialValue.building.pcen_og_w / 100, { isRefresh: false })
        luckysheet.setCellValue(27, 41, stepInitialValue.building.pcen_og_d / 100, { isRefresh: false })
        luckysheet.setCellValue(27, 42, stepInitialValue.building.pcen_og_f / 100, { isRefresh: false })
        //AO30, AP30, AQ30
        luckysheet.setCellValue(29, 40, stepInitialValue.building.pcen_og2_w / 100, { isRefresh: false })
        luckysheet.setCellValue(29, 41, stepInitialValue.building.pcen_og2_d / 100, { isRefresh: false })
        luckysheet.setCellValue(29, 42, stepInitialValue.building.pcen_og2_f / 100)
        // hide all dashboard sheet
        // luckysheet.setSheetHide({order:4})
        // luckysheet.setSheetHide({order:6})
        // luckysheet.setSheetHide({order:11})
        // luckysheet.setSheetHide({order:14})
        // luckysheet.setSheetHide({order:18})

        // 3art, 3sec sheets, hide sheet if B3 value is zero

        // const art3 = luckysheet.getCellValue(2, 1, { order: 8 })
        // if(art3===0){
        //   luckysheet.setSheetHide({order:8})
        // }
        // const sec3 = luckysheet.getCellValue(2, 1, { order: 9 })
        // if(sec3===0){
        //   luckysheet.setSheetHide({order:9})
        // }
        luckysheet.setSheetActive(Qnumber+3)

        setMobiusUpdated(false)
      }, 2000);

    }
  }, [mobiusUpdated])

  useEffect(() => {
    if (!rendering) {
      const luckysheet = window.luckysheet;
      if (LSCreated) {
        luckysheet.refreshFormula(function () {
          updateDashboard(luckysheet, neighbourhoodStore)
          setDashboardProcessing(false)
        })
      }
    }

  }, [rendering])

  useEffect(() => {
    if (LSCreated) {
      const luckysheet = window.luckysheet;
      if (!financeCompView.includes("update")) {
        if (financialTableVisible) {
          luckysheet.resize()
        }
      } else {
        luckysheet.resize()
      }
    }
  }, [financialTableVisible])

  const doAutoSave = event => {
    if (financeCompView.includes("full")) {
      if (LSCreated && !rendering) {
        const allsheets = luckysheet.getAllSheets()
        setFinanceTableSaving(true)
        fs.writeFile('/financial.data', JSON.stringify(allsheets), {}, () => {
          setTimeout(() => {
            updateDashboard(luckysheet, neighbourhoodStore)
            setFinanceTableSaving(false)
          }, 500);
        })
      }
    }
  }

  useIdleTimer({
    timeout: 1000,
    onIdle: doAutoSave,
    debounce: 100
  })

  return <div id="luckysheet" style={{
    margin: "0px",
    padding: "0px",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    top: "0px",
  }}></div>;
});


export default Luckysheet;
