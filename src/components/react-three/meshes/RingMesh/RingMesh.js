import { DoubleSide } from "three";

export default function RingMesh(props) {
  return (
    <mesh {...props}>
      <ringGeometry attach="geometry" args={[1.1, 1.2, 50, 1]} />
      <meshStandardMaterial
        side={DoubleSide}
        attach="material"
        color="#4b988a"
        visible={props.visible}
      />
    </mesh>
  );
}
