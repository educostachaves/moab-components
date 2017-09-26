import _ from 'lodash';
import { FETCH_SIMULADO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SIMULADO:
      return action.payload
    default:
      return state;
  }
}
