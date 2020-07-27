import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.label}>{props.orts}</div>
    <button
      onClick={() => props.ortsHasah(`${props.type}`)}
      disabled={props.disabled[props.type]}
      className={css.Less}
    >
      -
    </button>
    <button
      onClick={() => props.ortsNemeh(`${props.type}`)}
      className={css.More}
    >
      +
    </button>
  </div>
);

export default BuildControl;
