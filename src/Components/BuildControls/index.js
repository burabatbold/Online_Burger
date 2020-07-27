import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/Action/BurgerAction";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  const disabledButton = { ...props.burgeriinOrts };
  for (let key in disabledButton) {
    disabledButton[key] = disabledButton[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Хачиртай талхны үнэ : <strong>{props.price} ₮</strong>
      </p>
      {Object.keys(props.controls).map((el, index) => (
        <BuildControl
          key={`${el}${index}`}
          disabled={disabledButton}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          type={el}
          orts={props.controls[el]}
        />
      ))}
      <button
        onClick={props.showconfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

const a = (state) => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    controls: state.burgerReducer.ingredientsNames,
  };
};
const b = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.RemoveIngredient(ortsNer)),
  };
};

export default connect(a, b)(BuildControls);
