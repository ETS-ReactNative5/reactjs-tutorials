import React, { Component } from 'react';
import Login from '../modules/quiz/containers/loginContainer';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
