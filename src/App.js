import "./App.module.scss";

import React from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div className="App-header">
        <h2>{t("Welcome_to_React")}</h2>
        <button onClick={() => changeLanguage("de")}>tr</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <div>{t("localization_testing")}</div>
      </div>
    );
  }
  return <span>Loading...</span>;
}
