import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon({
  icon, // 图标
  bgColor, // 图标背景颜色
  href, // 图标链接
  ...rest
}) {
  return (
    <Button
      size="30px"
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSzie: "16px" }} />
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.elementType,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
