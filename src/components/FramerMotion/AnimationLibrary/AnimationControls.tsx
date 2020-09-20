import { Frame, useAnimation } from "framer";
import React, { useEffect } from "react";

function AnimationControls() {
  const controls1 = useAnimation();

  useEffect(() => {
    controls1.start({
      x: "100%",
      backgroundColor: "#F00",
      transition: {
        duration: 3,
      },
    });
  }, [controls1]);
  return (
    <div>
      <h4>starting an animation</h4>
      <Frame position="relative" animate={controls1} />
    </div>
  );
}

export default AnimationControls;
