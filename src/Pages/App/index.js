import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import { Toolbar } from "../../Components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import SideBar from "../../Components/SideBar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import Login from "../Login";
import SignUp from "../SignUp";
import LogOut from "../../Components/LogOut";
import { Redirect } from "react-router-dom";
import * as actions from "../../Redux/Action/LoginAction";
import * as SignUpAction from "../../Redux/Action/SignUpAction";

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSidebar = () => {
    this.setState((prevstate) => {
      return { showSideBar: !prevstate.showSideBar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = localStorage.getItem("expireDate");
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.AutoLogOutMillSecond(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.autoLogOut();
      }
    }
  };

  render() {
    return (
      <div>
        <SideBar
          toggleSidebar={this.toggleSidebar}
          showSideBar={this.state.showSideBar}
        />
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <div className={css.Content}>
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={LogOut} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerBuilder} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signUpReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.signInUserSuccess(token, userId)),
    autoLogOut: () => dispatch(SignUpAction.LogOut()),
    AutoLogOutMillSecond: () => dispatch(SignUpAction.AutoLogOutMillSecond()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
