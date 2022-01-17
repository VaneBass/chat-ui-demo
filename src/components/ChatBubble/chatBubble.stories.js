import Emoji from "components/Emoji";
import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午15:46">你好啊</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type={"mine"} time="昨天 下午15:46">
    我发送的消息
    <Emoji label="surprise">😮</Emoji>
  </ChatBubble>
);

export const voiceMessageType = () => (
  <ChatBubble time="昨天 晚上20:54">
    <VoiceMessage time="0:05" />
  </ChatBubble>
);

export const voiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 晚上20:54">
    <VoiceMessage type="mine" time="0:05" />
  </ChatBubble>
);
