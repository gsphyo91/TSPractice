import { Input, InputNumber } from "antd";
import { Frame } from "framer";
import React, { useState } from "react";

type VisualType = {
  opacity: number;
  backgroundColor: string;
  radius: number;
};

const position = "relative";

function FrameVisual() {
  const [property, setProperty] = useState<VisualType>({
    opacity: 1,
    backgroundColor: "#000000",
    radius: 0,
  });

  const onChangeOpacity = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setProperty({ ...property, opacity: 0 });
    } else if ((value as number) > 1) {
      setProperty({ ...property, opacity: 1 });
    } else if (value === "") {
      setProperty({ ...property, opacity: 1 });
    } else {
      setProperty({ ...property, opacity: value as number });
    }
  };
  const onChangeBackColor = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({
      ...property,
      backgroundColor: value,
    });
  };
  const onChangeRadius = (value: string | number | undefined) => {
    if ((value as number) < 0) {
      setProperty({ ...property, radius: 0 });
    } else if ((value as number) > 100) {
      setProperty({ ...property, radius: 100 });
    } else if (value === "") {
      setProperty({ ...property, radius: 0 });
    } else {
      setProperty({ ...property, radius: value as number });
    }
  };

  return (
    <div>
      <div>
        <span>opacity : </span>
        <InputNumber
          min={0}
          max={1}
          step={0.1}
          placeholder="opacity"
          defaultValue={1}
          onChange={onChangeOpacity}
        />
        <span>backgroundColor : </span>
        <Input
          prefix="#"
          maxLength={6}
          placeholder="backgroundColor"
          onChange={onChangeBackColor}
          style={{ width: "150px" }}
        />
        <span>radius : </span>
        <InputNumber
          min={0}
          max={100}
          step={5}
          defaultValue={0}
          placeholder="radius"
          onChange={onChangeRadius}
        />
      </div>
      <Frame position={position} size={150} {...property}></Frame>
    </div>
  );
}

export default FrameVisual;
