import axios from "../../axios-orders";

export const LoadOrders = (userId) => {
  return function (dispatch, getState) {
    dispatch(loadOrdersStart());
    const token = getState().signUpReducer.token;
    axios
      .get(`/orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((reponse) => {
        const loadorders = Object.entries(reponse.data).reverse();
        dispatch(loadOrdersSuccess(loadorders));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSuccess = (loadorders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadorders,
  };
};

export const loadOrdersError = () => {
  return {
    type: "LOAD_ORDERS_ERROR",
  };
};

//Order compononent FB - rvv ogogdol hadgalah action

export const saveOrder = (NewOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signUpReducer.token;
    axios
      .post(`/orders.json?auth=${token}`, NewOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => dispatch(saveOrderError(error)));
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};

export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error,
  };
};
