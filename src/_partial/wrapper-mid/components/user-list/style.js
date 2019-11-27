import styled from "styled-components";

export const UserWrapper = styled.div`
  height: 70px;
  // background: red;
  cursor: default;
  :hover {
    background: #eee;
  }
  &.active {
    background: #d7d7d7;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  float: left;
`;

export const UserName = styled.div`
  line-height: 50px;
  float: left;
  font-size: 16px;
  margin: 10px;
`;