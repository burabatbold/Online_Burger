import React from "react";

import css from "./style.module.css";
const Order = (props) => {
  console.log(props);
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.orders.orts.bacon}, Бяслаг :
        {props.orders.orts.cheese} , Салад : {props.orders.orts.salad} , Үхрийн
        мах : {props.orders.orts.meat}
      </p>
      <p>
        Хаяг : {props.orders.hayag.city} ||
        {props.orders.hayag.street} ||
        {props.orders.hayag.name}
      </p>
      {props.orders.dun}
    </div>
  );
};

export default Order;
