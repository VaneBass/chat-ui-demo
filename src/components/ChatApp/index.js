import React from "react";
import PropTypes from "prop-types";

import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import Settings from "components/Settings";
import { Route, Switch } from "react-router";
import BlockedList from "components/BlockedList";
import { useState } from "react";
import VideoCall from "components/VideoCall";

function ChatApp({ children, ...rest }) {
  // 判断是否显示滑动抽屉
  const [showDrawer, setShowDrawer] = useState(false);
  // 判断是否正在视频通话
  const [videoCalling, setVideoCalling] = useState(false);

  return (
    <StyledChatApp {...rest}>
      {/* 导航条 */}
      <Nav>
        <NavBar />
      </Nav>
      {/* 侧边栏 */}
      <Sidebar>
        {/* 确保只显示第一个匹配的组件 */}
        <Switch>
          {/* 当url后只有一个/即为根目录时，显示消息列表组件 */}
          <Route exact path="/">
            <MessageList />
          </Route>
          <Route exact path="/contacts">
            <ContactList />
          </Route>
          <Route exact path="/files">
            <FileList />
          </Route>
          <Route exact path="/notes">
            <NoteList />
          </Route>
          {/* 设置页面不是精确匹配,查看已静音列表时会有二级路由,这个设置页面同时也要显示 */}
          <Route path="/settings">
            <EditProfile />
          </Route>
        </Switch>
      </Sidebar>
      {/* 会话窗口 */}
      <Content>
        {/* 如果videoCalling为true，就显示VideoCall组件 */}
        {videoCalling && (
          <VideoCall onHangOffClicked={() => setVideoCalling(false)} />
        )}
        <Switch>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/settings/blocked">
            <BlockedList />
          </Route>
          <Route path="/">
            <Conversation
              onAvatarClick={() => setShowDrawer(true)}
              onVideoClicked={() => setVideoCalling(true)}
            />
          </Route>
        </Switch>
      </Content>
      {/* 滑动抽屉 */}
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
