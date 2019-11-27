import React from 'react';

import { connect } from 'react-redux';

import { UserWrapper, Avatar, UserName } from './style';
function UserList(props) {
  let rt = ``;
  for (let key in props.userList) {
    rt += `
      <UserWrapper
        onClick={() => props.focusUser(item)} 
        className=${(props.focusedUser?props.focusedUser.id:undefined)===props.userList[key].id?'active':''} 
        key=${props.userList[key].id}
      >
        <Avatar src=${props.userList[key].img}></Avatar>
        <UserName>${props.userList[key].name}</UserName>
      </UserWrapper>
    `
  }


  return (
    <div>
      {

        // props.userList.map(item => (
        //   <UserWrapper
        //     onClick={() => props.focusUser(item)} 
        //     className={(props.focusedUser?props.focusedUser.id:undefined)===item.id?'active':''} 
        //     key={item.id}
        //   >
        //     <Avatar src={item.img}></Avatar>
        //     <UserName>{item.name}</UserName>
        //   </UserWrapper>
        // ))
        rt
      }
    </div>
  )
}

const mapStateToProps = state => ({
  focusedUser: state.focusUser,
  userList: state.userList
})

const mapDispatchToProps = dispatch => ({
  focusUser: item => (dispatch({ type: 'FOCUS_USER', value: item }))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);