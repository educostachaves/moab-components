import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLinkDropdown from './nav_link_dropdown';
import NavLinkUser from './nav_link_user';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className={'navbar navbar-first-page ' + (this.props.type == 'static' ? 'navbar-static-top' : 'navbar-fixed-top')}>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className={'navbar-brand ' + (this.props.brand ? this.props.brand : 'brand-black-colorful')} to="/"></Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navTop navbar-right text-center">
              <NavLinkDropdown questoes={this.props.questoes} />
              <NavLinkUser user={this.props.user} />
              <li><a href="https://masteroab.com.br/logout" className="text-uppercase">Sair</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;