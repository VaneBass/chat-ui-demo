import styled, { css } from "styled-components";

// 导航条
const Nav = styled.nav`
  /* 禁止缩小 */
  flex-shrink: 0;
`;

// 侧边栏
const Sidebar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  overflow-y: scroll;
  background: ${({ theme }) => theme.grediantGray};

  position: relative;
  z-index: 50;
  > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`;

// 内容区
const Content = styled.main`
  flex: 2;
  position: relative;
`;

// 滑动抽屉
const Drawer = styled.div`
  max-width: 310px;
  width: 0;
  transform: translateX(200px);
  transition: transform 0.4s;
  will-change: width, transform;
  ${({ show }) =>
    show &&
    css`
      /* 初始宽度 */
      width: initial;
      transform: translateX(0px);
    `}
`;

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default StyledChatApp;
export { Nav, Sidebar, Content, Drawer };
