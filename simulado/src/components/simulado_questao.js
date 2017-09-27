import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSimulado } from '../actions';

import Navbar from './navbar/navbar';

class SimuladoQuestao extends Component {

  constructor(props) {
    super(props);

    this.state = {
      simulado: {
        questao: [],
        user: {}
      }
    }
  }

  componentDidMount() {
    if(!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchQuestao(id);
    }
    
  }

  createMarkup(data) {
    return {__html: data};
  }

  render() {
    return (
      <div>
        <header className="header-simulado">
          <Navbar type="static" brand="brand-white" user={this.props.simulado.user} questoes={this.props.simulado.questoes}/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="simulado-description">
                  <h1>{this.props.simulado.title}</h1>
                  <div dangerouslySetInnerHTML={this.createMarkup(this.props.simulado.description)} />
                  <Link className="btn btn-cta-promotional" to="/simulado/questao/1">
                    Iniciar Simulado
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { simulado: state.simulado }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSimulado: () => {
      dispatch(fetchSimulado())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimuladoQuestao);
