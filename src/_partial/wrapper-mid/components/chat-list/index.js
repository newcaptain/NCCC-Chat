import React, { Component } from 'react';

import { connect } from 'react-redux';

import { ChatListItem, Profile, Content } from './style.js';

class ChatList extends Component {
  render() {
    return (
      <div>
        {
          this.props.chatList.map(item => {
            return (
              <ChatListItem 
                onClick={() => this.props.focusChat(item)} 
                className={this.props.focusedChat.id === item.id?'active':''}
                key={item.id}
              >
                <Profile src={item.img}></Profile>
                <Content>
                  <div className="uname">{item.name}</div>
                  <div className="msg">t testt bb is good chattdsts</div>
                </Content>
              </ChatListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  focusedChat: state.focusChat,
  chatList: state.chatList,
  userList: state.userList
})

const mapDispatchToProps = (dispatch) => ({
  focusChat: (item) => dispatch({type: 'FOCUS_CHAT', value: item})
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);