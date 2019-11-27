import styled from 'styled-components';

export const UserInfoTop = styled.div`
  // background: red;
  width: 520px;
  height: 140px;
  margin: auto;
  margin-top: 80px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  padding: 25px 0 25px 0;
`;

export const UserInfoName = styled.div`
  float: left;
  height: 90px;
  line-height: 90px;
  font-size: 25px;
`;

export const UserInfoProfile = styled.img`
  width: 90px;
  float: right;
  height: 90px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  font-size: 14px;
  display: block;
  border: none;
  outline: none;
  background: green;
  color: white;
  margin: 30px auto;
`;