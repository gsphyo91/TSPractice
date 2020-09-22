import { Frame, Spring } from 'framer';
import React from 'react';

function AnimationSpring() {
  const animate = {
    x: 100,
    rotate: 180
  }
  const transition: Spring = {
    type: "spring",
    damping: 30,
    mass: 20,
    // stiffness: 50,
    velocity: 10,
    restSpeed: 1
  }
  return (
    <div>
      <Frame position="relative" animate={animate} transition={transition} />
    </div>
  );
}

export default AnimationSpring;