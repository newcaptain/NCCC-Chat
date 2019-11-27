import React from 'react';
import { connect } from 'react-redux';

import Search from '../../commom/search';
import ChatList from './components/chat-list';
import UserList from './components/user-list';

import { Container } from './style.js';

function WrapperMid(props) {
  return (
    <Container>
      <Search></Search>
      {props.focus===0?<ChatList></ChatList>:<UserList></UserList>}
    </Container>
  )
}

const mapStateToProps = state => ({
  focus: state.focus
});

export default connect(mapStateToProps, null)(WrapperMid);