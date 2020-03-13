import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { saveNewOrganisation, addAccountToNewOrganisation, removeAccountFromNewOrganisation } from './actionCreators/actionCreatorsNewOrg';
import { updateNewOrganisation, updateAccountInNewOrganisation } from './actionCreators/actionCreatorsNewOrg';
import { getOrganisations, postOrganisation, putOrganisation, deleteOrganisation } from './actionCreators/actionCreatorsRequest';
import { selectOrganisation, selectAccount } from './actionCreators/actionCreatorsSelectOrg';
import { addOrganisationForUpdate, saveUpdatedOrganisation, addAccountToUpdateOrganisation } from './actionCreators/actionCreatorsUpdateOrg';
import { removeAccountFromUpdateOrganisation, updateExistingOrganisation, updateAccountInUpdateOrganisation } from './actionCreators/actionCreatorsUpdateOrg';
import { removeOrganisation } from './actionCreators/actionCreatorsRemoveOrg';

import OrganisationsView from './OrganisationsView';

function Organisations(props) {

  React.useEffect(() => selectOrg(0));

  const selectOrg = index => {
    store.dispatch(selectOrganisation(index))
    selectAcc(0);
  };
  const selectAcc = index => store.dispatch(selectAccount(index));

  const addOrgForUpdate = index => store.dispatch(addOrganisationForUpdate(index));
  const saveOrgForUpdate = () => {
    store.dispatch(saveUpdatedOrganisation());
    store.dispatch(postOrganisation(props.newOrg));
  }
  const addAccToUpdateOrg = account => store.dispatch(addAccountToUpdateOrganisation(account));
  const removeAccFromUpdateOrg = index => store.dispatch(removeAccountFromUpdateOrganisation(index));
  const updateExistingOrg = data => store.dispatch(updateExistingOrganisation(data));
  const updateAccInUpdateOrg = (data, index) => store.dispatch(updateAccountInUpdateOrganisation(data, index));

  const saveNewOrg = () => {
    store.dispatch(saveNewOrganisation());
    store.dispatch(putOrganisation(props.orgForUpdate, props.orgForUpdate.index));
  }
  const addAccToNewOrg = () => store.dispatch(addAccountToNewOrganisation());
  const removeAccFromNewOrg = index => store.dispatch(removeAccountFromNewOrganisation(index));
  const updateNewOrg = data => store.dispatch(updateNewOrganisation(data));
  const updateAccInNewOrg = (data, index) => store.dispatch(updateAccountInNewOrganisation(data, index));

  const getOrgs = () => store.dispatch(getOrganisations());
  const removeOrg = index => {
    store.dispatch(removeOrganisation(index));
    store.dispatch(deleteOrganisation(index));
  }

  return (
    <div className="Organisations">
      <OrganisationsView
        selectOrg={selectOrg}
        selectAcc={selectAcc}

        addOrgForUpdate={(index) => console.log("addOrgForUpdate=" + index)}
        saveUpdatedOrg={() => console.log("saveUpdatedOrg")}
        addAccToUpdateOrg={() => console.log("addAccToUpdateOrg")}
        removeAccFromUpdateOrg={(index) => console.log("removeAccFromUpdateOrg=" + index)}
        updateOrg={(data) => console.log("updateOrg={" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        updateAccInUpdateOrg={(data, index) => console.log("updateAccInUpdateOrg= " + index + ": {" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}

        saveNewOrg={() => console.log("saveNewOrg")}
        addAccToNewOrg={() => console.log("addAccToNewOrg")}
        removeAccFromNewOrg={(index) => console.log("removeAccFromNewOrg=" + index)}
        updateNewOrg={(data) => console.log("updateNewOrg={" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        updateAccInNewOrg={(data, index) => console.log("updateAccInNewOrg= " + index + ": {" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        
        removeOrg={(index) => console.log("removeOrg=" + index)}

        orgs={props.organisations}
        selected={props.selectedOrg}
      />
    </div>
  )
}

function mapStateToProps(store) {
  console.log("Organisations mapStateToProps" + 
              "selected orgId=" + store.organisation.selectedOrg.org.orgId)
  //console.log(store.organisation.selectedOrg.acc.accountId)
  return {
    selectedOrg: store.organisation.selectedOrg,
    newOrg: store.organisation.newOrg,
    orgForUpdate: store.organisation.newOrg,
    request: store.organisation.request,
    organisations: store.organisation.organisations,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        getOrgs: (action) => store.dispatch(getOrganisations(action)),
        postOrgs: (action) => store.dispatch(postOrganisation(action)),
        putOrgs: (action) => store.dispatch(putOrganisation(action)),
        deleteOrgs: (action) => store.dispatch(deleteOrganisation(action)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Organisations);

