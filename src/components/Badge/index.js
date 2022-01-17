import React from "react";
import PropTypes from "prop-types";

import StyledBadge, { Count } from "./style";

function Badge({
  children, // 子组件
  show = false, // 是否显示徽章
  count = 0, // 未读消息数
  showZero = false, // 未读数为0时，是否显示徽章
  ...rest
}) {
  return (
    <StyledBadge
      variant={children ? "dot" : "default"} // 根据是否有子组件来决定是显示为圆点还是未读数
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
};

export default Badge;
