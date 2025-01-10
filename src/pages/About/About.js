import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaUser,
  FaGraduationCap,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { PentagonButton, BoxCard } from "../../components";

import PageTemplate from "../PageTemplate";

import classes from "../Pages.module.scss";

export default function AboutPage() {
  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));
  };

  const { t } = useTranslation();

  const age = new Date().getFullYear() - 2003;

  return (
    <PageTemplate name={t("page.about.title")} id="about">
      <div className={classes.content}>
        <PentagonButton
          id="0"
          onClick={HanldeCheck}
          className={checkState === 0 ? classes.focus : ""}
        >
          {t("page.about.content.about_me.title")}
        </PentagonButton>
        <PentagonButton
          id="1"
          onClick={HanldeCheck}
          className={checkState === 1 ? classes.focus : ""}
        >
          {t("page.about.content.this_website.title")}
        </PentagonButton>
        <PentagonButton
          id="2"
          onClick={HanldeCheck}
          className={checkState === 2 ? classes.focus : ""}
        >
          {t("page.about.content.life_exe.title")}
        </PentagonButton>
        <PentagonButton
          id="3"
          onClick={HanldeCheck}
          className={checkState === 3 ? classes.focus : ""}
        >
          {t("page.about.content.contact_me.title")}
        </PentagonButton>
      </div>
      <div className={classes.content}>
        {checkState === 0 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.about.content.about_me.title")}
            </div>
            <div>
              <FaUser size="10vmin" />
            </div>
            <div className={classes.contentText}>
              {t("page.about.content.about_me.text", { age })}
            </div>
          </BoxCard>
        )}
        {checkState === 1 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.about.content.this_website.title")}
            </div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../images/cyberpunk.webp")}
            />
            <div className={classes.contentText}>
              {t("page.about.content.this_website.text")}
            </div>
          </BoxCard>
        )}
        {checkState === 2 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.about.content.life_exe.title")}
            </div>
            <div>
              <FaGraduationCap size="10vmin" />
            </div>
            <div className={classes.contentText}>
              <p>{t("page.about.content.life_exe.text")}</p>
              <p>{t("page.about.content.life_exe.text1")}</p>
              <p>{t("page.about.content.life_exe.text2")}</p>
              <p>{t("page.about.content.life_exe.text3")}</p>
            </div>
          </BoxCard>
        )}
        {checkState === 3 && (
          <BoxCard>
            <div className={classes.bold}>
              {t("page.about.content.contact_me.title")}
            </div>
            <div>
              <Link
                to="https://instagram.com/erdmgrgrlioglu?r=nametag"
                target="_blank"
              >
                <FaInstagramSquare size="10vw" />
              </Link>
              <Link to="https://github.com/erdmgrgrlioglu" target="_blank">
                <FaGithubSquare size="10vw" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/erdem-gergerlio%C4%9Flu-1596891a1/"
                target="_blank"
              >
                <FaLinkedin size="10vw" />
              </Link>
            </div>
            <div className={classes.contentText}></div>
          </BoxCard>
        )}
      </div>
    </PageTemplate>
  );
}
