import { Frame } from "framer";
import React from "react";

function FrameDrag() {
  return (
    <div>
      <Frame
        position="relative"
        drag="x"
        dragConstraints={{ left: 0, right: 500 }}
        dragTransition={{bounceStiffness: 600, bounceDamping: 10}}
        // dragElastic={false}
        // onDrag={onDrag}
        // onDragStart={onDragStart}
        // onDragEnd={onDragEnd}
      />
    </div>
  );
}

export default FrameDrag;
