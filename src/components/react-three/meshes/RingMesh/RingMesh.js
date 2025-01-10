export default function RingMesh(props) {
  return (
    <mesh {...props}>
      <ringGeometry attach="geometry" args={[1.1, 1.2, 50, 1]} />
      <meshBasicMaterial
        side={2}
        attach="material"
        color="#4b988a"
        visible={props.visible}
      />
    </mesh>
  );
}
