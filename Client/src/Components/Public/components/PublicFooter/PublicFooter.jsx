import "../PublicFooter/PublicFooter.css";
import { Link } from "react-router-dom";

function PublicFooter() {
  return (
    <div className="footerBG">
      <div className="footerComponents">
        {/* Brand Section */}
        <div className="footer_sec_one">
          <p>
            <span className="footer_blog_color">Ticket</span>{" "}
            <span className="footer_sphere_color">ly</span>
          </p>
        
        </div>

        {/* Quick Links */}
        <div className="footer_sec_two">
          <p className="footer_QuickLinks">Quick Links</p>
          <ul>
            <li className="mb-2"><Link className="footerList" to="/home">Home</Link></li>
            <li className="mb-2"><Link className="footerList" to="/About">About</Link></li>
            <li className="mb-2"><Link className="footerList" to="/contact">Contact</Link></li>
            <li ><Link className="footerList" to="/user-login">Login</Link></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div className="footer_sec_three">
          <p className="footer_terms_and_polices">Terms & Policies</p>
          <ul>
            <li className="mb-2"  ><Link className="footerList" to="/terms-of-conditions">Terms of Conditions</Link></li>
            <li className="mb-2"><Link className="footerList" to="/fq">f&q</Link></li>
            <li className="mb-2"><Link className="footerList" to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="footer_sec_four">
          <p className="footer_get_in_touch">Get In Touch</p>
          <ul>
            <li className="footerList">0471-2480582</li>
            <li className="footerList">service.ticketly@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="footer_bottom_line" />
      <p className="Footer_copyright">
        Copyright &copy; 2025. All rights reserved.&copy;Anandhu JS
      </p>
    </div>
  );
}

export default PublicFooter;
