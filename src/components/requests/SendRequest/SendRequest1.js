import React from 'react';
import { connect } from 'react-redux';

import store from './../../../store';
import {setOrgId, setOrgInn, setOrgName, setAccount, setBankBIC} from './../../../actions/sendRequest1DataActionCreators'
import { sendRequest1Request } from './../../../actions/sendRequest1requestActionCreators';


class SendRequest1 extends React.Component {
  constructor(props) {
    super(props);

    this.orgIdHandler = this.orgIdHandler.bind(this);
    this.orgInnHandler = this.orgInnHandler.bind(this);
    this.orgNameHandler = this.orgNameHandler.bind(this);
    this.accountHandler = this.accountHandler.bind(this);
    this.bankBICHandler = this.bankBICHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  orgIdHandler(event) {
    store.dispatch(setOrgId(event.target.value));
  }

  orgInnHandler(event) {
    store.dispatch(setOrgInn(event.target.value));
  }

  orgNameHandler(event) {
    store.dispatch(setOrgName(event.target.value));
  }

  accountHandler(event) {
    store.dispatch(setAccount(event.target.value));
  }

  bankBICHandler(event) {
    store.dispatch(setBankBIC(event.target.value));
  }

  buttonHandler(event) {
    event.preventDefault();
    console.log(this.props.sendRequest1Data);
    this.props.fetchData(this.props.sendRequest1Data);
  }

  render() {
    return (
      <div className="SendRequest1">
        <form method="post" onSubmit={this.buttonHandler}>
          <label>orgId: </label>
          <input type="text" onChange={this.orgIdHandler}/>

          <br/>
          <label>orgInn: </label>
          <input type="text" onChange={this.orgInnHandler}/>

          <br/>
          <label>orgName: </label>
          <input type="text" onChange={this.orgNameHandler}/>

          <br/>
          <label>account: </label>
          <input type="text" onChange={this.accountHandler}/>

          <br/>
          <label>bankBIC: </label>
          <input type="text" onChange={this.bankBICHandler}/>

          <br/>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
  }
}


function mapStateToProps(store) {
  return {
  	sendRequest1Data : store.sendRequest1Data,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (action) => dispatch(sendRequest1Request(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendRequest1);
