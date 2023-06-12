import Barcode from "react-barcode"; //https://www.npmjs.com/package/react-barcode
import useWindowDimensions from "../../components/WindowDimensions/WindowDimensions";

import ParallelogramCard from "../../components/ParallelogramCard/ParallelogramCard";
//import BoxCard from "../components/BoxCard";

import classes from "../Pages.module.scss";

export default function SimulationPage() {
  const { width } = useWindowDimensions();
  var barcodeWidth = width / 500;

  const HanldeCheck = (event) => {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
  };

  return (
    <div className={classes.overlay}>
      <div id="simulation" className={classes.flex_container}>
        <div className={classes.title}>C0M1NG_S00N</div>
        <div className={classes.flex_child}>
          <div className={classes.barcode}>
            <Barcode
              value="S1MULAT1ON.JS" //"www.youtube.com/watch?v=dQw4w9WgXcQ"
              height={50}
              width={barcodeWidth}
              background="#1b0e1e"
              lineColor="#d64440"
              margin={0}
              displayValue={false}
            />
          </div>
        </div>
      </div>
      <div className={classes.contentParent}>
        <ParallelogramCard onClick={HanldeCheck}>
          <div>D0N_T CL1CK</div>
        </ParallelogramCard>
      </div>
    </div>
  );
}
