import React, { useState, useEffect, ReactNode } from "react";
import { Table, Empty, Select, Row, Col } from "antd";
import { ColumnsType } from "antd/lib/table";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";
import { toJS } from "mobx";

const Option = Select.Option;

interface DataType {
  key: string;
  title: string;
  value: number | null;
}

const DB3 = observer((props: { category; setCategory }) => {
  const { category, setCategory } = props;
  const { uiState, neighbourhoodStore } = useStores();
  const { currentStep, dashboardProcessing } = uiState;
  const { getS3db, NeighbourhoodUpdated, LSCreated } = neighbourhoodStore;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const allColumns: ColumnsType<DataType> = [
    {
      title: "Costs and revenues,\nall clusters",
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
  const allModel: DataType[] = [
    { key: "r6", title: "Serviced land, all clusters", value: 0 },
    {
      key: "r7",
      title: "Semi-private (collective) space, all clusters",
      value: 0,
    },
    {
      key: "r8",
      title: "Total costs, all clusters",
      value: 0,
    },
    {
      key: "r9",
      title: "Revenues from private lots, all clusters",
      value: 0,
    },
    {
      key: "r10",
      title: "Other revenues, all clusters",
      value: 0,
    },
    {
      key: "r11",
      title: "Total revenue, all clusters",
      value: 0,
    },
    {
      key: "r13",
      title: "Total surplus (loss), all clusters",
      value: 0,
    },
    {
      key: "r14",
      title: "Financial efficiency (surplus/costs)",
      value: 0,
    },
  ];

  const [ADataA, setADataA] = useState<DataType[]>([]);
  const [SDataA, setSDataA] = useState<DataType[]>([]);
  const [LSDataA, setLSDataA] = useState<DataType[]>([]);
  const [LMDataA, setLMDataA] = useState<DataType[]>([]);
  const [TDataA, setTDataA] = useState<DataType[]>([]);

  const individualColumns: ColumnsType<DataType> = [
    {
      title: "Costs and revenues,individual clusters",
      dataIndex: "title",
      align: "right",
      width: 270,
    },
    {
      title: "Base-year amount",
      dataIndex: "value",
      align: "right",
      render: (text, record) => {
        if (record.key !== "r27") {
          return currency.format(record.value);
        } else {
          return Number(record.value).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 });
        }
      },
    },
  ];
  const individualModel: DataType[] = [
    { key: "r19", title: "Serviced land", value: 0 },
    {
      key: "r20",
      title: "Semi-private (collective) space",
      value: 0,
    },
    {
      key: "r21",
      title: "Costs, total",
      value: 0,
    },
    {
      key: "r22",
      title: "Revenues from private lots",
      value: 0,
    },
    {
      key: "r23",
      title: "Other revenues",
      value: 0,
    },
    {
      key: "r24",
      title: "Revenues, total",
      value: 0,
    },
    {
      key: "r26",
      title: "Project surplus (loss)",
      value: 0,
    },
    {
      key: "r27",
      title: "Financial efficiency (surplus/costs)",
      value: 0,
    },
  ];

  const [ADataI, setADataI] = useState<DataType[]>([]);
  const [SDataI, setSDataI] = useState<DataType[]>([]);
  const [LSDataI, setLSDataI] = useState<DataType[]>([]);
  const [LMDataI, setLMDataI] = useState<DataType[]>([]);
  const [TDataI, setTDataI] = useState<DataType[]>([]);

  useEffect(() => {
    // console.log("3db", toJS(getS3db));

    //artery
    allModel.forEach((data) => {
      if (isNaN(getS3db["a"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["a"][data.key];
      }
    });
    setADataA(allModel);
    const _AI = JSON.parse(JSON.stringify(individualModel));
    _AI.forEach((data) => {
      if (isNaN(getS3db["a"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["a"][data.key];
      }
    });
    setADataI(_AI);

    //secondaries
    const _S = JSON.parse(JSON.stringify(allModel));
    _S.forEach((data) => {
      if (isNaN(getS3db["s"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["s"][data.key];
      }
    });
    setSDataA(_S);
    const _SI = JSON.parse(JSON.stringify(individualModel));
    _SI.forEach((data) => {
      if (isNaN(getS3db["s"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["s"][data.key];
      }
    });
    setSDataI(_SI);

    //locals single
    const _LS = JSON.parse(JSON.stringify(allModel));
    _LS.forEach((data) => {
      if (isNaN(getS3db["ls"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["ls"][data.key];
      }
    });
    setLSDataA(_LS);
    const _LSI = JSON.parse(JSON.stringify(individualModel));
    _LSI.forEach((data) => {
      if (isNaN(getS3db["ls"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["ls"][data.key];
      }
    });
    setLSDataI(_LSI);

    //locals multiple
    const _LM = JSON.parse(JSON.stringify(allModel));
    _LM.forEach((data) => {
      if (isNaN(getS3db["lm"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["lm"][data.key];
      }
    });
    setLMDataA(_LM);
    const _LMI = JSON.parse(JSON.stringify(individualModel));
    _LMI.forEach((data) => {
      if (isNaN(getS3db["lm"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["lm"][data.key];
      }
    });
    setLMDataI(_LMI);

    //total
    const _T = JSON.parse(JSON.stringify(allModel));
    _T.forEach((data) => {
      if (isNaN(getS3db["t"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["t"][data.key];
      }
    });
    setTDataA(_T);

    const _TI = JSON.parse(JSON.stringify(individualModel));
    _TI.forEach((data) => {
      if (isNaN(getS3db["t"][data.key])) {
        data.value = 0;
      } else {
        data.value = getS3db["t"][data.key];
      }
    });
    setTDataI(_TI);
  }, [NeighbourhoodUpdated]);

  const changeCategory = (value) => {
    setCategory(value);
  };

  const A = () => (
    <>
      <Row>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          {getS3db["a"]["r4"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={allColumns} dataSource={ADataA} size="small" pagination={false} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          1 of {getS3db["a"]["r17"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={individualColumns} dataSource={ADataI} size="small" pagination={false} />
        </Col>
      </Row>
    </>
  );
  const S = () => (
    <>
      <Row>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          {getS3db["s"]["r4"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={allColumns} dataSource={SDataA} size="small" pagination={false} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          1 of {getS3db["s"]["r17"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={individualColumns} dataSource={SDataI} size="small" pagination={false} />
        </Col>
      </Row>
    </>
  );
  const LS = () => (
    <>
      <Row>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          {getS3db["ls"]["r4"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={allColumns} dataSource={LSDataA} size="small" pagination={false} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          1 of {getS3db["ls"]["r17"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={individualColumns} dataSource={LSDataI} size="small" pagination={false} />
        </Col>
      </Row>
    </>
  );

  const LM = () => (
    <>
      <Row>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          {getS3db["lm"]["r4"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={allColumns} dataSource={LMDataA} size="small" pagination={false} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          1 of {getS3db["lm"]["r17"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={individualColumns} dataSource={LMDataI} size="small" pagination={false} />
        </Col>
      </Row>
    </>
  );

  const T = () => (
    <>
      <Row>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          {getS3db["t"]["r4"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={allColumns} dataSource={TDataA} size="small" pagination={false} />
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={14} style={{ textAlign: "right", paddingBottom: 10 }}>
          Number of clusters
        </Col>
        <Col span={10} style={{ textAlign: "center" }}>
          1 of {getS3db["t"]["r17"]}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={individualColumns} dataSource={TDataI} size="small" pagination={false} />
        </Col>
      </Row>
    </>
  );

  const SingleDashboard = () => {
    switch (category) {
      case "a":
        return <A />;
      case "s":
        return <S />;
      case "ls":
        return <LS />;
      case "lm":
        return <LM />;
      case "t":
        return <T />;
      default:
        return <A />;
    }
  };

  return (
    <>
      {LSCreated ? (
        dashboardProcessing ? (
          <Common.Calculating />
        ) : (
          <Row align="middle">
            <Col span={11}>
              <div style={{ paddingLeft: 15 }}>
                <h4>Off-grid cluster category</h4>
              </div>
            </Col>
            <Col span={13}>
              <Select
                defaultValue={category}
                style={{ width: 170, textAlign: "center", marginLeft: 40, marginTop: 20, marginBottom: 10 }}
                onChange={changeCategory}
              >
                <Option value="a">On arteries</Option>
                <Option value="s">On secondaries</Option>
                <Option value="ls">On locals, single</Option>
                <Option value="lm">On locals, multiple</Option>
                <Option value="t">Total</Option>
              </Select>
            </Col>
            <Col span={24}>{dashboardProcessing ? <Common.Calculating /> : <SingleDashboard />}</Col>
          </Row>
        )
      ) : (
        <Empty />
      )}
    </>
  );
});
export default DB3;
