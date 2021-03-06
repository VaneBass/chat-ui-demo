import { animated } from "@react-spring/web";
import styled from "styled-components";

// 输入框右侧的图标、按钮容器
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  & > * {
    margin-left: 16px;
  }
`;

// 弹出气泡容器
const StyledPopoverContent = styled.div`
  display: flex;
  & > * {
    margin: 0 8px;
    font-size: 16px;
  }
`;

const StyledFooter = styled(animated.footer)`
  padding: 12px 30px;
  width: 100%;
`;

export default StyledFooter;
export { IconContainer, StyledPopoverContent };
