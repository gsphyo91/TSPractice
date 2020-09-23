import React from "react";
import {
  Frame,
  transform,
  useAnimation,
  useCycle,
  useMotionValue,
  useTransform,
} from "framer";
function UtilitiesLib() {
  const inputRange = [-200, -100, 100, 200];
  const outputRange = [0, 1, 2, 0];
  const output = transform(150, inputRange, outputRange);

  const x = useMotionValue(0);
  const xRange = [-200, -100, 100, 200];
  const opacityRange = [0, 1, 1, 0];
  const opacity = useTransform(x, xRange, opacityRange);

  const controls = useAnimation();

  const sequence = async () => {
    await controls.start({ left: 100 });
    await controls.start({ top: 100 });
    await controls.start({ left: 0 });
    await controls.start({ top: 0 });
  };

  const [cx, cycleX] = useCycle(0, 50, 200, 100);

  const variants = {
    green: { background: "#1ea463" },
    yellow: { background: "#fecd45" },
    red: { background: "#de5347" },
  };
  const [current, cycle] = useCycle("green", "yellow", "red");
  return (
    <div>
      <Frame
        position="relative"
        // x={0}
        // opacity={opacity}
        // animate={controls}
        // onTap={sequence}
        // animate={{ x: cx }}
        // onTap={() => cycleX()}
        variants={variants}
        animate={current}
        onTap={() => cycle()}
        onMouseLeave={() => cycle(0)}
      >
        {output}
      </Frame>
    </div>
  );
}

export default UtilitiesLib;
