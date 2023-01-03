import "./Header.css";

//Components
import ShopMenu from "../shopMenu/ShopMenu";

//logos
import CedroxyLogo from "../../assets/CedroxyLogo.png";
import WaIcon from "../../assets/socialmedia/wtsp.png";
import EmIcon from "../../assets/socialmedia/email.png";
import YtIcon from "../../assets/socialmedia/YouTube.png";
import FbIcon from "../../assets/socialmedia/facebook.png";
import IgIcon from "../../assets/socialmedia/instagram.png";
import TiktokIcon from "../../assets/socialmedia/tiktok.png";

//Navigate
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
      {/* MENU */}
      <div className="header-menu">
        <div className="header-list-menu">
          <ul className="menu-ul">
            <li className="menu-item" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="menu-item">
              <ShopMenu />
            </li>
            <li className="menu-item" onClick={() => navigate("/quote")}>
              Quote
            </li>
            <li className="menu-item" onClick={() => navigate("/events")}>
              Events
            </li>
            <li className="menu-item">
              <HashLink className="menu-item-link" to="/#aboutus">
                About Us
              </HashLink>
            </li>
          </ul>
        </div>
        {/* Social media */}
        <div className="header-social-media-icons">
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
      </div>
    </div>
  );
}

export default Header;
