import { action, computed, observable } from "mobx";
import { S1DB, S2DB, S3DB, S4DB, S5DB, S6DB, Spider, TRevenuesSubtotals } from "../types";

export class NeighbourhoodStore {
  @observable RevenuesDashboard: TRevenuesSubtotals = {
    arteries: 0,
    secondaries: 0,
    local_roads: 0,
    off_grid: 0,
    public_lands: 0,
  };

  @action.bound
  setRevenuesDashboard(v: TRevenuesSubtotals) {
    this.RevenuesDashboard = v;
  }
  @computed get getRevenuesDashboard() {
    return this.RevenuesDashboard;
  }

  @observable NeighbourhoodUpdated: string = "";
  @action.bound
  setNeighbourhoodUpdated(v: string) {
    this.NeighbourhoodUpdated = v;
  }

  @observable LSCreated: boolean = false;
  @action.bound
  setLSCreated(v: boolean) {
    this.LSCreated = v;
  }

  @observable S1db: S1DB = {
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    a9: "",
    b9: 0,
    a10: "",
    b10: 0,
    a11: "",
    b11: 0,
    a12: "",
    b12: 0,
    a13: "",
    b13: 0,
    b14: 0,
    b16: 0,
  };

  @action.bound
  setS1db(v: S1DB) {
    this.S1db = v;
  }

  @computed get getS1db() {
    return this.S1db;
  }

  @observable S2db: S2DB = {
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    b9: 0,
    b10: 0,
    b11: 0,
    b12: 0,
    b13: 0,
    b14: 0,
    b15: 0,
    b16: 0,
    b18: 0,
    b19: 0,
  };

  @action.bound
  setS2db(v: S2DB) {
    this.S2db = v;
  }

  @computed get getS2db() {
    return this.S2db;
  }

  @observable S3db: S3DB = {
    a: {
      r4: 0,
      r6: 0,
      r7: 0,
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r13: 0,
      r14: 0,
      r17: 0,
      r19: 0,
      r20: 0,
      r21: 0,
      r22: 0,
      r23: 0,
      r24: 0,
      r26: 0,
      r27: 0,
    },
    s: {
      r4: 0,
      r6: 0,
      r7: 0,
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r13: 0,
      r14: 0,
      r17: 0,
      r19: 0,
      r20: 0,
      r21: 0,
      r22: 0,
      r23: 0,
      r24: 0,
      r26: 0,
      r27: 0,
    },
    ls: {
      r4: 0,
      r6: 0,
      r7: 0,
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r13: 0,
      r14: 0,
      r17: 0,
      r19: 0,
      r20: 0,
      r21: 0,
      r22: 0,
      r23: 0,
      r24: 0,
      r26: 0,
      r27: 0,
    },
    lm: {
      r4: 0,
      r6: 0,
      r7: 0,
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r13: 0,
      r14: 0,
      r17: 0,
      r19: 0,
      r20: 0,
      r21: 0,
      r22: 0,
      r23: 0,
      r24: 0,
      r26: 0,
      r27: 0,
    },
    t: {
      r4: 0,
      r6: 0,
      r7: 0,
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r13: 0,
      r14: 0,
      r17: 0,
      r19: 0,
      r20: 0,
      r21: 0,
      r22: 0,
      r23: 0,
      r24: 0,
      r26: 0,
      r27: 0,
    },
  };

  @action.bound
  setS3db(v: S3DB) {
    this.S3db = v;
  }

  @computed get getS3db() {
    return this.S3db;
  }

  @observable S4db: S4DB = {
    r4: 0,
    r6: 0,
    r7: 0,
    r8: 0,
    r9: 0,
    r10: 0,
    r11: 0,
    r12: 0,
    r14: 0,
    r16: 0,
    r17: 0,
    r18: 0,
    r19: 0,
    r20: 0,
    r21: 0,
    r22: 0,
    r23: 0,
    r24: 0,
  };

  @action.bound
  setS4db(v: S4DB) {
    this.S4db = v;
  }

  @computed get getS4db() {
    return this.S4db;
  }

  @observable S5db: S5DB = {
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r9: "",
    r10: "",
    r11: "",
    r12: "",
    r15: "",
    r16: "",
    r17: "",
    r18: "",
    r19: "",
  };

  @action.bound
  setS5db(v: S5DB) {
    this.S5db = v;
  }

  @computed get getS5db() {
    return this.S5db;
  }

  @observable S6db: S6DB = {
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r8: "",
    r9: "",
    r10: "",
    r11: "",
  };

  @action.bound
  setS6db(v: S6DB) {
    this.S6db = v;
  }

  @computed get getS6db() {
    return this.S6db;
  }

  @observable Spider: Spider = {
    r5: "",
    r7: "",
    r10: "",
    r12: "",
    r13: "",
    r14: "",
    r16: "",
    r17: "",
  };

  @action.bound
  setSpider(v: Spider) {
    this.Spider = v;
  }

  @computed get getSpider() {
    return this.Spider;
  }
}
