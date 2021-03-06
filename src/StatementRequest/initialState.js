import { v1 as generateUUID } from 'uuid';

import { REQUEST } from './../globalInitialState'

const FROM_DATE_DEFAULT_VALUE = "2019-11-13T00:00:00.715+03:00"
const TO_DATE_DEFAULT_VALUE = "2019-11-13T00:00:00.715+03:00";
const DOC_DATE_DEFAULT_VALUE = "2019-11-15T00:00:00";
const DOC_ID_DEFAULT_VALUE = generateUUID();
const DOC_NUMBER_DEFAULT_VALUE = "78";
const ORG_ID_DEFAULT_VALUE = "0ce353c5-9a53-497d-ad02-df1fb6c37feb";
const ORG_INN_DEFAULT_VALUE = "7842170415";
const ORG_NAME_DEFAULT_VALUE = "АО \"РЗК\"";

const ACCOUNT_DEFAULT_VALUE = "40702810800000005897";
const BANK_BIC_DEFAULT_VALUE = "044030861";
const BANK_NAME_DEFAULT_VALUE = "АО \"АБ \"РОССИЯ\"";

export const DIGEST_SCHEME_INFO = {
    digestScheme: "com.bssys.sbns.dbo.rur.statement.R010SignDigest",
    digestSchemeFormat: "",
    digestSchemeVersion: "5",
};


export const ACCOUT_DATA = {
    account: ACCOUNT_DEFAULT_VALUE,
    bankBic: BANK_BIC_DEFAULT_VALUE,
    bankName: BANK_NAME_DEFAULT_VALUE,
};

export const DATA = {
    docDate: DOC_DATE_DEFAULT_VALUE,
    docId: DOC_ID_DEFAULT_VALUE,
    docNumber: DOC_NUMBER_DEFAULT_VALUE,
    fromDate: FROM_DATE_DEFAULT_VALUE,
    orgId: ORG_ID_DEFAULT_VALUE,
    orgInn: ORG_INN_DEFAULT_VALUE,
    orgName: ORG_NAME_DEFAULT_VALUE,
    toDate: TO_DATE_DEFAULT_VALUE,
    accounts: [ACCOUT_DATA],
};

export const STATEMENT_REQUEST = {
    data: DATA,
    request: REQUEST,
}

