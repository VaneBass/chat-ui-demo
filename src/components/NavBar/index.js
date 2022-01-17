import React from "react";

import StyledNavBar, { MenuIcon, MenuItems, StyledMenuItem } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";

import profileImage from "assets/images/face-female-1.jpg";
import {
  faCog,
  faCommentDots,
  faEllipsisH,
  faFolder,
  faStickyNote,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import "styled-components/macro";
import { Link, matchPath, useLocation } from "react-router-dom";

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({
  to, // router路径
  icon, // 图标
  showBadge, // 是否显示未读消息红点
  ...rest
}) {
  // 获取location信息
  const loc = useLocation();
  // 用于判断当前页面是否被激活,把判断结果转化为boolean类型,因为匹配成功后返回的是一个路径对象,失败则为null
  const active = !!matchPath(loc.pathname, {
    // 判断当前页面路径是否时该菜单项代表的路径
    path: to,
    // 精确匹配首页,因为其他页面也有“/”
    exact: to === "/",
  });
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon}></MenuIcon>
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

export default NavBar;

export { MenuItem };
