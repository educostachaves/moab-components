import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSimulado } from '../actions';

import Navbar from './navbar/navbar';

class SimuladoIndex extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSimulado();
  }

  createMarkup(data) {
    return {__html: data};
  }

  render() {
    const simulado = this.props.simulado.simulado;
    if (simulado) {
      return (
        <div>
          <header className="header-simulado">
            <Navbar type="static" brand="brand-white" user={simulado.user} questoes={simulado.questoes}/>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="simulado-description">
                    <h1>{simulado.title}</h1>
                    <div dangerouslySetInnerHTML={this.createMarkup(simulado.description)} />
                    <Link className="btn btn-cta-promotional" to="/questao/1">
                      Iniciar Simulado
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="header-simulado">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="simulado-description">
                    <img src="/assets/images/loader.gif" />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    }
    
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

export default connect(mapStateToProps, mapDispatchToProps)(SimuladoIndex);