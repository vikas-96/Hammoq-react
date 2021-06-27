import React from "react";

class Errorboundries extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: error });
  }

  render() {
    if (this.state.hasError) {
      return <p>Error!</p>;
    }
    return this.props.children;
  }
}

export default Errorboundries;