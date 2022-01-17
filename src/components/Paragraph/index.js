import React from "react";
import PropTypes from "prop-types";

import StyledParagraph from "./style";

function Paragraph({
  children,
  ellipsis, // 当行过长时，是否显示省略号
  ...rest
}) {
  return (
    // styled-components中改变标签的渲染方式
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  bold: PropTypes.bool,
};

export default Paragraph;
