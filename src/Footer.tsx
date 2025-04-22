import { FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>The Tech Bros Ltd, The Wheelhouse Angel Court, 81 St. Clement's Street, Oxford, England, OX4 1AW</p>
        <p>
        <a href="mailto:team@thetechbros.io"><FaEnvelope/></a> &nbsp;
        <a href="https://www.linkedin.com/company/thetechbros/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>&nbsp;&nbsp;
        <a href="https://www.instagram.com/thetech.bros" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>&nbsp;&nbsp;
        <a href="https://x.com/thetechbros_io" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </p>
        <p>© {new Date().getFullYear()} The Tech Bros</p>
      </div>
    </footer>
  );
};

export default Footer;
