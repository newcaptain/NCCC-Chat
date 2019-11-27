import React from 'react'

import { connect } from 'react-redux';

import { Container, WhiteBoard } from './style';
import ChatPanel from './components/chat-panel';
import UserInfo from './components/user-info';

function WrapperRight(props) {
  return (
    <Container>
      {
        props.rightView===0 ? <WhiteBoard /> : 
        props.rightView ===1? <ChatPanel />:
        <UserInfo></UserInfo>
      }
    </Container>
  )

}

const mapStateToProps = state => ({
  rightView: state.rightView
});

export default connect(mapStateToProps, null)(WrapperRight);