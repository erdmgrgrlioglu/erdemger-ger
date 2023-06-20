import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "../Time/Time";

import classes from "./Navbar.module.scss";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  let navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.dropdownItem}>
        <div className={classes.time}>
          <Time />
        </div>
        <div
          className={classes.text}
          onClick={() => {
            setActive(false);
            navigate("");
          }}
        >
          <p>Console</p>
        </div>
        <div className={classes.menu}>
          <div
            onClick={() => {
              setActive(!isActive);
            }}
            className={`${classes.container} ${
              isActive ? classes.change : null
            }`}
          >
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
          </div>
        </div>
      </div>
      <div className={isActive ? classes.dropdown.open : classes.dropdown}>
        <div
          className={classes.dropdownItem}
          onClick={() => {
            navigate("/projects");
            setActive(false);
          }}
        >
          <p>Projects</p>
        </div>
        <div
          className={classes.dropdownItem}
          onClick={() => {
            setActive(false);
            navigate("/about");
          }}
        >
          <p>About</p>
        </div>
      </div>
    </header>
  );
}
