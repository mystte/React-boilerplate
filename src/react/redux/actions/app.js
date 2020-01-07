import { APP, loading } from './actionTypes';

export function loadAppData(cookies) {
  return {
    type: loading(APP.LOAD),
    parameters: {
      cookies,
    },
  };
}

export default null;
