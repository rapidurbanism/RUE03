import { action, computed, observable } from "mobx";

export class MobiusStore {
  @observable postMessageData: object | boolean = false;
  @action.bound
  setpostMessageData(v: object) {
    this.postMessageData = v;
  }

  // no need to load any model
  host = "";
  file = "";
  @observable initialModel = this.host + this.file;
  @observable model = this.host + this.file;
  @action.bound
  setModel(v: string) {
    this.model = v;
  }


  @observable GeoJSON: string = "{}";
  @action.bound
  setGeoJSON(v: string) {
    this.GeoJSON = v;
  }
  @computed get getGeoJSON() {
    return this.GeoJSON;
  }

  @observable CurrentGeoJSON: string = "";
  @action.bound
  setCurrentGeoJSON(v: string) {
    this.CurrentGeoJSON = v;
  }

  @observable GeoJsonList: Array<string> = [];
  @action.bound
  addToGeoJSONList(v: string) {
    this.GeoJsonList.push(v);
  }
  @action.bound
  removeFromGeoJSONList(v: string) {
    this.GeoJsonList = this.GeoJsonList.filter((value) => value !== v);
  }

  @observable geoJsonUpdated = false;
  @action.bound
  setGeoJsonUpdated(v: boolean) {
    this.geoJsonUpdated = v;
  }
  // save GI model string
  @observable Dummy: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setDummy(v) {
    this.Dummy = v;
  }
  @computed get DummyModel() {
    return this.Dummy.model;
  }
  @computed get DummyResult() {
    return this.Dummy.result;
  }

  @observable City: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setCity(v) {
    this.City = v;
  }
  @computed get CityModel() {
    return this.City.model;
  }
  @computed get CityResult() {
    return this.City.result;
  }

  @observable Neighbourhood: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setNeighbourhood(v) {
    this.Neighbourhood = v;
  }
  @computed get NeighbourhoodModel() {
    return this.Neighbourhood.model;
  }
  @computed get NeighbourhoodResult() {
    return this.Neighbourhood.result;
  }

  @observable Tissue: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setTissue(v) {
    this.Tissue = v;
  }
  @computed get TissueModel() {
    return this.Tissue.model;
  }
  @computed get TissueResult() {
    return this.Tissue.result;
  }

  @observable SBuilding: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setSBuilding(v) {
    this.SBuilding = v;
  }
  @computed get SBuildingModel() {
    return this.SBuilding.model;
  }
  @computed get SBuildingResult() {
    return this.SBuilding.result;
  }

  @observable MBuilding: { result: object; model: string } = { result: {}, model: "" };
  @action.bound
  setMBuilding(v) {
    this.MBuilding = v;
  }
  @computed get MBuildingModel() {
    return this.MBuilding.model;
  }
  @computed get MBuildingResult() {
    return this.MBuilding.result;
  }
}
