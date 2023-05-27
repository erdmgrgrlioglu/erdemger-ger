export default function ConeMesh(props) {
  return (
    <mesh {...props}>
      <coneGeometry attach="geometry" args={[0.5, 1, 12, 3]} />
      <meshLambertMaterial attach="material" color="#4b988a" wireframe />
    </mesh>
  );
}
