import StyledButton from "components/Button/style";
import StyledIcon from "components/Icon/style";
import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;

      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    /* 
      选择第二个图标组件并改为白色
      这只是一种方法
      还可以单独创建一个组件如：
      const WaveIcon = styled(Icon)
      然后在它里面写上相应的代码
      记得导出WaveIcon并写在index.js中
    */
    & > ${StyledIcon} path {
      fill: white;
    }

    & > ${StyledText} {
      color: white;
    }
  `,
};

const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    /* 防止图标进行缩放 */
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledVoiceMessage;
