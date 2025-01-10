import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Billboard, Text3D, Center } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import GlobalFont from "../../../../fonts/Oxanium.json";
import Plane from "../../meshes/Plane/Plane";

export default function SelectBilboard(props) {
  let navigate = useNavigate();

  const { t } = useTranslation();

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
    <Billboard
      onClick={() => {
        navigate(props.link);
      }}
      position={props.position}
      follow={true}
    >
      <Plane args={[6, 1]} color="#316766" />
      <Center cacheKey={rerender}>
        <Text3D size={0.6} font={GlobalFont} height={0.06}>
          <meshBasicMaterial attach="material" color="#4b988a" />
          {t("console.select")}
        </Text3D>
      </Center>
    </Billboard>
  );
}
