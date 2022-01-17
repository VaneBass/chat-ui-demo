import React from "react";
import PropTypes from "prop-types";

import StyledSettings, {
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsItem,
} from "./style";
import Paragraph from "components/Paragraph";
import Switch from "components/Switch";
import Icon from "components/Icon";

import { ReactComponent as ArrowMenuRight } from "assets/icons/arrowMenuRight.svg";
import Seperator from "components/Seperator";

import "styled-components/macro";
import { Link } from "react-router-dom";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

function Settings({ children, ...rest }) {
  const animeProps = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(100px, 0px, 0px)", opacity: 0 },
    config: {
      tension: 140,
    },
    delay: 300,
  });

  return (
    <StyledSettings {...rest}>
      <animated.div style={animeProps}>
        <SettingsGroup groupName="隐私设置">
          <SettingsItem label="添加好友时需要验证" />
          <SettingsItem
            label="推荐通讯录好友"
            description="上传的通讯录只用来匹配好友列表,本应用不会记录和发送任何信息给其他机构或个人"
          />
          <SettingsItem label="只能通过手机号找到我" />
        </SettingsGroup>
        <SettingsGroup groupName="通知设置">
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音和视频通话提醒" />
          <SettingsItem label="显示通知详情" />
          <SettingsItem label="声音" />
          <Link
            to="/settings/blocked"
            css={`
              text-decoration: none;
              color: inherit;
            `}
          >
            <SettingsItem label="查看已屏蔽的好友列表" type="menu" />
          </Link>
        </SettingsGroup>
      </animated.div>
    </StyledSettings>
  );
}

function SettingsGroup({ groupName, children, ...rest }) {
  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  );
}

export function SettingsItem({
  type = "switch", // 设置项类型
  label, // label标签
  description, // 描述信息
  children,
  ...rest
}) {
  return (
    <StyledSettingsItem {...rest}>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch />}
        {type === "menu" && (
          <Icon
            css={`
              :hover {
                cursor: pointer;
              }
            `}
            icon={ArrowMenuRight}
          />
        )}
      </SettingsItemControl>

      {description && (
        <Paragraph type="secondary" style={{ margin: "4px 0" }}>
          {description}
        </Paragraph>
      )}

      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
    </StyledSettingsItem>
  );
}

Settings.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Settings;
