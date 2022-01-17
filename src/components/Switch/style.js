import styled from "styled-components";

// 滑动按钮
const Slider = styled.span`
  /* 滑动槽样式 */
  background-color: ${({ theme }) => theme.gray4};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 16px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
  }

  /* 滑动按钮 */
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
    background-color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.0510643);
    border-radius: 50%;
    transition: 0.4s;
  }
`;

// 控制开关状态的组件
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  opacity: 0;

  /* 被选中时 */
  :checked + ${Slider} {
    /* 滑动槽变为主题色 */
    background-color: ${({ theme }) => theme.primaryColor};

    /* 滑动按钮向右偏移 */
    ::before {
      transform: translateX(20px);
    }
  }
`;

// 最外层容器，使用label渲染
const StyledSwitch = styled.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`;

export default StyledSwitch;
export { Slider, Checkbox };
