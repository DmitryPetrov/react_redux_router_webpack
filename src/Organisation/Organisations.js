import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { getOrganisations, postOrganisation} from './actionCreators/actionCreatorsRequest';
import { putOrganisation, deleteOrganisation } from './actionCreators/actionCreatorsRequest';
import { selectOrganisation, selectAccount } from './actionCreators/actionCreatorsSelectOrg';

import OrganisationsView from './OrganisationsView';

function Organisations(props) {

  const [orgs, setOrgs] = React.useState(props.organisations);

  React.useEffect(() => {
    console.log(props.organisations)
    if (props.organisations !== undefined){
      setOrgs(props.organisations)
    }
  }, [props.organisations]);

  const getOrgs = () => store.dispatch(getOrganisations());

  const selectOrg = index => {
    store.dispatch(selectOrganisation(index));
    selectAcc(0);
  };
  const selectAcc = index => store.dispatch(selectAccount(index));

  const saveUpdatedOrg = (data, index) => {
    orgs[index] = Object.assign({}, orgs[index], data);
    store.dispatch(putOrganisation(data, data.id));
  }

  const saveNewOrg = data => {
    setOrgs(orgs.concat(Object.assign({}, data)))
    store.dispatch(postOrganisation(data));
  }

  const removeOrg = indexOrg => {
    store.dispatch(deleteOrganisation(orgs[indexOrg].id));
    setOrgs(orgs.filter((item, index) => (index === indexOrg) ? false : true ));
  }

  return (
    <div className="Organisations">
      <OrganisationsView
        selectOrg={selectOrg}
        selectAcc={selectAcc}
        getOrgs={getOrgs}
        saveUpdatedOrg={saveUpdatedOrg}
        saveNewOrg={saveNewOrg}
        removeOrg={removeOrg}
        orgs={orgs}
        selected={props.selectedOrg}
      />
    </div>
  )
}

function mapStateToProps(store) {
  return {
    selectedOrg: store.organisation.selectedOrg,
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

