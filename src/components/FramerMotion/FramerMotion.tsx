import React from "react";

import "./FramerMotion.css";
import { Divider } from "antd";
import FrameLib from "./FrameLibrary/FrameLib";
import AnimationLib from "./AnimationLibrary/AnimationLib";

function FramerMotion() {
  return (
    <div className="container">
      <h1>Framer</h1>
      <a href="https://www.framer.com/api/frame" target="_blank" rel="noopener noreferrer">API</a>
      <Divider />
      <h2>Frame</h2>
      <FrameLib />
      <h2>Animation</h2>
      <AnimationLib />
    </div>
  );
}

export default FramerMotion;
