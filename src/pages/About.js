import { useState } from "react";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  //FaDiscord,
} from "react-icons/fa";
import Barcode from "react-barcode"; //https://www.npmjs.com/package/react-barcode
import useWindowDimensions from "../components/WindowDimensions";

import ParallelogramCard from "../components/ParallelogramCard";
import BoxCard from "../components/BoxCard";

import classes from "./Content.module.scss";

export default function AboutPage() {
  const { width } = useWindowDimensions();
  var barcodeWidth = width / 300;

  const [checkState, setState] = useState(0);

  const HanldeCheck = (event) => {
    setState(parseInt(event.currentTarget.id));

    //console.log(event.currentTarget.id);
  };

  return (
    <>
      <div id="about" className={classes.flex_container}>
        <div className={classes.title}>AB0_UT</div>
        <div className={classes.flex_child}>
          <div className={classes.barcode}>
            <Barcode
              value="AB0_UT" //"www.youtube.com/watch?v=dQw4w9WgXcQ"
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
            <div>AB_0UT.M3</div>
          </ParallelogramCard>
          <ParallelogramCard id="1" onClick={HanldeCheck}>
            <div>TH1S_W3BS1T3</div>
          </ParallelogramCard>
          <ParallelogramCard id="2" onClick={HanldeCheck}>
            <div>L1F3.EXE</div>
          </ParallelogramCard>
          <ParallelogramCard id="3" onClick={HanldeCheck}>
            <div>C0NT4CT.M3</div>
          </ParallelogramCard>
        </div>
        <div className={classes.vl}></div>
        <div className={classes.content}>
          {checkState === 0 && (
            <BoxCard>
              <div className={classes.bold}>AB_0UT.M3</div>
              <img
                alt=""
                className={classes.contentImage}
                src={require("../placeholder.png")}
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
                src={require("../placeholder.png")}
              />
              <div className={classes.contentText}>
                Bir Web 3.0 Projesi yapma isteginden yola cikarak
                tasarlanmistir. yapiminda web gelistirmenin guncel
                teknolojilerinden faydalandim. "futuristik", "cyberpunk" dizayn
                prensiplerine sagdik kalmaya calistim. three.js, Sass ve cokca
                react kutuphanesi kullanilmisdir.
              </div>
            </BoxCard>
          )}
          {checkState === 2 && (
            <BoxCard>
              <div className={classes.bold}>L1F3.EXE</div>
              <img
                alt=""
                className={classes.contentImage}
                src={require("../placeholder.png")}
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
              <div className={classes.contentParent}>
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
      </div>
    </>
  );
}
//<FaDiscord size="10vw" onClick={() => { window.open("", "_blank"); }} />
