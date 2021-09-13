import React from "react";
import { Typography, } from "antd";

const About = () => {
  return (
    <>
    <Typography.Title level={3}>About</Typography.Title>
    <Typography.Paragraph style={{ textAlign: "justify", textJustify: "inter-word" }}>
    <em>The Rapid Urbanism Explorer is an Augmented Intelligence (AI) Platform to strengthen collaboration amongst decision makers in developing new urban districts in advanced ways. </em>
    Rapid iterative virtual prototyping empowers stakeholders to produce complex urbanization scenarios integrating spatial, temporal, socioeconomic and environmental parameters in real time. 
    Further info on <Typography.Link target="_blank" href="https://www.RapidUrbanism.com/Explorer-AI">www.RapidUrbanism.com/Explorer-AI</Typography.Link>.
    </Typography.Paragraph>
    </>
  )
}

export default About