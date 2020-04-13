import * as Actions from '../../actions/userActions';

const initialState = {
  pending: false,
  user: {},
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }

    case Actions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        error: false,
      };
    }
    case Actions.GET_USER_ERROR: {
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

export default userReducer;
