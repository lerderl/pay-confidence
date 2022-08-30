import { Link } from "react-router-dom";
import { FaChevronRight, FaDownload, FaExchangeAlt, FaFileInvoiceDollar, FaHandHoldingUsd, FaPlayCircle, FaUpload, FaUser } from "react-icons/fa";

import Footer from "../Footer";
import Header from "../Header";
import Video from "../modals/Video";
import AppDownload from "../sections/AppDownload";

const Fees = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* Banner */}
      <section className="hero-wrap section">
        <div className="hero-bg hero-bg-scroll background-image"></div>
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 col-xl-6 text-center text-lg-start">
                <h1 className="text-11 text-white mb-4">
                  We Promise Low Fees
                  <br />
                  and No Extra Charges
                </h1>
                <p className="text-5 text-white lh-base mb-4">
                  Signing up to a PayConfidence account is FREE of charge.
                  Create your account today and start!
                </p>
                <Link to="/" className="btn btn-success my-2 me-2">
                  Open a Free Account
                </Link>
                <Link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  className="btn btn-link text-light video-btn my-2"
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
      {/* Banner end */}

      <div id="content">
        <section className="section py-5">
          <div className="container">
            <div className="row g-5">
              {/* <!-- Withdrawal Funds
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaDownload style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Service Charge</h3>
                    <p className="text-4 lh-base">
                      A fee on every payment transaction.
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">
                      up to 1.5%
                    </div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Withdrawal Funds end -->  */}

              {/* <!-- Deposit Funds
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaUpload style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Refund</h3>
                    <p className="text-4 lh-base">
                      Service Charge fee is non refundable.
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">Free</div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Deposit Funds end -->  */}

              {/* <!-- Receive Money
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaHandHoldingUsd style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Disburse</h3>
                    <p className="text-4 lh-base">
                      No transaction fee for disbursement of funds.
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">Free</div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Receive Money end -->  */}

              {/* <!-- Send Money
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaFileInvoiceDollar style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Notification Fee</h3>
                    <p className="text-4 lh-base">
                      A fee for notification by sms or whatsapp
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">
                      up to 1.0%
                    </div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Send Money end -->  */}

              {/* <!-- Currency Conversion
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaExchangeAlt style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Currency Conversion</h3>
                    <p className="text-4 lh-base">
                      We always give you the mid-market rate, which is the
                      fairest exchange rate.
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">
                      up to 0.4%
                    </div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Currency Conversion end -->  */}

              {/* <!-- Administrative fee
              ============================================= --> */}
              <div className="col-md-6">
                <div className="bg-white shadow-sm rounded p-5 text-center">
                  <div className="featured-box style-4">
                    <div className="featured-box-icon border rounded-circle shadow-none">
                      <FaUser style={{ marginLeft: "40px" }} />
                    </div>
                    <h3 className="text-body text-7 mb-3">Administrative fee</h3>
                    <p className="text-4 lh-base">
                      Keep using your PayConfidence Account and you will never
                      be charged an administrative fee!
                    </p>
                    <div className="text-primary text-10 pt-3 pb-4 mb-2">Free</div>
                    <Link to="/" className="text-muted btn-link text-4">
                      Learn more<FaChevronRight className="text-2 ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Administrative fee end -->  */}
            </div>
          </div>
        </section>

        {/* <!-- Open Account
        ============================================= --> */}
        <section className="section bg-success">
          <div className="container text-center">
            <h2 className="text-9 text-white"> Open a free account in minutes.</h2>
            <p className="text-5 text-white mb-4">
              Quick and fast payment. Trusted by many businesses nationwide.
            </p>
            <Link to="/" className="btn btn-light">
              Open a Free Account
            </Link>
          </div>
        </section>
        {/* <!-- Open Account end -->  */}

        <AppDownload />
      </div>

      <Footer />

      {/* Modal */}
      <Video />
    </div>
  );
};

export default Fees;
