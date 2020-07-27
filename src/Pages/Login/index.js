import React from "react";
import { connect } from "react-redux";
import Button from "../../Components/General/Button";
import css from "./style.module.css";
import * as actions from "../../Redux/Action/LoginAction";
import Spinner from "../../Components/General/Spinner";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className={css.Login}>
        {this.props.userId ? <Redirect to="/orders" /> : <p>Нэвтэрнэ үү !!</p>}
        <input onChange={this.changeEmail} type="text" placeholder="Email" />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="password"
        />
        {this.props.logging && <Spinner />}
        {this.props.error && (
          <div style={{ color: "red" }}>{this.props.error}</div>
        )}
        <Button text="Login" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.LoginUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    logging: state.signUpReducer.logging,
    error: state.signUpReducer.firebaseError,
    userId: state.signUpReducer.userId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
