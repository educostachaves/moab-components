import _ from 'lodash';
import { FETCH_QUESTOES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_QUESTOES:
      return action.payload
    default:
      return state;
  }
}
