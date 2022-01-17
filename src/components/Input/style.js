import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.grayDark};
  font-size: ${({ theme }) => theme.medium};
  display: block;
  &::placeholder {
    color: ${({ theme }) => theme.gray3};
  }
`;

// 输入框前缀部分
const Prefix = styled.div`
  margin-right: 16px;
`;

// 输入框后缀部分
const Suffix = styled.div`
  margin-left: 16px;
`;

// 整体输入框容器
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 24px;
  padding: 0 30px;
`;

export default StyledInput;
export { InputContainer, Prefix, Suffix };