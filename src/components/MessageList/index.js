import React from "react";
import PropTypes from "prop-types";

import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";
import FilterList from "components/FilterList";

import face1 from "assets/images/face-male-2.jpg";
import { animated } from "@react-spring/web";
import useStaggeredList from "hooks/useStaggeredList";

function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <StyledMessageList {...rest}>
      {/* 自定义过滤器与动作按钮组件 */}
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      ></FilterList>
      {/* 多个卡片 */}
      <ChatList>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <animated.div key={index} style={trailAnimes[index]}>
            <MessageCard
              /* 
                react用key来鉴别组件的唯一性
                如果key一致，只是顺序不一样
                就不会重复渲染，而是调整组件顺序以提升性能
              */
              key={index}
              active={index === 3}
              replied={index % 3 === 0}
              avatarSrc={face1}
              name="啊哈"
              avatarStatus="online"
              statusText="在线"
              time="3 小时之前"
              message="不要放弃，找出并解决问题"
              unreadCount={2}
            />
          </animated.div>
        ))}
      </ChatList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
