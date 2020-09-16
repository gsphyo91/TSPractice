import React, { useState } from "react";
import { Frame } from "framer";
import { InputNumber } from "antd";

type TransformTypes = {
  x: number;
  y: number;
  z: number;
  rotate: number;
  scale: number;
  skew?: number;
};

function FrameTransform() {
  const [property, setProperty] = useState<TransformTypes>({
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    scale: 1,
  });

  const onChangeX = (value: string | number | undefined) => {
    setProperty({
      ...property,
      x: value as number,
    });
  };
  const onChangeY = (value: string | number | undefined) => {
    setProperty({
      ...property,
      y: value as number,
    });
  };
  const onChangeZ = (value: string | number | undefined) => {
    setProperty({
      ...property,
      z: value as number,
    });
  };
  const onChangeRotate = (value: string | number | undefined) => {
    setProperty({
      ...property,
      rotate: value as number,
    });
  };
  const onChangeScale = (value: string | number | undefined) => {
    setProperty({
      ...property,
      scale: value as number,
    });
  };

  return (
    <div>
      <div>
        <span>x: </span>
        <InputNumber
          min={0}
          max={200}
          step={10}
          defaultValue={0}
          placeholder="x"
          onChange={onChangeX}
        />
        <span>y: </span>
        <InputNumber
          min={0}
          max={200}
          step={10}
          defaultValue={0}
          placeholder="y"
          onChange={onChangeY}
        />
        <span>z: </span>
        <InputNumber
          min={0}
          max={200}
          step={10}
          defaultValue={0}
          placeholder="z"
          onChange={onChangeZ}
        />
        <span>rotate: </span>
        <InputNumber
          min={0}
          max={360}
          step={10}
          defaultValue={0}
          placeholder="rotate"
          onChange={onChangeRotate}
        />
        <span>scale: </span>
        <InputNumber
          min={0}
          max={2}
          step={0.1}
          defaultValue={1}
          placeholder="scale"
          onChange={onChangeScale}
        />
      </div>
      <Frame position="relative" size={150} {...property} />
    </div>
  );
}

export default FrameTransform;
