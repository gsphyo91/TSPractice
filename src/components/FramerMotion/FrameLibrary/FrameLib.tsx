import React, { Fragment } from "react";
import FrameLayout from "./FrameLayout";
import FrameTransform from "./FrameTransform";
import FrameVisual from "./FrameVisual";

function FrameLib() {
  return (
    <Fragment>
      <h3>Layout</h3>
      <FrameLayout />
      <h3>Visual</h3>
      <FrameVisual />
      <h3>Transform</h3>
      <FrameTransform />
    </Fragment>
  );
}

export default FrameLib;
