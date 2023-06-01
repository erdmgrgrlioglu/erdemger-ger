import Renderer from "../components/Renderer";

import classes from "./Console.module.scss";

export default function Console() {
  return (
    <div className={classes.center}>
      <div className={classes.top}>erdem_ger.ger</div>
      <Renderer />
      <div className={classes.bottom}>
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
        <div>V 0 . 0 . 1</div>
      </div>
    </div>
  );
}
