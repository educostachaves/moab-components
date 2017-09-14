import React, { Component } from 'react';

export default class Dropdown extends Component {

  constructor(){
    super();
    this.state = { 
      active: false 
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      active: !this.state.active
    })
  }

  renderList() {
    return (
      <div className="dropdown-body">
        <ul>
          { 
            this.props.materials.map((material) => {
              return (
                <li key={material.title}>
                  <span><i className="fa fa-file-pdf-o"></i> {material.title}</span>
                  <a href={material.url} className="btn btn-download btn-thin">Download</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <section className="dropdown-container">
        <div className="dropdown-content">
          <div className="dropdown-head" onClick={this.onClick.bind(this)}>
            <span>{this.props.name} <i className="fa fa-caret-down" aria-hidden="true"></i></span>
          </div>
          {this.state.active ? this.renderList() : null }  
        </div>
      </section>
    );
  }
}


