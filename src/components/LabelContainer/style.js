import styled from "styled-components";

// label、input的容器
const StyledLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.normal};
`;

export default StyledLabelContainer;
