import React, { Component } from 'react';
import { WrapperLeft, UserIcon, MenuIcon } from './style';
import { connect } from "react-redux";

class Header extends Component {
  render() {
    let icons = ['&#xe62c;', '&#xe607;'];
    return (
      <WrapperLeft>
        <UserIcon></UserIcon>
        <MenuIcon>
          {
            icons.map((item, index) => (
              <i 
                key={index}
                className={`iconfont ${this.props.focus===index?'focus':''}`}
                dangerouslySetInnerHTML={{__html: item}}
                onClick={() => this.props.handleChangeFocus(index)}
              ></i>
            ))
          }
        </MenuIcon>
      </WrapperLeft>
    )
  }
}
const mapStateToProps = state => ({
  focus: state.focus
});

const mapDispatchToProps = dispatch => ({
  handleChangeFocus: idx => dispatch({type: 'CHANGE_FOCUS', value: idx})
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);