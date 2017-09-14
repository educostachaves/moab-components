import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dropdown from '../containers/dropdown';
import DisciplineList from '../containers/discipline-list';

import { getStudyPlans, getSimulates, getDisciplines } from '../actions';

class App extends Component {

  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    this.setState({
      studyPlans: this.props.getStudyPlans(),
      simulates: this.props.getSimulates(),
      disciplines: this.props.getDisciplines()
    });

  }

  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <Dropdown materials={this.props.studyPlans} name="Planos de Estudo" />
          <Dropdown materials={this.props.simulates} name="Simulados"/>
        </div>
        <div className="row">
          <DisciplineList disciplines={this.props.disciplines} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    studyPlans: state.studyPlans,
    simulates: state.simulates,
    disciplines: state.disciplines 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStudyPlans: () => {
      dispatch(getStudyPlans())
    },
    getSimulates: () => {
      dispatch(getSimulates())
    },
    getDisciplines: () => {
      dispatch(getDisciplines())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
