import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BarsOutlined, SaveOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Layout, Row, Col, Button, Input, Tooltip } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import StepComp from "@components/StepComp";
import Mobius from "@components/Mobius";
import FinanceDashboard from "@components/Finance/Dashboard";
import Impact from "@components/Impact";
import FinanceFull from "@components/FinanceFull";
import SideMenu from "@components/SideMenu";
import { StepParams } from "../stores/types";
import ChangeView from "@components/ChangeView";
import { Common } from "@components/Common";

const { Sider, Content } = Layout;

const Wrapper = styled(Layout)`
  overflow: hidden;
  .ant-layout-header {
    background: white;
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
  }
  .ps--active-x > .ps__rail-x {
    display: none;
  }
`;

const Body = styled(Layout)`
  .ant-layout-sider {
    background: white;
  }
  .ant-layout-content {
    background: white;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    color: #144465;
  }
  .ant-layout-content {
    /* margin-top: 2px; */
  }
  .steps {
    border-right: 2px solid #f2f2f2;
    .ant-layout-sider-children {
      height: 100vh;
    }
  }
  .finance {
    padding: 0 0 20px 0;
    .ant-btn-icon-only {
      border: unset;
      box-shadow: unset;
      .anticon {
        font-size: 18px;
      }
    }
    h2 {
      font-size: 22px;
    }
    .ant-layout-sider-children {
      height: 100vh;
    }
  }
  .hidden {
    display: none;
  }
`;

const HideFinance = styled("div")`
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 14px;
  font-weight: 500;
  line-height: 10px;
  padding: 10px;
  cursor: pointer;
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainLayout = observer(() => {
  const { uiState } = useStores();
  const {
    financialTableVisible,
    financeShouldUpdate,
    financeTableSaving,
    toggleFinanceView,
    sideWidth,
    hideWidth,
    setSideMenuVisible,
    currentStep,
    projectTitle,
    setProjectTitle,
    rendering,
  } = uiState;

  let param = useQuery();

  const stepCompWidth = 400;
  const stepRef = useRef<any>(null);

  const [inputChange, setInputChange] = useState(false);
  const [title, setTitle] = useState(projectTitle);

  const saveProjectTitle = () => {
    if (title === "") {
      return;
    }
    setInputChange(false);
    setProjectTitle(title);
  };
  return (
    <Wrapper>
      <Body className="body" style={{ minHeight: "calc(100vh)" }}>
        {/* financeCompView === "full" ? 0 :  */}
        <Sider width={financialTableVisible ? 0 : stepCompWidth} className="steps">
          {/* <PerfectScrollbar> */}
          <Row style={{ marginBottom: "20px", padding: "10px 20px 0" }}>
            <Col span={3}>
              <BarsOutlined
                style={{
                  fontSize: "20px",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                onClick={() => setSideMenuVisible(true)}
              />
            </Col>
            <Col span={21} className="title">
              <Button
                type="text"
                onClick={() => {
                  setInputChange(true);
                  setTitle(projectTitle);
                }}
                hidden={inputChange}
              >
                {projectTitle}
              </Button>

              {inputChange && <Input defaultValue={projectTitle} onChange={(e) => setTitle(e.target.value)} onBlur={() => saveProjectTitle()} />}
            </Col>
          </Row>
          <StepComp ref={stepRef} />
          {/* </PerfectScrollbar> */}
        </Sider>
        <Content>
          <ChangeView />
          <Mobius />
        </Content>

        <Sider width={window.innerWidth} className={!financialTableVisible ? "hidden" : "" + " finance"} style={{ borderLeft: "2px solid #f2f2f2" }}>
          <>
            <Row>
              <Col span={12}>
                <Button icon={<RightOutlined />} onClick={() => toggleFinanceView("side")} />
              </Col>
              <Col span={11} style={{ textAlign: "right" }}>
                <Button type="text" icon={<SaveOutlined />} loading={financeTableSaving}>
                  {financeTableSaving ? "Saving" : "Saved"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FinanceFull />
              </Col>
            </Row>
          </>
        </Sider>

        <Sider width={sideWidth} className="finance" style={{ borderLeft: "2px solid #f2f2f2" }}>
          <PerfectScrollbar>
            <>
              <FinanceDashboard
                expand={
                  <Col span={3}>
                    <Tooltip title="Full Screen">
                      <Button
                        icon={<LeftOutlined/>}
                        onClick={() => {
                          toggleFinanceView("full" + (financeShouldUpdate ? "update" : ""));
                        }}
                      />
                    </Tooltip>
                  </Col>
                }
                hide={
                  <Col span={3} style={{ textAlign: "right" }}>
                    <Tooltip title="Hide">
                      <Button icon={<RightOutlined />} onClick={() => toggleFinanceView("hide")} />
                    </Tooltip>
                  </Col>
                }
              />
              <Impact />
            </>
          </PerfectScrollbar>
        </Sider>
        <Sider width={hideWidth} className="finance">
          <PerfectScrollbar>
            <>
              <Row onClick={() => toggleFinanceView("side")}>
                <Col>
                  <>
                    <Button icon={<LeftOutlined/>} />
                  </>
                </Col>
                <Col>{param.get("showtext") === "" && <HideFinance>FINANCE</HideFinance>}</Col>
              </Row>
            </>
          </PerfectScrollbar>
        </Sider>
      </Body>
      <SideMenu
        openProject={(params: StepParams, step: { mainStep: number; subStep: number }) => {
          if (stepRef.current !== null) {
            stepRef.current.updateParams(params, step);
          }
        }}
      />
      {rendering && <Common.Rendering />}
    </Wrapper>
  );
});
export default MainLayout;
