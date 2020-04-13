import * as Actions from '../../actions/transactionActions';

const initialState = {
  pending: false,
  transactions: [],
  error: false,
};

const allTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_TRANSACTIONS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }

    case Actions.GET_ALL_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transactions: action.transactions,
        error: false,
      };
    }
    case Actions.GET_ALL_TRANSACTIONS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default allTransactionsReducer;
