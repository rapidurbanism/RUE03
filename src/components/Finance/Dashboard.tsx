import React, { ReactNode, useState } from "react";
import { Row, Col, Select } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import DB1 from "./DB1";
import DB2 from "./DB2";
import DB3S from "./DB3S"; //Simple, only last column
import DB4 from "./DB4";
import DB5 from "./DB5";
import DB6 from "./DB6";

const Option = Select.Option;

const Wrapper = styled("div")`
  padding-right: 12px;
  padding-top: 5px;
  button {
    margin-top: 3px;
  }
  th,
  td {
    padding: 2px 12px 2px 8px !important;
    font-size: 13px;
  }
  .cost-summary {
    background-color: #f2dcdb;
    .ant-typography {
      color: darkred;
    }
  }
  .revenue-summary {
    background-color: #ebf1de;
    .ant-typography {
      color: darkgreen;
    }
  }
  .surplus-table {
    td {
      font-size: 15px;
    }
    tr:first-child {
      background-color: #d8e4bc;
    }
  }
  .ant-table-summary {
    text-align: right;
    .ant-table-cell {
      font-weight: 500;
    }
  }
  /* .ant-typography {
    font-size: 15px;
  } */
  .after-phasing {
    font-size: 13px;
  }
  .normal {
    font-size: 13px;
    font-weight: normal;
  }
  .surplus .ant-typography {
    color: #4f6228;
  }
  .loss .ant-typography {
    color: #632523;
  }

  .surplus-extra td .ant-typography {
    color: #008000;
    font-size: 13px !important;
    font-weight: normal !important;
    font-style: italic;
  }

  .loss-extra td .ant-typography {
    color: #963634;
    font-size: 13px !important;
    font-weight: normal !important;
    font-style: italic;
  }
`;

const FinanceDashboard = observer((props: { expand?: ReactNode; hide?: ReactNode }) => {
  const { uiState, neighbourhoodStore } = useStores();
  const { currentView, dashboardProcessing, setDashboardProcessing } = uiState;

  const [currentDB, setCurrentDB] = useState("1db");

  //DB3 select category to show
  const [category, setCategory] = useState("a");

  const Dashboard = () => {
    switch (currentDB) {
      case "1db":
        return (
          <div style={{ height: "500px" }}>
            <DB1 />
          </div>
        );
      case "2db":
        return (
          <div style={{ height: "500px" }}>
            <DB2 />
          </div>
        );
      case "3db":
        return (
          <div style={{ height: "630px" }}>
            <DB3S />
          </div>
        );
      // <DB3 category={category} setCategory={setCategory} />
      case "4db":
        return (
          <div style={{ height: "780px" }}>
            <DB4 />
          </div>
        );
      case "5db":
        return <DB5 />;
      case "6db":
        return <DB6 />;
      default:
        return <DB1 />;
    }
  };

  const changeDashboard = (value) => {
    setCurrentDB(value);
    setDashboardProcessing(false);
  };

  return (
    <Wrapper>
      <Row>
        {props.expand}
        <Col span={18}>
          {/* <h3 style={{ marginTop: "5px",textAlign:"center" }}>{header}</h3> */}
          <Select defaultValue="1db" style={{ width: 290, textAlign: "center" }} onChange={changeDashboard}>
            <Option value="1db">City scale Proforma</Option>
            <Option value="2db">Neighborhood scale Proforma</Option>
            <Option value="3db">Off-grid Clusters Proforma</Option>
            <Option value="4db">Starter Buildings Proforma</Option>
            <Option value="5db">Dwellings Proforma &amp; Affordability</Option>
            <Option value="6db">Demographic forecast</Option>
          </Select>
        </Col>
        {props.hide}
        <Col span={24}>
          <div style={{ position: "relative" }}>
            <Dashboard />
            {/* {dashboardProcessing ? <Common.Calculating /> : <Dashboard />} */}
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
});
export default FinanceDashboard;
