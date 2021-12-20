import {
  AUTHENTICATE,
  //  LOGIN, SIGNUP
  LOGOUT,
} from './userActions';

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: // handles both reg. & login
      return {
        token: action.token,
        userId: action.userId,
      };

    case LOGOUT:
      return initialState;

    // case SIGNUP:
    //   return {
    //     // below logic is required is the sign up process returns any key or user id which we need in redux store
    //     token: action.token,
    //     userId: action.userId,
    //   };
    default:
      return state;
  }
};
