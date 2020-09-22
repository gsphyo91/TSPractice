import React from "react";

import "./FramerMotion.css";
import { Divider } from "antd";
import FrameLib from "./FrameLibrary/FrameLib";
import AnimationLib from "./AnimationLibrary/AnimationLib";
import PageLib from "./PageLibrary/PageLib";

function FramerMotion() {
  return (
    <div className="container">
      <h1>Framer</h1>
      <a
        href="https://www.framer.com/api/frame"
        target="_blank"
        rel="noopener noreferrer"
      >
        API
      </a>
      <Divider />
      <h2>Frame</h2>
      <FrameLib />
      <Divider />
      <h2>Animation</h2>
      <AnimationLib />
      <Divider />
      <h2>Page</h2>
      <PageLib />
    </div>
  );
}

export default FramerMotion;
