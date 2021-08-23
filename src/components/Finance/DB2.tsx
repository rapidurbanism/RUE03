import React, { useState, useEffect, ReactNode } from "react";
import { Table, Typography, Empty } from "antd";
import { ColumnsType } from "antd/lib/table";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";

const { Text } = Typography;

interface DataType {
  key: string;
  title: string;
  value: number;
}

const DB2 = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { currentStep, dashboardProcessing } = uiState;
  const { getS2db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const costColumns: ColumnsType<DataType> = [
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
  const costDataModel: DataType[] = [
    { key: "b4", title: "Land and site-related costs", value: 0 },
    {
      key: "b5",
      title: "Arteries (main roads)",
      value: 0,
    },
    {
      key: "b6",
      title: "Secondaries (distributor roads)",
      value: 0,
    },
    {
      key: "b7",
      title: "Tertiaries (access and local roads)",
      value: 0,
    },
    {
      key: "b8",
      title: "Public Spaces",
      value: 0,
    },
  ];

  const revenueDataModel: DataType[] = [
    { key: "b10", title: "Revenues from private lands on arteries", value: 0 },
    {
      key: "b11",
      title: "...on secondaries",
      value: 0,
    },
    {
      key: "b12",
      title: "...on tertiaries",
      value: 0,
    },
    {
      key: "b13",
      title: "...in off-grid clusters",
      value: 0,
    },
    {
      key: "b14",
      title: "Revenues from private lands, subtotal",
      value: 0,
    },
    {
      key: "b15",
      title: "Value of public lands",
      value: 0,
    },
  ];

  const revenueColumns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "",
      dataIndex: "value",
      align: "right",
      render: (text, record) => currency.format(record.value),
    },
  ];

  const surplusDataModel: DataType[] = [
    { key: "b18", title: "Project surplus (loss)", value: 0 },
    {
      key: "b19",
      title: "Financial efficiency (surplus/costs)",
      value: 0,
    },
  ];

  const surplusColumns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "",
      dataIndex: "value",
      align: "right",
      render: (text, record) => {
        if (record.key === "b18") {
          return currency.format(record.value);
        } else {
          return Number(record.value).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        }
      },
    },
  ];

  const [costData, setCostData] = useState<DataType[]>([]);
  const [revenueData, setRevenueData] = useState<DataType[]>([]);
  const [surplusData, setSurplusData] = useState<DataType[]>([]);

  useEffect(() => {
    // console.log("2db", toJS(getS2db));
    let cost = getS2db["b9"],
      revenue = getS2db["b16"],
      b15 = 0;
    costDataModel.forEach((data) => {
      if (isNaN(getS2db[data.key])) {
        data.value = 0;
      } else {
        data.value = getS2db[data.key];
      }
    });

    setCostData(costDataModel);

    revenueDataModel.forEach((data) => {
      if (["b10", "b11", "b12", "b13"].includes(data.key)) {
        if (isNaN(getS2db[data.key])) {
          data.value = 0;
        } else {
          data.value = getS2db[data.key];
        }
      }
      if (data.key === "b14") {
        if (isNaN(getS2db[data.key])) {
          data.value = 0;
        } else {
          data.value = getS2db[data.key];
        }
      }
      if (data.key === "b15") {
        if (isNaN(getS2db[data.key])) {
          data.value = 0;
        } else {
          data.value = getS2db[data.key];
          b15 = data.value;
        }
      }
    });
    setRevenueData(revenueDataModel);
    surplusDataModel[0].value = isNaN(getS2db["b18"]) ? 0 : getS2db["b18"];
    surplusDataModel[1].value = isNaN(-getS2db["b18"] / cost) ? 0 : -getS2db["b18"] / cost;
    setSurplusData(surplusDataModel);
    // setMobiusUpdated(false);
  }, [NeighbourhoodUpdated]);

  return (
    <>
      {LSCreated ? (
        dashboardProcessing ? (
          <Common.Calculating />
        ) : (
          <>
            <Table
              columns={costColumns}
              dataSource={costData}
              size="small"
              pagination={false}
              summary={(pageData) => {
                let subtotal = 0;

                pageData.forEach(({ value }) => {
                  subtotal += value;
                });

                return (
                  <Table.Summary.Row className="cost-summary">
                    <Table.Summary.Cell index={0}>
                      <Text>Costs, total</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(subtotal)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                );
              }}
            />
            <Table
              showHeader={false}
              columns={revenueColumns}
              dataSource={revenueData}
              size="small"
              pagination={false}
              summary={(pageData) => {
                let b14, b15;
                if (pageData.length !== 0) {
                  b14 = pageData.find((o) => o.key === "b14").value;
                  b15 = pageData.find((o) => o.key === "b15").value;
                }
                const subtotal = b14 + b15;
                return (
                  <Table.Summary.Row className="revenue-summary">
                    <Table.Summary.Cell index={0}>
                      <Text>Revenues, total</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                      <Text>{currency.format(subtotal)}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                );
              }}
            />
            <Table showHeader={false} columns={surplusColumns} dataSource={surplusData} size="small" pagination={false} className="surplus-table" />
          </>
        )
      ) : (
        <Empty />
      )}
    </>
  );
});
export default DB2;
