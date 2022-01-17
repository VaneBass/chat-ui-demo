import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledPopover, { Content, Target, Triangle } from "./style";

function Popover({
  children,
  content, // 弹出气泡的内容
  offset = {}, // 气泡的偏移
  onVisible, // 可见时的回调函数
  onHide, // 不可见时的回调函数
  ...rest
}) {
  const [visible, setvisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      setvisible(false);
      onHide && onHide();
    } else {
      setvisible(true);
      onVisible && onVisible();
    }
  };

  return (
    <StyledPopover onClick={handleClick} {...rest}>
      {/* 弹出气泡的内容 */}
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      {/* 气泡下方的三角形 */}
      <Triangle visible={visible} offset={offset} />
      {/* 把要触发气泡的组件作为子组件 */}
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
