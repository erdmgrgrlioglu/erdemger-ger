import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import useWindowDimensions from "../../WindowDimensions/WindowDimensions";

export default function CamControls() {
  const { width } = useWindowDimensions();

  var lerpVec = new THREE.Vector3(0, 5, 5);

  let interval = 1 / 30;

  useFrame((state, delta) => {
    if (delta > interval) {
      state.camera.position.lerp(lerpVec, 0.01);
      delta = delta % interval;
    }

    if (width < 950) {
      lerpVec = new THREE.Vector3(0, 8, 8);
      state.camera.lookAt(0, 2, 0);
    } else {
      lerpVec = new THREE.Vector3(0, 5, 5);
      state.camera.lookAt(0, 0, 0);
    }

    state.camera.updateProjectionMatrix();
  });
}
