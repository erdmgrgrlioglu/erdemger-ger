import classes from "./Navbar.module.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll"; //https://www.npmjs.com/package/react-scroll

export default function Navbar() {
  const [clockState, setclockState] = useState("");
  const [isActive, setActive] = useState(false);

  let navigate = useNavigate();
  var scroll = Scroll.animateScroll;

  function getDate() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    if (String(date).length === 1) {
      date = "0" + String(date);
    }

    return [
      date,
      "-",
      month,
      String(year).substring(1, 4),
      "-",
      hour,
      min,
      " utc+3",
    ].join("");
  }

  useEffect(() => {
    setclockState(getDate()); // set on load
    setInterval(() => {
      setclockState(getDate()); // update every second
    }, 1000);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.flex_container}>
        <div className={classes.time}>
          <p>{clockState}</p>
        </div>
        <div
          className={classes.console}
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
          className={classes.flex_container}
          onClick={() => {
            navigate("/about");
            setActive(false);
            scroll.scrollTo(1000);
          }}
        >
          <p>About</p>
        </div>
        <div
          className={classes.flex_container}
          onClick={() => {
            navigate("/projects");
            setActive(false);
            scroll.scrollTo(1000);
          }}
        >
          <p>Projects</p>
        </div>
        <div
          className={classes.flex_container}
          onClick={() => {
            setActive(false);
            navigate("/about");
            scroll.scrollTo(1000);
          }}
        >
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
}
