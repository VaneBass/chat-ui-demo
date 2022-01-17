import React from "react";
import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const H1 = () => <Heading level={1}>标题</Heading>;
export const H2 = () => <Heading level={2}>标题</Heading>;
export const H3 = () => <Heading level={3}>标题</Heading>;
export const H4 = () => <Heading level={4}>标题</Heading>;
export const H5 = () => <Heading level={5}>标题</Heading>;
export const H6 = () => <Heading level={6}>标题</Heading>;
