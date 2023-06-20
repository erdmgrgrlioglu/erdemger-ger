import React, { useState } from "react";
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
  FaCreativeCommonsSa,
  FaLanguage,
} from "react-icons/fa";
import classes from "./Footer.module.scss";
import { Tube } from "@react-three/drei";

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
      <div>
        <FaLanguage
          size="20"
          onClick={() => {
            setActive(!isActive);
          }}
        />
        <div className={isActive ? classes.dropdown.open : classes.dropdown}>
          <div className={classes.dropdownItemParent}>
            <div
              className={classes.dropdownItem}
              onClick={() => {
                setActive(false);
              }}
            >
              English
            </div>
            <div
              className={classes.dropdownItem}
              onClick={() => {
                setActive(false);
              }}
            >
              Deutsch
            </div>
            <div
              className={classes.dropdownItem}
              onClick={() => {
                setActive(false);
              }}
            >
              Turkce
            </div>
          </div>
        </div>
      </div>
      <div>
        <FaCreativeCommons />
        <FaCreativeCommonsBy />
        <FaCreativeCommonsNc />
        <FaCreativeCommonsSa />
      </div>
      <div>V 0 . 0 . 1</div>
    </footer>
  );
}
