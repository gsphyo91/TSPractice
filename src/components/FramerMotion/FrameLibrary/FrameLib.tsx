import React, { Fragment } from "react";
import FrameDrag from "./FrameDrag";
import FrameHover from "./FrameHover";
import FrameLayout from "./FrameLayout";
import FramePan from "./FramePan";
import FrameTap from "./FrameTap";
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
      <h3>Tap</h3>
      <FrameTap />
      <h3>Hover</h3>
      <FrameHover />
      <h3>Pan</h3>
      <FramePan />
      <h3>Drag</h3>
      <FrameDrag />
    </Fragment>
  );
}

export default FrameLib;
