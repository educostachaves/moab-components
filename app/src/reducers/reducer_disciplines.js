
export default function(disciplines = null, action) {
  switch (action.type) {
    case 'FETCH_DISCIPLINES' : return action.disciplines;
  }

  return disciplines;
}