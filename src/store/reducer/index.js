/**
 * focus (0: 聊天页, 1: 联系人页)
 * rightView: (0: 白板页，1：聊天页，2：联系人页面)
 */
const defaultState = {
  focus: 0,
  rightView: 0,
  focusUser: undefined,
  focusChat: undefined,
  focusUserId: undefined,
  focusChatId: undefined,
  userList: {},
  chatList: []
};

function reducer(state=defaultState, action) {
  if (action.type === 'CHANGE_FOCUS') {
    let newState = JSON.parse(JSON.stringify(state));
    if (action.value === 0 && state.focusChat !== undefined) {
      newState.rightView = 1;
      newState.focus = action.value;
    } else if (action.value === 1 && state.focusUser !== undefined) {
      newState.rightView = 2;
      newState.focus = action.value;
    } else {
      newState.rightView = 0;
      newState.focus = action.value;
    }
    return newState;
  } else if (action.type === 'FOCUS_USER') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.rightView = 2;
    newState.focusUser = JSON.parse(JSON.stringify(action.value));
    return newState;
  } else if (action.type === 'FOCUS_CHAT') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.rightView = 1;
    newState.focusChat = JSON.parse(JSON.stringify(action.value));
    return newState;
  } else if (action.type === 'TO_SEND_MSG') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.rightView = 1;
    newState.focus = 0;
    newState.focusChat = JSON.parse(JSON.stringify(action.value));
    for (let chat of newState.chatList) {
      if (chat.id === newState.focusChat.id) {
        return newState;
      }
    }
    let insertObj = JSON.parse(JSON.stringify(newState.focusChat));
    insertObj.list = [];
    newState.chatList.unshift(insertObj);
    return newState;
  } else if (action.type === 'UPDATE_USER_LIST') {
    let newState = JSON.parse(JSON.stringify(state));
    let newList = {};
    for (let item of action.value) {
      newList[item.id] = {
        name: item.name,
        img: item.img
      };
    }
    newState.userList = newList;
    return newState;
  }
  return state;
}

export default reducer;


// focusUserId: "uid"

// focusChatId: "cid"

// userList: {
//   "id": {
//     name: 'xx',
//     img: 'xx'
//   }
// }

// myInfo: {
//   img: 'xx',
//   name: 'xx',
//   id: '11'
// }

// chatList: [{
//   cid: '2',
//   lst: [{
//     content: 'sdgsd',
//     uid: 
//   }]
// }]
