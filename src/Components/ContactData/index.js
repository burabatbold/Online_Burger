import React from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import css from "./style.module.css";
import Spinner from "../General/Spinner";
import axios from "../../axios-orders";
import { withRouter } from "react-router-dom";
import * as action from "../../Redux/Action/OrderAction";

class Contact extends React.Component {
  state = {
    city: null,
    name: null,
    street: null,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };
  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };
  saveOrder = () => {
    const order = {
      orts: this.props.ingredients,
      dun: this.props.price,
      userId: this.props.userId,
      hayag: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    this.props.saveOrderAction(order);
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

  render() {
    return (
      <div className={css.ContactData}>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Хот"
            />
          </div>
        )}

        <Button text="Send" btnType="Success" clicked={this.saveOrder} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signUpReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(action.saveOrder(newOrder)),
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withRouter(Contact));
