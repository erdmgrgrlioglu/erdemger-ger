import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Rotate(props) {
  const ref = useRef(0);
  var rotationSpeed = new THREE.Vector3(0.01, 0.01, 0.01);

  if (props.rotationSpeed != null) {
    rotationSpeed = new THREE.Vector3(
      props.rotationSpeed[0],
      props.rotationSpeed[1],
      props.rotationSpeed[2]
    );
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += rotationSpeed.x;
      ref.current.rotation.y += rotationSpeed.y;
      ref.current.rotation.z += rotationSpeed.z;
    }
  });

  return (
    <group {...props} ref={ref}>
      {props.children}
    </group>
  );
}
