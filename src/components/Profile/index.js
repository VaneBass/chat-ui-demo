import React from "react";
import PropTypes from "prop-types";

import StyledProfile, {
  Album,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
  ContactSection,
  Photo,
  SocialLinks,
} from "./style";

import "styled-components/macro";

import Avatar from "components/Avatar";
import face from "assets/images/face-male-2.jpg";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import Text from "components/Text";
import Button from "components/Button";

import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

import { ReactComponent as Cross } from "assets/icons/cross.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Profile({
  children,
  showEditBtn, // 是否显示编辑按钮
  showCloseIcon = true, // 是否显示右上角关闭按钮
  onEdit, // 当编辑按钮被点击时，触发的操作
  status, // 根据传入的值显示对应的在线状态，没有传值就不显示
  onCloseClick, // 点击关闭按钮的回调
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {/* showCloseIcon为true才显示关闭按钮 */}
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      {/* 头像 */}
      <Avatar
        css={`
          margin: 26px 0;
          /* 给Avatar组件设置grid-area */
          grid-area: 1 / 1 / 3 / 2;
        `}
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
      />
      {/* showEditBtn为true时显示编辑按钮并给它添加点击事件 */}
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        没想好
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        北京市 XX区
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        不断学习、实践，加强自己的能力 <Emoji label="ballon">🎈</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Social icon={faWeibo} bgColor="#F06767" href="#" />
        <Icon.Social icon={faGithub} bgColor="black" href="#" />
        <Icon.Social icon={faLinkedin} bgColor="#2483C0" href="#" />
      </SocialLinks>
      {/* 分隔线 */}
      <Seperator style={{ margin: "30px 0" }} />
      <ContactSection>
        <Description label="联系电话">+86 13333333333</Description>
        <Description label="电子邮件">XXX@XX.com</Description>
        <Description label="个人网站">https://XXX.com</Description>
      </ContactSection>
      <Seperator style={{ margin: "30px 0" }} />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册 (10)</Text>
          <a href=" ">查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

// 联系信息组件
function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}:</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
