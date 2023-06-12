import classes from "./BoxCard.module.scss";

export default function BoxCard(props) {
  return (
    <div className={classes.box}>
      <div className={classes.def}>{props.children}</div>
    </div>
  );
}
