import * as Type from '../actions/types';

const defaultState = {
  register: {},
  userLogin: {},
  messageErr: {},
};

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case Type.REGISTER :
      return {
        ...state,
        register: action.user,
      }
    case Type.LOGIN :
      return {
        ...state,
        userLogin: action.user,
      }
    case Type.ERROR :
      return {
        ...state,
        messageErr: action.user,
      }
    default :
      return state;
  }
}
