/* eslint-disable import/prefer-default-export */
import * as Actions from '../actions/transactionActions';
import { BASEURL } from '../utils/helpers';

export const getAllTransactions = () => (dispatch) => {
  dispatch(Actions.getAllTransactionsPending());
  fetch(`${BASEURL}/api/transactions`)
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(Actions.getAllTransactionsSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      dispatch(Actions.getAllTransactionsError(error));
    });
};
