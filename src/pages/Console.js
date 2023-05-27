import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";

import CamControls from "../components/react-three/CamControls";
import Model from "../components/react-three/Model";

import classes from "./Console.module.scss";

function Console() {
  return (
    <>
      <Loader />
      <div className={classes.console}>
        <div className={classes.siteName}>erdem_ger.ger</div>
        <div className={classes.canvas}>
          <div className={classes.canvasTop}>
            <div className={classes.connectingParent}>
              <div className={classes.connectingBackground}>
                <div className={classes.connecting}></div>
              </div>
              <div className={classes.connectingText}>connecting</div>
            </div>
          </div>
          <Canvas>
            <ambientLight intensity={0.8} />
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <CamControls />
              <Model />
            </Suspense>
          </Canvas>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.bottomContainerChild}>
            <div className={classes.scrollText}>
              <p>
                SGVsbG8gV29ybGQhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1E
              </p>
            </div>
          </div>
          <div className={classes.bottomContainerChild}>V 0 . 0 . 1</div>
        </div>
      </div>
    </>
  );
}

export default Console;
