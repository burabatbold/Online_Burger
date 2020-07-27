import React, { Fragment } from "react";
import MenuItem from "../MenuItems";
import css from "./style.module.css";
import { connect } from "react-redux";
const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link="/">
            Шинэ захиалга
          </MenuItem>
          <MenuItem link="/orders">захиалганууд</MenuItem>
          <MenuItem link="/logout">Гарах</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link="/login">Нэвтрэх</MenuItem>
          <MenuItem link="/signup">Бүртгүүлэх</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signUpReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
