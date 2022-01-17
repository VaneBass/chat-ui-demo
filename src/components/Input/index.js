import React from "react";
import PropTypes from "prop-types";

import StyledInput, { InputContainer, Prefix, Suffix } from "./style";
import Icon from "components/Icon";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useTheme } from "styled-components";
import InputText from "./InputText";

function Input({
  placeholder = "请输入内容...", // 占位文字
  prefix, // 前缀图标
  suffix, // 后缀图标
  ...rest
}) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  // 给组件的自定义属性添加主题色的方法
  const theme = useTheme();

  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
      }
      {...rest}
    />
  );
}

// 子组件：搜索框
Input.Search = Search;
// 子组件：带label的输入框
Input.Text = InputText;

Input.propTypes = {
  children: PropTypes.any,
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
