import { Frame, useAnimation } from "framer";
import React, { useEffect } from "react";

function AnimationControls() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({
      x: 100,
      rotate: 90,
      scale: 0.5,
      backgroundColor: "#F00",
      transition: {
        duration: 2,
      },
    });
    controls2.start((i) => ({
      x: 100,
      rotate: -90,
      transition: {
        delay: i * 0.5,
        duration: 2,
      },
    }));
  }, [controls1, controls2]);

  return (
    <div>
      <h4>starting an animation</h4>
      <Frame position="relative" animate={controls1} />
      <h4>Dynamic start</h4>
      <div>
        <Frame position="relative" custom={0} animate={controls2} />
        <Frame position="relative" custom={1} animate={controls2} />
        <Frame position="relative" custom={2} animate={controls2} />
      </div>
    </div>
  );
}

export default AnimationControls;
