//import Test from "../Test";
import Grid from "./meshes/Grid";
import TorusMesh from "./meshes/TorusMesh";
import TorusKnotMesh from "./meshes/TorusKnotMesh";
import ConeMesh from "./meshes/ConeMesh";

import Rotate from "./Rotate";
import Marker from "./Marker";

//S1MULAT1ON.JS
export default function Model() {
  return (
    <>
      <Marker link="/projects" text={"_PR0J3CTS"} position={[-3.5, 1.5, -2]}>
        <Rotate>
          <ConeMesh />
        </Rotate>
      </Marker>
      <Marker link="/about" text={"AB0_UT"} position={[0, 1.5, 1.5]}>
        <Rotate>
          <TorusMesh />
        </Rotate>
      </Marker>
      <Marker link="/simulation" text={"???"} position={[3.5, 1.5, -2]}>
        <Rotate>
          <TorusKnotMesh />
        </Rotate>
      </Marker>
      <Grid />
    </>
  );
}
