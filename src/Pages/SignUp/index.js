import React from "react";
import { connect } from "react-redux";
import Button from "../../Components/General/Button";
import css from "./style.module.css";
import * as actions from "../../Redux/Action/SignUpAction";
import Spinner from "../../Components/General/Spinner";
import { Redirect } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    password1: "",
    error: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  SignUp = () => {
    this.props.signUpUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.signUp}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Та өөрийн мэдээллээ оруулна уу..</h1>
        <input onChange={this.changeEmail} type="text" placeholder="Email" />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="password"
        />
        <input type="password" placeholder="password again" />
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        {this.props.saving && <Spinner />}
        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}
        <Button text="SignUp" btnType="Success" clicked={this.SignUp} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, password) =>
      dispatch(actions.signUpUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    saving: state.signUpReducer.saving,
    firebaseError: state.signUpReducer.firebaseError,
    userId: state.signUpReducer.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
