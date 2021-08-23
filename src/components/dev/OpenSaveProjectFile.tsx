import React, { useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileSaver = require("file-saver");

const OpenSaveProjectFile = () => {
  const saveProject = () => {
    const blob = new Blob([JSON.stringify("data to be saved")], {
      type: "application/json;charset=utf-8",
    });
    FileSaver.saveAs(blob, "Infrastructure Cost.iauai");
  };

  const [filecontent, setFileContent] = useState("");

  const fileReader = {
    beforeUpload: (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const result = JSON.stringify(JSON.parse(reader.result as string),null,2);
          console.log(result);
          setFileContent(result);
        }
      };
      reader.readAsText(file);
      return false;
    },
  };
  return (
    <div>
      <Button onClick={() => saveProject()}>Save Plan</Button>
      <Upload {...fileReader}>
        <Button>
          <UploadOutlined /> Open Plan
        </Button>
      </Upload>
      <div>{filecontent}</div>
    </div>
  );
};

export default OpenSaveProjectFile;
