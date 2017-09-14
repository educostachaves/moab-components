import { combineReducers } from 'redux';

import StudyPlansReducer from './reducer_study_plans';
import SimulatesReducer from './reducer_simulates';
import DisciplinesReducer from './reducer_disciplines';

const rootReducer = combineReducers({
  studyPlans: StudyPlansReducer,
  simulates: SimulatesReducer,
  disciplines: DisciplinesReducer
});

export default rootReducer;
