import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSimulado } from '../actions';

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
    return (
      <div>
        <header className="header-calendar">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="calendar-description">
                  <h1>{this.props.simulado.title}</h1>
                  <p>Bem Vindo ao simulado virtual da MasterOAB. Aqui tentaremos ao máximo simular uma experiência completa do exame da OAB para você.</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section-intern bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Instruções</h3>
                <div dangerouslySetInnerHTML={this.createMarkup(this.props.simulado.description)} />
              </div>
              <div className="col-md-8 col-md-offset-2 text-center">
                <Link className="btn btn-cta-colorful" to="/simulado/questao/1">
                  Começar Simulado
                </Link>
              </div>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(SimuladoIndex);