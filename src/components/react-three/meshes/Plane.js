export default function Plane(props) {
  //[-Math.PI / 2, 0, 0]
  return (
    <mesh position={props.position} rotation={props.rotation}>
      <planeGeometry attach="geometry" args={props.args} />
      <meshLambertMaterial attach="material" color={props.color} />
    </mesh>
  );
}
