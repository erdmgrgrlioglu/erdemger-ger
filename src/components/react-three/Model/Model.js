import { ConeMesh, TorusMesh, TorusKnotMesh, GridMesh } from "../meshes";
import { useTranslation } from "react-i18next";

import Rotate from "../Rotate/Rotate";
import Marker from "../Marker/Marker";

export default function Model() {
  const { t } = useTranslation();

  return (
    <>
      <Marker
        link="/projects"
        text={t("page.projects.title")}
        position={[-3.5, 1.5, -2]}
      >
        <Rotate>
          <ConeMesh />
        </Rotate>
      </Marker>
      <Marker
        link="/about"
        text={t("page.about.title")}
        position={[0, 1.5, 1.5]}
      >
        <Rotate>
          <TorusMesh />
        </Rotate>
      </Marker>
      <Marker link="/simulation" text={"???"} position={[3.5, 1.5, -2]}>
        <Rotate>
          <TorusKnotMesh />
        </Rotate>
      </Marker>
      <GridMesh />
    </>
  );
}
