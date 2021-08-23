export interface Spider {
  r5: string;
  r7: string;
  r10: string;
  r12: string;
  r13: string;
  r14: string;
  r16: string;
  r17: string;
  [key: string]: string | number;
}

export interface S6DB {
  r3: string;
  r4: string;
  r5: string;
  r6: string;
  r7: string;
  r8: string;
  r9: string;
  r10: string;
  r11: string;
  [key: string]: string;
}

export interface S5DB {
  r4: string;
  r5: string;
  r6: string;
  r7: string;
  r9: string;
  r10: string;
  r11: string;
  r12: string;
  r15: string;
  r16: string;
  r17: string;
  r18: string;
  r19: string;
  [key: string]: string;
}

export interface S4DB {
  r4: number;
  r6: number;
  r7: number;
  r8: number;
  r9: number;
  r10: number;
  r11: number;
  r12: number;
  r14: number;
  r16: number;
  r17: number;
  r18: number;
  r19: number;
  r20: number;
  r21: number;
  r22: number;
  r23: number;
  r24: number;
  [key: string]: number;
}

export interface S3DB {
  //arteries
  a: {
    r4: number;
    r6: number;
    r7: number;
    r8: number;
    r9: number;
    r10: number;
    r11: number;
    r13: number;
    r14: number;
    r17: number;
    r19: number;
    r20: number;
    r21: number;
    r22: number;
    r23: number;
    r24: number;
    r26: number;
    r27: number;
    [key: string]: number;
  };
  //secondaries
  s: {
    r4: number;
    r6: number;
    r7: number;
    r8: number;
    r9: number;
    r10: number;
    r11: number;
    r13: number;
    r14: number;
    r17: number;
    r19: number;
    r20: number;
    r21: number;
    r22: number;
    r23: number;
    r24: number;
    r26: number;
    r27: number;
    [key: string]: number;
  };
  //locals single
  ls: {
    r4: number;
    r6: number;
    r7: number;
    r8: number;
    r9: number;
    r10: number;
    r11: number;
    r13: number;
    r14: number;
    r17: number;
    r19: number;
    r20: number;
    r21: number;
    r22: number;
    r23: number;
    r24: number;
    r26: number;
    r27: number;
    [key: string]: number;
  };
  //locals multiple
  lm: {
    r4: number;
    r6: number;
    r7: number;
    r8: number;
    r9: number;
    r10: number;
    r11: number;
    r13: number;
    r14: number;
    r17: number;
    r19: number;
    r20: number;
    r21: number;
    r22: number;
    r23: number;
    r24: number;
    r26: number;
    r27: number;
    [key: string]: number;
  };
  //total
  t: {
    r4: number;
    r6: number;
    r7: number;
    r8: number;
    r9: number;
    r10: number;
    r11: number;
    r13: number;
    r14: number;
    r17: number;
    r19: number;
    r20: number;
    r21: number;
    r22: number;
    r23: number;
    r24: number;
    r26: number;
    r27: number;
    [key: string]: number;
  };
}

export interface S2DB {
  b4: number;
  b5: number;
  b6: number;
  b7: number;
  b8: number;
  b9: number;
  b10: number;
  b11: number;
  b12: number;
  b13: number;
  b14: number;
  b15: number;
  b16: number;
  b18: number;
  b19: number;
  [key: string]: number;
}

export interface S1DB {
  b4: number;
  b5: number;
  b6: number;
  b7: number;
  a9: string;
  b9: number;
  a10: string;
  b10: number;
  a11: string;
  b11: number;
  a12: string;
  b12: number;
  a13: string;
  b13: number;
  b14: number;
  b16: number;
  [key: string]: string | number;
}

export interface TRevenuesSubtotals {
  arteries: number;
  secondaries: number;
  local_roads: number;
  off_grid: number;
  public_lands: number;
  [key: string]: number;
}

export interface StepParams {
  latitude: number;
  longitude: number;
  rotation: number;
  site_front_dim: number;
  site_back_dim: number;
  site_back_shift: number;
  site_sides_dim: number;

  neighbourhood: {
    road_art_w: number;
    road_sec_w: number;
    road_loc_w: number;
    part_art_d: number;
    part_sec_d: number;
    part_loc_d: number;
    part_og_d: number;
    part_og_w: number;
    plot_art_w: number;
    plot_sec_w: number;
    plot_loc_w: number;
    blk_art_num_og_d: number;
    blk_art_num_og_w: number;
    blk_sec_num_og_d: number;
    blk_sec_num_og_w: number;
    blk_loc_num_og_d: number;
    blk_loc_num_og_w: number;
    path_w: number;
    open_percent: number;
    amen_percent: number;
    pavement_w: number;
    add_trees: boolean;
    tree_spacing: number;
    [key: string]: any;
  };

  tissue: {
    fire: boolean;
    off_art_front: number;
    off_art_side: number;
    off_art_back: number;
    off_sec_front: number;
    off_sec_side: number;
    off_sec_back: number;
    off_loc_front: number;
    off_loc_side: number;
    off_loc_back: number;
    off_og_front: number;
    off_og_side: number;
    off_og_back: number;
    ogc_plot_w: number;
    ogc_path_w: number;
    ogc_open_w: number;
    ogc_open_l: number;
    ogc2_plot_w: number;
    ogc2_plot_d: number;
    ogc2_path_w: number;
    ogc2_xpath_w: number;
    floors_art: number;
    floors_sec: number;
    floors_loc: number;
    floors_og: number;
    m_floors_art: number;
    m_floors_sec: number;
    m_floors_loc: number;
    [key: string]: any;
  };

  plot_og_w: number;
  path_og_w: number;
  path_os_w: number;
  path_os_l: number;

  [key: string]: any;
}

export enum VIEWS {
  SITE = "city",
  SETTLEMENT = "neighborhood",
  TISSUE = "tissues",
  STARTER_BUILDINGS = "sbuildings",
  MAX_BUILDINGS = "mbuildings",
}
