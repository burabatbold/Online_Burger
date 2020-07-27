import axios from "axios";
import * as actions from "./SignUpAction";

export const LoginUser = (email, password) => {
  return function (dispatch) {
    dispatch(signInUserStart());
    // https://identitytoolkit.googleapis.com/v1/accounts:signIn?key=AIzaSyAfyA2Q20ou6kVVTinfZu4pQSX1MbA1alU

    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfyA2Q20ou6kVVTinfZu4pQSX1MbA1alU",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        const ms = result.data.expiresIn;
        const refreshToken = result.data.refreshToken;

        const expireDate = new Date(new Date().getTime() + ms * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch(signInUserSuccess(token, userId));
        dispatch(actions.AutoLogOutMillSecond(ms * 1000));
      })
      .catch((err) => {
        dispatch(signInUserError(err));
      });
  };
};

export const signInUserStart = () => {
  return {
    type: "signIn_USER_START",
  };
};

export const signInUserSuccess = (token, userId) => {
  return {
    type: "signIn_USER_SUCCESS",
    token,
    userId,
  };
};

export const signInUserError = (error) => {
  return {
    type: "signIn_USER_ERROR",
    error,
  };
};
