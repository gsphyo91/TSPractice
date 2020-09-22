import React from "react";
import { Frame } from "framer";

function AnimationInertia() {
  const transition = {
    min: 0,
    max: 100,
    bounceDamping: 8,
    modifyTarget: (target: number) => Math.round(target / 50) * 50,
  };

  return (
    <div>
      <Frame position="relative" drag="x" dragTransition={transition} />
    </div>
  );
}

export default AnimationInertia;
