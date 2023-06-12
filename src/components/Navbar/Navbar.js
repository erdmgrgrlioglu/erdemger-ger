import classes from "./Navbar.module.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll"; //https://www.npmjs.com/package/react-scroll

import Time from "../Time/Time";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  let navigate = useNavigate();
  var scroll = Scroll.animateScroll;

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
            scroll.scrollTo(0);
          }}
        >
          <p>Console</p>
        </div>
        <div className={classes.menu}>
          <div
            className={`${classes.container} ${
              isActive ? classes.change : null
            }`}
            onClick={() => {
              setActive(!isActive);
            }}
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
            scroll.scrollTo(1000);
          }}
        >
          <p>Projects</p>
        </div>
        <div
          className={classes.dropdownItem}
          onClick={() => {
            setActive(false);
            navigate("/about");
            scroll.scrollTo(1000);
          }}
        >
          <p>About</p>
        </div>
      </div>
    </header>
  );
}
