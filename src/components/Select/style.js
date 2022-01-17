import styled, { css } from "styled-components";
import CaretDown from "assets/icons/caret_down.svg";
import CaretDown2 from "assets/icons/caretDown2.svg";

const typeVariants = {
  form: css`
    background-image: url(${CaretDown2});
  `,
};

// 使用select组件进行渲染
const StyledSelect = styled.select`
  /* 
    一般情况下，要使用前缀来将select标签的默认图标隐藏
    --webkit-appearance  chrome前缀
    --moz-appearance    firefox前缀
    不过create-reactapp自带一种库可以自动添加前缀
    所以这里就不用重复添加前缀了
  */

  /* 隐藏默认图标 */
  appearance: none;

  /* 设置自定义图标 */
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;

  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};

  /* 引用typeVariants */
  ${({ type }) => type && typeVariants[type]}

  /* IE下隐藏默认图标 */
  ::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
