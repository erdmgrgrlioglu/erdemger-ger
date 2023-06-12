import Plane from "../../meshes/Plane/Plane";
import React from "react";
import { Billboard, Text } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll"; //https://www.npmjs.com/package/react-scroll

export default function SelectBilboard(props) {
  var scroll = Scroll.animateScroll;

  let navigate = useNavigate();

  return (
    <Billboard
      onClick={() => {
        navigate(props.link);
        scroll.scrollTo(1000);
      }}
      position={props.position}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <group>
        <Plane args={[6, 1]} color="#316766" />
        <Text
          color="#4b988a"
          fontSize={0.6}
          font="https://themes.googleusercontent.com/static/fonts/orbitron/v3/94ug0rEgQO_WuI_xKJMFc_esZW2xOQ-xsNqO47m55DA.woff" //fontun sunucudaki linki olarak guncellemen lazim
          anchorX="center"
          anchorY="middle"
          text="Select"
        />
      </group>
    </Billboard>
  );
}
