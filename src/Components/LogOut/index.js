import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/Action/SignUpAction";
import { Redirect } from "react-router-dom";
class LogOut extends React.Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.LogOut()),
  };
};

export default connect(null, mapDispatchToProps)(LogOut);
