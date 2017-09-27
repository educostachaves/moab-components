import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountdownNow from 'react-countdown-now';

const Completionist = () => <a>You are good to go!</a>;

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <a>{_.padStart(days, 2, '0')} dias - {_.padStart(hours, 2, '0')}:{_.padStart(minutes, 2, '0')}:{_.padStart(seconds, 2, '0')}</a>;
  }
};

class Countdown extends Component {
  
  render() {
    return (
      <div className="countdown">
        <Countdown
          date={Date.parse(this.props.end_date)}
          renderer={Renderer}
          />
      </div>
    );
  }
}

export default Countdown;