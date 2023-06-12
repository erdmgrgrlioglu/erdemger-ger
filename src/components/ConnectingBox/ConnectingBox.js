import classes from "./ConnectingBox.module.scss";

export default function ConnectingBox() {
  return (
    <div className={classes.background}>
      <div className={classes.dotBackground}>
        <div className={classes.dot}></div>
      </div>
      <div className={classes.text}>connecting</div>
    </div>
  );
}
