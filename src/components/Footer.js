import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg d-lg-flex align-items-center">
            <ul className="nav justify-content-center justify-content-lg-start text-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item">                
                <Link className="nav-link" to="/">
                  Fees
                </Link>
              </li>
              <li className="nav-item">                
                <Link className="nav-link" to="/">
                  Help
                </Link>
              </li>
              <li className="nav-item">                
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
            <ul className="social-icons justify-content-center">
              <li className="social-icons-facebook">
                <ExternalLink
                  title="Facebook"
                  data-bs-toggle="tooltip"
                  href="http://www.facebook.com/"
                >
                  <FaFacebookF />
                </ExternalLink>
              </li>
              <li className="social-icons-twitter">
                <ExternalLink
                  title="Twitter"
                  data-bs-toggle="tooltip"
                  href="http://www.twitter.com/"
                >
                  <FaTwitter />
                </ExternalLink>
              </li>
              <li className="social-icons-google">
                <ExternalLink
                  title="Google"
                  data-bs-toggle="tooltip"
                  href="http://www.google.com/"
                >
                  <FaGoogle />
                </ExternalLink>
              </li>
              <li className="social-icons-youtube">
                <ExternalLink
                  title="Youtube"
                  data-bs-toggle="tooltip"
                  href="http://www.youtube.com/"
                >
                  <FaYoutube />
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright pt-3 pt-lg-2 mt-2">
          <div className="row">
            <div className="col-lg">
              <p className="text-center text-lg-start mb-2 mb-lg-0">
                Copyright &copy; 2022 <Link to="/">PayConfidence</Link>. All
                Rights Reserved.
              </p>
            </div>
            <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
              <ul className="nav justify-content-center">
                <li className="nav-item">                  
                  <Link className="nav-link active" to="/">
                    Security
                  </Link>
                </li>
                <li className="nav-item">                  
                  <Link className="nav-link" to="/">
                    Terms
                  </Link>
                </li>
                <li className="nav-item">                  
                  <Link className="nav-link" to="/">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
