import React, { useState } from "react";
import i18next from "i18next";
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
  FaLanguage,
  FaBug,
} from "react-icons/fa";
import classes from "./Footer.module.scss";

export default function Footer() {
  const [isActive, setActive] = useState(false);

  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.text}>
          <div className={classes.textScroll}>
            <div>
              <p>
                SGVsbG8gV29ybGQhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1E
              </p>
              <p>
                SGVsbG8gV29ybGQhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1E
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classes.language}
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <FaLanguage size="20" />
        <div className={isActive ? classes.open : classes.dropdown}>
          <div
            className={classes.dropdownItem}
            onClick={() => {
              setActive(false);
              i18next.changeLanguage("en");
            }}
          >
            <div>English</div>
          </div>
          <div
            className={classes.dropdownItem}
            onClick={() => {
              setActive(false);
              i18next.changeLanguage("de");
            }}
          >
            <div>Deutsch</div>
          </div>
          <div
            className={classes.dropdownItem}
            onClick={() => {
              setActive(false);
              i18next.changeLanguage("tr");
            }}
          >
            <div>Türkçe</div>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <FaCreativeCommons />
        <FaCreativeCommonsBy />
        <FaCreativeCommonsNc />
        <FaCreativeCommonsSa />
      </div>
      <div>
        <div className={classes.bug}>
          <FaBug size="10" />V 1 . 0 . 1
        </div>
      </div>
    </footer>
  );
}
