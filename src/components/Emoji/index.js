import React from "react";
import PropTypes from "prop-types";

import StyledEmoji from "./style";

function Emoji({
  children,
  label, // 描述文字，用于设置aria-label的值
  ...rest
}) {
  return (
    <StyledEmoji role="img" aria-label={label} {...rest}>
      {children}
    </StyledEmoji>
  );
}

Emoji.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};

export default Emoji;
