import React, { useEffect } from "react";
import { Frame, useAnimation } from "framer";

const position = "relative";

function AnimationLib() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({
      x: "100%",
      backgroundColor: "#F00",
      transition: {
        duration: 3,
      },
    });
    controls2.start((i) => ({
      opacity: 0.5,
      x: 100,
      transition: {
        delay: i * 0.3,
      },
    }));
  }, [controls1, controls2]);

  return (
    <div>
      <h3>Animation Controls</h3>
      <h4>starting an animation</h4>
      <Frame position={position} animate={controls1} />
      <h4>Dynamic Start</h4>
      <Frame custom={1} animate={controls2} />
      <Frame custom={2} animate={controls2} />
      <Frame custom={3} animate={controls2} />
    </div>
  );
}

export default AnimationLib;
