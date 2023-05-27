import classes from "./ParallelogramCard.module.scss";

export default function ParallelogramCard(props) {
  //`${classes.parallelogram} ${props.isLarge && classes.large}`
  return (
    <>
      <div
        id={props.id}
        onClick={props.onClick}
        className={classes.parallelogram}
      >
        <div className={classes.def}>{props.children}</div>
      </div>
    </>
  );
}
