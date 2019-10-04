import { combineReducers } from 'redux';

import { authorizationReducer } from "./Authorization/reducer";
import { statementRequestReducer } from "./StatementRequest/reducer";
import { requestListReducer, nextStepReducer, docTypeReducer } from "./RequestList/reducer";
import { soapMessageListReducer } from "./SoapMessageList/reducer";

const rootReducer = combineReducers({
	authorization: authorizationReducer,
	statementRequest: statementRequestReducer,
	requestList: requestListReducer,
	nextStep: nextStepReducer,
	incoming: docTypeReducer,
	soapMessageList: soapMessageListReducer,
})

export default rootReducer;