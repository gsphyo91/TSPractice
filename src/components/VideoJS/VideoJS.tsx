import React, { useLayoutEffect } from "react";
import videojs from "video.js";

function VideoJS() {
  useLayoutEffect(() => {
    const player = videojs("video", {});

    player.src("/assets/sample.mp4");
  }, []);

  return (
    <div className="container">
      <h1>Video Test</h1>
      <div>
        <video
          id="video"
          className="video-js"
          width={1024}
          height={720}
          controls
          autoPlay
        >
          <track
            kind="captions"
            src="/assets/subtitle.srt"
            srcLang="en"
            label="English"
            default
          />
        </video>
      </div>
    </div>
  );
}

export default VideoJS;
