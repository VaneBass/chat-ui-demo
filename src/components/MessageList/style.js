import StyledMessageCard from "components/MessageCard/style";
import styled from "styled-components";

const ChatList = styled.div`
  ${StyledMessageCard} {
    margin-bottom: 20px;
  }
`;

const StyledMessageList = styled.div`
  overflow-y: auto;
`;

export default StyledMessageList;
export { ChatList };
