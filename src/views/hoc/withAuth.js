import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuth = (ChildComponent) => {
  const ComposedComponent = class extends Component {
    handleNotAuthUser = () => {
      const { auth, history } = this.props;
      if (!auth) history.push('/');
    }
  
    componentDidMount() {
      this.handleNotAuthUser();
    }
  
    componentDidUpdate() {
      this.handleNotAuthUser();
    }

    render() {
      return <ChildComponent { ...this.props } />;
    }
  };

  return connect(
    ({ auth }) => ({ auth }),
    {},
  )(ComposedComponent);
};

export default withAuth;
