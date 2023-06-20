import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { BoxCard, PentagonButton } from "../../components";

import PageTemplate from "../PageTemplate";

import classes from "../Pages.module.scss";

export default function AboutPage() {
  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));
  };

  const { t } = useTranslation();

  return (
    <PageTemplate name={t("page_title_about")} id="about">
      <div className={classes.content}>
        <PentagonButton
          id="0"
          onClick={HanldeCheck}
          className={checkState === 0 ? classes.focus : ""}
        >
          AB_0UT.M3
        </PentagonButton>
        <PentagonButton
          id="1"
          onClick={HanldeCheck}
          className={checkState === 1 ? classes.focus : ""}
        >
          TH1S_W3BS1T3
        </PentagonButton>
        <PentagonButton
          id="2"
          onClick={HanldeCheck}
          className={checkState === 2 ? classes.focus : ""}
        >
          L1F3.EXE
        </PentagonButton>
        <PentagonButton
          id="3"
          onClick={HanldeCheck}
          className={checkState === 3 ? classes.focus : ""}
        >
          C0NT4CT.M3
        </PentagonButton>
      </div>
      <div className={classes.content}>
        {checkState === 0 && (
          <BoxCard>
            <div className={classes.bold}>AB_0UT.M3</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              Istanbuldaki Türk-Alman Üniversitesinin Informatik bolumu
              hazirliginda, almanca egitimime devam etmekteyim.{" "}
              {new Date().getFullYear() - 2003} Yasindayim.
            </div>
          </BoxCard>
        )}
        {checkState === 1 && (
          <BoxCard>
            <div className={classes.bold}>TH1S_W3BS1T3</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              Bir Web 3.0 Projesi yapma isteginden yola cikarak tasarlanmistir.
              yapiminda web gelistirmenin guncel teknolojilerinden faydalandim.
              "futuristik", "cyberpunk" dizayn prensiplerine sagdik kalmaya
              calistim. three.js, Sass ve cokca react kutuphanesi
              kullanilmisdir.
            </div>
          </BoxCard>
        )}
        {checkState === 2 && (
          <BoxCard>
            <div className={classes.bold}>L1F3.EXE</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              <span>Egitim</span>
              <span>2017-2021 Istanbul Capa Fen Lisesi</span>
              <span>2021-Current Turk Alman Universitesi</span>
            </div>
          </BoxCard>
        )}
        {checkState === 3 && (
          <BoxCard>
            <div className={classes.bold}>C0NT4CT.M3</div>
            <div>
              <FaInstagramSquare
                size="10vw"
                onClick={() => {
                  window.open(
                    "https://instagram.com/erdmgrgrlioglu?r=nametag",
                    "_blank"
                  );
                }}
              />
              <FaGithubSquare
                size="10vw"
                onClick={() => {
                  window.open("https://github.com/erdmgrgrlioglu", "_blank");
                }}
              />
              <FaLinkedin
                size="10vw"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/erdem-gergerlio%C4%9Flu-1596891a1/",
                    "_blank"
                  );
                }}
              />
            </div>
            <div className={classes.contentText}></div>
          </BoxCard>
        )}
      </div>
    </PageTemplate>
  );
}
//<FaDiscord size="10vw" onClick={() => { window.open("", "_blank"); }} />
