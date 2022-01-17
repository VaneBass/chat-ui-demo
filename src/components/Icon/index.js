import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./style";
import SocialIcon from "./SocialIcon";

function Icon({
  // 在 react中，svg是被作为一个组件导入的，方便根据props设置样式
  icon: IconComponent, // 给icon属性一个更符合命名规范的别名
  // icon组件的宽高
  width = 24,
  height = 24,
  color, // 组件颜色
  opacity, // 透明度
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

Icon.Social = SocialIcon;

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
