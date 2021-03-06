
export const FETCH_SIMULADO = 'fetch_simulado';
export const FETCH_SIMULADO_REQUEST = 'fetch_simulado_request';
export const FETCH_SIMULADO_ERROR = 'fetch_simulado_error';
export const SELECIONAR_QUESTAO = 'selecionar_questao';

const API = '//masteroab.com.br/api/v1';
const headers = new Headers({
  'X-CSRF-TOKEN' : '123123',
  "Content-Type": "text/json",
  "X-Custom-Header": "ProcessThisImmediately"
});

export function fetchSimulado() {
  let url = `${API}/simulado`;
  let init = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    credentials: 'same-origin'
  };
  let request = new Request(url, init);

  return function(dispatch){
    fetch(request)
    .then(function(res) { 
      return res.json();
    })
    .then((data) => {
      const action = {
        type: FETCH_SIMULADO,
        payload: data.payload
      };
      dispatch(action);
    })
    .catch((error) => {
      const action = {
        type: FETCH_SIMULADO,
        payload: []
      };
      dispatch(action);
    });
  };
}

export function fetchQuestao(questaoId) {
  console.log('action', questaoId);
  dispatch({ 
    type: SELECIONAR_QUESTAO, 
    payload: questaoId }); 
}
