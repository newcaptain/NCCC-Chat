import styled from 'styled-components';

export const ChatListItem = styled.div`
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
  cursor: default;
  :hover {
    background: #eee;
  }
  &.active {
    background: #d7d7d7;
  }
`;

export const Profile = styled.img`
  background: orange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  float: left;
`;

export const Content = styled.div`
  overflow: hidden;
  height: 50px;
  padding: 0 0 0 10px;
  .uname {
    font-size: 16px;
    line-height: 30px;
  }
  .msg {
    font-size: 14px;
    line-height: 20px;
  }
`;