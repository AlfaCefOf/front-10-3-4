import React, { useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import coin from "./assets/img/coin.png";
import coinBig from "./assets/img/bigCoin.png";
import hamster from "./assets/img/hamster.png";
import thunder from "./assets/img/thunder.png";
import Footer from "./assets/Footer";
import logo1 from "./assets/img/binance.png";
import logo2 from "./assets/img/mine.png";
import logo3 from "./assets/img/friends.png";
import logo4 from "./assets/img/earn.png";
import logo5 from "./assets/img/drop.png";
import ShowHidden from "./assets/ShowHidden";
import hideLogo from "./assets/img/hide.png";
import icon1 from "./assets/img/iconShow1.png";
import icon2 from "./assets/img/iconShow2.png";
import icon3 from "./assets/img/iconShow3.png";
import EarnTap from "./assets/EarnTap";

function App() {
  const [son, setSon] = useState(507981);
  const [show, setShow] = useState(false);
  const [showLevels, setShowLevels] = useState(false);

  return (
    <>
      <div className="allCombat">
        <h2 className="stText">Hamster Kombat</h2>
        <div className="headerSection">
          <div className="headerTop">
            <Header
              textCl="#F79841"
              startText="Earn per tap"
              img={coin}
              endText="1"
              onClick={() => setShowLevels(true)}
            />
            <Header
              textCl="#6F72E2"
              startText="Coins to level up"
              endText="10 M"
            />
            <Header
              textCl="#84CB69"
              startText="Profit per hour"
              img={coin}
              endText="100"
            />
          </div>

          {showLevels && (
            <div className="levelWrapper">
              <img
                onClick={() => setShowLevels(false)}
                className="hideLevel"
                src={hideLogo}
                alt=""
              />

              <div className="levelLine">
                <EarnTap level="1" bonus="2" buy="1000" />
                <EarnTap level="2" bonus="3" buy="2500" />
                <EarnTap level="3" bonus="4" buy="6000" />
              </div>
            </div>
          )}
        </div>
        <div className="score">
          <img src={coinBig} alt="" />
          <h1>{son.toLocaleString("en-US")}</h1>
        </div>

        {!show && (
          <>
            <div className="clickBox">
              <img
                onClick={() => setSon(son + 1)}
                src={hamster}
                alt="Hamster"
              />
            </div>

            <div className="score2">
              <div>
                <img src={thunder} alt="" />
                <p>6500 / 6500</p>
              </div>
              <h6>Boost</h6>
            </div>
          </>
        )}

        {show && (
          <div className="showHide">
            <img
              onClick={() => setShow(false)}
              className="hideShow"
              src={hideLogo}
              alt=""
            />

            <ShowHidden
              iconShw={icon1}
              nameShw="Тоp 10 cmc pairs"
              perText="120"
              perText2="192"
            />
            <ShowHidden
              iconShw={icon2}
              nameShw="Mene coins"
              perText="376"
              perText2="2.3K"
            />
            <ShowHidden
              iconShw={icon3}
              nameShw="Margin trading x10"
              perText="997"
              perText2="11.2K"
            />
          </div>
        )}

        <div className="footerLine">
          <Footer onClick={() => setShow(true)} image={logo1} text="Exchange" />
          <Footer image={logo2} text="Mine" />
          <Footer image={logo3} text="Friends" />
          <Footer image={logo4} text="Earn" />
          <Footer image={logo5} text="AirDrop" />
        </div>
      </div>
    </>
  );
}

export default App;
