import React from "react";
import './error-boundary.style.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="errorImageOverlay">
          <div className="errorImageContainer" />
          <p className="errorImageText">The page is dead</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
