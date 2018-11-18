import * as Type from '../actions/types';

const defaultState = {
  register: {},
};

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case Type.REGISTER :
      return {
        ...state,
        register: action.user,
      }
    default :
      return state;
  }
}
