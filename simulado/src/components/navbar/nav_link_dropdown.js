import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLinkDropdown extends Component {
  
  render() {
    let i = 0 ;
    const questoes = this.props.questoes.map((questao) => {
      return (
        <td><Link to={"/simulado/questao/"+ i++}>{i++}</Link></td>
      );
    });
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          Questões
          <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu multi-column columns-2">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-bordered">
                {questoes}
              </table>
            </div>
          </div>
        </ul>
      </li>
    );
  }

}

export default NavLinkDropdown;