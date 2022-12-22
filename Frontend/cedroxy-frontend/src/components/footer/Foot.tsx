import "./Foot.css";

//logos
import WaIcon from "../../assets/wtsp.png";
import EmIcon from "../../assets/email.png";
import YtIcon from "../../assets/YouTube.png";
import FbIcon from "../../assets/facebook.png";
import IgIcon from "../../assets/instagram.png";
import TiktokIcon from "../../assets/tiktok.png";
import CedroxyLogo from "../../assets/CedroxyLogo.png";

function Foot() {
  return (
    <div className="foot-container">
      <img className="footer-logo" src={CedroxyLogo} alt="logo" />
      <div className="location-menu">
        <ul className="footer-location">
          <li className="location-title">LOCATION</li>
          <li className="location-list">Cedroxy Atelier</li>
          <li className="location-list">Barouk</li>
          <li className="location-list">El-Chouf</li>
          <li className="location-list">Mount Lebanon</li>
          <li className="location-list">+961 76 432 922</li>
          <li className="location-list">Cedroxy.lb@gmail.com</li>
        </ul>
      </div>
      <div className="social-media-icons">
        <a href="tel:+96176432922 ">
          <img className="social-media-logo" src={WaIcon} alt="WhatsApp" />
        </a>
        <a href="https://instagram.com/cedroxy?igshid=ZmRlMzRkMDU=">
          <img className="social-media-logo" src={IgIcon} alt="Instagram" />
        </a>
        <a href="https://youtube.com/@cedroxy">
          <img className="social-media-logo" src={YtIcon} alt="YouTube" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100087213062329&mibextid=ZbWKwL">
          <img className="social-media-logo" src={FbIcon} alt="Facebook" />
        </a>
        <a href="mailto:Cedroxy.lb@gmail.com">
          <img className="social-media-logo" src={EmIcon} alt="Email" />
        </a>
        <a href="https://www.tiktok.com/@cedroxy.lb?_t=8YIw44LwP6g&_r=1">
          <img className="social-media-logo" src={TiktokIcon} alt="Tiktok" />
        </a>
      </div>
    </div>
  );
}

export default Foot;
