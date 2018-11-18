// import * as ReadableAPI from '../utils/api';
import * as Type from './types';

// CATEGORIES
export const login = (categories) => ({
  type: Type.LOGIN,
  categories
})
// export const fetchCategories = () => dispatch => (
//   ReadableAPI
//     .getCategories()
//     .then(categories => dispatch(setCategories(categories)))
// )
