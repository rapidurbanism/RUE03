import React, { useState } from "react";
import { Steps } from "antd";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
import { VIEWS } from "@stores/types";

const { Step } = Steps;

const Wrapper = styled("div")`
  .ant-steps-item-icon {
    display: none;
  }
`;

const ChangeView = observer(() => {
  const { uiState, mobiusStore } = useStores();
  const {
    step,
    setStep,
    currentView,
    setCurrentView,
    currentStep,
    setMobiusUpdated,
    setFinanceShouldUpdate,
    toggleFinanceView,
    setDashboardProcessing,
    setStepParams,
    setSideMenuVisible,
    siteLoaded,
    roadsLoaded,
    siteDefination,
  } = uiState;
  const {
    setpostMessageData,
    model,
    setModel,
    CityModel,
    CityResult,
    NeighbourhoodModel,
    NeighbourhoodResult,
    TissueModel,
    SBuildingModel,
    MBuildingModel,
    DummyModel,
  } = mobiusStore;

  const [current, setCurrent] = useState(0);

  const onChange = (current: number) => {
    // console.log("siteDefination", siteDefination);
    // console.log("CityModel", CityModel);
    // console.log("DummyModel", DummyModel);
    if (siteDefination === "") {
      return;
    } else if (siteDefination === "real" && CityModel === "") {
      return;
    } else if (siteDefination === "dummy" && DummyModel === "") {
      return;
    }

    if (current !== 0) {
      setStep(current, step.get(current));
    }
    setCurrent(current);
    // setDashboardProcessing(true);
    // setMobiusUpdated(true);
    let _model = model;

    switch (current) {
      case 0:
        if (siteDefination === "vmc" || siteDefination === "real") {
          onChangeStep(VIEWS.SITE);
          setModel(_model);
          setpostMessageData({
            messageType: "update",
            model: CityModel,
            keepCamera: true,
          });
        } else if (siteDefination === "dummy") {
          onChangeStep(VIEWS.SITE);
          setModel(_model);
          setpostMessageData({
            messageType: "update",
            model: DummyModel,
            keepCamera: true,
          });
        }

        break;
      case 1:
        onChangeStep(VIEWS.SETTLEMENT);
        setModel(_model);

        setpostMessageData({
          messageType: "update",
          model: NeighbourhoodModel,
          keepCamera: true,
        });

        break;
      case 2:
        onChangeStep(VIEWS.TISSUE);
        setModel(_model);

        setpostMessageData({
          messageType: "update",
          model: TissueModel,
          keepCamera: true,
        });
        break;
      case 3:
        onChangeStep(VIEWS.STARTER_BUILDINGS);
        setModel(_model);

        setpostMessageData({
          messageType: "update",
          model: SBuildingModel,
          keepCamera: true,
        });
        break;
      case 4:
        onChangeStep(VIEWS.MAX_BUILDINGS);
        setModel(_model);

        setpostMessageData({
          messageType: "update",
          model: MBuildingModel,
          keepCamera: true,
        });
        break;
      default:
        break;
    }
  };

  const onChangeStep = (model: VIEWS) => {
    // setFinanceShouldUpdate(true);
    setCurrentView(model);
    toggleFinanceView("update");
    // setDashboardProcessing(true);
  };

  return (
    <Wrapper>
      <Steps type="navigation" size="small" current={current} onChange={onChange} className="site-navigation-steps">
        <Step title="Site Selected" />
        <Step title="Settlement" />
        <Step title="Lots" />
        <Step title="Starter buildings" />
        <Step title="Consolidated buildings" />
      </Steps>
    </Wrapper>
  );
});
export default ChangeView;
