import * as types from './actionTypeList';

export function statementRequestRequestReducer(state = false, action) {
  if (action.type === types.STATMENT_REQUEST_IS_LOADING) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.STATMENT_REQUEST_SUCCESSED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  if (action.type === types.STATMENT_REQUEST_FAILED) {
    return Object.assign({}, state, {
      isFail: action.isFail,
      isLoading: action.isLoading,
      isSuccessed: action.isSuccessed,
      message: action.message,
      response: action.response,
    });
  }

  return state;
}