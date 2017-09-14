
export default function(simulates = null, action) {
  switch (action.type) {
    case 'FETCH_SIMULATES' : return action.simulates;
  }

  return simulates;
}