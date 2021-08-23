import React, { useState, useEffect } from "react";
import { Table, Empty, Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";

interface DataType {
  key: string;
  title: string;
  value: string;
  color?: string;
}

const DB6 = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { dashboardProcessing } = uiState;
  const { getS6db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "title",
      align: "right",
      width: 270,
      render(text, record) {
        return {
          props: {
            style: { background: record.color ? record.color : "" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "",
      dataIndex: "value",
      align: "right",
      render(text, record) {
        return {
          props: {
            style: { background: record.color ? record.color : "" },
          },
          children: <div>{text}</div>,
        };
      },
    },
  ];
  const model: DataType[] = [
    { key: "r3", title: "Initial dwellings", value: "", color: "#F2F2F2" },
    { key: "r4", title: "...population", value: "" },
    {
      key: "r5",
      title: "...density, gross (all site)",
      value: "",
    },
    {
      key: "r6",
      title: "...density, net (private land)",
      value: "",
    },
    {
      key: "r7",
      title: "\xa0",
      value: "",
    },
    {
      key: "r8",
      title: "Consolidated dwellings",
      value: "",
      color: "#F2F2F2",
    },
    {
      key: "r9",
      title: "...population",
      value: "",
    },
    {
      key: "r10",
      title: "...density, gross (all site)",
      value: "",
    },
    {
      key: "r11",
      title: "...density, net (private land)",
      value: "",
    },
  ];

  const [Data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    model.forEach((data) => {
      data.value = getS6db[data.key];
    });
    setData(model);
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
                  <Col span={24}>
                    <Table columns={columns} dataSource={Data} size="large" pagination={false} showHeader={false} />
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
export default DB6;
