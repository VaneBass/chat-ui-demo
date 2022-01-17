import React from "react";
import PropTypes from "prop-types";

import StyledInputText, { InputUnderline } from "./style";
import LabelContainer from "components/LabelContainer";

function InputText({
  label, // 有label就显示label
  placeholder = "请输入内容", // 占位符
  ...rest
}) {
  // 输入框
  const input = <InputUnderline type="text" placeholder={placeholder} />;
  return (
    <StyledInputText {...rest}>
      {
        // 如果有label，就用LabelContainer渲染label + input，否则只是普通input
        label ? <LabelContainer label={label}>{input}</LabelContainer> : input
      }
    </StyledInputText>
  );
}

InputText.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
