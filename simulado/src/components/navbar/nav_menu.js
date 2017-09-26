import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSimulado, fetchQuestoes } from '../../actions';

import Countdown from 'react-countdown-now';
import NavLinkDropdown from './nav_link_dropdown';

const Completionist = () => <a>You are good to go!</a>;

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <a>{_.padStart(days, 2, '0')} dias - {_.padStart(hours, 2, '0')}:{_.padStart(minutes, 2, '0')}:{_.padStart(seconds, 2, '0')}</a>;
  }
};


class NavMenu extends Component {
  
  render() {
    return (
      <ul className="nav navbar-nav navTop navbar-right text-center">
        <li>
          <Countdown
            date={Date.parse(this.props.end_date)}
            renderer={Renderer}
            />
        </li>
        <NavLinkDropdown questoes={this.props.questoes} />
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { 
    start_date: state.simulado.start_date,
    end_date: state.simulado.end_date,
    questoes: state.questoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSimulado: () => {
      dispatch(fetchSimulado())
    },
    fetchQuestoes: () => {
      dispatch(fetchQuestoes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);