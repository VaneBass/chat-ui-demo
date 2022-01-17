import Avatar from "components/Avatar";
import Icon from "components/Icon";
import Text from "components/Text";
import StyledText from "components/Text/style";
import styled from "styled-components";

// 头像
const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`;

// 昵称
const BlockedName = styled(Text).attrs({ size: "xlarge" })`
  grid-area: name;
  margin-top: 20px;
`;

// 关闭图标
const CloseIcon = styled(Icon)`
  grid-area: 2 / 3 / 5 / 4;
  z-index: 10;
  margin-top: 10px;
`;

// 整个屏蔽头像的容器
const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    "avatar avatar avatar"
    "avatar avatar avatar"
    "avatar avatar avatar"
    "name name name";
  justify-items: center;
`;

// 标题容器
const SettingsMenu = styled.div`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText} {
    grid-column: span 1 / -1;
    justify-self: center;
  }
`;

// 已屏蔽好友列表
const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`;

// 整体容器
const StyledBlockedList = styled.div`
  padding: 2vh 4vw;
`;

export default StyledBlockedList;
export {
  SettingsMenu,
  BlockedAvatar,
  BlockedName,
  CloseIcon,
  ClosableAvatar,
  FriendList,
};
