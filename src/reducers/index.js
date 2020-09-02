import { combineReducers } from 'redux';

import buyOneDonutReducer from './buyOneDonatReducer';
import makeOneDonutReducer from './makeOneDonutReducer';
import buyOneCakeReducer from './buyOneCakeReducer';
import makeOneCakeReducer from './makeOneCakeReducer';
// Import all reducer

// Combine all reducer
const rootReducer = combineReducers({
  bahanDonut: makeOneDonutReducer,
  bahanCake: makeOneCakeReducer,
  donut: buyOneDonutReducer,
  cake: buyOneCakeReducer,
})

export default rootReducer;
