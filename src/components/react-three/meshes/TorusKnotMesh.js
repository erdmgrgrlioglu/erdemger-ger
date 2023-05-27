export default function TorusKnotMesh(props) {
  return (
    <mesh {...props}>
      <torusKnotGeometry attach="geometry" args={[0.5, 0.15, 40, 5]} />
      <meshLambertMaterial attach="material" color="#4b988a" wireframe />
    </mesh>
  );
}
