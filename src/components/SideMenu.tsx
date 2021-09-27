import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Drawer, Menu, Upload, Tag, message, Modal } from "antd";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";
//@ts-ignore
import Logo from "../assets/logo.jpg";
import styled from "styled-components";
import ProjectNameModal from "./ProjectNameModal";
import { StepParams } from "../stores/types";
import compareVersions from "compare-versions";
import { fs } from "memfs";

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 10px 0;
    text-align: center;
  }
  img {
    width: 150px;
  }
  .title {
    font-size: 18px;
    padding: 7px;
    font-weight: 500;
  }
  .ant-menu {
    margin-top: 20px;
  }
  .ant-menu-vertical .ant-menu-item {
    font-size: 16px;
    padding: 0 30px;

    &:last-child {
      position: fixed;
      bottom: 10px;
      width: 256px;
    }

    .ant-upload {
      font-size: 16px;
      width: 100%;
      line-height: 40px;
      display: block;
    }
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: white;
    background-color: #346582;
    .ant-upload {
      color: white;
    }
  }
`;

const FileSaver = require("file-saver");

const latest_version = "0.3.0", version = "RUE 0.3";

const SideMenu = observer((props: any) => {
  const { openProject } = props;
  const { uiState, mobiusStore } = useStores();
  const { sideMenuVisible, setSideMenuVisible, currentStep, stepParams, projectTitle, setProjectTitle, siteGeoJSON, roadsGeoJSON } = uiState;
  const { host, setpostMessageData, getGeoJSON, CurrentGeoJSON } = mobiusStore;

  const [modalVisible, setModalVisible] = useState(false);

  const onCreate = (values: any) => {
    const financialData = fs.readFileSync("/financial.data", "utf8");
    const data = {
      title: projectTitle,
      stepParams: stepParams,
      currentStep: currentStep,
      mobius: host,
      geojson: { site: siteGeoJSON, roads: roadsGeoJSON },
      financial: financialData,
      version: latest_version,
    };
    const blob = new Blob([JSON.stringify(data)], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, `${values["filename"]}.rue`);

    setModalVisible(false);
    setSideMenuVisible(false);
  };

  const signOut = async () => {
    try {
      await Auth.signOut().then(() => location.reload());
    } catch (error) {
      console.log("error signing out: ", error);
    }
    setSideMenuVisible(false);
  };
  const onDrawerClose = () => {
    setSideMenuVisible(false);
  };

  const openPlan = {
    beforeUpload: (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const data = JSON.parse(reader.result as string) as StepParams;
          setProjectTitle(data.title);
          if (compareVersions(latest_version, data.version) === 1) {
            message.info("The file you are importing is from a previous version of RUE.");
          }
          setTimeout(() => {
            fs.writeFileSync("/financial.data", data.financial);
            openProject(data.stepParams, data.currentStep);
          }, 500);
        }
      };
      reader.readAsText(file);
      setSideMenuVisible(false);
      return false;
    },
    showUploadList: false,
    accept: ".rue",
  };

  const [aboutVisible, setAboutVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    switch (e.key) {
      case "about":
        setAboutVisible(true);
        break;
      case "new":
        window.location.href = "/" + version;
        break;
      case "save":
        setModalVisible(true);
        setpostMessageData({
          messageType: "get_file",
          file_name: CurrentGeoJSON,
        });
        break;
      case "open":
        //
        break;
      case "sign_out":
        signOut();
        break;
      default:
        break;
    }
  };
  return (
    <StyledDrawer placement="left" closable={false} onClose={onDrawerClose} visible={sideMenuVisible}>
      <img src={Logo} alt="IAUAI" />
      <div className="title">Rapid Urbanism Explorer</div>
      <Tag color="#144465">
        {version} v{latest_version}
      </Tag>
      <Menu onClick={handleMenuClick} selectable={false}>
        <Menu.Item key="about">About</Menu.Item>
        <hr/>
        <Menu.Item key="new">New simulation</Menu.Item>
        <Menu.Item key="save">Save simulation</Menu.Item>
        <Menu.Item key="open">
          <Upload {...openPlan}>Open simulation</Upload>
        </Menu.Item>
        <hr/>
        <Menu.Item key="terms-conds">
          <a href={process.env.PUBLIC_URL + "/terms-conds.html"} target="help">Terms + Conditions</a>
        </Menu.Item>
        <Menu.Item key="help-user">
          <a href={process.env.PUBLIC_URL + "/for-end-users.html"} target="help">User Manual</a>
        </Menu.Item>
        <Menu.Item key="help-dev">
          <a href={process.env.PUBLIC_URL + "/for-developers.html"} target="help">Installation</a>
        </Menu.Item>
        
        {/* <Menu.Item key="set_script_folder">Set script folder</Menu.Item> */}
        <Menu.Item key="sign_out">Sign Out</Menu.Item>
      </Menu>
      <ProjectNameModal
        visible={modalVisible}
        onCreate={onCreate}
        onCancel={() => {
          setModalVisible(false);
        }}
      />
      <Modal
        visible={aboutVisible}
        title="About"
        footer={null}
        onCancel={() => {
          setAboutVisible(false);
        }}
      >
        <div>
          The Rapid Urbanism Explorer platform for iterative prototyping of integrated urbanization proposals is experimental software. As such, the
          authors and organizations behind it take no responsibility/liability associated with the use of the software. Further information on the
          Explorer and entities behind it:{" "}
          <a href="http://rapidurbanism.com/explorer-ai" target="_blank">
            http://rapidurbanism.com/explorer-ai
          </a>
          .
          <br />
          <br />
          ©IAUAI, 2021
        </div>
      </Modal>
    </StyledDrawer>
  );
});

export default SideMenu;
