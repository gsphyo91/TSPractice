import React, { Fragment } from "react";
import FramerMotion from "./FramerMotion/FramerMotion";
import Login from "./Login/Login";
import SearchAPI from "./SearchAPI/SearchAPI";
import VideoJS from "./VideoJS/VideoJS";

type contentProps = {
  content: number;
};

function Contents({ content }: contentProps) {
  return (
    <Fragment>
      {content === 1 ? (
        <Login />
      ) : content === 2 ? (
        <SearchAPI />
      ) : content === 3 ? (
        <FramerMotion />
      ) : content === 4 ? (
        <VideoJS />
      ) : null}
    </Fragment>
  );
}

export default Contents;
