import { combineReducers } from 'redux';

import { authorizationReducer } from "./Authorization/reducer";
import { statementRequestReducer } from "./StatementRequest/reducer";
import { payRequestReducer } from "./PayRequest/reducer";
import { requestListReducer, nextStepReducer, docTypeReducer } from "./RequestList/reducer";
import { soapMessageListReducer } from "./SoapMessageList/reducer";
import { organisationReducer } from "./Organisation/reducers/reducer";

const rootReducer = combineReducers({
	authorization: authorizationReducer,
	statementRequest: statementRequestReducer,
	payRequest: payRequestReducer,
	requestList: requestListReducer,
	nextStep: nextStepReducer,
	incoming: docTypeReducer,
	soapMessageList: soapMessageListReducer,
	organisation: organisationReducer,
})

export default rootReducer;