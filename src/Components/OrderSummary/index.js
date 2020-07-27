import React from "react";
import { connect } from "react-redux";
import * as action from "../../Redux/Action/BurgerAction";
import Button from "../General/Button";

const Ordersummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд :</p>
      <ul>
        {Object.keys(props.ingredients).map((el, index) => {
          return (
            <li key={`${el}${index}`}>
              {props.controls[el]} : {props.ingredients[el]}
            </li>
          );
        })}
      </ul>
      <p>
        Хачиртай талханы үнэ : <b>{props.price} ₮</b>
      </p>
      <Button
        btnType="Danger"
        text="Татгалзах"
        clicked={props.closeConfirmModal}
      />
      <Button btnType="Success" text="Үргэлжлүүлэх" clicked={props.continue} />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    controls: state.burgerReducer.ingredientsNames,
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStatetoProps)(Ordersummary);
