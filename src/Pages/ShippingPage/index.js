import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import css from "./style.module.css";
import Burger from "../../Components/Burger";
import Button from "../../Components/General/Button";
import Contact from "../../Components/ContactData";

class ShippingPage extends React.Component {
  // state = {
  //   ingredients: {},
  //   price: 0,
  // };
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const orts = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     if (param[0] !== "dun") orts[param[0]] = param[1];
  //     else price = param[1];
  //   }
  //   this.setState({ ingredients: orts, price });
  // }

  goBack = () => {
    this.props.history.goBack();
  };
  continue = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "25px", textAlign: "center" }}>
          <strong>Үнэ : {this.props.price} ₮</strong>
        </p>
        <Burger />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="Захиалгыг устгах"
        />
        <Button
          clicked={this.continue}
          btnType="Success"
          text="Хүргэлтийн мэдээлэл оруулах"
        />
        <Route path="/ship/contact" component={Contact}>
          <Contact price={this.props.price} />
        </Route>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStatetoProps)(ShippingPage);
