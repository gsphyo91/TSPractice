import React from "react";
import { Frame, Page, PageEffectInfo } from "framer";

function PageContent() {
  const customEffect = (info: PageEffectInfo) => {
    const { normalizedOffset } = info;
    return {
      scale: Math.max(0, 1 + Math.min(0, normalizedOffset * -1))
    }
  };
  const onChangePage = (current: number, previous: number) => {
    console.log(current, previous);
  };
  return (
    <Page
      alignment="end"
      contentHeight="auto"
      contentOffsetX={20}
      currentPage={0}
      // defaultEffect={"cube"}
      effect={customEffect}
      direction="vertical"
      directionLock={true}
      momentum={false}
      wheelEnabled={true}
      gap={50}
      // paddingBottom={100}
      // paddingLeft={100}
      onChangePage={onChangePage}
    >
      <Frame>A</Frame>
      <Frame>B</Frame>
      <Frame>C</Frame>
    </Page>
  );
}

export default PageContent;
