import React from "react";
import PropTypes from "prop-types";

import StyledBlockedList, {
  BlockedAvatar,
  BlockedName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from "./style";

import Icon from "components/Icon";
import Text from "components/Text";

import "styled-components/macro";

import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icons/closeCircle.svg";
import face from "assets/images/face-male-3.jpg";
import { useHistory } from "react-router";

function BlockedList({ children, ...rest }) {
  // 获取浏览器history对象
  const history = useHistory();
  return (
    <StyledBlockedList {...rest}>
      {/* 最上方的提示信息 */}
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          // 返回上一层路由
          onClick={() => history.goBack()}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (
            // 已屏蔽头像容器
            <ClosableAvatar key={i}>
              <BlockedAvatar size="105px" src={face} />
              <CloseIcon width={46} height={51} icon={closeCircle} />
              <BlockedName>没有名字</BlockedName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
