import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CamControls from "./react-three/CamControls";
import Model from "./react-three/Model";
import ConnectingBox from "./ConnectingBox";

import classes from "./Renderer.module.scss";

export default function Renderer() {
  return (
    <div className={classes.background}>
      <div className={classes.top}>
        <ConnectingBox />
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
  );
}
