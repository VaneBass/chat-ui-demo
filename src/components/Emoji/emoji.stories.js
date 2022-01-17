import React from "react";
import Emoji from ".";

export default {
  title: "UI 组件/Emoji",
  component: Emoji,
};

export const Default = () => (
  <div>
    <Emoji label="smile">🙂</Emoji>
    <Emoji label="bus">🚌</Emoji>
    <Emoji label="OK">👌</Emoji>
  </div>
);
