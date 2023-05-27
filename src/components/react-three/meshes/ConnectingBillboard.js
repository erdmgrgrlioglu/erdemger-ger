import Plane from "./Plane";
import { Billboard, Text } from "@react-three/drei";

export default function ConnectingBilboard(props) {
  return (
    <Billboard
      position={props.position}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <group position={[8, 3, 0]}>
        <Plane args={[6, 1]} color="#d64440" />
        <Text
          position={[-2, 0, 0]}
          color="#4b988a"
          fontSize={0.6}
          font="http://localhost:3000/static/media/bios_bold.34480aef4954934e06be.otf" //fontun sunucudaki linki olarak guncellemen lazim
          anchorX="left"
          anchorY="middle"
          text="Connecting..."
        />
        <Plane position={[-2.5, 0, 0]} args={[0.8, 0.8]} color="#1b0e1e" />
      </group>
    </Billboard>
  );
}
