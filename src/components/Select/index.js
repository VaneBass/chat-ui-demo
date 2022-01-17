import React from "react";
import PropTypes from "prop-types";

import StyledSelect from "./style";
import LabelContainer from "components/LabelContainer";

function Select({
  children,
  label, // label标签
  type, // 下拉图标类型
  ...rest
}) {
  // 没有label的下拉选项
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  // 有label就用LabelContainer显示label，没有就用selectWithoutLabel
  return label ? (
    <LabelContainer label={label}>selectWithoutLabel</LabelContainer>
  ) : (
    selectWithoutLabel
  );
}

Select.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["form"]),
};

export default Select;
