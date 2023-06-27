import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PentagonButton } from "../../components";

import PageTemplate from "../PageTemplate";

import classes from "../Pages.module.scss";

export default function SimulationPage() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <PageTemplate name={t("page.simulation.title")} id="simulation">
      <Link
        to="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        target="_blank"
        className={classes.content}
      >
        <PentagonButton>{t("page.simulation.text")}</PentagonButton>
      </Link>
    </PageTemplate>
  );
}
