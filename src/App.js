import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import { GlobalStyle, Main, MainWrapper } from './style';

import Header from './commom/header';
import WrapperMid from './_partial/wrapper-mid';
import WrapperRight from './_partial/wrapper-right';

import { Iconfont } from './public/iconfont/iconfont';
import Axios from 'axios';

class App extends Component{
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Iconfont />
        <Main>
          <MainWrapper>
            <Header></Header>
            <WrapperMid></WrapperMid>
            <WrapperRight></WrapperRight>
          </MainWrapper>
        </Main>
      </Fragment>
    );
  }
  componentDidMount() {
    Axios.get('/api/userlist.json')
      .then(result => {
        const action = {
          type: 'UPDATE_USER_LIST',
          value: result.data.data
        };
        this.props.updateUserList(action);
      })
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserList(action) {
    return dispatch(action);
  }
})

export default connect(null, mapDispatchToProps)(App);
