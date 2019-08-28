import axios from 'axios';

import * as types from './actionTypeList';

const NEXT_STEP_URL = "/request/nextStep"

function incomingIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: NEXT_STEP_URL + ' is loading',
        response: null,
    };
}
function incomingSuccessed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSuccessed: true,
        message: NEXT_STEP_URL + ' successed',
        response: response,
    };
}
function incomingFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: NEXT_STEP_URL + ' failed',
        response: errorMessage,
    };
}
export function incomingRequest(requestBody) {
  return (dispatch) => {
    dispatch(incomingIsLoading());
    axios
      .post(NEXT_STEP_URL, requestBody)
      .then(response => {
        dispatch(incomingSuccessed(response.data));
      })
      .catch(function (error) {
        dispatch(incomingFailed(error.message));
      });
  };
}



export function setDocType(data, index) {
    return {
        type: types.SET_DOC_TYPE,
        docType: data,
        index: index,
    };
}
export function addDocType() {
    return {
        type: types.ADD_DOC_TYPE,
    };
}
export function removeDocType(index) {
    return {
        type: types.REMOVE_DOC_TYPE,
        index: index,
    };
}



function requestListIsLoading() {
	return {
		type: types.REQUEST_LIST_IS_LOADING,
		isFail: false,
		isLoading: true,
		isSuccessed: false,
		message: '"/requestList" is loading',
		response: null,
	};
}
function requestListSuccessed(response) {
	return {
		type: types.REQUEST_LIST_SUCCESSED,
		isFail: false,
		isLoading: false,
		isSuccessed: true,
		message: '"/requestList" successed',
		response: response,
	};
}
function requestListFailed(errorMessage) {
	return {
		type: types.REQUEST_LIST_FAILED,
		isFail: true,
		isLoading: false,
		isSuccessed: false,
		message: '"/requestList" failed',
		response: errorMessage,
	};
}
export function requestListRequest() {
  return (dispatch) => {
    dispatch(requestListIsLoading());
//     axios
//       .get('/requestList')
//       .then(response => {
//         dispatch(requestListSuccessed(response.data));
//       })
//       .catch(function (error) {
//         dispatch(requestListFailed(error.message));
//       });
//   };
// }

dispatch(requestListSuccessed(
{
    "status": "OK",
    "message": "Request list",
    "requestChain": null,
    "requestChainList": [
        {
            "user": {
                "userName": "testui",
                "password": "ZWF5S2",
                "sessionId": "b659b3b6-6618-44e8-bb0b-36f932d58259"
            },
            "phase": "STATEMENT_REQUEST",
            "requestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
            "responseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
            "statementRequestStatus": "DELIVERED",
            "incomingRequestId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
            "incomingResponseId": "b58d3c03-4904-4a04-8d3c-0a0b6e585874",
            "statementDocumentStatus": "ACCEPTED",
            "statementRequest": {
                "requestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "responseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
                "requestName": "Statement request",
                "attrRequestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "attrVersion": "1",
                "acceptDate": "",
                "bankMessage": "",
                "bankMessageAuthor": "",
                "docDate": "2018-05-15T17:08:00",
                "docId": "0b64c0df-1690-4c15-0000-000000000020",
                "docNumber": "78",
                "docTypeVersion": "",
                "externalId": "",
                "externalUPGId": "",
                "fromDate": "2018-05-07T00:00:00.715+03:00",
                "lastModifyDate": "",
                "messageOnlyForBank": "",
                "orgId": "0ce353c5-9a53-497d-ad02-df1fb6c37feb",
                "orgInn": "7842170415",
                "orgName": "АО РЗК",
                "template": "",
                "toDate": "2018-05-14T00:00:00.715+03:00",
                "accounts": [
                    {
                        "account": "40702810800000005897",
                        "bankBIC": "044030861",
                        "bankName": "АО \"АБ \"РОССИЯ\""
                    }
                ],
                "signCollection": {
                    "bankMessage": "",
                    "digestName": "",
                    "signs": []
                }
            },
            "getRequestStatus": null,
            "incoming": null,
            "statementDocument": null,
        }
    ],
    "soapMessageList": null
}
));

    };
}



