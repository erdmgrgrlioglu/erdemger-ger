import { useState } from "react";

import LineMesh from "./meshes/LineMesh";
import RingMesh from "./meshes/RingMesh";

import SelectBilboard from "./meshes/SelectBillboard";
import TextBilboard from "./meshes/TextBillboard";

export default function Marker(props) {
  function MarkerLines(props) {
    return (
      <group>
        <LineMesh
          points={[
            [0, 1.2, 0],
            [0, 10, 0],
          ]}
          visible={props.visible}
        />
        <LineMesh
          points={[
            [0, -1.2, 0],
            [0, -10, 0],
          ]}
          visible={props.visible}
        />
        <LineMesh
          points={[
            [1.2, 0, 0],
            [20, 0, 0],
          ]}
          visible={props.visible}
        />
        <LineMesh
          points={[
            [-1.2, 0, 0],
            [-20, 0, 0],
          ]}
          visible={props.visible}
        />
      </group>
    );
  }

  const [hasFocus, setFocus] = useState(false);

  //optimize hasFocus. when clicked, change opactiy rather than loading new meshes
  return (
    <group {...props}>
      <group rotation={[-0.7, 0, 0]}>
        <RingMesh visible={hasFocus} />
        <MarkerLines visible={hasFocus} />
      </group>
      <mesh
        onClick={(event) => (setFocus(true), event.stopPropagation())}
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