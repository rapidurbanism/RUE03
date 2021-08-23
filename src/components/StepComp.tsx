import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { Steps, Form, Slider, Select, Button, Row, Col, InputNumber, Upload, Dropdown, Menu, Tooltip, message, Checkbox } from "antd";
import { SelectOutlined, DownOutlined, CheckOutlined, UploadOutlined, ProjectOutlined, CloseOutlined, SaveOutlined } from "@ant-design/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useStores } from "@stores/index";
import { Common } from "@components/Common";
import { StepParams, VIEWS } from "@stores/types";
import * as Modules from "../mobius/core/modules";
import dummy from "./models/dummy";
// import city from "./models/city27";
// import neighbourhood from "./models/neighbourhood141";
// import tissue from "./models/tissue38";
// import starter_building from "./models/starter_building21";
// import max_building from "./models/max_building20";

import city from "./models/test/city";
import neighbourhood from "./models/test/neighbourhood";
import tissue from "./models/test/tissue";
import starter_building from "./models/test/building_starter";
import max_building from "./models/test/building_max";

const { Option } = Select;

const Wrapper = styled("div")`
  padding: 0px 10px 20px 15px;
  .ant-input-number {
    width: calc(100% - 10px);
    /* margin-left: 10px;
    margin-bottom: 2px; */
    .ant-input-number-handler-wrap {
      width: 15px;
      .ant-input-number-handler-up-inner,
      .ant-input-number-handler-down-inner {
        right: 1px;
      }
    }
    .ant-input-number-input {
      height: 26px;
      padding: 0 5px;
    }
  }
  .ant-steps-vertical {
    .ant-steps-item-icon {
      margin-right: 0px;
    }
    .ant-steps-item-title {
      font-size: 18px;
      padding-left: 5px;
    }
    .ant-steps-item-content {
      /* min-height: 55px; */
    }
  }

  .substep {
    padding-top: 10px;

    /* for label */
    .ant-col-11,
    .ant-col-13 {
      line-height: 28px;
    }
    .ant-col-2 {
      .ant-steps-item-icon {
        width: 18px;
        height: 18px;
        font-size: 10px;
        line-height: 18px;
        border-radius: 18px;
        float: unset;
        vertical-align: top;
      }
    }
    .row-inline {
      margin-bottom: 7px;
    }
    .sub-label {
      font-weight: 500;
      margin-bottom: 7px;
      line-height: 18px;
    }
    .ant-steps-item-title {
      font-size: 14px;
      margin-left: 22px;
    }
    .ant-steps-item-content {
      min-height: 40px;
      margin-left: -17px;
      float: left;
      width: calc(100% - 15px);
    }
    .ant-steps-item-tail {
      padding: 27px 0 4px !important;
    }

    .ant-steps-item-description {
      padding-left: 22px;
      padding-bottom: 7px;
      h4 {
        margin: 20px 0 7px;
      }
    }

    .ant-form-item {
      margin-bottom: 7px;
    }
    .ant-steps-item {
      cursor: pointer;
    }

    .ant-steps-item-wait .ant-steps-item-icon {
      background-color: #fff;
      border-color: rgba(0, 0, 0, 0.25) !important;

      .ant-steps-icon {
        color: rgba(0, 0, 0, 0.25) !important;
      }
    }

    .ant-steps-small .ant-steps-item-icon {
      background-color: #fff;
      border-color: rgba(0, 0, 0, 0.25);
    }
    .ant-steps-icon-dot {
      display: none;
    }
    code {
      color: crimson;
      background-color: #f1f1f1;
      padding: 3px;
    }
  }
`;

const { Step } = Steps;

