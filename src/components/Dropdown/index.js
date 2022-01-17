import React from "react";
import PropTypes from "prop-types";

import StyledDropdown, { DropdownContainer } from "./style";
import { useState } from "react";

function Dropdown({
  children,
  content, // 菜单项内容
  align = "right", // 菜单项位置
  ...rest
}) {
  const [visible, setVisible] = useState(false);
  return (
    <StyledDropdown onClick={() => setVisible(!visible)} {...rest}>
      {children}
      {content && (
        <DropdownContainer align={align} visible={visible}>
          {content}
        </DropdownContainer>
      )}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  align: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export default Dropdown;
