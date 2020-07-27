import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../Components/Burger";
import BuildControls from "../../Components/BuildControls";
import Modal from "../../Components/General/Modal";
import Ordersummary from "../../Components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../Components/General/Spinner";
import * as actions from "../../Redux/Action/BurgerAction";

class BurgerBuilder extends Component {
  state = {
    confirmOrder: false,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        let arr = Object.entries(response.data);
        arr.reverse();
      })
      .catch((err) => console.log(err))
      .finally(this.setState({ loading: false }));
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continue = (props) => {
    this.props.history.push("/ship");
  };
  //   const param = [];
  //   for (let orts in this.props.burgeriinOrts) {
  //     param.push(orts + "=" + this.props.burgeriinOrts[orts]);
  //   }

  //   param.push("dun=" + this.props.niitUne);

  //   const query = param.join("&");
  //   this.closeConfirmModal();

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Ordersummary
              closeConfirmModal={this.closeConfirmModal}
              continue={this.continue}
            />
          )}
        </Modal>

        <Burger />
        <BuildControls showconfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerBuilder;
