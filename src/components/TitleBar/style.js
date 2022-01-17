import { animated } from "@react-spring/web";
import StyledIcon from "components/Icon/style";
import styled from "styled-components";

// 标题容器
const Title = styled.div`
  display: grid;
`;

// 动作按钮容器
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${StyledIcon} {
    cursor: pointer;
  }
`;

const StyledTitleBar = styled(animated.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

export default StyledTitleBar;
export { Title, Actions };