const StepComp = observer(
  forwardRef((props, ref) => {
    const { uiState, mobiusStore } = useStores();
    const {
      step,
      setStep,
      stepInitialValue,
      currentStep,
      setMobiusUpdated,
      setFinanceShouldUpdate,
      toggleFinanceView,
      setDashboardProcessing,
      setStepParams,
      setSideMenuVisible,
      setProjectTitle,
      siteGeoJSON,
      setSiteGeoJSON,
      roadsGeoJSON,
      setRoadsGeoJSON,
      currentView,
      siteLoaded,
      setSiteLoaded,
      roadsLoaded,
      setRoadsLoaded,
      siteDefination,
      setSiteDefination,
      setRendering,
      financeTableSaving,
    } = uiState;
    const {
      setpostMessageData,
      setCurrentGeoJSON,
      setCity,
      setNeighbourhood,
      setTissue,
      setSBuilding,
      setMBuilding,
      geoJsonUpdated,
      setGeoJsonUpdated,
      setDummy,
    } = mobiusStore;

    const [mainStep, setMainStep] = useState(0);

    const [form] = Form.useForm();

    const initFormData = toJS(stepInitialValue);

    useImperativeHandle(ref, () => ({
      updateParams: (params: StepParams, step: { mainStep: number; subStep: number }) => {
        setStepParams(params);
        if (step !== undefined) {
          switchStep(step.mainStep, step.subStep);
        }
        onClickApply(params);
      },
    }));

    const [siteFilename, setSiteFilename] = useState("");
    const [roadsFilename, setRoadsFilename] = useState("");

    const [isFirsttime, setIsFirsttime] = useState(true);

    const onClickApply = (formData: object) => {
      // if (toJS(currentStep).mainStep === 1) {
      // setMobiusUpdated(true);
      // setFinanceShouldUpdate(true);
      toggleFinanceView("update");
      setSwitching(false);
      // }
      setRendering(true);

      setTimeout(() => {
        if (siteDefination === "dummy") {
          runDummyScript();
        } else {
          runCityScript(formData);
        }
      }, 100);

      // setpostMessageData({
      //   messageType: "get_localstorage_list",
      // });

      // if (geoJsonUpdated) {

      // if (currentView === VIEWS.SITE) {
      //   runCityScript();
      // } else if (currentView === VIEWS.SETTLEMENT) {
      //   runNeighbourhoodScript();
      // } else if (currentView === VIEWS.TISSUE) {
      //   runTissueScript();
      // } else if (currentView === VIEWS.STARTER_BUILDINGS) {
      //   runStarterBuildingScript();
      // } else if (currentView === VIEWS.MAX_BUILDINGS) {
      //   runMaxBuildingScript();
      // }

      //   setGeoJsonUpdated(false);
      // } else {
      //   setpostMessageData({
      //     messageType: "update",
      //     model: CityModel,
      //   });
      // }
    };

    const [L32, setL32] = useState(0);
    const [M32, setM32] = useState(0);

    const runDummyScript = () => {
      const v = stepInitialValue;

      dummy(Modules, v.latitude, v.longitude, v.rotation, v.site_front_dim, v.site_back_dim, v.site_back_shift, v.site_sides_dim).then((response) => {
        const dResult = response.result;
        const dModel = response.model.getJSONStr();

        setpostMessageData({
          messageType: "update",
          model: dModel,
          keepCamera: true,
        });
        setDummy({ result: dResult, model: dModel });
        runNeighbourhoodScript(stepInitialValue, dModel);
      });
      // .finally(() => {
      //   setTimeout(() => {
      //     runNeighbourhoodScript(stepInitialValue);
      //   }, 500);
      // });
    };

    const runCityScript = (formData) => {
      const site = siteGeoJSON;
      const roads = roadsGeoJSON;
      setRendering(true);
      city(Modules, site, roads).then((response) => {
        const result = response.result;
        const model = response.model.getJSONStr();

        if (currentView === VIEWS.SITE) {
          setpostMessageData({
            messageType: "update",
            model: model,
            keepCamera: true,
          });
        }

        setCity({ result: result, model: model });
        runNeighbourhoodScript(formData, model);
      });
      // .finally(() => {
      //   setTimeout(() => {
      //     // console.log("stepInitialValue", toJS(stepInitialValue));
      //     runNeighbourhoodScript(formData);
      //   }, 500);
      // });
    };

    const runNeighbourhoodScript = (formData, model) => {
      const params = formData.neighbourhood;
      // if (siteDefination === "dummy") {
      //   params["path_os_l"] = stepInitialValue.path_os_l;
      // }

      // console.log("PARAMS",...Object.values(params))
      neighbourhood(Modules, model, ...Object.values(params)).then((response) => {
        const nResult = response.result;
        const nModel = response.model.getJSONStr();
        if (currentView === VIEWS.SETTLEMENT) {
          setpostMessageData({
            messageType: "update",
            model: nModel,
            keepCamera: true,
          });
        }

        setL32(nResult.open_total_area);
        setM32(nResult.amen_total_area);
        setNeighbourhood({ result: nResult, model: nModel });
        // setMobiusUpdated(true);
        runTissueScript(formData, nModel);
        // setDashboardProcessing(true);
      });
      // .finally(() => {
      //   setTimeout(() => {
      //     console.log("Neighbourhood Script done");
      //     runTissueScript(formData);
      //   }, 1500);
      // });
    };

    const runTissueScript = (formData, model) => {
      const params = formData.tissue;

      tissue(Modules, model, ...Object.values(params)).then((response) => {
        const nResult = response.result;
        const nModel = response.model.getJSONStr();
        if (currentView === VIEWS.TISSUE) {
          setpostMessageData({
            messageType: "update",
            model: nModel,
            keepCamera: true,
          });
        }

        setTissue({ result: nResult, model: nModel });
        runStarterBuildingScript(formData, nModel);
        // setMobiusUpdated(true);

        // setDashboardProcessing(true);
      });
      // .finally(() => {
      //   setTimeout(() => {
      //     // console.log("Tissue Script done", localStorage.getItem("mobius_backup_list"));
      //     runStarterBuildingScript(formData);
      //   }, 3000);
      // });
    };

    const runStarterBuildingScript = (formData, model) => {
      const params = formData.building;

      starter_building(Modules, model, ...Object.values(params)).then((response) => {
        const nResult = response.result;
        const nModel = response.model.getJSONStr();
        if (currentView === VIEWS.STARTER_BUILDINGS) {
          setpostMessageData({
            messageType: "update",
            model: nModel,
            keepCamera: true,
          });
        }

        setSBuilding({ result: nResult, model: nModel });
        runMaxBuildingScript(formData, model);
        // setMobiusUpdated(true);

        // setDashboardProcessing(true);
      });
      // .finally(() => {
      //   setTimeout(() => {
      //     console.log("Starter Building Script done");
      //     runMaxBuildingScript(formData);
      //   }, 500);
      // });
    };

    const runMaxBuildingScript = (formData, model) => {
      const params = JSON.parse(JSON.stringify(formData.building));
      delete params.add_trees;

      max_building(Modules, model, ...Object.values(params)).then((response) => {
        const nResult = response.result;
        const nModel = response.model.getJSONStr();
        if (currentView === VIEWS.MAX_BUILDINGS) {
          setpostMessageData({
            messageType: "update",
            model: nModel,
            keepCamera: true,
          });
        }

        setMBuilding({ result: nResult, model: nModel });
        setMobiusUpdated(true);

        setTimeout(() => {
          setRendering(false);
        }, 4000);

        // setDashboardProcessing(true);
        if (isFirsttime) {
          if (siteDefination === "dummy") {
            setpostMessageData({ messageType: "zoom_to_fit" });
          }
          setIsFirsttime(false);
        }
      });
    };

    const onFinish = () => {
      // const values = await form.validateFields();
      onClickApply(initFormData);
    };

    // click on main step, Mobius will render with new model
    const onChangeStep = (model: string, formData: object, step: number) => {
      setpostMessageData({
        messageType: "update",
        url: model,
        params: formData,
        keepSettings: true,
      });

      setFinanceShouldUpdate(true);
      toggleFinanceView("update");
    };

    const range = (min: number, max: number) => {
      return { min: min, max: max, tooltipVisible: false };
    };

    const onChangeMain = (current: number) => {
      if (current !== 0) {
        setStep(current, step.get(current));
      }
      setMainStep(current);
    };

    const onChangeSub = (current: number) => {
      // console.log("changing subStep", "main=>", mainStep, "sub=>", current);
      setStep(mainStep, current);
    };

    const [switching, setSwitching] = useState(false);

    const switchStep = (main: number, sub: number) => {
      setSwitching(true);
      setMainStep(main);
      setStep(main, sub);
      setSwitching(false);
    };

    useEffect(() => {
      // onChangeStep(model, formData);
      setpostMessageData({
        messageType: "update_settings",
        ground: {
          show: true,
          width: 10000,
          length: 10000,
          height: -0.5,
          color: "#E6F2DA",
          shininess: 0,
        },
        grid: {
          show: false,
        },
        GI_settings: {
          camera: {
            pos: { x: -300, y: 300, z: 777 },
            target: { x: 400, y: 485, z: 0 },
          },
        },
      });

      // runCityScript(stepInitialValue);
    }, []);

    const formFieldChange = (process: string, field: string, value: number | string | undefined) => {
      if (process === "city") {
        stepInitialValue[field] = value;
      } else {
        stepInitialValue[process][field] = value;
      }

      // console.log(formData[field]);
    };

    const siteArea = () => {
      return (
        Math.round(((stepInitialValue["site_front_dim"] + stepInitialValue["site_back_dim"]) / 2) * stepInitialValue["site_sides_dim"] * 0.01) / 100
      );
    };

    const round2 = (num: number) => {
      return Math.round(num * 100) / 100;
    };

    interface FormData {
      [key: string]: any;
    }

    const renderFormItem = (process: string, key: string, label: string, range: object, step = 1, unit?: string, number?: number) => {
      const prop = {
        onChange(value: number | string | undefined) {
          formFieldChange(process, key, value);
        },
        value: process === "city" ? initFormData[key] : initFormData[process][key],
        step: step,
        ...range,
        formatter: (value) => `${value} ${unit}`,
        parser: (value) => value.replace(` ${unit}`, ""),
      };

      return (
        // label={label} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
        <Form.Item name={key}>
          <Row align="middle">
            {number && (
              <Col span={number !== 999 ? 2 : 3}>
                {number !== 999 ? (
                  <div className="ant-steps-item-icon">
                    <span className="ant-steps-icon">{number}</span>
                  </div>
                ) : null}
              </Col>
            )}
            <Col span={key === "latitude" || key === "longitude" ? 11 : 13}>{label}</Col>
            {/* <Col span={12}>
              <Slider {...prop} />
            </Col> */}
            <Col span={key === "latitude" || key === "longitude" ? 10 : 8}>
              <InputNumber {...prop} />
            </Col>
            {/* <Col span={4}>{unit !== undefined ? <div style={{ verticalAlign: "middle" }}>{unit}</div> : ""}</Col> */}
          </Row>
        </Form.Item>
      );
    };

    const renderDropdown = (process: string, key: string, label: string, options: Array<number>) => {
      const prop = {
        onChange(value: number | string | undefined) {
          formFieldChange(process, key, value);
        },
        defaultValue: initFormData[process][key],
      };

      return (
        <Form.Item name={key} label={label} labelCol={{ span: 14, offset: 3 }} wrapperCol={{ span: 4, offset: 1 }} labelAlign="left">
          <Row align="bottom">
            <Col span={24}>
              <Select {...prop} size="small">
                {options.map((o, i) => (
                  <Option value={o} key={i}>
                    {o}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Form.Item>
      );
    };

    const importSite = {
      beforeUpload: (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            const result = reader.result as string;
            setSiteGeoJSON(result);
            setGeoJsonUpdated(true);
            setTimeout(() => {
              setpostMessageData({
                messageType: "save_file",
                file_data: result,
                file_name: file.name,
              });
              setCurrentGeoJSON(file.name);
            }, 500);
            setSiteFilename(file.name);
            setSiteLoaded(true);
          }
        };
        reader.readAsText(file);
        return false;
      },
      showUploadList: false,
      accept: ".geojson",
    };

    const importRoads = {
      beforeUpload: (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            const result = reader.result as string;
            setRoadsGeoJSON(result);
            setGeoJsonUpdated(true);
            setTimeout(() => {
              setpostMessageData({
                messageType: "save_file",
                file_data: result,
                file_name: file.name,
              });
              setCurrentGeoJSON(file.name);
            }, 500);
            setRoadsFilename(file.name);
            setRoadsLoaded(true);
          }
        };
        reader.readAsText(file);
        return false;
      },
      showUploadList: false,
      accept: ".geojson",
    };

    const SITE_DEFINATION = {
      vmc: "VMC test site",
      real: "Load site",
      dummy: "Dummy site",
    };

    const handleMenuClick = (e) => {
      // if (currentView !== VIEWS.SITE) {
      //   message.info(
      //     <>
      //       Please click <b>Site Selected</b>.
      //     </>
      //   );
      //   return;
      // }

      if (e.key === "vmc") {
        //TODO
        setProjectTitle(SITE_DEFINATION["vmc"]);
        // runCityScript(stepInitialValue);
      } else if (e.key === "real") {
        //TODO
        setProjectTitle(SITE_DEFINATION["real"]);
      } else if (e.key === "dummy") {
        setProjectTitle(SITE_DEFINATION["dummy"]);
      }
      setSiteDefination(e.key);
    };

    const site_defination_menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="vmc" icon={siteDefination === "vmc" ? <CheckOutlined /> : <SelectOutlined />}>
          {SITE_DEFINATION["vmc"]}
        </Menu.Item>
        <Menu.Item key="real" icon={siteDefination === "real" ? <CheckOutlined /> : <UploadOutlined />}>
          {SITE_DEFINATION["real"]}
        </Menu.Item>
        <Menu.Item key="dummy" icon={siteDefination === "dummy" ? <CheckOutlined /> : <ProjectOutlined />}>
          {SITE_DEFINATION["dummy"]}
        </Menu.Item>
      </Menu>
    );

    const applyBtnMsg = () => {
      let msg = "Apply";
      if (siteDefination === "real") {
        if (!siteLoaded && !roadsLoaded) {
          msg = "Please load site and roads.";
        } else if (!siteLoaded) {
          msg = "Please load site.";
        } else if (!roadsLoaded) {
          msg = "Please load roads.";
        } else {
          msg = "Apply";
        }
      }

      return msg;
    };

    const onChangeFireProtection = (e) => {
      stepInitialValue.tissue.fire = e.target.checked;
    };

    const [showTreesN, setShowTreesN] = useState(true);

    const onChangeAddTrees = (e, scale) => {
      if (scale === "N") {
        stepInitialValue.neighbourhood.add_trees = e.target.checked;
        setShowTreesN(e.target.checked);
      } else if (scale === "B") {
        stepInitialValue.building.add_trees = e.target.checked;
      }
    };

    return (
      <Wrapper>
        {/* <Button onClick={() => switchStep(2, 1)}>Switch</Button> */}
        {!switching ? (
          // layout="vertical"
          <Form onFinish={onFinish} form={form}>
            <PerfectScrollbar>
              <div style={{ height: "calc(100vh - 150px)" }}>
                <Steps direction="vertical" current={mainStep} onChange={onChangeMain}>
                  {/* =============================================================================== */}

                  <Step
                    title="City"
                    description={
                      mainStep === 0 && (
                        <Steps direction="vertical" current={step.get(0)} onChange={onChangeSub} className="substep" size="small">
                          <Step
                            title="Site definition"
                            description={
                              step.get(0) === 0 && (
                                <>
                                  <Dropdown overlay={site_defination_menu}>
                                    <Button type="default" style={{ margin: "10px 0" }}>
                                      {siteDefination !== "" ? SITE_DEFINATION[siteDefination] : "Please select..."}
                                      <DownOutlined />
                                    </Button>
                                  </Dropdown>

                                  {siteDefination === "real" && (
                                    <>
                                      <div style={{ marginBottom: "10px" }}>
                                        <Button style={{ marginRight: "10px" }}>
                                          <Upload {...importSite}>Set Site</Upload>
                                        </Button>
                                        {siteLoaded && (
                                          <Button
                                            type="text"
                                            icon={<CloseOutlined />}
                                            onClick={() => {
                                              setSiteLoaded(false);
                                              setSiteFilename("");
                                            }}
                                            style={{ marginRight: "10px" }}
                                          />
                                        )}
                                        {siteFilename}
                                      </div>
                                      <div>
                                        <Button style={{ marginRight: "10px" }}>
                                          <Upload {...importRoads}>Set Roads</Upload>
                                        </Button>
                                        {roadsLoaded && (
                                          <Button
                                            type="text"
                                            icon={<CloseOutlined />}
                                            onClick={() => {
                                              setRoadsLoaded(false);
                                              setRoadsFilename("");
                                            }}
                                            style={{ marginRight: "10px" }}
                                          />
                                        )}
                                        {roadsFilename}
                                      </div>
                                    </>
                                  )}
                                </>
                              )
                            }
                          />

                          {siteDefination === "dummy" && (
                            <>
                              <Step
                                title="Location"
                                description={
                                  step.get(0) === 1 && (
                                    <>
                                      {renderFormItem("city", "latitude", "Latitude", range(-180, 180), 0.00001, "deg", 1)}
                                      {renderFormItem("city", "longitude", "Longitude", range(-180, 180), 0.00001, "deg", 2)}
                                    </>
                                  )
                                }
                              />
                              <Step
                                title="Geometry"
                                description={
                                  step.get(0) === 2 && (
                                    <>
                                      {renderFormItem("city", "rotation", "Rotation", range(-360, 360), 0.001, "deg", 1)}
                                      {renderFormItem("city", "site_front_dim", "Front", range(100, 1000), 0.01, "m", 2)}
                                      {renderFormItem("city", "site_back_dim", "Rear", range(100, 1000), 0.01, "m", 3)}
                                      {renderFormItem("city", "site_back_shift", "Rear shift", range(-500, 500), 0.01, "m", 4)}
                                      {renderFormItem("city", "site_sides_dim", "Depth", range(100, 1000), 0.01, "m", 5)}
                                      <Row>
                                        <Col span={14} offset={2}>
                                          <div style={{ marginTop: "3px" }}>Site area: {siteArea()} ha</div>
                                        </Col>
                                      </Row>
                                    </>
                                  )
                                }
                              />
                            </>
                          )}
                        </Steps>
                      )
                    }
                  />

                  {/* =============================================================================== */}

                  <Step
                    title="Neighbourhood"
                    description={
                      mainStep === 1 && (
                        <Steps direction="vertical" current={step.get(1)} onChange={onChangeSub} className="substep" size="small">
                          <Step
                            title="Public roads"
                            description={
                              step.get(1) === 0 && (
                                <>
                                  {renderFormItem("neighbourhood", "road_art_w", "Width of arteries", range(18, 30), 0.01, "m", 1)}
                                  {renderFormItem("neighbourhood", "road_sec_w", "Width of secondaries", range(12, 24), 0.01, "m", 2)}
                                  {renderFormItem("neighbourhood", "road_loc_w", "Width of locals", range(6, 18), 0.01, "m", 3)}
                                </>
                              )
                            }
                          />

                          <Step
                            title="On-grid partitions"
                            description={
                              step.get(1) === 1 && (
                                <>
                                  {renderFormItem("neighbourhood", "part_art_d", "Depth along arteries", range(20, 50), 0.01, "m", 1)}
                                  {renderFormItem("neighbourhood", "part_sec_d", "Depth along secondaries", range(15, 50), 0.01, "m", 2)}
                                  {renderFormItem("neighbourhood", "part_loc_d", "Depth along locals", range(10, 50), 0.01, "m", 3)}
                                </>
                              )
                            }
                          />

                          <Step
                            title="Off-grid partitions"
                            description={
                              step.get(1) === 2 && (
                                <>
                                  {renderFormItem("neighbourhood", "part_og_d", "Cluster depth", range(25, 100), 0.01, "m", 1)}
                                  <Row className="row-inline">
                                    <Col span={13} offset={2}>
                                      Cluster size:
                                    </Col>
                                    <Col span={8}>
                                      {((initFormData.neighbourhood.part_og_d / initFormData.tissue.ogc_plot_w) * 2).toFixed(0)} lots
                                    </Col>
                                  </Row>

                                  {renderFormItem("neighbourhood", "part_og_w", "Cluster width", range(20, 60), 0.01, "m", 2)}
                                  <Row className="row-inline">
                                    <Col span={13} offset={2}>
                                      Lot depth along path:
                                    </Col>
                                    <Col span={8}>{((initFormData.neighbourhood.part_og_w - initFormData.tissue.ogc_path_w) / 2).toFixed(2)} m</Col>
                                  </Row>
                                  <Row className="row-inline">
                                    <Col span={13} offset={2}>
                                      Lot depth around yard:
                                    </Col>
                                    <Col span={8}>{((initFormData.neighbourhood.part_og_w - initFormData.tissue.ogc_open_w) / 2).toFixed(2)} m</Col>
                                  </Row>
                                </>
                              )
                            }
                          />

                          <Step
                            title="Block structure"
                            description={
                              step.get(1) === 3 && (
                                <div style={{ marginTop: "10px" }}>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">1</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along arteries:</Col>
                                    </Row>
                                  </div>
                                  {renderDropdown("neighbourhood", "blk_art_num_og_d", "Off-grid clusters in depth", [0, 1])}
                                  {renderDropdown("neighbourhood", "blk_art_num_og_w", "Off-grid clusters in width", [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                  ])}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">2</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along secondaries:</Col>
                                    </Row>
                                  </div>
                                  {renderDropdown("neighbourhood", "blk_sec_num_og_d", "Off-grid clusters in depth", [0, 1])}
                                  {renderDropdown("neighbourhood", "blk_sec_num_og_w", "Off-grid clusters in width", [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                  ])}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">3</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along locals:</Col>
                                    </Row>
                                  </div>
                                  {renderDropdown("neighbourhood", "blk_loc_num_og_d", "Off-grid clusters in depth", [0, 1, 2])}
                                  {renderDropdown("neighbourhood", "blk_loc_num_og_w", "Off-grid clusters in width", [0, 1, 2, 3, 4, 5])}
                                </div>
                              )
                            }
                          />

                          <Step
                            title="On-grid lots"
                            description={
                              step.get(1) === 4 && (
                                <div style={{ marginTop: "10px" }}>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">1</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along arteries:</Col>
                                    </Row>
                                  </div>

                                  <Row>
                                    <Col span={13} offset={3}>
                                      Depth
                                    </Col>
                                    <Col span={8}>{initFormData.neighbourhood.part_art_d} m</Col>
                                  </Row>
                                  {renderFormItem("neighbourhood", "plot_art_w", "Width", range(10, 100), 0.01, "m", 999)}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">2</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along secondaries:</Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col span={13} offset={3}>
                                      Depth
                                    </Col>
                                    <Col span={8}>{initFormData.neighbourhood.part_sec_d} m</Col>
                                  </Row>
                                  {renderFormItem("neighbourhood", "plot_sec_w", "Width", range(10, 100), 0.01, "m", 999)}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">3</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Along locals:</Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col span={13} offset={3}>
                                      Depth
                                    </Col>
                                    <Col span={8}>{initFormData.neighbourhood.part_loc_d} m</Col>
                                  </Row>
                                  {renderFormItem("neighbourhood", "plot_loc_w", "Width", range(10, 100), 0.01, "m", 999)}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">4</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Access path to off-grid:</Col>
                                    </Row>
                                  </div>
                                  {renderFormItem("neighbourhood", "path_w", "Width", range(3, 12), 0.1, "m", 999)}
                                </div>
                              )
                            }
                          />

                          <Step
                            title="Public spaces"
                            description={
                              step.get(1) === 5 && (
                                <div style={{ marginTop: "10px" }}>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">1</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Open spaces</Col>
                                    </Row>
                                  </div>
                                  {renderFormItem("neighbourhood", "open_percent", "Open space", range(3, 10), 1, "%", 999)}
                                  <Row className="row-inline">
                                    <Col span={6} offset={18}>
                                      <div style={{ marginTop: "3px" }}>{L32.toFixed(2)} ha</div>
                                    </Col>
                                  </Row>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">2</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Amenities</Col>
                                    </Row>
                                  </div>
                                  {renderFormItem("neighbourhood", "amen_percent", "Amenities", range(3, 10), 1, "%", 999)}
                                  <Row className="row-inline">
                                    <Col span={6} offset={18}>
                                      <div style={{ marginTop: "3px" }}>{M32.toFixed(2)} ha</div>
                                    </Col>
                                  </Row>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">3</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Street sections</Col>
                                    </Row>
                                  </div>
                                  {renderFormItem("neighbourhood", "pavement_w", "Sidewalk width", range(1.5, 10), 0.5, "m", 999)}
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">4</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Trees</Col>
                                    </Row>
                                  </div>

                                  <Row>
                                    <Col span={13} offset={3}>
                                      Show trees?
                                    </Col>
                                    <Col span={8}>
                                      <Checkbox defaultChecked={true} onChange={(e) => onChangeAddTrees(e, "N")} />
                                    </Col>
                                  </Row>
                                  {showTreesN && (
                                    <>
                                      {renderFormItem("neighbourhood", "tree_spacing", "Tree spacing", range(6, 30), 1, "m", 999)}
                                      {renderFormItem("neighbourhood", "tree_height_start", "Initial tree height", range(5, 15), 1, "m", 999)}
                                      {renderFormItem("neighbourhood", "tree_height_max", "Final tree height", range(10, 30), 1, "m", 999)}
                                    </>
                                  )}
                                </div>
                              )
                            }
                          />
                        </Steps>
                      )
                    }
                  />

                  {/* =============================================================================== */}

                  <Step
                    title="Tissue"
                    description={
                      mainStep === 2 && (
                        <Steps direction="vertical" current={step.get(2)} onChange={onChangeSub} className="substep" size="small">
                          <Step
                            title="On-grid lots on arteries"
                            description={
                              step.get(2) === 0 && (
                                <>
                                  <Row>
                                    <Col span="13">Depth</Col>
                                    <Col span="8">{initFormData.neighbourhood.part_art_d} m</Col>
                                  </Row>
                                  <Row>
                                    <Col span="13">Width</Col>
                                    <Col span="8">{initFormData.neighbourhood.plot_art_w} m</Col>
                                  </Row>
                                  {renderFormItem("tissue", "off_art_front", "Front setback", range(0, 25), 0.1, "m")}
                                  {renderFormItem("tissue", "off_art_side", "Side margins", range(0, 25), 0.1, "m")}
                                  {renderFormItem("tissue", "off_art_back", "Rear setback", range(0, 25), 0.1, "m")}
                                  {renderFormItem("tissue", "floors_art", "Number of floors", range(2, 10), 1, "floors")}
                                </>
                              )
                            }
                          />

                          <Step
                            title="On-grid lots on secondaries"
                            description={
                              step.get(2) === 1 && (
                                <>
                                  <Row>
                                    <Col span="13">Depth</Col>
                                    <Col span="8">{initFormData.neighbourhood.part_sec_d} m</Col>
                                  </Row>
                                  <Row>
                                    <Col span="13">Width</Col>
                                    <Col span="8">{initFormData.neighbourhood.plot_sec_w} m</Col>
                                  </Row>
                                  {renderFormItem("tissue", "off_sec_front", "Front setback", range(0, 15), 0.1, "m")}
                                  {renderFormItem("tissue", "off_sec_side", "Side margins", range(0, 15), 0.1, "m")}
                                  {renderFormItem("tissue", "off_sec_back", "Rear setback", range(0, 15), 0.1, "m")}
                                  {renderFormItem("tissue", "floors_sec", "Number of floors", range(2, 6), 1, "floors")}
                                </>
                              )
                            }
                          />

                          <Step
                            title="On-grid lots on locals"
                            description={
                              step.get(2) === 2 && (
                                <>
                                  <Row>
                                    <Col span="13">Depth</Col>
                                    <Col span="8">{initFormData.neighbourhood.part_loc_d} m</Col>
                                  </Row>
                                  <Row>
                                    <Col span="13">Width</Col>
                                    <Col span="8">{initFormData.neighbourhood.plot_loc_w} m</Col>
                                  </Row>
                                  {renderFormItem("tissue", "off_loc_front", "Front setback", range(0, 10), 0.1, "m")}
                                  {renderFormItem("tissue", "off_loc_side", "Side margins", range(0, 10), 0.1, "m")}
                                  {renderFormItem("tissue", "off_loc_back", "Rear setback", range(0, 10), 0.1, "m")}
                                  {renderFormItem("tissue", "floors_loc", "Number of floors", range(2, 4), 1, "floors")}
                                </>
                              )
                            }
                          />

                          <Step
                            title="Corner lots"
                            description={
                              step.get(2) === 3 && (
                                <>
                                  <h4>Density (floor) bonus at intersection…</h4>
                                  {renderFormItem("tissue", "m_floors_art", "With artery", range(0, 100), 1, "%")}
                                  {renderFormItem("tissue", "m_floors_sec", "With secondary", range(0, 100), 1, "%")}
                                  {renderFormItem("tissue", "m_floors_loc", "With local", range(0, 100), 1, "%")}
                                </>
                              )
                            }
                          />

                          <Step
                            title="Off-grid clusters"
                            description={
                              step.get(2) === 4 && (
                                <div style={{ marginTop: "10px" }}>
                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">1</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Shared spaces (semi-private)</Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col span={16}>Access path width (on grid)</Col>
                                    <Col span={8}>{initFormData.neighbourhood.path_w} m</Col>
                                  </Row>
                                  {renderFormItem("tissue", "ogc_path_w", "Internal path width", range(2, 9), 1, "m")}
                                  {renderFormItem("tissue", "ogc_open_w", "Open space width", range(5, 15), 1, "m")}
                                  {renderFormItem("tissue", "ogc_open_l", "Open space length", range(10, 30), 1, "m")}

                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">2</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>Off-grid lots (private)</Col>
                                    </Row>
                                  </div>
                                  <Row>
                                    <Col span={16}>Depth on internal path:</Col>
                                    <Col span={6}></Col>
                                  </Row>
                                  <Row style={{ marginBottom: "10px" }}>
                                    <Col span={16}>Depth around open space:</Col>
                                    <Col span={6}></Col>
                                  </Row>
                                  {renderFormItem("tissue", "ogc_plot_w", "Lot width", range(3, 100), 0.1, "m")}
                                  {renderFormItem("tissue", "off_og_front", "Front setback", range(0, 3), 0.1, "m")}
                                  {renderFormItem("tissue", "off_og_side", "Side margins", range(0, 3), 0.1, "m")}
                                  {renderFormItem("tissue", "off_og_back", "Rear setback", range(0, 3), 0.1, "m")}
                                  {renderFormItem("tissue", "floors_og", "Number of floors", range(2, 4), 1, "floors")}

                                  <div className="sub-label">
                                    <Row>
                                      <Col span={2}>
                                        <div className="ant-steps-item-icon">
                                          <span className="ant-steps-icon">3</span>
                                        </div>
                                      </Col>
                                      <Col span={22}>2nd cluster (behind regular cluster)</Col>
                                    </Row>
                                  </div>
                                  {renderFormItem("tissue", "ogc2_path_w", "Internal path width", range(3, 10), 0.1, "m")}
                                  {renderFormItem("tissue", "ogc2_xpath_w", "Cul-de-sac width", range(3, 10), 0.1, "m")}
                                  {renderFormItem("tissue", "ogc2_plot_w", "Lot width", range(3, 12), 0.1, "m")}
                                  {renderFormItem("tissue", "ogc2_plot_d", "Lot depth (behind cul-de-sac)", range(10, 25), 0.1, "m")}
                                </div>
                              )
                            }
                          />
                          <Step
                            title="Fire protection"
                            description={
                              step.get(2) === 5 && (
                                <>
                                  <Row>
                                    <Col span={22}>Make partitions fire-proof via 6m margins</Col>
                                    <Col span={2}>
                                      <Checkbox defaultChecked={false} onChange={onChangeFireProtection} />
                                    </Col>
                                  </Row>
                                </>
                              )
                            }
                          />
                        </Steps>
                      )
                    }
                  />

                  {/* =============================================================================== */}

                  <Step
                    title="Starter Buildings"
                    description={
                      mainStep === 3 && (
                        <Steps direction="vertical" current={step.get(3)} onChange={onChangeSub} className="substep" size="small">
                          <Step
                            title="On-grid lots on arteries"
                            description={
                              step.get(3) === 0 && (
                                <>
                                  <h4>1. corner with other artery</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_art_art_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_art_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_art_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>2. corner with secondary</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_art_sec_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_sec_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_sec_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>3. corner with tertiary</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_art_loc_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_loc_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_loc_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>4. regular lot</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_art_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_art_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                </>
                              )
                            }
                          />
                          <Step
                            title="On-grid lots on secondaries"
                            description={
                              step.get(3) === 1 && (
                                <>
                                  <h4>1. corner with other secondary</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_sec_sec_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_sec_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_sec_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>2. corner with tertiary</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_sec_loc_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_loc_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_loc_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>3. regular lot</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_sec_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_sec_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                </>
                              )
                            }
                          />
                          <Step
                            title="On-grid lots on locals"
                            description={
                              step.get(3) === 2 && (
                                <>
                                  <h4>1. corner with other local</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_loc_loc_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_loc_loc_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_loc_loc_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>2. regular lot</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_loc_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_loc_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_loc_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                </>
                              )
                            }
                          />
                          <Step
                            title="Off-grid clusters"
                            description={
                              step.get(3) === 3 && (
                                <>
                                  <h4>1. Regular cluster (1st)</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_og_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_og_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_og_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                  <h4>2. 2nd cluster (behind regular)</h4>
                                  <div style={{ paddingLeft: "15px" }}>
                                    {renderFormItem("building", "pcen_og2_w", "initial width (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_og2_d", "initial depth (share of permissable)", range(0, 100), 1, "%")}
                                    {renderFormItem("building", "pcen_og2_f", "initial floors (share of permissable)", range(0, 100), 1, "%")}
                                  </div>
                                </>
                              )
                            }
                          />
                        </Steps>
                      )
                    }
                  />
                </Steps>
              </div>
            </PerfectScrollbar>
            {/* <Tooltip title={"Saved"}>
              <Button type="text" icon={<SaveOutlined />} loading={financeTableSaving} />
            </Tooltip> */}
            <Tooltip title={applyBtnMsg}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: "120px", marginTop: "30px" }}
                disabled={siteDefination === "real" && (!siteLoaded || !roadsLoaded)}
              >
                Apply
              </Button>
            </Tooltip>
          </Form>
        ) : (
          <Common.Loading />
        )}
      </Wrapper>
    );
  })
);

export default StepComp;
