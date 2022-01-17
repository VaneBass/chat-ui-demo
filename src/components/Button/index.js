import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./style";

function Button({
  children,
  type = "primary", // 颜色
  shape = "circle", // 形状
  size = "30px", // 直径长度
  bgColor, // 自定义的背景颜色
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      shape={shape}
      size={size}
      bgColor={bgColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["primary"]),
  shape: PropTypes.oneOf(["circle", "rect"]),
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
