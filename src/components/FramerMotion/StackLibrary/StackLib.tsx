import { Frame, Stack } from "framer";
import React from "react";

function StackLib() {
  return (
    <Stack
      position="relative"
      size={100}
      direction="horizontal"
      // gap={50}
      alignment="center"
      distribution="end"
      // padding={20}
    >
      <Frame background="#09F" size={25} radius="50%" />
      <Frame background="#05F" size={25} radius="50%" />
    </Stack>
  );
}

export default StackLib;
