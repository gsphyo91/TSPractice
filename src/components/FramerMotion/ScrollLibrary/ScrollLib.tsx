import React, { Fragment } from "react";
import { Frame, PanInfo, Scroll } from "framer";

function ScrollLib() {
  const onScroll = (info: PanInfo): void => {
    console.log(info);
  };
  const onScrollStart = (info: PanInfo): void => {
    console.log("[onScrollStart]");
    console.log(info);
  };
  const onScrollEnd = (info: PanInfo): void => {
    console.log(info);
    console.log("[onScrollEnd]");
  };
  return (
    <Fragment>
      <Scroll
        position="relative"
        width={200}
        height={200}
        dragEnabled={true}
        wheelEnabled={false}
        direction="both"
        contentOffsetX={20}
        contentOffsetY={20}
        onScroll={onScroll}
        onScrollStart={onScrollStart}
        onScrollEnd={onScrollEnd}
      >
        <Frame size={300}>Scroll</Frame>
      </Scroll>
    </Fragment>
  );
}

export default ScrollLib;
