import React from "react";
import PropTypes from "prop-types";

import StyledMessageCard, {
  Message,
  MessageText,
  Name,
  Status,
  Time,
  UnreadBadge,
} from "./style";
import Avatar from "components/Avatar";
import { useTheme } from "styled-components";

import { ReactComponent as Replied } from "assets/icons/replied.svg";
import Icon from "components/Icon";

function MessageCard({
  avatarSrc, // 头像url
  avatarStatus, // 头像在线状态
  statusText, // 在线状态文字
  name, // 昵称
  time, // 消息发送/接收时间
  message, // 消息文本
  unreadCount, // 未读消息数
  active, // 是否被选中
  replied, // 是否已回复
  children,
  ...rest
}) {
  const theme = useTheme();

  return (
    <StyledMessageCard active={active} {...rest}>
      {/* 头像及在线圆点 */}
      <Avatar status={avatarStatus} src={avatarSrc} />
      {/* 昵称 */}
      <Name>{name}</Name>
      {/* 在线状态文字 */}
      <Status>{statusText}</Status>
      {/* 消息 发送/接收 时间 */}
      <Time>{time}</Time>
      {/* 消息内容 */}
      <Message replied={replied}>
        {/* 如果已回复，显示图标，并根据激活状态设置不同的颜色、透明度 */}
        {replied && (
          <Icon
            icon={Replied}
            width={16}
            height={14}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{
              justifyContent: "start",
            }}
          />
        )}
        {/* 消息文本 */}
        <MessageText>{message}</MessageText>
        {/* 未读数 */}
        <UnreadBadge count={unreadCount} />
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  children: PropTypes.any,
};

export default MessageCard;
