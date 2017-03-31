import React from "react";

export function HelloWorld({ greeting, onClickHandler }) {
  HelloWorld.propTypes = {
    greeting: React.PropTypes.string,
    onClickHandler: React.PropTypes.func
  };

  return <h1 onClick={onClickHandler}> {greeting} world </h1>;
}