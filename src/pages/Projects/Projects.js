import { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { PentagonButton, BoxCard } from "../../components";
import PageTemplate from "../PageTemplate";

import classes from "../Pages.module.scss";

export default function ProjectsPage() {
  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));
  };

  return (
    <PageTemplate name="_PR0J3CTS" id="projects">
      <div className={classes.content}>
        <PentagonButton
          id="0"
          onClick={HanldeCheck}
          className={checkState === 0 ? classes.focus : ""}
        >
          _G3NER4L
        </PentagonButton>
        <PentagonButton
          id="1"
          onClick={HanldeCheck}
          className={checkState === 1 ? classes.focus : ""}
        >
          W3B.DEV
        </PentagonButton>
        <PentagonButton
          id="2"
          onClick={HanldeCheck}
          className={checkState === 2 ? classes.focus : ""}
        >
          G4ME.DEV
        </PentagonButton>
        <PentagonButton
          id="3"
          onClick={HanldeCheck}
          className={checkState === 3 ? classes.focus : ""}
        >
          MUS1C_MP4
        </PentagonButton>
      </div>
      <div className={classes.content}>
        {checkState === 0 && (
          <BoxCard>
            <div className={classes.bold}>_G3NER4L</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              Yazilim, Teknoloji, Sanat alanlarinda projeler yapmaktayim.
            </div>
          </BoxCard>
        )}
        {checkState === 1 && (
          <BoxCard>
            <div className={classes.bold}>W3B.DEV</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              Bu websitesi 1 hafta suresince ogrendigim React.js, Sass,
              Three.js, Decenterilized Domains, Web3.0 teknolojileri ile
              desteklenmekedir.
            </div>
          </BoxCard>
        )}
        {checkState === 2 && (
          <BoxCard>
            <div className={classes.bold}>G4ME.DEV</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              <span>
                Kucuk capli mobil oyun gelistirme calismalarim devam etmekte.
              </span>
              <p />
              <span className={classes.bold}>Ilgilendigim Basliklar</span>
              <span>Unity 2D Game Development</span>
              <span>Unity Netcode</span>
            </div>
          </BoxCard>
        )}
        {checkState === 3 && (
          <BoxCard>
            <div className={classes.bold}>MUS1C_MP4</div>
            <img
              alt=""
              className={classes.contentImage}
              src={require("../../placeholder.png")}
            />
            <div className={classes.contentText}>
              "TRIO_DREIRAD" adinda arkadaslarimla beraber kurdugumuz yayli bir
              trioda cellist olarak calmaktayim.
            </div>
            <FaInstagramSquare
              size="10vw"
              onClick={() => {
                window.open(
                  "https://instagram.com/triodreirad?r=nametag",
                  "_blank"
                );
              }}
            />
          </BoxCard>
        )}
      </div>
    </PageTemplate>
  );
}
