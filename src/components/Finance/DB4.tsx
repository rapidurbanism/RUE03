import React, { useState, useEffect } from "react";
import { Table, Empty, Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";

interface DataType {
  key: string;
  title: string;
  value: number | null;
}

const DB4 = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { dashboardProcessing } = uiState;
  const { getS4db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const r4Columns: ColumnsType<DataType> = [
    {
      title: "Costs and revenues",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "Base-year amount",
      dataIndex: "value",
      align: "right",
      render: (text, record) => {
        if (record.key !== "r14") {
          return currency.format(record.value);
        } else {
          return Number(record.value).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        }
      },
    },
  ];
  const r4Model: DataType[] = [
    { key: "r5", title: "Serviced lots, on arteries", value: 0 },
    {
      key: "r6",
      title: "…in off-grid clusters, from arteries",
      value: 0,
    },
    {
      key: "r7",
      title: "Serviced lots, on secondaries",
      value: 0,
    },
    {
      key: "r8",
      title: "…in off-grid clusters, from secondaries",
      value: 0,
    },
    {
      key: "r9",
      title: "Serviced lots, on locals",
      value: 0,
    },
    {
      key: "r10",
      title: "…in off-grid clusters, from locals",
      value: 0,
    },
    {
      key: "r11",
      title: "Sales of serviced lots, subtotal",
      value: 0,
    },
  ];

  const [R4Data, setR4Data] = useState<DataType[]>([]);

  const r13Columns: ColumnsType<DataType> = [
    {
      title: "Costs and revenues",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "Base-year amount",
      dataIndex: "value",
      align: "right",
      render: (text, record) => {
        if (record.key !== "r23") {
          return currency.format(record.value);
        } else {
          return Number(record.value).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        }
      },
    },
  ];
  const r13Model: DataType[] = [
    { key: "r15", title: "Serviced lot", value: 0 },
    {
      key: "r16",
      title: "Construction",
      value: 0,
    },
    {
      key: "r17",
      title: "Interest",
      value: 0,
    },
    {
      key: "r18",
      title: "Costs, total",
      value: 0,
    },
    {
      key: "r19",
      title: "Revenues (sales), commercial floor area",
      value: 0,
    },
    {
      key: "r20",
      title: "Revenues (sales), residential floor area",
      value: 0,
    },
    {
      key: "r21",
      title: "Revenues, total",
      value: 0,
    },
    {
      key: "r22",
      title: "Project surplus (loss), per lot",
      value: 0,
    },
    {
      key: "r23",
      title: "Financial efficiency (surplus/costs)",
      value: 0,
    },
  ];

  const [R13Data, setR13Data] = useState<DataType[]>([]);

  useEffect(() => {
    // console.log("3db", toJS(getS3db));

    r4Model.forEach((data) => {
      if (isNaN(getS4db[data.key])) {
        data.value = 0;
      } else {
        data.value = getS4db[data.key];
      }
    });
    setR4Data(r4Model);

    r13Model.forEach((data) => {
      if (isNaN(getS4db[data.key])) {
        data.value = 0;
      } else {
        data.value = getS4db[data.key];
      }
    });
    setR13Data(r13Model);
  }, [NeighbourhoodUpdated]);

  return (
    <>
      {LSCreated ? (
        dashboardProcessing ? (
          <Common.Calculating />
        ) : (
          <>
            {dashboardProcessing ? (
              <Common.Calculating />
            ) : (
              <>
                <Row>
                  <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
                    <h3>lot category, by location</h3>
                  </Col>
                  <Col span={10} style={{ textAlign: "center" }}>
                    <h3>Total</h3>
                  </Col>
                </Row>
                <Row>
                  <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
                    Serviced lots, withOUT construction
                  </Col>
                  <Col span={10} style={{ textAlign: "center" }}>
                    {isNaN(getS4db["r3"]) ? 0 : getS4db["r3"]} lots
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Table columns={r4Columns} dataSource={R4Data} size="small" pagination={false} />
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
                    Serviced lots, WITH starters
                  </Col>
                  <Col span={10} style={{ textAlign: "center" }}>
                    {isNaN(getS4db["r13"]) ? 0 : getS4db["r13"]} lots
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Table columns={r13Columns} dataSource={R13Data} size="small" pagination={false} />
                  </Col>
                </Row>
              </>
            )}
          </>
        )
      ) : (
        <Empty />
      )}
    </>
  );
});
export default DB4;
