import React from "react";

import { connect } from 'react-redux';

import { UserInfoTop, UserInfoName, UserInfoProfile, Button } from './style';

function UserInfo(props) {
  return (
    <div>
      <UserInfoTop>
        <UserInfoName>{props.userInfo.name}</UserInfoName>
        <UserInfoProfile src={props.userInfo.img}></UserInfoProfile>
      </UserInfoTop>
      <Button onClick={() => props.toSendMsg(props.userInfo)}>发消息</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.focusUser
})

const mapDispatchToProps = (dispatch) => ({
  toSendMsg: (user) => dispatch({type: 'TO_SEND_MSG', value: user})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);