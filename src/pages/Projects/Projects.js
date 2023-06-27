import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaInstagramSquare, FaReact, FaLink } from "react-icons/fa";
import { PentagonButton, BoxCard } from "../../components";

import PageTemplate from "../PageTemplate";

import classes from "../Pages.module.scss";

export default function ProjectsPage() {
  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));
  };

  const { t } = useTranslation();

  return (
    <PageTemplate name={t("page.projects.title")} id="projects">
      <div className={classes.content}>
        <PentagonButton
          id="0"
          onClick={HanldeCheck}
          className={checkState === 0 ? classes.focus : ""}
        >
          {t("page.projects.content.general.title")}
        </PentagonButton>
        <PentagonButton
          id="1"
          onClick={HanldeCheck}
          className={checkState === 1 ? classes.focus : ""}
        >
          {t("page.projects.content.web_dev.title")}
        </PentagonButton>
        <PentagonButton
          id="2"
          onClick={HanldeCheck}
          className={checkState === 2 ? classes.focus : ""}
        >
          {t("page.projects.content.game_dev.title")}
        </PentagonButton>
        <PentagonButton
          id="3"
          onClick={HanldeCheck}
          className={checkState === 3 ? classes.focus : ""}
        >
          {t("page.projects.content.music_mp4.title")}
        </PentagonButton>
      </div>
      <div className={classes.content}>
        {checkState === 0 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.projects.content.general.title")}
            </div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../images/ai_art.webp")}
            />
            <div className={classes.contentText}>
              {t("page.projects.content.general.text")}
            </div>
          </BoxCard>
        )}
        {checkState === 1 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.projects.content.web_dev.title")}
            </div>
            <div>
              <FaReact size="20vmin" />
            </div>

            <div className={classes.contentText}>
              {t("page.projects.content.web_dev.text")}
            </div>
          </BoxCard>
        )}
        {checkState === 2 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.projects.content.game_dev.title")}
            </div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../images/PixelCosmos_Studios_Logo.webp")}
            />
            <div className={classes.contentText}>
              <span>{t("page.projects.content.game_dev.text")}</span>
              <p />
              <span className={classes.bold}>
                {t("page.projects.content.game_dev.text1")}
              </span>
              <span>{t("page.projects.content.game_dev.text2")}</span>
              <span>{t("page.projects.content.game_dev.text3")}</span>
              <p />
              <span>
                <Link>
                  <FaLink size="15" />
                  PixelCosmos Studios
                </Link>
              </span>
            </div>
          </BoxCard>
        )}
        {checkState === 3 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.projects.content.music_mp4.title")}
            </div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../images/Trio.webp")}
            />
            <div className={classes.contentText}>
              {t("page.projects.content.music_mp4.text")}
            </div>
            <Link
              to="https://instagram.com/triodreirad?r=nametag"
              target="_blank"
            >
              <FaInstagramSquare size="10vw" />
            </Link>
          </BoxCard>
        )}
      </div>
    </PageTemplate>
  );
}
