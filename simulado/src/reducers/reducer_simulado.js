import _ from 'lodash';
import { FETCH_SIMULADO, FETCH_SIMULADO_REQUEST, FETCH_SIMULADO_ERROR, SELECIONAR_QUESTAO } from '../actions/index';

const initialState = {
  simulado: null,
  carregandoSimulado: false,
  errorMessage: null,
  questaoSelecionada: null,
 }
 
 export default function(state = initialState, action) {
   switch (action.type) {
     case SELECIONAR_QUESTAO:
       const questaoSelecionada = state.simulado.questoes.filter(q => q.id == action.payload) // payload = questaoId
       console.log('reducer', { ...state, questaoSelecionada: questaoSelecionada });
       return { ...state, questaoSelecionada: questaoSelecionada } 
     case FETCH_SIMULADO_REQUEST:
        return { ...state, carregandoSimulado: true }
     case FETCH_SIMULADO:
       return { ...state, simulado: action.payload, carregandoSimulado: false }
      case FETCH_SIMULADO_ERROR:
       return { ...state, errorMessage: action.payload, carregandoSimulado: false } 
     default:
       return state;
   }
 }
