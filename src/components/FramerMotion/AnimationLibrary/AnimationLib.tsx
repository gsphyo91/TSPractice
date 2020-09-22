import React from "react";
import AnimationControls from "./AnimationControls";
import AnimationInertia from "./AnimationInertia";
import AnimationOrchestration from "./AnimationOrchestration";
import AnimationSpring from "./AnimationSpring";
import AnimationTween from "./AnimationTween";

function AnimationLib() {
  return (
    <div>
      <h3>Animation Controls</h3>
      <AnimationControls />
      <h3>Tween</h3>
      <AnimationTween />
      <h3>Spring</h3>
      <AnimationSpring />
      <h3>Inertia</h3>
      <AnimationInertia />
      <h3>Orchestration</h3>
      <AnimationOrchestration />
    </div>
  );
}

export default AnimationLib;
