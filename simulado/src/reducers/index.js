import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SimuladoReducer from './reducer_simulado';

const rootReducer = combineReducers({
  simulado: SimuladoReducer
});

export default rootReducer;
