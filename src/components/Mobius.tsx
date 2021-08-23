import React, { useEffect } from "react";
//@ts-ignore
import IframeComm from "@utils/IframeComm.js";
import { useStores } from "@stores/index";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const Mobius = observer((props: { hidden?: boolean }) => {
  const { hidden } = props;
  const { uiState, mobiusStore } = useStores();
  const { setMobiusUpdated } = uiState;
  const { setpostMessageData, postMessageData, initialModel, setGeoJSON } = mobiusStore;

  const h = window.innerHeight - 50;
  const attr = {
    // src: `https://design-automation.github.io/mobius-parametric-modeller-dev-0-6/minimal`,
    // src: `https://design-automation.github.io/mobius-parametric-modeller-dev-0-6/minimal?file=${initialModel}&showViewer=[1,2]`,
    src: `https://design-automation.github.io/mobius-viewer`,
    width: "100%",
    height: hidden ? "0" : h,
  };

  const onReceiveMessage = (msg: any) => {
    // console.log("onReceiveMessage", msg);
    if (msg.data.messageType === "get_file") {
      setGeoJSON(msg.data.file_data as string);
    } else if (msg.data.messageType === "send_data") {
      console.log("MOBIUS: setMobiusResult", msg.data.data);
      setMobiusUpdated(true);
    }

    // if (msg.data.messageType==='localstorage_list'){
    //   console.log("Localstorage",msg.data);
    // }

  };

  const onReady = async () => {
    // console.log("1. MOBIUS READY");
    
  };

  return <IframeComm id="Mobius" attributes={attr} postMessageData={toJS(postMessageData)} handleReceiveMessage={onReceiveMessage} handleReady={onReady} />;
});
export default Mobius;
