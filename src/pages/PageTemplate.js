import { useNavigate } from "react-router-dom";
import { Barcode } from "../components";
import { FaXmark } from "react-icons/fa6";

import classes from "./Pages.module.scss";

export default function PageTemplate(props) {
  let navigate = useNavigate();

  return (
    <div className={classes.overlay}>
      <div className={classes.titleBar}>
        <Barcode
          value={props.name}
          className={classes.barcode}
          pixelRatio={10}
          lineColor={"#d64440"}
        />
        <div className={classes.title}>{props.name}</div>
        <div
          className={classes.close}
          onClick={() => {
            navigate("/");
          }}
        >
          <FaXmark size="4vmin" />
        </div>
      </div>
      <div className={classes.contentParent}>{props.children}</div>
    </div>
  );
}
