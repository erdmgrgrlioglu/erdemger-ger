import { ConeMesh, TorusMesh, TorusKnotMesh, GridMesh } from "../meshes";

import Rotate from "../Rotate/Rotate";
import Marker from "../Marker/Marker";

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
      <GridMesh />
    </>
  );
}
