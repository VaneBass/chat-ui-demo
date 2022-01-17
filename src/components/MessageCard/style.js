import StyledAvatar from "components/Avatar/style";
import Badge from "components/Badge";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import styled, { css } from "styled-components";
import { activeBar, card } from "utils/mixins";

/* 
  使用attrs函数给组件传递属性
  这样就不用在index.js中传递属性
*/
const Name = styled(Text).attrs({ size: "large" })`
  grid-area: name;
`;

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;

const Status = styled(Text).attrs({ type: "secondary" })`
  grid-area: status;
`;

// 消息文本的容器，用于布局消息和未读数
const Message = styled.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;

  /* 如果是已回复的消息，就改为三列布局 */
  ${({ replied }) =>
    replied &&
    css`
      grid-template-columns: 24px 1fr 30px;
    `}
`;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const UnreadBadge = styled(Badge)`
  justify-self: end;
`;

const StyledMessageCard = styled.div`
  /* 使用card mixin来设置圆角卡片样式 */
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background: ${({ theme }) => theme.background};
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  ${StyledAvatar} {
    grid-area: avatar;
  }

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.darkPurple};
      ${Name}, ${Status}, ${Time}, ${MessageText} {
        color: white;
      }
      ${Status}, ${Time} {
        opacity: 0.4;
      }
      ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}

      /* 隐藏指示条露在外边的部分 */
      overflow: hidden;
    `}
`;

export default StyledMessageCard;
export { Name, Time, Status, Message, MessageText, UnreadBadge };
