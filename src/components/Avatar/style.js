import styled, { css } from "styled-components";
import { circle } from "utils/mixins";

// 使用styled-components的css函数来创建mixin
const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;
  /* 调用circle mixin,将组件设置为圆形 */
  ${circle(color, size)}
`;

const StyledAvatar = styled.div`
  position: relative;
`;

const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({ size }) => circleMixinFunc("white", size)}

    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
      if (status === "online") {
        return circleMixinFunc(theme.green, size);
      } else if (status === "offline") {
        return circleMixinFunc(theme.gray, size);
      }
    }}
  }
`;

const AvatarClip = styled.div`
  /* 解构并使用props里的size属性 */
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default StyledAvatar;
export { StatusIcon, AvatarClip, AvatarImage };
