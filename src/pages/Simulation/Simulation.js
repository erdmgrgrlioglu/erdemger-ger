import { PentagonButton } from "../../components";
import PageTemplate from "../PageTemplate";

export default function SimulationPage() {
  const HanldeCheck = (event) => {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
  };

  return (
    <PageTemplate name="S1MULAT1ON.JS" id="simulation">
      <PentagonButton onClick={HanldeCheck}>
        <div>D0N_T CL1CK</div>
      </PentagonButton>
    </PageTemplate>
  );
}
