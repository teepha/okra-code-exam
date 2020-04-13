export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUserPending = () => ({
  type: GET_USER_PENDING,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserError = error => ({
  type: GET_USER_ERROR,
  error,
});
