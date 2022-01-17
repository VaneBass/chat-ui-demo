import React from "react";
import PropTypes from "prop-types";

import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "@react-spring/core";

function Conversation({
  onAvatarClick, // 点击对方头像时的回调函数
  onVideoClicked, // 点击视频通话按钮的回调函数
  children,
  ...rest
}) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, -50px, 0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(50px, 0px, 0px)" },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
    delay: 950,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        onAvatarClick={onAvatarClick}
        onVideoClicked={onVideoClicked}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="昨天 晚上19:30">Hello,最近过得怎么样?</ChatBubble>
        <MyChatBubble time="昨天 晚上19:30">一般般吧...</MyChatBubble>
        <ChatBubble time="昨天 晚上21:11">
          <VoiceMessage time="0:04" />
        </ChatBubble>
        <MyChatBubble time="昨天 晚上21:12">
          Ok,就这么定了
          <Emoji label="smile">😀</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
