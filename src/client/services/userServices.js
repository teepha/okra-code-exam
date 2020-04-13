/* eslint-disable import/prefer-default-export */
import * as Actions from '../actions/userActions';
import { BASEURL } from '../utils/helpers';

export const getUserDetails = () => (dispatch) => {
  dispatch(Actions.getUserPending());
  fetch(`${BASEURL}/api/user`)
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      dispatch(Actions.getUserSuccess(res.data));
      return res.data;
    })
    .catch((error) => {
      dispatch(Actions.getUserError(error));
    });
};
