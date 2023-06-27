import { useEffect, useState } from "react";

import { Billboard, Text3D, Center } from "@react-three/drei";
import i18next from "i18next";

import GlobalFont from "../../../../fonts/Oxanium.json";

export default function TextBilboard(props) {
  const [rerender, activateRerender] = useState(true);

  function handleLanguageChanged() {
    activateRerender(!rerender);
  }

  useEffect(() => {
    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, [handleLanguageChanged]);

  return (
    <Billboard position={[0, -1.2, 1]} follow={true}>
      <Center cacheKey={rerender}>
        <Text3D size={0.6} font={GlobalFont} height={0.01} position={[0, 0, 0]}>
          <meshLambertMaterial attach="material" color="#4b988a" />
          {props.text}
        </Text3D>
      </Center>
    </Billboard>
  );
}
