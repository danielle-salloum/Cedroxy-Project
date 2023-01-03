import "./Foot.css";

//logos
import LocationIcon from "../../assets/location.png";
import CedroxyLogo from "../../assets/CedroxyLogo.png";
import WaIcon from "../../assets/socialmedia/wtsp.png";
import EmIcon from "../../assets/socialmedia/email.png";
import YtIcon from "../../assets/socialmedia/YouTube.png";
import FbIcon from "../../assets/socialmedia/facebook.png";
import IgIcon from "../../assets/socialmedia/instagram.png";
import TiktokIcon from "../../assets/socialmedia/tiktok.png";
import FloatingWhatsapp from "../../pages/FloatingWhatsapp/FloatingWhatsapp";

function Foot() {
  return (
    <div className="foot-container">
      <img className="footer-logo" src={CedroxyLogo} alt="logo" />
      <div className="location-menu">
        <ul className="footer-location">
          <a
            className="location-title"
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/pxsuyMpotPyAq2yd8"
          >
            <div className="location">
              <img src={LocationIcon} className="location-pic" alt="Location" />
              <li className="location-title">LOCATION</li>
            </div>
          </a>

          <li className="location-list">Cedroxy Atelier</li>
          <li className="location-list">Barouk</li>
          <li className="location-list">El-Chouf</li>
          <li className="location-list">Mount Lebanon</li>
          <li className="location-list">
            <a className="footer-info" href="tel:+96176432922">
              +961 76 432 922
            </a>
          </li>
          <li className="location-list">
            <a className="footer-info" href="mailto:Cedroxy.lb@gmail.com ">
              Cedroxy.lb@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="social-media-footer">
        <p className="Foot-social-media-title">Social Media</p>
        <div className="social-media-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/cedroxy?igshid=ZmRlMzRkMDU="
          >
            <img className="social-media-logo" src={IgIcon} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtube.com/@cedroxy"
          >
            <img className="social-media-logo" src={YtIcon} alt="YouTube" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100087213062329&mibextid=ZbWKwL"
          >
            <img className="social-media-logo" src={FbIcon} alt="Facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:Cedroxy.lb@gmail.com"
          >
            <img className="social-media-logo" src={EmIcon} alt="Email" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@cedroxy.lb?_t=8YIw44LwP6g&_r=1"
          >
            <img className="social-media-logo" src={TiktokIcon} alt="Tiktok" />
          </a>
        </div>
        <FloatingWhatsapp />
      </div>
    </div>
  );
}

export default Foot;
