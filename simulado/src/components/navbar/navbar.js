import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavMenu from './nav_menu';

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav className="navbar navbar-first-page navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand brand-black-colorful" to="/"></Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;