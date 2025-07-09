import "./style.css";

function Footer({ image, text, onClick }) {
  return (
    <div className="wrapFooter" onClick={onClick}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default Footer;
