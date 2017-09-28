import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestao } from '../actions';

import Navbar from './navbar/navbar';

class SimuladoQuestao extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if(!this.props.questao) {
      const { id } = this.props.match.params;
      this.props.fetchQuestao(id);
    }
    console.log('questao', this.props);
  }

  createMarkup(data) {
    return {__html: data};
  }

  render() {
    return (
      <div>
        <header className="header-simulado">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="simulado-description">
                  <h1></h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ questoes }, ownProps) {
  console.log(questoes);
  return { questao: ownProps.match.params.id };
}

export default connect(mapStateToProps, { fetchQuestao })(SimuladoQuestao);
