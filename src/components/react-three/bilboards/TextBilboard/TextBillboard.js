import { Billboard, Text } from "@react-three/drei";

export default function TextBilboard(props) {
  return (
    <Billboard
      position={[0, -1.2, 1]}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <Text
        color="#4b988a"
        fontSize={0.6}
        font="https://themes.googleusercontent.com/static/fonts/orbitron/v3/94ug0rEgQO_WuI_xKJMFc_esZW2xOQ-xsNqO47m55DA.woff" //get fon link as https from server
        anchorX="center"
        anchorY="middle"
        text={props.text}
      />
    </Billboard>
  );
}
