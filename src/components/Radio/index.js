import React from "react";
import PropTypes from "prop-types";

import StyledRadio, { Circle, RadioButton, StyledRadioGroup } from "./style";
import LabelContainer from "components/LabelContainer";

function Radio({
  children,
  name, // radio的name属性,只有name一致时,才是互斥的
  ...rest
}) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      <Circle />
    </StyledRadio>
  );
}

function RadioGroup({
  label, // 整个单选按钮组的label
  children,
  ...rest
}) {
  return (
    <LabelContainer label={label}>
      <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
    </LabelContainer>
  );
}

Radio.Group = RadioGroup;

Radio.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Radio;
