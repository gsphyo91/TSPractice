import React from "react";
import { Frame, Tween } from "framer";

function AnimationTween() {
  const transition: Tween = {
    type: "tween",
    // ease: [0.17, 0.01, 0.83, 0.67],
    // ease: "linear",
    duration: 2,
    // from: 90,
    // loop: Infinity,
    // flip: Infinity,
    yoyo: Infinity,
    repeat: Infinity,
    repeatDelay: 1,
    // times: [0, 0.5, 0.8, 1]
  }
  return (
    <div>
      <Frame
        position="relative"
        animate={{ rotate: 90, x: 100}}
        transition={transition}
      />
    </div>
  );
}

export default AnimationTween;
