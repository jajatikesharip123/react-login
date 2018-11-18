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
