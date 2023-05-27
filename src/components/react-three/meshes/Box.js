export default function Box(props) {
  const mesh = useRef();
  return (
    <mesh {...props}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
