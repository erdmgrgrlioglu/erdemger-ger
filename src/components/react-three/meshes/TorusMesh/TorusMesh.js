export default function TorusMesh(props) {
  return (
    <mesh {...props}>
      <torusGeometry attach="geometry" args={[0.5, 0.2, 8, 18]} />
      <meshLambertMaterial attach="material" color="#4b988a" wireframe />
    </mesh>
  );
}
