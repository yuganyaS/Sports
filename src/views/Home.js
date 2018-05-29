import React, { Component } from 'react';
import Updates from '../components/Updates';
import Content from '../components/Content';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Updates />
        <Content />
      </React.Fragment>
    );
  }
}

export default Home;
