import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import OrganisationCard from './OrganisationCard';
import OrganisationForm from './OrganisationForm';

import { GLOBAL_STYLE, CONTAINER_MAX_WIDTH } from './../style';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing(3),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  gridItem: {
    width: theme.spacing(47),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    height: theme.spacing(5),
  },
  addAccount: {
    marginTop: theme.spacing(3),
    height: theme.spacing(5),
    color: theme.palette.primary.main,
  }
}));

function OrganisationsView(props) {
  const classes = useStyles();
  const globalStyle = GLOBAL_STYLE();

  const [addOrg, setAddOrg] = React.useState(false);
  const openAddOrgLayer = () => setAddOrg(true);
  const closeAddOrgLayer = () => setAddOrg(false);

  const orgList = props.orgs.map((item, index) => 
    <OrganisationCard
      item={item}
      index={index}
      key={item.orgId}
      selected={props.selected}
      selectOrg={props.selectOrg}
      selectAcc={props.selectAcc}

      addOrgForUpdate={props.addOrgForUpdate}
      saveUpdatedOrg={props.saveUpdatedOrg}
      addAccToUpdateOrg={props.addAccToUpdateOrg}
      removeAccFromUpdateOrg={props.removeAccFromUpdateOrg}
      updateOrg={props.updateOrg}
      updateAccInUpdateOrg={props.updateAccInUpdateOrg}

      removeOrg={props.removeOrg}
    />)

  return (
    <div className={globalStyle.paper}>
      <Container component="main" maxWidth={CONTAINER_MAX_WIDTH} className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Organisations
        </Typography>
        <Grid container justify="space-evenly" alignItems="flex-start">
          {orgList}
          <Grid item>
            <Button variant="outlined" onClick={openAddOrgLayer} className={classes.addAccount} >
              Add Organisation
            </Button>
          </Grid>
        </Grid>
      </Container>
      <OrganisationForm 
        item={item}
        close={closeAddOrgLayer}
        open={addOrg}
        save={props.saveNewOrg}
        addAcc={props.addAccToNewOrg}
        removeAcc={props.removeAccFromNewOrg}
        updateOrg={props.updateNewOrg}
        updateAcc={props.updateAccInNewOrg}
      />
    </div>
    )
}

let item = {
  orgName: "Organisation name3",
  orgId: "Organisation id3",
  payerName: "Payer name3",
  payerInn: "Payer inn3",
  payerId: "Payer id3",
  accounts: [{
    payerBankCity: "Payer bank city3.1",
    payerBankSettlementType: "Payer settlement type3.1",
    accountId: "accountId3.1",
    account: "Account3.1",
    bankName: "Bank name3.1",
    bankBic: "Bank BIC3.1",
    bankCorrAccount: "Bank corr account3.1",
  }],
};

export default OrganisationsView;

