import React from "react";
import PropTypes from "prop-types";

import StyledVideoCall, {
  Action,
  Actions,
  Minimize,
  Self,
  VideoCallAlert,
} from "./style";
import videoCaller from "assets/images/video-caller.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVideo,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import face from "assets/images/face-female-1.jpg";
import { useState } from "react";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import "styled-components/macro";

function VideoCall({ children, onHangOffClicked, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);

  // 非全屏状态下，显示小窗口
  if (!fullScreen) {
    return (
      <VideoCallAlert
        css={`
          background-color: white;
        `}
      >
        <Avatar
          src={face}
          css={`
            grid-area: avatar;
          `}
        />
        <Paragraph
          size="medium"
          css={`
            grid-area: info;
          `}
        >
          正在与 想不出来 进行视频通话
        </Paragraph>
        <Paragraph
          css={`
            grid-area: action;
            cursor: pointer;
          `}
          type="secondary"
          onClick={() => setFullScreen(true)}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            font-size: 20px;
            justify-self: end;
            opacity: 0.3;
          `}
        />
      </VideoCallAlert>
    );
  }
  return (
    <StyledVideoCall src={videoCaller} {...rest}>
      {/* 最小化按钮 */}
      <Minimize shape="rect" onClick={() => setFullScreen(false)}>
        <FontAwesomeIcon icon={faCompressAlt} />
      </Minimize>
      {/* 动作按钮 */}
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone} />
        </Action>
        <Action type="hangoff">
          <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked} />
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute} />
        </Action>
      </Actions>
      {/* 自己的视频 */}
      <Self src={face} size="140px" />
    </StyledVideoCall>
  );
}

VideoCall.propTypes = {
  children: PropTypes.any,
};

export default VideoCall;
