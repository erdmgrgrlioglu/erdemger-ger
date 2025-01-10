import { Renderer } from "../../components";
import classes from "./Console.module.scss";

export default function Console() {
  return (
    <section className={classes.console}>
      <div className={classes.title}>erdem_ger.ger</div>
      <Renderer />
    </section>
  );
}
