import React, { useState, useEffect, ReactNode } from "react";
import { Table, Typography, Empty } from "antd";
import { ColumnsType } from "antd/lib/table";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";

const { Text } = Typography;

interface DataType {
  key: string;
  title: string;
  value: number;
}

const Wrapper = styled("div")`
  #B6B7 {
    .ant-table-tbody {
      display: none;
    }
  }
  .offsite-costs {
    color: darkred;
    background-color: #f2dcdb;
  }
  .total-costs {
    color: darkred;
    background-color: #e6b8b7;
  }
  #B14B16 tbody .ant-table-cell{
    display:none
  }
`;

const DB1 = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { currentStep, financeTableSaving } = uiState;
  const { getS1db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Item",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "Base-year amount",
      dataIndex: "value",
      align: "right",
      render: (text, record) => currency.format(record.value),
    },
  ];
  const data: DataType[] = [
    { key: "b4", title: "Off-site costs", value: 0 },
    {
      key: "b5",
      title: "Off-site revenues",
      value: 0,
    },
    {
      key: "b6",
      title: "Off-site surplus (loss)",
      value: 0,
    },
    {
      key: "b7",
      title: "Off-site costs, project-borne",
      value: 0,
    },
    {
      key: "a9",
      title: "",
      value: 0,
    },
    {
      key: "a10",
      title: "",
      value: 0,
    },
    {
      key: "a11",
      title: "",
      value: 0,
    },
    {
      key: "a12",
      title: "",
      value: 0,
    },
    {
      key: "a13",
      title: "",
      value: 0,
    },
    {
      key: "b14",
      title: "Land costs, subtotal",
      value: 0,
    },
    {
      key: "b16",
      title: "Site-related costs, total",
      value: 0,
    },
  ];

  const [B4B5, setB4B5] = useState<DataType[]>([]);
  const [B6B7, setB6B7] = useState<DataType[]>([]);
  const [B9B13, setB9B13] = useState<DataType[]>([]);
  const [B14B16, setB14B16] = useState<DataType[]>([]);

  useEffect(() => {
    // console.log("2db", toJS(getS2db));
    const _b4b5 = data.slice(0, 2);
    _b4b5.forEach((data) => {
      data.value = getS1db[data.key] as number;
    });
    setB4B5(_b4b5);

    const _b6b7 = data.slice(2, 4);
    _b6b7.forEach((data) => {
      data.value = getS1db[data.key] as number;
    });
    setB6B7(_b6b7);

    const _b9b13 = data.slice(4, 9);
    _b9b13.forEach((data) => {
      if (data.key === "a9") {
        data.title = getS1db["a9"];
        data.value = getS1db["b9"];
      } else if (data.key === "a10") {
        data.title = getS1db["a10"];
        data.value = getS1db["b10"];
      } else if (data.key === "a11") {
        data.title = getS1db["a11"];
        data.value = getS1db["b11"];
      } else if (data.key === "a12") {
        data.title = getS1db["a12"];
        data.value = getS1db["b12"];
      } else if (data.key === "a13") {
        data.title = getS1db["a13"];
        data.value = getS1db["b13"];
      }
    });
    setB9B13(_b9b13);

    const _b4b16 = data.slice(9);
    _b4b16.forEach((data) => {
      data.value = getS1db[data.key] as number;
    });
    setB14B16(_b4b16);

    // setMobiusUpdated(false);
  }, [NeighbourhoodUpdated]);

  return (
    <>
      {LSCreated ? (
        // financeTableSaving ? (
        //   <Common.Calculating />
        // ) : (
        <Wrapper>
          <Table columns={columns} dataSource={B4B5} size="small" pagination={false} />
          <Table
            columns={columns}
            showHeader={false}
            id="B6B7"
            dataSource={B6B7}
            size="small"
            pagination={false}
            summary={(pageData) => {
              let b6, b7;
              if (pageData.length !== 0) {
                b6 = pageData.find((o) => o.key === "b6").value;
                b7 = pageData.find((o) => o.key === "b7").value;
              }
              return (
                <>
                  <Table.Summary.Row className={b6 > 0 ? "surplus" : b6 < 0 ? "loss" : ""}>
                    <Table.Summary.Cell index={0}>
                      <Text>Off-site surplus (loss)</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(b6)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row className="offsite-costs">
                    <Table.Summary.Cell index={0}>
                      <Text>Off-site costs, project-borne</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(b7)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
          <div>&nbsp;</div>
          <Table columns={columns} dataSource={B9B13} size="small" pagination={false} showHeader={false} />
          <Table
            columns={columns}
            showHeader={false}
            id="B14B16"
            dataSource={B14B16}
            size="small"
            pagination={false}
            summary={(pageData) => {
              let b14, b16;
              if (pageData.length !== 0) {
                b14 = pageData[0].value;
                b16 = pageData[1].value;
              }
              return (
                <>
                  <Table.Summary.Row className="offsite-costs">
                    <Table.Summary.Cell index={0}>
                      <Text>Land costs, subtotal</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(b14)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0}>&nbsp;</Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row className="total-costs">
                    <Table.Summary.Cell index={0}>
                      <Text>Site-related costs, total</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(b16)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        </Wrapper>
      ) : (
        // )
        <Empty />
      )}
    </>
  );
});
export default DB1;
