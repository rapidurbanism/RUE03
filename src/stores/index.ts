import React from "react";
import { UIState } from "./uiState";
import { MobiusStore } from "./mobiusStore";
import { NeighbourhoodStore } from "./Finance/neighbourhoodStore";

const storesContext = React.createContext({
  uiState: new UIState(),
  mobiusStore: new MobiusStore(),
  neighbourhoodStore: new NeighbourhoodStore(),
});

export const useStores = () => React.useContext(storesContext);
