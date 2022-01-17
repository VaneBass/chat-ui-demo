import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import styled, { css } from "styled-components";

// 给Paragraph组件传递属性并使用它的样式，来做发送时间
const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

// 用Icon组件来做对话气泡的 “小尾巴”
const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`;

// 对话气泡
const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`;

// 消息文本，使用Text组件样式
const MessageText = styled(Text)``;

// 消息变体，设置自己发送的消息的样式
const typeVariants = {
  mine: css`
    /* 
      消息变体最后会被渲染到StyledChatBubble中
      这样就能用嵌套的方式给子组件设置样式
      类似于原生css的
      .container .inside {

      }
      这种形式 
   */
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      /* 取消left的值 */
      left: unset;
      right: 0;

      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

// 整体容器
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]};
`;

export default StyledChatBubble;
export { Bubble, BubbleTip, Time, MessageText };
