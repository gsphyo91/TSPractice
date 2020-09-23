import React from "react";

import "./FramerMotion.css";
import { Divider } from "antd";
import FrameLib from "./FrameLibrary/FrameLib";
import AnimationLib from "./AnimationLibrary/AnimationLib";
import PageLib from "./PageLibrary/PageLib";
import ScrollLib from "./ScrollLibrary/ScrollLib";
import StackLib from "./StackLibrary/StackLib";
import UtilitiesLib from "./UtilitiesLibrary/UtilitiesLib";

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
      <Divider />
      <h2>Scroll</h2>
      <ScrollLib />
      <Divider />
      <h2>Stack</h2>
      <StackLib />
      <Divider />
      <h2>Utilities</h2>
      <UtilitiesLib />
    </div>
  );
}

export default FramerMotion;
