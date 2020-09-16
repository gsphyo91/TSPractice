import React, { useState } from "react";
import { Frame } from "framer";

import "../FramerMotion.css";
import { InputNumber } from "antd";

const position = "relative";

function FrameLayout() {
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);

  const onChangeWidth = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setWidth(0);
    } else if ((value as number) > 500) {
      setWidth(500);
    } else if (value === "") {
      setWidth(0);
    } else {
      setWidth(value as number);
    }
  };
  const onChangeHeight = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setHeight(0);
    } else if ((value as number) > 500) {
      setHeight(500);
    } else if (value === "") {
      setHeight(0);
    } else {
      setHeight(value as number);
    }
  };
  const onChangeTop = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setTop(0);
    } else if ((value as number) > 500) {
      setTop(500);
    } else if (value === "") {
      setTop(0);
    } else {
      setTop(value as number);
    }
  };
  const onChangeRight = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setRight(0);
    } else if ((value as number) > 500) {
      setRight(500);
    } else if (value === "") {
      setRight(0);
    } else {
      setRight(value as number);
    }
  };
  const onChangeBottom = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setBottom(0);
    } else if ((value as number) > 500) {
      setBottom(500);
    } else if (value === "") {
      setBottom(0);
    } else {
      setBottom(value as number);
    }
  };
  const onChangeLeft = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setLeft(0);
    } else if ((value as number) > 500) {
      setLeft(500);
    } else if (value === "") {
      setLeft(0);
    } else {
      setLeft(value as number);
    }
  };

  return (
    <div className="frame-container">
      <pre>
        {"<"}Frame [propertyName]=[value] {"/>"}
      </pre>
      <div>
        <span>width : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="width"
          defaultValue={150}
          onChange={onChangeWidth}
        />
        <span>height : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="height"
          defaultValue={150}
          onChange={onChangeHeight}
        />
        <span>top : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="top"
          defaultValue={0}
          onChange={onChangeTop}
        />
        <span>right : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="right"
          defaultValue={0}
          onChange={onChangeRight}
        />
        <span>bottom : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="bottom"
          defaultValue={0}
          onChange={onChangeBottom}
        />
        <span>left : </span>
        <InputNumber
          min={0}
          max={500}
          step={10}
          placeholder="left"
          defaultValue={0}
          onChange={onChangeLeft}
        />
      </div>
      <Frame
        position={position}
        width={width}
        height={height}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
      ></Frame>
    </div>
  );
}

export default FrameLayout;
