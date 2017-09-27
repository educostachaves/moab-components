import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLinkUser extends Component {

  renderAvatar(avatar) {
    if (avatar) {
      return <img src={this.props.user.avatar} className="img-avatar img-circle" />
    } 
  }
  
  render() {
    return (
      <li>
        <a className="menu-user text-uppercase">
          <span className="text-user">
            {this.renderAvatar(this.props.user.avatar)}
            {this.props.user.name}
          </span>
        </a>
      </li>
    );
  }
}

NavLinkUser.defaultProps = {
  user: {
    name: '',
    avatar: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown_1-2-64.png'
  }
};

export default NavLinkUser;