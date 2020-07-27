import axios from "axios";

export const signUpUser = (email, password) => {
  return function (dispatch) {
    dispatch(signUpUserStart());
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfyA2Q20ou6kVVTinfZu4pQSX1MbA1alU

    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfyA2Q20ou6kVVTinfZu4pQSX1MbA1alU",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(signUpUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signUpUserError(err));
      });
  };
};

export const signUpUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};

export const signUpUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId,
  };
};

export const signUpUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};

export const LogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: "LOG_OUT",
  };
};

export const AutoLogOutMillSecond = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(LogOut());
    }, ms);
  };
};
