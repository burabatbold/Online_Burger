import React from "react";
import css from "./style.module.css";
import logo from "../Assets/Images/burger-logo.png";

const Logo = () => (
  <div className={css.Logo}>
    <img src={logo}></img>
  </div>
);

export default Logo;
