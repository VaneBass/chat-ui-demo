import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";
import Icon from "components/Icon";

// 社交图标容器，用于布局
const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`;

// 联系信息容器
const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;

// 相册部分的容器
const AlbumSection = styled.section``;

// 相册部分的标题
const AlbumTitle = styled.div`
  /* 占据整个grid的宽度 */
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`;

// 相片容器
const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// 单张相片
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`;

// 关闭按钮
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

const StyledProfile = styled.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  height: 100vh;
  padding: 30px;
  margin-top: 2vh;
  /* 显示垂直方向上的滚动条 */
  overflow-y: auto;
`;

export default StyledProfile;
export {
  SocialLinks,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
  CloseIcon,
};
