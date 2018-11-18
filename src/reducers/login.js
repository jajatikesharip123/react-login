import * as Type from '../actions/types';

const defaultComments = {};

export const login = (state = defaultComments, action) => {
  switch (action.type) {
    case Type.LOGIN :
      return {
        ...state,
        login: [...action.login]
      }
    default :
      return state;
  }
}
