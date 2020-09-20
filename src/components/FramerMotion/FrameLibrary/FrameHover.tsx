import React from 'react';
import { EventInfo, Frame } from 'framer';

function FrameHover () {
  const onHoverStart = (event: MouseEvent, info: EventInfo) => {
    console.log('[onHoverStart]');
    console.log(event, info);
  }
  const onHoverEnd = (event: MouseEvent, info: EventInfo) => {
    console.log(event,info);
    console.log('[onHoverEnd]');
  }

  return (
    <div>
      <Frame position="relative" whileHover={{scale: 1.5}} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} />
    </div>
  )
}

export default FrameHover;