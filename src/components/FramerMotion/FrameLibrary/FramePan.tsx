import React from "react";
import { Frame, PanInfo } from "framer";

function FramePan() {
  const onPan = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(event, info);
  };
  const onPanStart = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log("[onPanStart]");
    console.log(event, info);
  };
  const onPanEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    console.log(event, info);
    console.log("[onPanEnd]");
  };

  return (
    <div>
      <Frame
        position="relative"
        onPan={onPan}
        onPanStart={onPanStart}
        onPanEnd={onPanEnd}
      />
    </div>
  );
}

export default FramePan;
