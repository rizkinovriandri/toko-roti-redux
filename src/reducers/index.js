// Import combineReducer untuk menggabungkan semua file reducer
import { combineReducers } from 'redux';

// Import all reducer
import bahanReducer from './bahanReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  bahan: bahanReducer,
  transaction: transactionReducer,
})

export default rootReducer;
