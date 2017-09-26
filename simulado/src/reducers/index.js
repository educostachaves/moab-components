import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SimuladoReducer from './reducer_simulado';
import QuestoesReducer from './reducer_questoes';

const rootReducer = combineReducers({
  simulado: SimuladoReducer,
  questoes: QuestoesReducer,
});

export default rootReducer;
