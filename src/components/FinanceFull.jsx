import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import Luckysheet from "@components/Finance/Luckysheet";
import { fs } from 'memfs';
import neighbourhoodData from '@stores/tables/v35delta';

const Wrapper = styled("div")`
  height: calc(100vh - 32px);
`;

const FinanceFull = observer(() => {
  fs.writeFileSync('/financial.data', JSON.stringify(neighbourhoodData));

  return (
    <Wrapper>
      <Luckysheet />
    </Wrapper>
  );
});

export default FinanceFull;
