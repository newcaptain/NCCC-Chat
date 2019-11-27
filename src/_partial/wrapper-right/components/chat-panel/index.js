import React, { Component } from "react";

import { connect } from "react-redux";

import { 
  ChatPanelTop, 
  ChatPanelMid, 
  ChatPanelBottom, 
  MsgWrapper, 
  MsgProfile, 
  MsgContent,
  EditContent,
  SendBtn
} from './style';

class ChatPanel extends Component {
  render() {
    const lst = this.props.chatList.lst;
    console.log(this.props.chatList);
    return (
      <div>
        <ChatPanelTop>
          {this.props.focusedChat.name}
        </ChatPanelTop>
        <ChatPanelMid>
          {lst.map(msg => (
            <MsgWrapper>
              <MsgProfile src={this.props.focusedChat.img}></MsgProfile>
              <MsgContent>
                123123
                <br/>
                sdfsadf
              </MsgContent>
            </MsgWrapper>
          ))}
          
          <MsgWrapper>
            <MsgProfile></MsgProfile>
            <MsgContent>
              123123
              <br/>
              sdfsadf
            </MsgContent>
          </MsgWrapper>
          <MsgWrapper>
            <MsgProfile className="my-msg"></MsgProfile>
            <MsgContent className="my-msg">
              Hi! i'm Jason Peng.
            </MsgContent>
          </MsgWrapper>
        </ChatPanelMid>
        <ChatPanelBottom>
          <EditContent ></EditContent>
          <SendBtn>发送</SendBtn>
        </ChatPanelBottom>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focusedChat: state.focusChat,
  chatList: state.chatList
})

export default connect(mapStateToProps, null)(ChatPanel);