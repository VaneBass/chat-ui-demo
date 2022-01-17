import styled from "styled-components";

// 所有设置项的容器
const StyledSettingsItem = styled.div``;

// 布局label、开关或箭头图标
const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 设置组容器
const StyledSettingsGroup = styled.div``;

const StyledSettings = styled.div`
  padding: 72px;
`;

export default StyledSettings;
export { StyledSettingsItem, SettingsItemControl, StyledSettingsGroup };
