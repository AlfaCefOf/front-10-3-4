import "./style.css";
import coin from "../img/coin.png";

function Header({ startText, img, endText, textCl, onClick }) {
  return (
    <div
      className="headerLinefr"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="headerLine">
        <p style={{ color: textCl }}>{startText}</p>
        <div className="upGrage">
          {img && <img src={img} alt="" />}
          <p>+{endText}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
