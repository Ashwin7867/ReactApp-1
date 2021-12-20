// export const SIGNUP = 'SIGN_UP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE'; // currently this line handles both register & login
export const LOGOUT = 'LOGOUT';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticate = (userId, token) => {
  return {
    type: 'AUTHENTICATE',
    userId: userId,
    token: token,
  };
};

export const signup = (email, password, username) => {
  console.log('signup action', email, password, username);
  return async (dispatch) => {
    const response = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
    if (!response) {
      throw new Error('Something went wrong ..!!');
      // more detail error handling can be done
    }
    const resData = await response.json(); // convert from json to js type
    console.log(resData);
    // dispatch({ type: SIGNUP, token: resData.idToken, userid: resData.localId }); // this depends on the backend api
    dispatch(authenticate(resData.localId, resData.idToken));
  };
};

export const login = (email, password) => {
  console.log('signin action', email, password);
  return async (dispatch) => {
    const response = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response) {
      const errorResData = await response.json();
      throw new Error('Something went wrong ..!!');
      // more detail error handling can be done
    }
    const resData = await response.json(); // convert from json to js type
    console.log(resData);
    // dispatch({ type: LOGIN, token: resData.idToken, userid: resData.localId }); // this depends on the backend api
    dispatch(authenticate(resData.localId, resData.idToken));

    // here we can add token expiration logic if required by the backend
    saveDataToStorage(resData.idToken, resData.localId);
  };
};

export const Logout = () => {
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
    })
  );
};
