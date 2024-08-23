import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import FrontScreen from "./screen/FrontScreen";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <FrontScreen />
  </ApplicationProvider>
);
