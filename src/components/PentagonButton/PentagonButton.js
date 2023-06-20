import classes from "./PentagonButton.module.scss";

export default function PentagonButton(props) {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className={`${classes.outside} ${props.className}`}
    >
      <div className={classes.inside}>{props.children}</div>
    </div>
  );
}
