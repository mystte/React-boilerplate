import { APP, loading, success, error } from '../actions/actionTypes';

// Default state
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case loading(APP.LOAD):
      return {
        ...state,
        loading: true,
        error: null,
      };

    case success(APP.LOAD):
      return {
        data: action.data,
        loading: false,
        error: null,
      };

    case error(APP.LOAD):
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case APP.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
  }

  return state;
}
