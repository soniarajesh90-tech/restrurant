import "./Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">

        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <p>Delicious food & best service for our customers.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>123 Food Street</p>
          <p>Chennai, India</p>
          <p>+91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;