import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledAvatar, { StatusIcon } from "components/Avatar/style";
import styled from "styled-components";
import { activeBar } from "utils/mixins";

const StyledMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${activeBar()};
    ${({ active }) => (active ? "" : `&::before, &::after {height: 0}`)}

    /* 鼠标滑过时,将高度从0变为100% */
    &:hover {
      ::before,
      ::after {
        height: 100%;
      }
    }

    svg {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

/* 
  可以使用这种方法来让styled-components给react组件添加样式
  但是要保证该react组件要接收className属性  
  由于之前使用...rest把剩下的属性传递给了给最外层组件MenuItem
  所有这里的FontAwesomeIcon组件就能接收className属性了
 */
const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  transform: scale(1);
  transition: 0.4s;
`;

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;
  /* 
      styled-components组件可以引入其他的styled-components组件
      直接把引入的组件当作变量使用，然后在后边加上要修改的css代码就行 
  */
  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

export default StyledNavBar;

export { MenuIcon, StyledMenuItem, MenuItems };
