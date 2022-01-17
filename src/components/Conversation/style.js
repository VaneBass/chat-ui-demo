import { animated } from "@react-spring/web";
import ChatBubble from "components/ChatBubble";
import styled from "styled-components";

// 布局所有的消息气泡
const Conversations = styled(animated.div)`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* 显示垂直方向上的滚动条 */
  overflow-y: auto;
  flex: 1;

  & > * {
    margin: 10px 0;
  }
`;

// 我发送的消息气泡
const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: flex-end;
`;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.gray4};

  & > *:last-child {
    justify-self: flex-end;
  }
`;

export default StyledConversation;
export { Conversations, MyChatBubble };
