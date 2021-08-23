import React, { useState, useEffect } from "react";
import { Table, Empty, Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";
import styled from "styled-components";

const Wrapper = styled("div")`
  .r9 td,
  .r15 td {
    color: #632523;
  }

  .r9 tr:nth-of-type(4) td,
  .r15 tr:nth-of-type(4) td {
    font-weight: bold;
  }
`;

interface DataType {
  key: string;
  title: string;
  value: string;
  color?: string;
}

const DB5 = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { dashboardProcessing } = uiState;
  const { getS5db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const r4Columns: ColumnsType<DataType> = [
    {
      title: "lot category, by location",
      dataIndex: "title",
      align: "right",
      width: 220,
    },
    {
      title: "Total OR min. to max.",
      dataIndex: "value",
      align: "right",
    },
  ];
  const r4Model: DataType[] = [
    { key: "r4", title: "Serviced lots WITH starters", value: "" },
    {
      key: "r5",
      title: "Starter units, project-built",
      value: "",
    },
    {
      key: "r7",
      title: "starter dwelling main units (owned), average gross area",
      value: "",
    },
  ];

  const [R4Data, setR4Data] = useState<DataType[]>([]);

  const r9Columns: ColumnsType<DataType> = [
    {
      title: "Costs and revenues",
      dataIndex: "title",
      align: "right",
      width: 220,
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
      title: "min to max",
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
  const r9Model: DataType[] = [
    { key: "r9", title: "Land cost, attributed to 1 main dwelling unit", value: "" },
    {
      key: "r10",
      title: "Starter unit cost, attributed to 1 main dwelling unit",
      value: "",
    },
    {
      key: "r11",
      title: "Additional household investment, before move in (if any)",
      value: "",
    },
    {
      key: "r12",
      title: "Total cost, to be financed",
      value: "",
      color: "#F2DCDB",
    },
  ];

  const [R9Data, setR9Data] = useState<DataType[]>([]);

  const r15Columns: ColumnsType<DataType> = [
    {
      title: "Required monthly payments",
      dataIndex: "title",
      align: "right",
      width: 220,
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
      title: "min to max",
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
  const r15Model: DataType[] = [
    { key: "r15", title: "Payments for land, if separate", value: "" },
    {
      key: "r16",
      title: "Payments for starter, if separate",
      value: "",
    },
    {
      key: "r17",
      title: "Payments, remaining",
      value: "",
    },
    {
      key: "r18",
      title: "Payments, total",
      value: "",
      color: "#F2DCDB",
    },
    {
      key: "r20",
      title: "Affordability of ownership",
      value: "",
      color: "#EBF1DE",
    },
    {
      key: "r21",
      title: "Affordability of rental sublets",
      value: "",
      color: "#EBF1DE",
    },
  ];

  const [R15Data, setR15Data] = useState<DataType[]>([]);

  useEffect(() => {
    r4Model.forEach((data) => {
      data.value = getS5db[data.key];
    });
    setR4Data(r4Model);

    r9Model.forEach((data) => {
      data.value = getS5db[data.key];
    });
    setR9Data(r9Model);

    r15Model.forEach((data) => {
      data.value = getS5db[data.key];
    });
    setR15Data(r15Model);
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
              <Wrapper>
                <Row>
                  <Col span={24}>
                    <Table columns={r4Columns} dataSource={R4Data} size="small" pagination={false} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Table columns={r9Columns} dataSource={R9Data} size="small" pagination={false} className="r9" />
                  </Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col span={24}>
                    <Table columns={r15Columns} dataSource={R15Data} size="small" pagination={false} className="r15" />
                  </Col>
                </Row>
              </Wrapper>
            )}
          </>
        )
      ) : (
        <Empty />
      )}
    </>
  );
});
export default DB5;
