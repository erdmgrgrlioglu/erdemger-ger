import classes from "./Footer.module.scss";

export default function Footer() {
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
      <div>V 0 . 0 . 1</div>
    </footer>
  );
}
