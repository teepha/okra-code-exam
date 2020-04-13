export const GET_ALL_TRANSACTIONS_PENDING = 'GET_ALL_TRANSACTIONS_PENDING';
export const GET_ALL_TRANSACTIONS_ERROR = 'GET_ALL_TRANSACTIONS_ERROR';
export const GET_ALL_TRANSACTIONS_SUCCESS = 'GET_ALL_TRANSACTIONS_SUCCESS';

export const getAllTransactionsPending = () => ({
  type: GET_ALL_TRANSACTIONS_PENDING,
});

export const getAllTransactionsSuccess = transactions => ({
  type: GET_ALL_TRANSACTIONS_SUCCESS,
  transactions,
});

export const getAllTransactionsError = error => ({
  type: GET_ALL_TRANSACTIONS_ERROR,
  error,
});
