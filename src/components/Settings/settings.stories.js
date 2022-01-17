import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => <Settings />;

export const WithoutDescription = () => (
  <SettingsItem label="这是一个没有描述信息的设置项" />
);

export const WithDescription = () => (
  <SettingsItem
    label="这是一个带有描述信息的设置项"
    description="这是设置描述信息"
  />
);

export const WithMenu = () => (
  <SettingsItem label="这是一个带有箭头的设置项" type="menu" />
);
