import styled from 'styled-components';

export const SearchField = styled.div`
  height: 70px;
  padding: 20px 15px 20px 15px;
  box-sizing: border-box;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  font-size: 15px;
  .iconfont {
    position: absolute;
    top: 0;
    left: 5px;
    line-height: 30px;
    color: #777;
  }
`;

export const SearchInput = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 170px;
  height: 30px;
  display: block;
  float: left;
  margin-right: 15px;
  box-sizing: border-box;
  border: none;
  background: #ddd;
  outline: none;
  padding: 5px 10px 5px 18px;
  border-radius: 5px;
`;

export const UserAdd = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  outline: none;
`;