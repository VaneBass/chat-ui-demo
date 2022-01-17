import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBar, { MenuItem } from ".";
import "styled-components/macro";

export default {
  title: "页面组件/NavBar",
  component: NavBar,
};

export const Default = () => <NavBar />;

export const Menu = () => {
  return (
    <div
      /* 
      可以引入macro插件来写行内css样式
      适合用于需要给某个标签添加原生css属性样式，
      但又不值得为其单独创建一个styled-components组件的情况
     */
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItem showBadge active icon={faCommentDots} />
    </div>
  );
};
