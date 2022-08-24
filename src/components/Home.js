import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import {
  FaCheck,
  FaLock,
  FaPlay,
  FaShare,
  FaDollarSign,
  FaCheckSquare,
  FaHandPointer,
  FaShareSquare,
  FaShoppingBag,
  FaUserFriends,
  FaChevronRight
} from "react-icons/fa";

import Footer from "./Footer";
import Header from "./Header";
import Video from "./modals/Video";
import How from "../images/how-work.jpg";
import slide1 from "../images/bg/image-1.jpg";
import slide2 from "../images/bg/image-2.jpg";
import slide3 from "../images/bg/image-3.jpg";
import AppDownload from "./sections/AppDownload";
import Testimonials from "./sections/Testimonials";
import CustomerSupport from "./sections/CustomerSupport";
import Freelancer from "../images/anyone-freelancer.jpg";
import OnlineSellers from "../images/anyone-online-sellers.jpg";
import OnlineShopping from "../images/anyone-online-shopping.jpg";
import AffiliateMarketing from "../images/anyone-affiliate-marketing.jpg";

const slideImages = [
  {
    url: slide1,
    caption: 'Quick and Secure Transaction',
    textDescription: "Instant customer payment and supplier payout at the completion of the transaction. Trade with confidence.",
    linkDescription: "Open a Free Account",
    videoText: "See How it Works"
  },
  {
    url: slide2,
    caption: 'Quick and Secure Transaction',
    textDescription: "Instant customer payment and supplier payout at the completion of the transaction. Trade with confidence.",
    linkDescription: "Open a Free Account",
    videoText: "See How it Works"
  },
  {
    url: slide3,
    caption: 'Building Trust Across businesses.',
    textDescription: "Successfully completing Thousands of Transactions in Link Flash.",
    linkDescription: "Get started for free",
    videoText: "Watch Demo"
  },
];

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* <!-- Content
      ============================================= --> */}
      <div id="content">
        {/* <!-- Slideshow
        ============================================= --> */}
        <div className="slide-container">
          <Slide>
            {slideImages.map((val, index) => (
              <section className="hero-wrap each-slide" key={index}>
                <div className="hero-mask opacity-7 bg-dark"></div>
                <div
                  className="hero-bg"
                  style={{ backgroundImage: `url(${val.url})` }}
                ></div>
                <div className="hero-content text-center fullscreen-with-header py-5">
                  <span>
                    <h2
                      className="text-16 text-white"
                      style={{ marginTop: "150px" }}
                    >
                      {val.caption}
                    </h2>
                  </span>
                  <span>
                    <p className="text-5 text-white mb-4">
                      {val.textDescription}
                    </p>
                  </span>
                  <span>
                    <Link to="/" className="btn btn-success m-2">
                      {val.linkDescription}
                    </Link>
                  </span>
                  <span>
                    <Link
                      className="btn btn-outline-light video-btn m-2"
                      to="/"
                      data-src="https://www.youtube.com/embed/7e90gBu4pas"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      <span className="text-2 me-3">
                        <FaPlay />
                      </span>
                      {val.videoText}
                    </Link>
                  </span>
                </div>
              </section>
            ))}
          </Slide>
        </div>
        {/* <!-- Slideshow end -->  */}

        {/* <!-- Why choose
        ============================================= --> */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-9 text-center">
              Why should you choose PayConfidence?
            </h2>
            <p className="lead text-center mb-5">
              Here's Top 4 reasons why using a PayConfidence account to manage
              your money pays.
            </p>
            <div className="row gy-5">
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success">
                    <FaHandPointer />
                  </div>
                  <h3>Easy to use</h3>
                  <p className="text-3">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                  <Link to="/" className="btn-link text-3">
                    Learn more
                    <FaChevronRight className="text-1 ms-2" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success">
                    <FaShare />
                  </div>
                  <h3>Faster Payments</h3>
                  <p className="text-3">
                    Persius interesset his et, in quot quidam persequeris vim,
                    ad mea essent possim iriure.
                  </p>
                  <Link to="/" className="btn-link text-3">
                    Learn more
                    <FaChevronRight className="text-1 ms-2" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success">
                    <FaDollarSign />
                  </div>
                  <h3>Lower Fees</h3>
                  <p className="text-3">
                    Essent lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure.
                  </p>
                  <Link to="/" className="btn-link text-3">
                    Learn more
                    <FaChevronRight className="text-1 ms-2" />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success">
                    <FaLock />
                  </div>
                  <h3>100% secure</h3>
                  <p className="text-3">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure.
                  </p>
                  <Link to="/" className="btn-link text-3">
                    Learn more
                    <FaChevronRight className="text-1 ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Why choose end -->  */}

        {/* <!-- Payment Solutions
        ============================================= --> */}
        <section className="section">
          <div className="container overflow-hidden">
            <div className="row g-5">
              <div className="col-lg-5 col-xl-6 d-flex">
                <div className="my-auto">
                  <h2 className="text-9">Payment Solutions for everyone.</h2>
                  <p className="text-4">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris vim, ad mea essent possim iriure. Lisque persius
                    interesset his et, in quot quidam persequeris vim, ad mea
                    essent possim iriure. lisque persius interesset his et, in
                    quot quidam mea essent possim iriure.
                  </p>
                  <Link to="/" className="btn-link text-4">
                    Find more solution
                    <FaChevronRight className="text-2 ms-2" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-xl-6">
                <div className="row g-4 banner style-2 justify-content-center">
                  <div className="col-12 col-sm-6 text-center">
                    <div className="item rounded shadow d-inline-block">
                      <Link to="/">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">SMEs</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img
                          width="410"
                          alt="banner"
                          height="350"
                          src={Freelancer}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 text-center">
                    <div className="item rounded shadow d-inline-block">
                      <Link to="/">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Retailers</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img
                          width="410"
                          alt="banner"
                          height="350"
                          src={OnlineShopping}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 mb-sm-0 text-center">
                    <div className="item rounded shadow d-inline-block">
                      <Link to="/">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Distributors</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img
                          width="410"
                          alt="banner"
                          height="350"
                          src={OnlineSellers}
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 text-center">
                    <div className="item rounded shadow d-inline-block">
                      <Link to="/">
                        <div className="caption rounded-bottom">
                          <h2 className="text-5 fw-400 mb-0">Manufacturers</h2>
                        </div>
                        <div className="banner-mask"></div>
                        <img
                          width="410"
                          alt="banner"
                          height="350"
                          className="img-fluid"
                          src={AffiliateMarketing}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Payment Solutions end -->  */}

        {/* <!-- What can you do
        ============================================= --> */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-9 text-center">
              What can you do with PayConfidence?
            </h2>
            <p className="lead text-center mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-3">
                <Link to="/">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-success">
                      <FaShareSquare />
                    </div>
                    <h3>Make Payment</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-lg-3">
                <Link to="/">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-success">
                      <FaCheckSquare />
                    </div>
                    <h3>Receive Payment</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-lg-3">
                <Link to="/">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-success">
                      <FaUserFriends />
                    </div>
                    <h3>Pay for Service</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-lg-3">
                <Link to="/">
                  <div className="featured-box style-5 rounded">
                    <div className="featured-box-icon text-success">
                      <FaShoppingBag />
                    </div>
                    <h3>Online Shopping</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/" className="btn-link text-4">
                See more can you do
                <FaChevronRight className="text-2 ms-2" />
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- What can you do end --> */}

        {/* <!-- How it works
        ============================================= --> */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card bg-dark-3 shadow-sm border-0">
                  <img
                    src={How}
                    width="570"
                    alt="banner"
                    height="362"
                    className="card-img img-fluid opacity-8"
                  />
                  <div className="card-img-overlay p-0">
                    <Link
                      to="/"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      className="d-flex h-100 video-btn"
                      data-src="https://www.youtube.com/embed/7e90gBu4pas"
                    >
                      <span className="playButton playButton-pulsing bg-white m-auto">
                        <FaPlay />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="ms-4">
                  <h2 className="text-9">How does it work?</h2>
                  <p className="text-4">
                    Quidam lisque persius interesset his et, in quot quidam
                    persequeris essent possim iriure. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </p>
                  <ul className="list-unstyled text-3 lh-lg">
                    <li>
                      <FaCheck className="me-2" />
                      Sign Up Account
                    </li>
                    <li>
                      <FaCheck className="me-2" />
                      Receive & Send Payments from worldwide
                    </li>
                    <li>
                      <FaCheck className="me-2" />
                      Your funds will be transferred to your local bank account
                    </li>
                  </ul>
                  <Link
                    to="/"
                    className="btn btn-outline-success shadow-none mt-2"
                  >
                    Open a Free Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- How it works end --> */}

        <Testimonials />
        <CustomerSupport />
        <AppDownload />
      </div>
      {/* <!-- Content end -->  */}

      <Footer />

      {/* <!-- Video Modal
      ============================================= --> */}
      <Video />
      {/* <!-- Video Modal end -->  */}
    </div>
  );
};

export default Home;
