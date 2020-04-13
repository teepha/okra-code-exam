import { combineReducers } from 'redux';
import allTransactions from './transactions/allTransactionsReducer';
import userDetails from './users/userReducer';

const rootReducer = combineReducers({
  transactions: allTransactions,
  user: userDetails
});

export default rootReducer;
