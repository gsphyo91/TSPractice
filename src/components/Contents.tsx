import React, { Fragment } from "react";
import FramerMotion from "./FramerMotion/FramerMotion";
import Login from "./Login/Login";
import SearchAPI from "./SearchAPI/SearchAPI";

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
      ) : null}
    </Fragment>
  );
}

export default Contents;
