import React from "react";
import { Frame, TapInfo } from "framer";

function FrameTap() {
  const onTap = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: TapInfo
  ) => {
    console.log("[onTap]");
    console.log(event, info);
    console.log("[onTap]");
  };
  const onTapStart = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: TapInfo
  ) => {
    console.log(`[onTapStart]`);
    console.log(event, info);
    console.log(`[onTapStart]`);
  };
  const onTapCancel = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: TapInfo
  ) => {
    console.log(`[onTapCancel]`);
    console.log(event, info);
    console.log(`[onTapCancel]`);
  };

  return (
    <div>
      <div></div>
      <Frame
        position="relative"
        whileTap={{ scale: 2 }}
        onTap={onTap}
        onTapStart={onTapStart}
        onTapCancel={onTapCancel}
      />
    </div>
  );
}

export default FrameTap;
