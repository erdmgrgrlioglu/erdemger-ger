import { useTranslation } from "react-i18next";
import classes from "./ConnectingBox.module.scss";

export default function ConnectingBox() {
  const { t } = useTranslation();

  return (
    <div className={classes.background}>
      <div className={classes.dotBackground}>
        <div className={classes.dot}></div>
      </div>
      <div className={classes.text}>{t("console.connecting")}</div>
    </div>
  );
}
