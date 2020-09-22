import { Color, Frame, Variants } from "framer";
import React from "react";

function AnimationOrchestration() {
  const container: Variants = {
    hidden: {
      backgroundColor: "red",
    },
    show: {
      backgroundColor: "blue",
      transition: {
        delayChildren: 2,
        staggerChildren: 2,
        staggerDirection: -1,
        when: "afterChildren",
        duration: 2,
      },
    },
  };

  const item: Variants = {
    hidden: {
      backgroundColor: "white",
    },
    show: {
      backgroundColor: "red",
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div>
      <Frame
        position="relative"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Frame variants={item} size={150} />
        <Frame variants={item} size={70} />
      </Frame>
      <Frame background={Color.grayscale(Color("#0000FF"))} />
    </div>
  );
}

export default AnimationOrchestration;