function nextStepIsLoading() {
    return {
        type: types.NEXT_STEP_IS_LOADING,
        isFail: false,
        isLoading: true,
        isSuccessed: false,
        message: NEXT_STEP_URL + ' is loading',
        response: undefined,
    };
}
function nextStepSuccessed(response) {
    return {
        type: types.NEXT_STEP_SUCCESSED,
        isFail: false,
        isLoading: false,
        isSuccessed: true,
        message: NEXT_STEP_URL + ' successed',
        response: response,
    };
}
function nextStepFailed(errorMessage) {
    return {
        type: types.NEXT_STEP_FAILED,
        isFail: true,
        isLoading: false,
        isSuccessed: false,
        message: NEXT_STEP_URL + ' failed',
        response: errorMessage,
    };
}
export function nextStepRequest(requestParam) {
  return (dispatch) => {
    dispatch(nextStepIsLoading());
    // axios
    //   .get(NEXT_STEP_URL, {params: {responseId: requestParam}})
    //   .then(response => {
    //     dispatch(nextStepSuccessed(response.data));
    //   })
    //   .catch(function (error) {
    //     dispatch(nextStepFailed(error.message));
    //   });
    // };

dispatch(nextStepSuccessed(
{
    "status": "OK",
    "message": "Request list",
    "requestChainList": null,
    "requestChain": 
        {
            "user": {
                "userName": "testui",
                "password": "ZWF5S2",
                "sessionId": "b659b3b6-6618-44e8-bb0b-36f932d58259"
            },
            "phase": "STATEMENT_REQUEST_STATUS",
            "requestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
            "responseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
            "statementRequestStatus": "DELIVERED",
            "incomingRequestId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
            "incomingResponseId": "b58d3c03-4904-4a04-8d3c-0a0b6e585874",
            "statementDocumentStatus": "ACCEPTED",
            "statementRequest": {
                "requestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "responseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
                "requestName": "Statement request",
                "attrRequestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "attrVersion": "1",
                "acceptDate": "",
                "bankMessage": "",
                "bankMessageAuthor": "",
                "docDate": "2018-05-15T17:08:00",
                "docId": "0b64c0df-1690-4c15-0000-000000000020",
                "docNumber": "78",
                "docTypeVersion": "",
                "externalId": "",
                "externalUPGId": "",
                "fromDate": "2018-05-07T00:00:00.715+03:00",
                "lastModifyDate": "",
                "messageOnlyForBank": "",
                "orgId": "0ce353c5-9a53-497d-ad02-df1fb6c37feb",
                "orgInn": "7842170415",
                "orgName": "АО РЗК",
                "template": "",
                "toDate": "2018-05-14T00:00:00.715+03:00",
                "accounts": [
                    {
                        "account": "40702810800000005897",
                        "bankBIC": "044030861",
                        "bankName": "АО \"АБ \"РОССИЯ\""
                    }
                ],
                "signCollection": {
                    "bankMessage": "",
                    "digestName": "",
                    "signs": []
                }
            },
            "getRequestStatus": {
                "requestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "responseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
                "requestName": "Get Request Status",
                "attrCreateTime": "2019-08-27T09:41:25",
                "attrRequestId": "1852ccae-e9b2-48bf-adbd-6027653f194d",
                "attrResponseId": "379a8201-9200-42a6-a015-bf54aba0e0b8",
                "attrSender": "DBO",
                "attrVersion": "2.0",
                "notProcessedYet": false,
                "stateResponseList": [
                    {
                        "bankMessage": "",
                        "bankMessageAuthor": "",
                        "createTime": "",
                        "docId": "0b64c0df-1690-4c15-0000-000000000020",
                        "docType": "StatementRequest",
                        "extId": "e4d8df72-a8b8-446f-97a1-da817b16a40d",
                        "messageOnlyForBank": "",
                        "operationDate": "",
                        "state": "DELIVERED"
                    }
                ],
                "statementList": [
                    {
                        "acceptDate": "",
                        "account": "",
                        "accountId": "",
                        "actual": "",
                        "author": "",
                        "bankBIC": "",
                        "bankName": "",
                        "bankNameBIC": "",
                        "card1Sum": "",
                        "card2Sum": "",
                        "creditReturn": "",
                        "creditReturnNat": "",
                        "currCode": "",
                        "currIsoCode": "",
                        "debetReturn": "",
                        "debetReturnNat": "",
                        "docComment": "",
                        "docDate": "",
                        "docNumber": "",
                        "docTypeVersion": "",
                        "externalId": "",
                        "fromDate": "",
                        "hashcode": "",
                        "inboundBalance": "",
                        "inboundBalanceNat": "",
                        "indexed": "",
                        "isFinal": "",
                        "lastOperationDate": "",
                        "oldDocId": "",
                        "orgInn": "",
                        "orgName": "",
                        "outboundBalance": "",
                        "outboundBalanceNat": "",
                        "planOutboundBalance": "",
                        "prevOperationDate": "",
                        "rateIn": "",
                        "rateInFull": "",
                        "rateOut": "",
                        "rateOutFull": "",
                        "requestId": "",
                        "seizureAmount": "",
                        "seizureWholeAmount": "",
                        "toDate": "",
                        "operations": [],
                        "signCollection": {
                            "bankMessage": "",
                            "digestName": "",
                            "signs": []
                        }
                    }
                ]
            },
            "incoming": null,
            "statementDocument": null,
        }
    ,
    "soapMessageList": null
}
));

}
}