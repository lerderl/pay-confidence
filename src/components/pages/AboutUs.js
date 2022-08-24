import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaPlayCircle, FaGlobe, FaDollarSign, FaUsers, FaLifeRing } from "react-icons/fa";

import Footer from "../Footer";
import Header from "../Header";
import Video from "../modals/Video";
import Leader from "../../images/team/leader.jpg";
import WhoWeAre from "../../images/who-we-are.jpg";
import Testimonials from "../sections/Testimonials";
import Leader2 from "../../images/team/leader-2.jpg";
import Leader3 from "../../images/team/leader-3.jpg";
import Leader4 from "../../images/team/leader-4.jpg";
import Vision from "../../images/our-values-vision.jpg";
import Mission from "../../images/our-values-mission.jpg";

// Partner Images Import
import Partner1 from "../../images/partner/partner-1.png";
import Partner2 from "../../images/partner/partner-2.png";
import Partner3 from "../../images/partner/partner-3.png";
import Partner4 from "../../images/partner/partner-4.png";
import Partner5 from "../../images/partner/partner-5.png";
import Partner6 from "../../images/partner/partner-6.png";
import Partner7 from "../../images/partner/partner-7.png";
import Partner8 from "../../images/partner/partner-8.png";
import Partner9 from "../../images/partner/partner-9.png";
import Partner10 from "../../images/partner/partner-10.png";
import Partner11 from "../../images/partner/partner-11.png";
import Partner12 from "../../images/partner/partner-1.png";

const leaders = [
  {
    image: Leader,
    name: "Neil Patel",
    title: "CEO & Founder"
  },
  {
    image: Leader2,
    name: "James Maxwell",
    title: "Co-Founder"
  },
  {
    image: Leader3,
    name: "Ruby Clinton",
    title: "Chief Marketing Officer"
  },
  {
    image: Leader4,
    name: "Miky Sheth",
    title: "General Manager"
  }
];

const partnerImages = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8, Partner9, Partner10, Partner11, Partner12];

const AboutUs = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* Page header */}
      <section className="page-header page-header-text-light py-0 mb-0">
        <section className="hero-wrap section">
          <div className="hero-mask opacity-7 bg-dark"></div>
          <div className="hero-bg hero-bg-scroll customer-support-image"></div>
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h1 className="text-11 fw-500 text-white mb-3">
                    About PayConfidence
                  </h1>
                  <p className="text-5 text-white lh-base mb-4">
                    Our mission is to help guarantee safe and secure
                    transaction!
                  </p>
                  <Link to="/" className="btn btn-success m-2">
                    Open a Free Account
                  </Link>
                  <Link
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    className="btn btn-outline-light video-btn m-2"
                    data-src="https://www.youtube.com/embed/7e90gBu4pas"
                  >
                    <span className="me-2">
                      <FaPlayCircle />
                    </span>
                    See How it Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Page header end */}

      {/* Content */}
      <div id="content">
        {/* Who we are */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="my-auto px-0 px-lg-5 mx-2">
                  <h2 className="text-9 mb-4">Who we are</h2>
                  <p className="text-4">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure. Lisque persius
                    interesset his et, in quot quidam persequeris vim, ad mea
                    essent possim iriure. lisque persius interesset his et, in
                    quot quidam mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 my-auto text-center">
                <img
                  alt=""
                  src={WhoWeAre}
                  className="img-fluid shadow-lg rounded-3"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Who we are end */}

        {/* Our Values */}
        <section className="section bg-white">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="row">
                  <div className="col-6 col-lg-7 ms-auto mb-lg-n5">
                    <img
                      alt="banner"
                      src={Vision}
                      className="img-fluid rounded-3 shadow-lg"
                    />
                  </div>
                  <div className="col-6 col-lg-8 mt-lg-n5">
                    <img
                      alt="banner"
                      src={Mission}
                      className="img-fluid rounded-3 shadow-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex order-1 order-lg-2">
                <div className="my-auto px-0 px-lg-5">
                  <h2 className="text-9 mb-4">Our Values</h2>
                  <h4 className="text-4 fw-500">Our Mission</h4>
                  <p className="tex-3">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure. Lisque persius
                    interesset his et, in quot quidam persequeris vim, ad mea
                    essent possim iriure. lisque persius interesset his et, in
                    quot quidam mea essent possim iriure.
                  </p>
                  <h4 className="text-4 fw-500 mb-2">Our Vision</h4>
                  <p className="tex-3">
                    Persequeris quidam lisque persius interesset his et, in quot
                    quidam vim, ad mea essent possim iriure. Lisque persius
                    interesset his et, in quot quidam persequeris vim, ad mea
                    essent possim iriure. lisque persius interesset his et, in
                    quot quidam.
                  </p>
                  <h4 className="text-4 fw-500 mb-2">Our Goal</h4>
                  <p className="tex-3">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure. Lisque persius interesset
                    his et, in quot quidam persequeris vim, ad mea essent possim
                    iriure. lisque persius interesset his et, in quot quidam mea
                    essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values end */}

        {/* Leadership */}
        <section className="section">
          <div className="container">
            <h2 className="text-9 text-center">Our Team</h2>
            <p className="lead text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="row g-4">
              {leaders.map((leader, index) => (
                <div className="col-sm-6 col-md-3 text-center" key={index}>
                  <div className="team rounded d-inline-block">
                    <img className="img-fluid rounded" alt="" src={leader.image} />
                    <h3>{leader.name}</h3>
                    <p className="text-muted">{leader.title}</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook"><Link data-bs-toggle="tooltip" to="/" target="_blank" title="Facebook"><FaFacebookF /></Link></li>
                      <li className="social-icons-twitter"><Link data-bs-toggle="tooltip" to="/" target="_blank" title="Twitter"><FaTwitter /></Link></li>
                      <li className="social-icons-google"><Link data-bs-toggle="tooltip" to="/" target="_blank" title="Google"><FaGoogle /></Link></li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Leadership end */}

        {/* Our Investors */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-9 text-center">Our Investors</h2>
            <p className="lead text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="brands-grid separator-border">
              <div className="row align-items-center text-center">
                {partnerImages.map((image, index) => (
                  <div className="col-6 col-sm-4 col-lg-2" key={index}><Link to="/"><img className="img-fluid" src={image} alt="Brands" /></Link></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Our Investors end */}

        <Testimonials />

        {/* JOIN US */}
        <section className="section bg-success py-5">
          <div className="container text-center">
            <div className="row gy-4">
              <div className="col-sm-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-light mb-2"><FaGlobe /></div>
                  <h4 className="text-12 text-white mb-0">180+</h4>
                  <p className="text-4 text-white mb-0">Countries</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-light mb-2"><FaDollarSign /></div>
                  <h4 className="text-12 text-white mb-0">120</h4>
                  <p className="text-4 text-white mb-0">Currencies</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-light mb-2"><FaUsers /></div>
                  <h4 className="text-12 text-white mb-0">2.5M</h4>
                  <p className="text-4 text-white mb-0">Users</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-light mb-2"><FaLifeRing /></div>
                  <h4 className="text-12 text-white mb-0">24X7</h4>
                  <p className="text-4 text-white mb-0">Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* JOIN US end */}
      </div>
      {/* Content end */}

      <Footer />

      {/* Modal */}
      <Video />
    </div>
  );
};

export default AboutUs;
