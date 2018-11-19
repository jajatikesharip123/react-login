import * as ReadableAPI from '../helpers/api';
import * as Type from './types';

// LOGIN
export const register = (user) => ({
  type: Type.REGISTER,
  user
})
export const fetchRegister = (user) => dispatch => (
  ReadableAPI
    .registerUser(user)
    .then(result => {
      console.log('RES', result);
      if (result.ok) {
        dispatch(register(user));
      }
    })
)
export const login = (user) => ({
  type: Type.LOGIN,
  user
})
export const loginErr = (message) => ({
  type: Type.ERROR,
  message
})
export const fetchLogin = (username, password) => dispatch => (
  ReadableAPI
    .loginUser(username, password)
    .then(result => {
      console.log('RES', result);
      if (result && result.token) {
        dispatch(login(username));
      } else {
        dispatch(loginErr('Username or password is incorrect'));
      }
    })
)
