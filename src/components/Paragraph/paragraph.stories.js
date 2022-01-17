import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => (
  /* 
    使用React.Fragment来包裹组件，
    避免使用多余的div来渲染组件
    也避免返回多个children
    也可以简写成这样：
    <>
      n个组件
    </>
  */
  <React.Fragment>
    <Paragraph>默认</Paragraph>
    <Paragraph>默认</Paragraph>
  </React.Fragment>
);

export const Ellipsis = () => (
  <Paragraph ellipsis>
    这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本
  </Paragraph>
);
