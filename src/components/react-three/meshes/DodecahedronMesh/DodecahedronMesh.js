export default function DodecahedronMesh(props) {
  return (
    <mesh {...props}>
      <dodecahedronGeometry attach="geometry" args={[0.5, 2]} />
      <meshBasicMaterial attach="material" color="#d64440" wireframe />
    </mesh>
  );
}
