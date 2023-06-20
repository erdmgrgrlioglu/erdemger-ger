import { Barcode } from "../components";

import classes from "./Pages.module.scss";

export default function PageTemplate(props) {
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
        <div className={classes.close}></div>
      </div>
      <div className={classes.contentParent}>{props.children}</div>
    </div>
  );
}
