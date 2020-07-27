import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Spinner from "../../Components/General/Spinner";
import axios from "../../axios-orders";
import Order from "../../Components/Order";
import * as action from "../../Redux/Action/OrderAction";
class OrderPage extends React.Component {
  componentDidMount = () => {
    this.props.loadOrders(this.props.userId);
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => (
            <Order key={el[0]} orders={el[1]}></Order>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signUpReducer.userId,
  };
};

const mapDispatchToProps = (dipsatch) => {
  return {
    loadOrders: (userId) => dipsatch(action.LoadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
