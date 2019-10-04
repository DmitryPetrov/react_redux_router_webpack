import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { REQUEST } from './globalInitialState';
import { AUTORIZATION } from './Authorization/initialState';
import { STATEMENT_REQUEST } from './StatementRequest/initialState';
import { INCOMING } from './RequestList/initialState';

const initialState = {
  authorization: AUTORIZATION,
  statementRequest: STATEMENT_REQUEST,
  requestList: REQUEST,
  getRequestStatus: REQUEST,
  incoming:  INCOMING,
  soapMessageList: REQUEST,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;