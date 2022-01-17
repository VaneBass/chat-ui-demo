import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

// 直接使用某个组件的样式
const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default StyledParagraph;
