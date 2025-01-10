import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CamControls from "../react-three/CamControls/CamControls";
import Model from "../react-three/Model/Model";
import ConnectingBox from "../ConnectingBox/ConnectingBox";

import classes from "./Renderer.module.scss";

export default function Renderer() {
  return (
    <div className={classes.background}>
      <div className={classes.top}>
        <ConnectingBox />
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <CamControls />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
