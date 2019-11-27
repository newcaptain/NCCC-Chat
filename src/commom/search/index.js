import React, { Component } from "react";
import { SearchField, SearchInput, UserAdd, SearchInputWrapper } from './style';

class Search extends Component {
  render() {
    return (
      <SearchField>
        <SearchInputWrapper>
          <SearchInput></SearchInput>
          <i className="iconfont">&#xe741;</i>
        </SearchInputWrapper>
        <UserAdd>
          <i className="iconfont">&#xe635;</i>
        </UserAdd>
      </SearchField>
    );
  }
}

export default Search;