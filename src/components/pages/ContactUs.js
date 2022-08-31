import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { FaEnvelope, FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

import Footer from "../Footer";
import Header from "../Header";
import CustomerSupport from "../sections/CustomerSupport";

const ContactUs = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* Page Header */}
      <section className="page-header page-header-text-light bg-dark-3 py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <ul className="breadcrumb mb-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Contact Us</li>
              </ul>
            </div>
            <div className="col-12">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}

      {/* Content */}
      <div id="content">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white shadow-md rounded h-100 p-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-success mt-4">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>PayConfidence Inc.</h3>
                  <p>
                    Suite 46, First Floor Block A<br />
                    Alausa Shopping Mall
                    <br />
                    131, Obafemi Awolowo Way.
                    <br />
                    Ikeja, Lagos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white shadow-md rounded h-100 p-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-success mt-4">
                    <FaPhone />
                  </div>
                  <h3>Telephone</h3>
                  <p className="mb-0">(+234 8098903311)</p>
                  <p>(+234 8033023191)</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white shadow-md rounded h-100 p-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-success mt-4">
                    <FaEnvelope />
                  </div>
                  <h3>Business Inquiries</h3>
                  <p>info@PayConfidence.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-5">
            <h2 className="text-8">Get in touch</h2>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="d-flex flex-column">
              <ul className="social-icons social-icons-lg social-icons-colored justify-content-center">
                <li className="social-icons-facebook">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.facebook.com/"
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </ExternalLink>
                </li>
                <li className="social-icons-twitter">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.twitter.com/"
                    title="Twitter"
                  >
                    <FaTwitter />
                  </ExternalLink>
                </li>
                <li className="social-icons-google">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.google.com/"
                    title="Google"
                  >
                    <FaGoogle />
                  </ExternalLink>
                </li>
                <li className="social-icons-linkedin">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.linkedin.com/"
                    title="Linkedin"
                  >
                    <FaLinkedinIn />
                  </ExternalLink>
                </li>
                <li className="social-icons-youtube">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.youtube.com/"
                    title="Youtube"
                  >
                    <FaYoutube />
                  </ExternalLink>
                </li>
                <li className="social-icons-instagram">
                  <ExternalLink
                    data-bs-toggle="tooltip"
                    href="http://www.instagram.com/"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <CustomerSupport />
      </div>
      {/* Content end */}

      <Footer />
    </div>
  );
};

export default ContactUs;
