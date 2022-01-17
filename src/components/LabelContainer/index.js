import React from "react";
import PropTypes from "prop-types";

import StyledLabelContainer from "./style";
import Text from "components/Text";

function LabelContainer({
  children,
  label, // 显示label标签
  ...rest
}) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
};

export default LabelContainer;
