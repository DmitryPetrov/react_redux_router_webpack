import React from 'react';

import SoapMessageList from './../../components/SoapMessageList'

class GetRequestStatus extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      showStatus: false,
      showStatusButtonName: 'Expand',
    }

    this.expandHandler = this.expandHandler.bind(this);
  }

  expandHandler(event) {
    event.preventDefault();

    if (this.state.showStatus) {
      this.setState(
        {
          showStatus: false,
          showStatusButtonName: 'Expand',
        }
      );
    } else {
      this.setState(
        {
          showStatus: true,
          showStatusButtonName: 'Collapse',
        }
      );
    }
  }

  render() {
    if (this.props.request.isFail === true) {
      return (
        <div className="GetRequestStatus">
          <h2>Request status: {this.props.request.message}</h2>
        </div>
        );
    }

    if (this.props.request.isLoading === true) {
      return (
        <div className="GetRequestStatus">
          <h2>Request status: {this.props.request.message}</h2>
        </div>
        );
    }

    if (this.props.request.isSuccessed === true) {

      if(this.props.request.response.status === "ERROR") {
        return (
          <div className="GetRequestStatus">
            <h2>Request status: {this.props.request.message}</h2>
            <h3>Request status: {this.props.request.response.status}</h3>
            <h3>Request status: {this.props.request.response.message}</h3>
            <br />
            <SoapMessageList list={this.props.request.response.soapMessageList}/>
          </div>
        )
      }


      let element = null;
      let getRequestStatus = null;

      if (this.state.showStatus) {
        getRequestStatus = JSON.stringify(this.props.request.response.object, undefined, 2);
        element = <p><b>State: {this.props.request.response.object.stateResponse.state}</b></p>;
      } else {
        element = 
          <p>
            <b>State: {this.props.request.response.object.stateResponse.state}</b>
            <br/>Doc type: {this.props.request.response.object.stateResponse.docType}          
            <br/>Doc id: {this.props.request.response.object.stateResponse.docId}
            <br/>Request id: {this.props.request.response.object.attrRequestId}
            <br/>Response id: {this.props.request.response.object.attrResponseId}
          </p>;
      }

      return (
        <div className="GetRequestStatus">
          <h2>Request status: {this.props.request.response.message}</h2>
          {element}
          <pre>{getRequestStatus}</pre>
          <input type="button" value={this.state.showStatusButtonName} onClick={this.expandHandler}/>
        </div>
        );
    }

    return (
      <div className="GetRequestStatus">
      </div>
    );
  }
}

export default (GetRequestStatus);
