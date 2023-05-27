import { useState } from "react";
import Barcode from "react-barcode"; //https://www.npmjs.com/package/react-barcode
import { FaInstagramSquare } from "react-icons/fa";
import useWindowDimensions from "../components/WindowDimensions";

import ParallelogramCard from "../components/ParallelogramCard";
import BoxCard from "../components/BoxCard";

import classes from "./Content.module.scss";

export default function ProjectsPage() {
  const { width } = useWindowDimensions();
  var barcodeWidth = width / 500;

  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));

    //console.log(event.currentTarget.id);
  };

  return (
    <>
      <div id="projects" className={classes.flex_container}>
        <div className={classes.title}>_PR0J3CTS</div>
        <div className={classes.flex_child}>
          <div className={classes.barcode}>
            <Barcode
              value="_PR0J3CTS" //"www.youtube.com/watch?v=dQw4w9WgXcQ"
              height={50}
              width={barcodeWidth}
              background="#1b0e1e"
              lineColor="#d64440"
              margin={0}
              displayValue={false}
            />
          </div>
        </div>
      </div>
      <div className={classes.contentParent}>
        <div className={classes.content}>
          <ParallelogramCard id="0" onClick={HanldeCheck}>
            <div>_G3NER4L</div>
          </ParallelogramCard>
          <ParallelogramCard id="1" onClick={HanldeCheck}>
            <div>W3B.DEV</div>
          </ParallelogramCard>
          <ParallelogramCard id="2" onClick={HanldeCheck}>
            <div>G4ME.DEV</div>
          </ParallelogramCard>
          <ParallelogramCard id="3" onClick={HanldeCheck}>
            <div>MUS1C_MP4</div>
          </ParallelogramCard>
        </div>
        <div className={classes.vl}></div>
        <div className={classes.content}>
          {checkState === 0 && (
            <BoxCard>
              <div className={classes.bold}>_G3NER4L</div>
              <img
                alt=""
                className={classes.contentImage}
                src={require("../placeholder.png")}
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
                src={require("../placeholder.png")}
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
                src={require("../placeholder.png")}
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
                src={require("../placeholder.png")}
              />
              <div className={classes.contentText}>
                "TRIO_DREIRAD" adinda arkadaslarimla beraber kurdugumuz yayli
                bir trioda cellist olarak calmaktayim.
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
      </div>
    </>
  );
}
