import styled from 'styled-components';

export const ChatPanelTop = styled.div`
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
  line-height: 50px;
  font-size: 18px;
`;

export const ChatPanelMid = styled.div`
  height: 480px;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
`;

export const ChatPanelBottom = styled.div`
  height: 170px;
`;

export const MsgWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

export const MsgProfile = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  float: left;
  &.my-msg {
    float: right;
  }
`;

export const MsgContent = styled.div`
  background: #ddd;
  float: left;
  font-size: 17px;
  line-height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  &.my-msg {
    float: right;
    margin-left: 0;
    margin-right: 10px;
    background: #78C8F9
    color: #fff;
  }
`;

export const EditContent = styled.pre.attrs({
  contentEditable: "true"
})`
  width: 100%;
  height: 120px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 17px;
  line-height: 22px;
  margin: 0;
  outline: none;
  overflow: hidden;
`;
export const SendBtn = styled.button`
  float: right;
  margin: 10px 20px 10px 0;
  height: 25px;
  width: 80px;
`;