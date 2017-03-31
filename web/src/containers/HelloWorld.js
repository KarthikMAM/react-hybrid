import React from "react";
import { connect } from "react-redux";
import { actions } from "state";

import { HelloWorld } from "../components";

class HelloWorldContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.toggleHello();
  }

  render() {
    return <HelloWorld greeting={this.props.greeting} onClickHandler={this.onClickHandler} />;
  }
}

HelloWorldContainer.propTypes = {
  toggleHello: React.PropTypes.func,
  greeting: React.PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  greeting: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleHello: () => { dispatch(actions.toggleHello()); }
});


const container = connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
export { container as HelloWorld };