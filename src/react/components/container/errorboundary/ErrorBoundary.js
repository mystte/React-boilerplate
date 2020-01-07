import React from 'react';
import PropTypes from 'prop-types';


class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
    console.log('*** Caught error *** ', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <div>Check at the console logs for more details</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
