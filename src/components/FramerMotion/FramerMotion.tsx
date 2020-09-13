import React from "react";
import { Frame } from "framer";

import "./FramerModion.css";
import { Divider } from "antd";

function FramerMotion() {
  return (
    <div className="container">
      <h1>Framer Motion</h1>
      <Divider />
      <h2>Framer</h2>
      <h3>Animate</h3>
      <div>
        <Frame
          animate={{
            scale: 0.5,
            rotate: 360,
            background: ["#F00", "#0F0", "#00F"],
          }}
          radius={30}
          transition={{ duration: 2, ease: "linear", loop: Infinity }}
        />
      </div>
    </div>
  );
}

export default FramerMotion;
