import { useState } from "react";
import { Line } from "@react-three/drei";

import RingMesh from "../meshes/RingMesh/RingMesh";

import SelectBilboard from "../bilboards/SelectBilboard/SelectBillboard";
import TextBilboard from "../bilboards/TextBilboard/TextBillboard";

export default function Marker(props) {
  const [hasFocus, setFocus] = useState(false);

  function MarkerLines(props) {
    return (
      <group>
        <Line
          points={[
            [0, 1.2, 0],
            [0, 10, 0],
          ]}
          color="#4b988a"
          lineWidth={1}
          visible={props.visible}
        />
        <Line
          points={[
            [0, -1.2, 0],
            [0, -10, 0],
          ]}
          color="#4b988a"
          lineWidth={1}
          visible={props.visible}
        />
        <Line
          points={[
            [1.2, 0, 0],
            [20, 0, 0],
          ]}
          color="#4b988a"
          lineWidth={1}
          visible={props.visible}
        />
        <Line
          points={[
            [-1.2, 0, 0],
            [-20, 0, 0],
          ]}
          color="#4b988a"
          lineWidth={1}
          visible={props.visible}
        />
      </group>
    );
  }

  return (
    <group {...props}>
      <group rotation={[-0.7, 0, 0]}>
        <RingMesh visible={hasFocus} />
        <MarkerLines visible={hasFocus} />
      </group>
      <mesh
        onClick={(event) => {
          setFocus(true);
          event.stopPropagation();
        }}
        onPointerMissed={() => setFocus(false)}
      >
        <sphereGeometry attach="geometry" args={[1, 8, 8]} />
        <meshStandardMaterial visible={false} />
        <TextBilboard text={props.text} />
      </mesh>

      {hasFocus && (
        <SelectBilboard link={props.link} position={[0, 1.5, -1.2]} />
      )}
      {props.children}
    </group>
  );
}
