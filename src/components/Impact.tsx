import React, { useEffect } from "react";
import { Row, Col, Collapse } from "antd";
import { Radar } from "@ant-design/charts";
import { observer } from "mobx-react";
import { useStores } from "@stores/index";

const { Panel } = Collapse;

const data = [
  { key: "r5", item: "Density, initial", value: 0 },
  { key: "r7", item: "Land\nconsumption", value: 0 },
  { key: "r10", item: "Public\nspace", value: 0 },
  { key: "r12", item: "Neighborhood\nfinance", value: 0 },
  { key: "r13", item: "Cluster\nfinance", value: 0 },
  { key: "r14", item: "Building\nfinance", value: 0 },
  { key: "r16", item: "Affordability\nownership", value: 0 },
  { key: "r17", item: "Affordability\nrental", value: 0 },
];

const Impact = observer(() => {
  const { uiState, neighbourhoodStore } = useStores();
  const { dashboardProcessing } = uiState;
  const { getSpider, NeighbourhoodUpdated } = neighbourhoodStore;
  useEffect(() => {
    data.forEach((data) => {
      const v = getSpider[data.key] as number;
      if (!isNaN(v)) {
        data.value = Math.round(v * 10) / 10;
      }
    });
  }, [NeighbourhoodUpdated]);

  const config = {
    height: 250,
    data,
    angleField: "item",
    radiusField: "value",
    angleAxis: {
      label: { style: { fontSize: 14, fill: "darkgreen" } },
    },
    line: { visible: true },
    point: {
      visible: true,
      shape: "circle",
    },
  };

  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Impact" key="1">
        <div style={{ marginTop: "10px" }}>
          <Row>
            <Col span={24}>
              <Radar {...config} />
            </Col>
          </Row>
        </div>
      </Panel>
    </Collapse>
  );
});

export default Impact;
