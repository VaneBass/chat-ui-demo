import Avatar from "components/Avatar";
import Button from "components/Button";
import styled from "styled-components";
import { card } from "utils/mixins";

// 用于布局动作按钮
const Actions = styled.div`
  grid-area: actions / title;
  align-self: end;
  justify-self: center;

  display: grid;
  grid-template-columns: repeat(3, 90px);
`;

// 单个动作按钮
const Action = styled(Button).attrs({ size: "64px" })`
  font-size: 32px;
  color: white;

  box-shadow: none;
  background: ${({ theme, type }) =>
    type === "hangoff" ? theme.red2 : theme.primaryColor};
`;

// 自己的视频
const Self = styled(Avatar)`
  grid-area: self;
  align-self: end;
  justify-self: end;
`;

// 最小化按钮
const Minimize = styled(Button)`
  justify-self: end;
  grid-area: title;
  background-color: ${({ theme }) => theme.gray3};
  padding: 0;
  width: 62px;
  height: 62px;
  font-size: 46px;
`;

// 非全屏状态下的小窗口
const VideoCallAlert = styled.div`
  display: grid;
  grid-template-areas:
    "avatar info info"
    "avatar action icon";
  row-gap: 5px;
  column-gap: 10px;
  align-items: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  z-index: 200;
  ${card()}
`;

// 整个视屏通话组件容器
const StyledVideoCall = styled.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-areas:
    "title title"
    "actions self";
`;

export default StyledVideoCall;
export { Actions, Action, Self, Minimize, VideoCallAlert };
