import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import { addDocType } from './actionCreatorList';
import { incomingRequest } from './actionCreatorList';
import DocTypelist from './DocTypeList'
import { RequestStyle } from './../style';


class IncomingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestData: {
        incomingId: '(initialState)',
        attrRequestId: this.props.responseId,
        timestamp: '(initialState)',
      }
    }

    this.incomingIdHandler = this.incomingIdHandler.bind(this);
    this.timestampHandler = this.timestampHandler.bind(this);

    this.addDocTypeHandler = this.addDocTypeHandler.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
  }

  incomingIdHandler(event) {
    this.setState(
      {
        requestData: Object.assign(
          {}, 
          this.state.requestData,
          {incomingId: event.target.value}
        )
      }
    );
  }

  timestampHandler(event) {
    this.setState(
      {
        requestData:Object.assign(
          {}, 
          this.state.requestData,
          {timestamp: event.target.value}
        )
      }
    );
  }


  addDocTypeHandler(event) {
    event.preventDefault();
    store.dispatch(addDocType());
  }

  submitHandler(event) {
    event.preventDefault();

    let docTypes =  this.props.incomingDocTypes.docTypes.filter(function(item) {
      return item !== undefined;
    });

    let requestData = this.state.requestData;
    requestData.docTypes = docTypes;

    this.props.fetchData(requestData);
  }

  render() {
    return (
      <div className="IncomingForm" style={RequestStyle}>
        <form method="post" id="StatementRequestForm" onSubmit={this.submitHandler} >
          <br/>
          <label>Incoming id: </label>
          <input type="text" onChange={this.incomingIdHandler}/>

          <br/>
          <label>Timestamp: </label>
          <input type="text" onChange={this.timestampHandler}/>
        </form>
        
        <DocTypelist docTypes={this.props.incomingDocTypes.docTypes}/>

        <br/>
        <input type="button" value="Add doc type" onClick={this.addDocTypeHandler}/>      

        <br/>
        <input type="submit" form="StatementRequestForm" value="Отправить" />

      </div>
      )
  }
}

function mapStateToProps(store) { 
  return {
    incomingDocTypes: store.incomingDocTypes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(incomingRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomingForm);
