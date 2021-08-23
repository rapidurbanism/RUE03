import { S3DB } from "@stores/types";

export const updateDashboard = (luckysheet, neighbourhoodStore) => {
  const {
    setSpider,
    getSpider,
    setS6db,
    getS6db,
    setS5db,
    getS5db,
    setS4db,
    getS4db,
    setS3db,
    getS3db,
    setS2db,
    getS2db,
    setS1db,
    getS1db,
    setNeighbourhoodUpdated,
  } = neighbourhoodStore;

  const _s1db = getS1db;
  _s1db.b4 = luckysheet.getCellValue(3, 1, { order: 4 });
  _s1db.b5 = luckysheet.getCellValue(4, 1, { order: 4 });
  _s1db.b6 = luckysheet.getCellValue(5, 1, { order: 4 });
  _s1db.b7 = luckysheet.getCellValue(6, 1, { order: 4 });
  _s1db.a9 = luckysheet.getCellValue(8, 0, { type: "m", order: 4 });
  _s1db.b9 = luckysheet.getCellValue(8, 1, { order: 4 });
  _s1db.a10 = luckysheet.getCellValue(9, 0, { type: "m", order: 4 });
  _s1db.b10 = luckysheet.getCellValue(9, 1, { order: 4 });
  _s1db.a11 = luckysheet.getCellValue(10, 0, { type: "m", order: 4 });
  _s1db.b11 = luckysheet.getCellValue(10, 1, { order: 4 });
  _s1db.a12 = luckysheet.getCellValue(11, 0, { type: "m", order: 4 });
  _s1db.b12 = luckysheet.getCellValue(11, 1, { order: 4 });
  _s1db.a13 = luckysheet.getCellValue(12, 0, { type: "m", order: 4 });
  _s1db.b13 = luckysheet.getCellValue(12, 1, { order: 4 });
  _s1db.b14 = luckysheet.getCellValue(13, 1, { order: 4 });
  _s1db.b16 = luckysheet.getCellValue(15, 1, { order: 4 });
  setS1db(_s1db);

  const _s2db = getS2db;
  _s2db.b4 = luckysheet.getCellValue(3, 1, { order: 6 });
  _s2db.b5 = luckysheet.getCellValue(4, 1, { order: 6 });
  _s2db.b6 = luckysheet.getCellValue(5, 1, { order: 6 });
  _s2db.b7 = luckysheet.getCellValue(6, 1, { order: 6 });
  _s2db.b8 = luckysheet.getCellValue(7, 1, { order: 6 });
  _s2db.b9 = luckysheet.getCellValue(8, 1, { order: 6 });
  _s2db.b10 = luckysheet.getCellValue(9, 1, { order: 6 });
  _s2db.b11 = luckysheet.getCellValue(10, 1, { order: 6 });
  _s2db.b12 = luckysheet.getCellValue(11, 1, { order: 6 });
  _s2db.b13 = luckysheet.getCellValue(12, 1, { order: 6 });
  _s2db.b14 = luckysheet.getCellValue(13, 1, { order: 6 });
  _s2db.b15 = luckysheet.getCellValue(14, 1, { order: 6 });
  _s2db.b16 = luckysheet.getCellValue(15, 1, { order: 6 });
  _s2db.b18 = luckysheet.getCellValue(17, 1, { order: 6 });
  _s2db.b19 = luckysheet.getCellValue(18, 1, { order: 6 });
  setS2db(_s2db);

  const _s3db: S3DB = getS3db;
  _s3db.a.r4 = luckysheet.getCellValue(3, 1, { order: 11 });
  _s3db.a.r6 = luckysheet.getCellValue(5, 1, { order: 11 });
  _s3db.a.r7 = luckysheet.getCellValue(6, 1, { order: 11 });
  _s3db.a.r8 = luckysheet.getCellValue(7, 1, { order: 11 });
  _s3db.a.r9 = luckysheet.getCellValue(8, 1, { order: 11 });
  _s3db.a.r10 = luckysheet.getCellValue(9, 1, { order: 11 });
  _s3db.a.r11 = luckysheet.getCellValue(10, 1, { order: 11 });
  _s3db.a.r13 = luckysheet.getCellValue(12, 1, { order: 11 });
  _s3db.a.r14 = luckysheet.getCellValue(13, 1, { order: 11 });
  _s3db.a.r17 = luckysheet.getCellValue(16, 1, { order: 11 });
  _s3db.a.r19 = luckysheet.getCellValue(18, 1, { order: 11 });
  _s3db.a.r20 = luckysheet.getCellValue(19, 1, { order: 11 });
  _s3db.a.r21 = luckysheet.getCellValue(20, 1, { order: 11 });
  _s3db.a.r22 = luckysheet.getCellValue(21, 1, { order: 11 });
  _s3db.a.r23 = luckysheet.getCellValue(22, 1, { order: 11 });
  _s3db.a.r24 = luckysheet.getCellValue(23, 1, { order: 11 });
  _s3db.a.r26 = luckysheet.getCellValue(25, 1, { order: 11 });
  _s3db.a.r27 = luckysheet.getCellValue(26, 1, { order: 11 });

  _s3db.s.r4 = luckysheet.getCellValue(3, 2, { order: 11 });
  _s3db.s.r6 = luckysheet.getCellValue(5, 2, { order: 11 });
  _s3db.s.r7 = luckysheet.getCellValue(6, 2, { order: 11 });
  _s3db.s.r8 = luckysheet.getCellValue(7, 2, { order: 11 });
  _s3db.s.r9 = luckysheet.getCellValue(8, 2, { order: 11 });
  _s3db.s.r10 = luckysheet.getCellValue(9, 2, { order: 11 });
  _s3db.s.r11 = luckysheet.getCellValue(10, 2, { order: 11 });
  _s3db.s.r13 = luckysheet.getCellValue(12, 2, { order: 11 });
  _s3db.s.r14 = luckysheet.getCellValue(13, 2, { order: 11 });
  _s3db.s.r17 = luckysheet.getCellValue(16, 2, { order: 11 });
  _s3db.s.r19 = luckysheet.getCellValue(18, 2, { order: 11 });
  _s3db.s.r20 = luckysheet.getCellValue(19, 2, { order: 11 });
  _s3db.s.r21 = luckysheet.getCellValue(20, 2, { order: 11 });
  _s3db.s.r22 = luckysheet.getCellValue(21, 2, { order: 11 });
  _s3db.s.r23 = luckysheet.getCellValue(22, 2, { order: 11 });
  _s3db.s.r24 = luckysheet.getCellValue(23, 2, { order: 11 });
  _s3db.s.r26 = luckysheet.getCellValue(25, 2, { order: 11 });
  _s3db.s.r27 = luckysheet.getCellValue(26, 2, { order: 11 });

  _s3db.ls.r4 = luckysheet.getCellValue(3, 3, { order: 11 });
  _s3db.ls.r6 = luckysheet.getCellValue(5, 3, { order: 11 });
  _s3db.ls.r7 = luckysheet.getCellValue(6, 3, { order: 11 });
  _s3db.ls.r8 = luckysheet.getCellValue(7, 3, { order: 11 });
  _s3db.ls.r9 = luckysheet.getCellValue(8, 3, { order: 11 });
  _s3db.ls.r10 = luckysheet.getCellValue(9, 3, { order: 11 });
  _s3db.ls.r11 = luckysheet.getCellValue(10, 3, { order: 11 });
  _s3db.ls.r13 = luckysheet.getCellValue(12, 3, { order: 11 });
  _s3db.ls.r14 = luckysheet.getCellValue(13, 3, { order: 11 });
  _s3db.ls.r17 = luckysheet.getCellValue(16, 3, { order: 11 });
  _s3db.ls.r19 = luckysheet.getCellValue(18, 3, { order: 11 });
  _s3db.ls.r20 = luckysheet.getCellValue(19, 3, { order: 11 });
  _s3db.ls.r21 = luckysheet.getCellValue(20, 3, { order: 11 });
  _s3db.ls.r22 = luckysheet.getCellValue(21, 3, { order: 11 });
  _s3db.ls.r23 = luckysheet.getCellValue(22, 3, { order: 11 });
  _s3db.ls.r24 = luckysheet.getCellValue(23, 3, { order: 11 });
  _s3db.ls.r26 = luckysheet.getCellValue(25, 3, { order: 11 });
  _s3db.ls.r27 = luckysheet.getCellValue(26, 3, { order: 11 });

  _s3db.lm.r4 = luckysheet.getCellValue(3, 4, { order: 11 });
  _s3db.lm.r6 = luckysheet.getCellValue(5, 4, { order: 11 });
  _s3db.lm.r7 = luckysheet.getCellValue(6, 4, { order: 11 });
  _s3db.lm.r8 = luckysheet.getCellValue(7, 4, { order: 11 });
  _s3db.lm.r9 = luckysheet.getCellValue(8, 4, { order: 11 });
  _s3db.lm.r10 = luckysheet.getCellValue(9, 4, { order: 11 });
  _s3db.lm.r11 = luckysheet.getCellValue(10, 4, { order: 11 });
  _s3db.lm.r13 = luckysheet.getCellValue(12, 4, { order: 11 });
  _s3db.lm.r14 = luckysheet.getCellValue(13, 4, { order: 11 });
  _s3db.lm.r17 = luckysheet.getCellValue(16, 4, { order: 11 });
  _s3db.lm.r19 = luckysheet.getCellValue(18, 4, { order: 11 });
  _s3db.lm.r20 = luckysheet.getCellValue(19, 4, { order: 11 });
  _s3db.lm.r21 = luckysheet.getCellValue(20, 4, { order: 11 });
  _s3db.lm.r22 = luckysheet.getCellValue(21, 4, { order: 11 });
  _s3db.lm.r23 = luckysheet.getCellValue(22, 4, { order: 11 });
  _s3db.lm.r24 = luckysheet.getCellValue(23, 4, { order: 11 });
  _s3db.lm.r26 = luckysheet.getCellValue(25, 4, { order: 11 });
  _s3db.lm.r27 = luckysheet.getCellValue(26, 4, { order: 11 });

  _s3db.t.r4 = luckysheet.getCellValue(3, 5, { order: 11 });
  _s3db.t.r6 = luckysheet.getCellValue(5, 5, { order: 11 });
  _s3db.t.r7 = luckysheet.getCellValue(6, 5, { order: 11 });
  _s3db.t.r8 = luckysheet.getCellValue(7, 5, { order: 11 });
  _s3db.t.r9 = luckysheet.getCellValue(8, 5, { order: 11 });
  _s3db.t.r10 = luckysheet.getCellValue(9, 5, { order: 11 });
  _s3db.t.r11 = luckysheet.getCellValue(10, 5, { order: 11 });
  _s3db.t.r13 = luckysheet.getCellValue(12, 5, { order: 11 });
  _s3db.t.r14 = luckysheet.getCellValue(13, 5, { order: 11 });
  _s3db.t.r17 = luckysheet.getCellValue(16, 5, { order: 11 });
  _s3db.t.r19 = luckysheet.getCellValue(18, 5, { order: 11 });
  _s3db.t.r20 = luckysheet.getCellValue(19, 5, { order: 11 });
  _s3db.t.r21 = luckysheet.getCellValue(20, 5, { order: 11 });
  _s3db.t.r22 = luckysheet.getCellValue(21, 5, { order: 11 });
  _s3db.t.r23 = luckysheet.getCellValue(22, 5, { order: 11 });
  _s3db.t.r24 = luckysheet.getCellValue(23, 5, { order: 11 });
  _s3db.t.r26 = luckysheet.getCellValue(25, 5, { order: 11 });
  _s3db.t.r27 = luckysheet.getCellValue(26, 5, { order: 11 });
  setS3db(_s3db);

  const _s4db = getS4db;
  _s4db.r3 = luckysheet.getCellValue(2, 18, { order: 13 });
  _s4db.r5 = luckysheet.getCellValue(4, 18, { order: 13 });
  _s4db.r6 = luckysheet.getCellValue(5, 18, { order: 13 });
  _s4db.r7 = luckysheet.getCellValue(6, 18, { order: 13 });
  _s4db.r8 = luckysheet.getCellValue(7, 18, { order: 13 });
  _s4db.r9 = luckysheet.getCellValue(8, 18, { order: 13 });
  _s4db.r10 = luckysheet.getCellValue(9, 18, { order: 13 });
  _s4db.r11 = luckysheet.getCellValue(10, 18, { order: 13 });
  _s4db.r13 = luckysheet.getCellValue(12, 18, { order: 13 });
  _s4db.r15 = luckysheet.getCellValue(14, 18, { order: 13 });
  _s4db.r16 = luckysheet.getCellValue(15, 18, { order: 13 });
  _s4db.r17 = luckysheet.getCellValue(16, 18, { order: 13 });
  _s4db.r18 = luckysheet.getCellValue(17, 18, { order: 13 });
  _s4db.r19 = luckysheet.getCellValue(18, 18, { order: 13 });
  _s4db.r20 = luckysheet.getCellValue(19, 18, { order: 13 });
  _s4db.r21 = luckysheet.getCellValue(20, 18, { order: 13 });
  _s4db.r22 = luckysheet.getCellValue(21, 18, { order: 13 });
  _s4db.r23 = luckysheet.getCellValue(22, 18, { order: 13 });

  setS4db(_s4db);

  const setCellValue = (r, c, sheet) => {
    return luckysheet.getCellValue(r, c, { type: "m", order: sheet }) + " to " + luckysheet.getCellValue(r, c + 2, { type: "m", order: sheet });
  };

  const _s5db = getS5db;
  _s5db.r4 = luckysheet.getCellValue(3, 18, { type: "m", order: 18 });
  _s5db.r5 = luckysheet.getCellValue(4, 18, { type: "m", order: 18 });

  _s5db.r7 = setCellValue(6, 18, 18);

  _s5db.r9 = setCellValue(8, 18, 18);
  _s5db.r10 = setCellValue(9, 18, 18);
  _s5db.r11 = setCellValue(10, 18, 18);
  _s5db.r12 = setCellValue(11, 18, 18);

  _s5db.r15 = setCellValue(14, 18, 18);
  _s5db.r16 = setCellValue(15, 18, 18);
  _s5db.r17 = setCellValue(16, 18, 18);
  _s5db.r18 = setCellValue(17, 18, 18);

  _s5db.r20 = luckysheet.getCellValue(19, 18, { type: "m", order: 18 });
  _s5db.r21 = luckysheet.getCellValue(20, 18, { type: "m", order: 18 });
  setS5db(_s5db);

  const _s6db = getS6db;
  _s6db.r3 = luckysheet.getCellValue(2, 1, { type: "m", order: 20 });
  _s6db.r4 = luckysheet.getCellValue(3, 1, { type: "m", order: 20 });
  _s6db.r5 = luckysheet.getCellValue(4, 1, { type: "m", order: 20 });
  _s6db.r6 = luckysheet.getCellValue(5, 1, { type: "m", order: 20 });
  _s6db.r8 = luckysheet.getCellValue(7, 1, { type: "m", order: 20 });
  _s6db.r9 = luckysheet.getCellValue(8, 1, { type: "m", order: 20 });
  _s6db.r10 = luckysheet.getCellValue(9, 1, { type: "m", order: 20 });
  _s6db.r11 = luckysheet.getCellValue(10, 1, { type: "m", order: 20 });
  setS6db(_s6db);

  const _spider = getSpider;
  _spider.r5 = luckysheet.getCellValue(4, 3, { order: 21 });
  _spider.r7 = luckysheet.getCellValue(6, 3, { order: 21 });
  _spider.r10 = luckysheet.getCellValue(9, 3, { order: 21 });
  _spider.r12 = luckysheet.getCellValue(11, 3, { order: 21 });
  _spider.r13 = luckysheet.getCellValue(12, 3, { order: 21 });
  _spider.r14 = luckysheet.getCellValue(13, 3, { order: 21 });
  _spider.r16 = luckysheet.getCellValue(15, 3, { order: 21 });
  _spider.r17 = luckysheet.getCellValue(16, 3, { order: 21 });
  setSpider(_spider);

  setNeighbourhoodUpdated(Date.now());
};
