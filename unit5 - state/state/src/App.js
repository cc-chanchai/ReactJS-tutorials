import React, { Component } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    user: 'chanchai',
    password: 1234,
    address: {
      houseNo: '343',
      province: "bangkok"
    }
  }
  userClick = () => {
    this.setState({
      user: 'cc-chanchai',
      password: 1111
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 mx-auto mt-5">
            <div className="card ml-5 mr-5">
              <div className="card-header text-right">
                <button className="btn btn-success btn-sm" onClick={this.userClick}>Click me!</button>
              </div>
              <div className="card-body">
                <span className="ml-2"> user : {this.state.user} </span><br />
                <span className="ml-2"> user : {this.state.password} </span><br />
                <span className="ml-2"> user : {this.state.address.houseNo} </span><br />
                <span className="ml-2"> user : {this.state.address.province} </span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
