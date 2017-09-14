
export default function(studyPlans = null, action) {
  switch (action.type) {
    case 'FETCH_STUDY_PLANS' : return action.studyPlans;
  }

  return studyPlans;
}