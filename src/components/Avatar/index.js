import React from "react";
import PropTypes from "prop-types";

import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";

function Avatar({
  src, // 头像图片地址
  size = "48px", // 头像尺寸
  status, // 在线状态
  statusIconSize = "8px", // 在线状态图标尺寸
  ...rest
}) {
  return (
    // 将其他所有属性交给头像组件处理，尽量避免可能出现的问题
    <StyledAvatar {...rest}>
      {/* 如果有在线状态，才将在线状态、图标大小传递给在线状态图标 */}
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
