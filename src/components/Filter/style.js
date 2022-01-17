import StyledText from "components/Text/style";
import styled from "styled-components";

// 包裹过滤选项下拉菜单和label
const Filters = styled.div``;

// 包裹动作组件和label
const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default StyledFilter;
// 作为单独的子组件便于布局
export { Filters, Action };
