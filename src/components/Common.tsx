import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

const Loading = styled(Spin)`
  position: fixed;
  top: 50%;
  left: calc(50%);
`;

const Calculating = styled(Spin)`
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`;

const LoadingMaskContent = styled(Loading)`
  left: ${(p: { offset: number }) => (p.offset === 700 ? "calc(50% - 64px)" : `calc(50% - 64px + ${p.offset / 2}px)`)};
`;

const LoadingMask = styled("div")`
  background: white;
  position: absolute;
  width: ${(p: { offset: number }) => `calc(100% - ${p.offset}px)`};
  height: calc(100% - 47px);
  top: 47px;
`;

const Rendering = styled(Loading)`
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  padding-top: 50vh;
  transform: translate(-50%, -50%);
`;

export const Common = {
  Loading: () => <Loading tip="Loading..." />,
  Calculating: () => <Calculating tip="Processing..." />,
  LoadingMask: (props: { offset: number; content: string }) => (
    <LoadingMask offset={props.offset}>
      <LoadingMaskContent tip={props.content} offset={props.offset} />
    </LoadingMask>
  ),
  Rendering: () => <Rendering tip="Rendering..." />,
};
