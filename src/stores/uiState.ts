import { action, observable, computed } from "mobx";
import { StepParams, VIEWS } from "./types";
import siteGJ from "@components/models/site.geojson";
import roadsGJ from "@components/models/roads.geojson";

export class UIState {
  @observable rendering = false;
  @action.bound
  setRendering(v: boolean) {
    this.rendering = v;
  }

  @observable pTitle = "Default";
  @action.bound
  setProjectTitle(v: string) {
    this.pTitle = v;
  }
  @computed get projectTitle() {
    return this.pTitle;
  }

  @observable mobiusUpdated: boolean = false;
  @action.bound
  setMobiusUpdated(value: boolean) {
    this.mobiusUpdated = value;
  }

  @observable dashboardProcessing: boolean = true;
  @action.bound
  setDashboardProcessing(value: boolean) {
    this.dashboardProcessing = value;
  }

  @observable sideMenuVisible: boolean = false;
  @action.bound
  setSideMenuVisible(value: boolean) {
    this.sideMenuVisible = value;
  }

  @observable financeShouldUpdate: boolean = false;
  @action.bound
  setFinanceShouldUpdate(value: boolean) {
    this.financeShouldUpdate = value;
  }

  @observable financeTableSaving: boolean = false;
  @action.bound
  setFinanceTableSaving(value: boolean) {
    this.financeTableSaving = value;
  }

  @observable fullWidth: number = 0;
  @observable sideWidth: number = 400;
  @observable hideWidth: number = 0;

  @observable financialTableVisible: boolean = false;

  @observable financeCompView: string = "sideupdate";
  @action.bound
  toggleFinanceView(view: string, width?: number) {
    if (view.includes("full")) {
      this.financialTableVisible = true;
      this.fullWidth = width!;
      this.sideWidth = 0;
      this.hideWidth = 0;
    } else if (view.includes("side")) {
      this.financialTableVisible = false;
      this.fullWidth = 0;
      this.sideWidth = 400;
      this.hideWidth = 0;
    } else if (view.includes("hide")) {
      this.fullWidth = 0;
      this.sideWidth = 0;
      this.hideWidth = 32;
    }
    this.financeCompView = view;
    // this.setFinanceShouldUpdate(false)
  }

  @observable currentView: VIEWS = VIEWS.SITE;
  @action.bound
  setCurrentView(v: VIEWS) {
    this.currentView = v;
  }

  @observable currentStep: { mainStep: number; subStep: number } = { mainStep: 0, subStep: 0 };

  @observable step: Map<number, number> = new Map([[0, 0]]);
  @action.bound
  setStep(mainStep: number, subStep?: number) {
    if (subStep) {
      this.step.set(mainStep, subStep);
    } else {
      this.step.set(mainStep, 0);
    }
    this.currentStep = Object.assign({}, this.currentStep, { mainStep: mainStep, subStep: subStep === undefined ? 0 : subStep });
  }

  @observable stepParams: StepParams = {
    //for dummy site
    latitude: 20.23269,
    longitude: 85.77832,
    rotation: -92,
    site_front_dim: 600,
    site_back_dim: 550,
    site_back_shift: 60,
    site_sides_dim: 600,

    //for real site
    neighbourhood: {
      road_art_w: 20,
      road_sec_w: 15,
      road_loc_w: 10,
      part_art_d: 40,
      part_sec_d: 30,
      part_loc_d: 20,
      part_og_d: 45,
      part_og_w: 30,
      plot_art_w: 40,
      plot_sec_w: 20,
      plot_loc_w: 10,
      blk_art_num_og_d: 0,
      blk_art_num_og_w: 3,
      blk_sec_num_og_d: 0,
      blk_sec_num_og_w: 3,
      blk_loc_num_og_d: 2,
      blk_loc_num_og_w: 3,
      path_w: 3,
      open_percent: 4,
      amen_percent: 10,
      pavement_w: 3,
      add_trees: true,
      tree_spacing: 12,
      tree_height_start: 8,
      tree_height_max: 20,
    },

    plot_og_w: 7,

    //for Tissue
    path_og_w: 3,
    path_os_w: 8,
    path_os_l: 12,

    tissue: {
      fire: false,
      off_art_front: 6,
      off_art_side: 6,
      off_art_back: 6,
      off_sec_front: 3,
      off_sec_side: 3,
      off_sec_back: 3,
      off_loc_front: 0,
      off_loc_side: 0,
      off_loc_back: 3,
      off_og_front: 0,
      off_og_side: 0,
      off_og_back: 3,
      ogc_plot_w: 6,
      ogc_path_w: 5,
      ogc_open_w: 10,
      ogc_open_l: 15,
      ogc2_plot_w: 4.5,
      ogc2_plot_d: 15,
      ogc2_path_w: 3,
      ogc2_xpath_w: 5,
      floors_art: 5,
      floors_sec: 4,
      floors_loc: 3,
      floors_og: 2,
      m_floors_art: 40,
      m_floors_sec: 30,
      m_floors_loc: 20,
    },
    building: {
      pcen_art_art_w: 0,
      pcen_art_art_d: 0,
      pcen_art_art_f: 0,
      pcen_art_sec_w: 0,
      pcen_art_sec_d: 0,
      pcen_art_sec_f: 0,
      pcen_art_loc_w: 0,
      pcen_art_loc_d: 0,
      pcen_art_loc_f: 0,
      pcen_art_w: 100,
      pcen_art_d: 60,
      pcen_art_f: 80,
      pcen_sec_sec_w: 0,
      pcen_sec_sec_d: 0,
      pcen_sec_sec_f: 0,
      pcen_sec_loc_w: 0,
      pcen_sec_loc_d: 0,
      pcen_sec_loc_f: 0,
      pcen_sec_w: 100,
      pcen_sec_d: 60,
      pcen_sec_f: 60,
      pcen_loc_loc_w: 100,
      pcen_loc_loc_d: 100,
      pcen_loc_loc_f: 100,
      pcen_loc_w: 100,
      pcen_loc_d: 60,
      pcen_loc_f: 60,
      pcen_og_w: 100,
      pcen_og_d: 50,
      pcen_og_f: 50,
      pcen_og2_w: 50,
      pcen_og2_d: 50,
      pcen_og2_f: 50,
    },
  };

  @action.bound
  setStepParams(v: StepParams) {
    this.stepParams = v;
  }

  @computed get stepInitialValue() {
    return this.stepParams;
  }

  @observable siteGeoJSON = siteGJ;
  @action.bound
  setSiteGeoJSON(v: string) {
    this.siteGeoJSON = v;
  }

  @observable roadsGeoJSON = roadsGJ;
  @action.bound
  setRoadsGeoJSON(v: string) {
    this.roadsGeoJSON = v;
  }

  @observable siteLoaded = false;
  @action.bound
  setSiteLoaded(v: boolean) {
    this.siteLoaded = v;
  }
  @observable roadsLoaded = false;
  @action.bound
  setRoadsLoaded(v: boolean) {
    this.roadsLoaded = v;
  }

  @observable siteDefination = "vmc";
  @action.bound
  setSiteDefination(v: string) {
    this.siteDefination = v;
  }
}
