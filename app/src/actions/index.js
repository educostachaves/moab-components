
const API = '//app.masteroab.com.br/api/v1';
const headers = new Headers({
  'X-CSRF-TOKEN' : document.querySelectorAll('meta[name="csrf-token"]')[0].getAttribute('content'),
  "Content-Type": "text/plain",
  "X-Custom-Header": "ProcessThisImmediately"
});

function getStudyPlans() {
  let url = `${API}/materials/study-plans`;
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
        type: 'FETCH_STUDY_PLANS',
        studyPlans: data.payload
      };
      dispatch(action);
    })
    .catch((error) => {
      
      const action = {
        type: 'FETCH_STUDY_PLANS',
        studyPlans: []
      };
      dispatch(action);
    });
  };
}

function getSimulates() {
  let url = `${API}/materials/simulates`;
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
        type: 'FETCH_SIMULATES',
        simulates: data.payload
      };
      dispatch(action);
    })
    .catch((error) => {
      
      const action = {
        type: 'FETCH_SIMULATES',
        simulates: []
      };
      dispatch(action);
    });
  };
}

function getDisciplines() {
  let url = `${API}/disciplines`;
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
        type: 'FETCH_DISCIPLINES',
        disciplines: data.payload
      };
      dispatch(action);
    })
    .catch((error) => {
      const action = {
        type: 'FETCH_DISCIPLINES',
        disciplines: []
      };
      dispatch(action);
    });
  };
}

export { 
  getStudyPlans as getStudyPlans, 
  getSimulates as getSimulates,
  getDisciplines as getDisciplines
}