import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { FaChevronRight, FaDollarSign, FaHandPointer, FaLock, FaPlay, FaShare } from "react-icons/fa";

import slide1 from "../images/bg/image-1.jpg";
import slide2 from "../images/bg/image-2.jpg";
import slide3 from "../images/bg/image-3.jpg";
import AppDownload from "./sections/AppDownload";
import CustomerSupport from "./sections/CustomerSupport";

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
    caption: 'Building Trust Accross businesses.',
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
                  <span><h2 className="text-16 text-white"  style={{ marginTop: "150px" }}>{val.caption}</h2></span>
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
            <h2 className="text-9 text-center">Why should you choose PayConfidence?</h2>
            <p className="lead text-center mb-5">Here's Top 4 reasons why using a PayConfidence account to manage your money pays.</p>
            <div className="row gy-5">
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success"> <FaHandPointer /> </div>
                  <h3>Easy to use</h3>
                  <p className="text-3">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  <Link to="/" className="btn-link text-3">Learn more <FaChevronRight className="text-1 ms-2" /></Link> </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success"> <FaShare /> </div>
                  <h3>Faster Payments</h3>
                  <p className="text-3">Persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  <Link to="/" className="btn-link text-3">Learn more <FaChevronRight className="text-1 ms-2" /></Link> </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success"> <FaDollarSign /> </div>
                  <h3>Lower Fees</h3>
                  <p className="text-3">Essent lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  <Link to="/" className="btn-link text-3">Learn more <FaChevronRight className="text-1 ms-2" /></Link> </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="featured-box">
                  <div className="featured-box-icon text-success"> <FaLock /> </div>
                  <h3>100% secure</h3>
                  <p className="text-3">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  <Link to="/" className="btn-link text-3">Learn more <FaChevronRight className="text-1 ms-2" /></Link> </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Why choose end -->  */}

        <CustomerSupport />
        <AppDownload />
      </div>
      {/* <!-- Content end -->  */}

      <Footer />

      {/* <!-- Video Modal
      ============================================= --> */}
      <div className="modal fade" id="videoModal" tabindex="-1" role="dialog">
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content bg-transparent border-0">
            <button
              type="button"
              className="btn-close btn-close-white ms-auto me-n3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  id="video"
                  src="https://www.youtube.com/embed/7e90gBu4pas"
                  allow="autoplay;"
                  allowfullscreen
                  title="title"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal end -->  */}
    </div>
  );
};

export default Home;
