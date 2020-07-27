import React from "react";
import { connect } from "react-redux";
import BurgerIngeredients from "../BurgerIngeredients";
import css from "./style.module.css";
import BurgerIngredients from "../BurgerIngeredients";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];
  items.forEach((el, index) => {
    for (let i = 0; i < el[1]; i++)
      content.push(
        <BurgerIngeredients type={el[0]} key={`${index + 1}${i + 1}`} />
      );
  });
  if (content.length === 0)
    content = <p>Хачиртай талхны орцоо сонгоно уу ...</p>;
  return (
    <div className={css.burger}>
      <BurgerIngeredients type="bread-top" />
      {/* <BurgerIngeredients type="salad" />
      <BurgerIngeredients type="bacon" />
      <BurgerIngeredients type="cheese" />
      <BurgerIngeredients type="meat" />
      <BurgerIngeredients type="meat" /> */}
      {content}

      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { orts: state.burgerReducer.ingredients };
};

export default connect(mapStatetoProps)(withRouter(Burger));
