const { default: reducer } = require("./BurgerReducer");

const initialState = {
  saving: false,
  loggin: false,
  firebaseError: null,
  token: null,
  userId: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
      };
    case "signIn_USER_START":
      return {
        ...state,
        logging: true,
      };

    case "signIn_USER_SUCCESS":
      return {
        ...state,
        logging: false,
        token: action.token,
        userId: action.userId,
      };
    case "signIn_USER_ERROR":
      return {
        ...state,
        logging: false,
        firebaseError: action.error.response.data.error.message,
      };

    case "LOG_OUT":
      return {
        ...state,
        token: null,
        userId: null,
        firebaseError: null,
      };

    default:
      return state;
  }
};

export default signUpReducer;
