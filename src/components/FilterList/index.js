import React from "react";
import PropTypes from "prop-types";

import StyledFilterList from "./style";
import Input from "components/Input";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";

import { ReactComponent as Plus } from "assets/icons/plus.svg";

function FilterList({
  children,
  options, // 自定义选项
  filterLabel = "列表排序", // 过滤选项的标签
  actionLabel, // 按钮标签
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      {/* 搜索框 */}
      <Input.Search />
      {/* 过滤器与按钮 */}
      <Filter style={{ padding: "20px 0" }}>
        {/* 如果有选项，就显示带label的过滤器 */}
        {options && (
          <Filter.Filters label={filterLabel}>
            <Select>
              {/* 遍历options数组并将它们作为Option标签的children */}
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}

        {/* 如果有动作按钮标签，就显示动作按钮与标签 */}
        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {/* 使用children接收具体的列表 */}
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
