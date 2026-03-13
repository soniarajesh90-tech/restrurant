import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { navLinks } from "../../Data";
import "./Header.css";
import ScrollLink from "../link/ScrollLink";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartCount }: any) => {

  const [showMenu, setShowMenu] = useState(false);
  

  return (
    <header className="header">
      <nav className="nav container">

        <a href="/" className="nav-logo">
          <img src={Logo} alt="logo" className="nav-logo-img" />
        </a>

        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">

            {navLinks.map((navLink, index) => (
              <li className="nav-item" key={index}>
                <ScrollLink
                  to={navLink}
                  name={navLink}
                  className="nav-link"
                />
              </li>
            ))}

          </ul>
        </div>

        <div className="nav-buttons">
          <ScrollLink
            to="reservation"
            name="Book Now"
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />

          <CgMenuLeft
            className="nav-toggler"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
       {/* cart icon */}
          <div className="cart-icon">
    <FaShoppingCart className="cart-symbol"/>
    <span className="cart-count">{cartCount}</span>
  </div>
      
      </nav>
    </header>
  );
};

export default Header;