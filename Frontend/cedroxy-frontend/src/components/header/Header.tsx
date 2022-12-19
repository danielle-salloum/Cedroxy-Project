import "./Header.css";

//logos
import WaIcon from "../../assets/wtsp.png";
import EmIcon from "../../assets/email.png";
import YtIcon from "../../assets/YouTube.png";
import FbIcon from "../../assets/facebook.png";
import IgIcon from "../../assets/instagram.png";
import TiktokIcon from "../../assets/tiktok.png";
import CedroxyLogo from "../../assets/CedroxyLogo.png";

//Navigate
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      {/* LOGO */}
      <img
        onClick={() => navigate("/")}
        className="cedroxy-header-logo"
        src={CedroxyLogo}
        alt="No logo Is Found"
      />
      <div className="header-menu">
        <div className="header-list-menu">
          <ul className="menu-ul">
            <li className="menu-item" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="menu-item">Shop</li>
            <li className="menu-item">Quote</li>
            <li className="menu-item">About Us</li>
          </ul>
        </div>
        <div className="header-social-media-icons">
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
    </div>
  );
}

export default Header;
