import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLinkDropdown extends Component {

  constructor(props) {
    super(props);

  }

  renderList() {
    
  }
  
  render() {
    const questoes = this.props.questoes;
    console.log(questoes.length);
    if (questoes.length > 0 ) {
      let i = 1 ;
      let questoesArray = questoes.map((questao) => {
        let idLink = i++;
        return <Link key={questao.id} to={"/simulado/questao/"+ idLink} className="btn btn-question">{idLink}</Link>;
      });
      return (
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            Questões
            <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu multi-column large">
            <div className="row">
              <div className="col-sm-12">  
                {questoesArray}
              </div>
            </div>
          </ul>
        </li>
      );
    } else {
      return null;
    }
  }
}

NavLinkDropdown.defaultProps = {
  questoes: []
};

export default NavLinkDropdown;