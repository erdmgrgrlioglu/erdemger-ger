import { DoubleSide, Color } from "three";

export default function GridMesh() {
  const gridColor = new Color("#d64440");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial side={DoubleSide} visible={false} />
      <gridHelper
        rotation={[-Math.PI / 2, 0, 0]}
        args={[20, 20, gridColor, gridColor]}
      />
    </mesh>
  );
}
