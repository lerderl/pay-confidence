import { Link } from "react-router-dom";
import { FaChevronRight, FaCommentAlt, FaCreditCard, FaEnvelope, FaMoneyCheckAlt, FaSearch, FaShieldAlt, FaUserCircle } from "react-icons/fa";

import Footer from "../Footer";
import Header from "../Header";

const Help = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* Page Header */}
      <section className="hero-wrap section">
        <div className="hero-mask opacity-9 bg-success"></div>
        <div className="hero-bg customer-support-image"></div>
        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-12">
                <h1 className="text-11 text-white mb-4">
                  How can we help you?
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                <div className="input-group">
                  <input
                    value=""
                    type="search"
                    id="search-input"
                    placeholder="Search for answer..."
                    className="form-control shadow-none border-0"
                  />
                  <span className="input-group-text bg-white border-0 p-0">
                    <button
                      type="button"
                      className="btn text-muted shadow-none px-3 border-0"
                    >
                      <FaSearch />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header end */}

      {/* Content */}
      <div id="content">
        {/* Main Topics */}
        <section className="section py-3 my-3 py-sm-5 my-sm-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-sm-6 col-lg-3">
                <div className="bg-white shadow-sm rounded p-4 text-center">
                  <span className="d-block text-17 text-success mt-2 mb-3">
                    <FaUserCircle />
                  </span>
                  <h3 className="text-body text-4">My Account</h3>
                  <p className="mb-0">
                    <Link className="text-muted btn-link" to="/">
                      See articles
                      <span className="text-1 ms-1">
                        <FaChevronRight />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="bg-white shadow-sm rounded p-4 text-center">
                  <span className="d-block text-17 text-success mt-2 mb-3">
                    <FaMoneyCheckAlt />
                  </span>
                  <h3 className="text-body text-4">Payment</h3>
                  <p className="mb-0">
                    <Link className="text-muted btn-link" to="/">
                      See articles
                      <span className="text-1 ms-1">
                        <FaChevronRight />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="bg-white shadow-sm rounded p-4 text-center">
                  <span className="d-block text-17 text-success mt-2 mb-3">
                    <FaShieldAlt />
                  </span>
                  <h3 className="text-body text-4">Security</h3>
                  <p className="mb-0">
                    <Link className="text-muted btn-link" to="/">
                      See articles
                      <span className="text-1 ms-1">
                        <FaChevronRight />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="bg-white shadow-sm rounded p-4 text-center">
                  <span className="d-block text-17 text-success mt-2 mb-3">
                    <FaCreditCard />
                  </span>
                  <h3 className="text-body text-4">Payment Methods</h3>
                  <p className="mb-0">
                    <Link className="text-muted btn-link" to="/">
                      See articles
                      <span className="text-1 ms-1">
                        <FaChevronRight />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Topics end */}

        {/* Popular Topics */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-9 text-center">Popular Topics</h2>
            <p className="text-4 text-center mb-5">
              Lisque persius interesset his et, in quot quidam persequeris.
            </p>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="row gx-5">
                  <div className="col-md-6">
                    <div
                      id="popularTopics"
                      className="accordion accordion-flush"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse1"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            className="accordion-button collapsed"
                          >
                            I forgot the password for my account.
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          aria-labelledby="heading1"
                          data-bs-parent="#popularTopics"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            Lisque persius interesset his et, in quot quidam
                            persequeris vim, ad mea essent possim iriure. Mutat
                            tacimates id sit. Ridens mediocritatem ius an, eu
                            nec magna imperdiet.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse2"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            className="accordion-button collapsed"
                          >
                            How do I withdraw funds from my account?
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading2"
                          data-bs-parent="#popularTopics"
                        >
                          <div className="accordion-body">
                            Iisque persius interesset his et, in quot quidam
                            persequeris vim, ad mea essent possim iriure. Mutat
                            tacimates id sit. Ridens mediocritatem ius an, eu
                            nec magna imperdiet.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading3">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse3"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            className="accordion-button collapsed"
                          >
                            How do I link bank account to my account?
                          </button>
                        </h2>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#popularTopics"
                        >
                          <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading4">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse4"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            className="accordion-button collapsed"
                          >
                            How do I confirm the email address on my account?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#popularTopics"
                        >
                          <div className="accordion-body">
                            Iisque Anim pariatur cliche reprehenderit, enim
                            eiusmod high life accusamus terry richardson ad
                            squid.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading5">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse5"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            className="accordion-button collapsed"
                          >
                            How do I receive payments?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-bs-parent="#popularTopics"
                        >
                          <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      id="popularTopics2"
                      className="accordion accordion-flush"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading6">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse6"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            className="accordion-button collapsed"
                          >
                            How Can I View My Payments History?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading6"
                          data-bs-parent="#popularTopics2"
                        >
                          <div className="accordion-body">
                            Lisque persius interesset his et, in quot quidam
                            persequeris vim, ad mea essent possim iriure. Mutat
                            tacimates id sit. Ridens mediocritatem ius an, eu
                            nec magna imperdiet.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading7">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse7"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse7"
                            className="accordion-button collapsed"
                          >
                            Where is my refund?
                          </button>
                        </h2>
                        <div
                          id="collapse7"
                          aria-labelledby="heading7"
                          data-bs-parent="#popularTopics2"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            Iisque persius interesset his et, in quot quidam
                            persequeris vim, ad mea essent possim iriure. Mutat
                            tacimates id sit. Ridens mediocritatem ius an, eu
                            nec magna imperdiet.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading8">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse8"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse8"
                            className="accordion-button collapsed"
                          >
                            How do I request payments or send an invoice?
                          </button>
                        </h2>
                        <div
                          id="collapse8"
                          aria-labelledby="heading8"
                          data-bs-parent="#popularTopics2"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading9">
                          <button
                            type="button"
                            aria-expanded="false"
                            aria-controls="collapse9"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse9"
                            className="accordion-button collapsed"
                          >
                            Forgot my password! What next?
                          </button>
                        </h2>
                        <div
                          id="collapse9"
                          aria-labelledby="heading9"
                          data-bs-parent="#popularTopics2"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading10">
                          <button
                            type="button"
                            aria-expanded="false"
                            data-bs-toggle="collapse"
                            aria-controls="collapse10"
                            data-bs-target="#collapse10"
                            className="accordion-button collapsed"
                          >
                            Closing Your Account
                          </button>
                        </h2>
                        <div
                          id="collapse10"
                          aria-labelledby="heading10"
                          data-bs-parent="#popularTopics2"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="/" className="btn-link text-4">
                See more topics
                <FaChevronRight className="text-2 ms-2" />
              </Link>
            </div>
          </div>
        </section>
        {/* Popular Topics end */}

        {/* Can't find */}
        <section className="section py-4 my-4 py-sm-5 my-sm-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                  <div className="row g-0">
                    <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                      <span className="px-4 ms-3 me-2 mb-4 mb-sm-0 ">
                        <FaEnvelope style={{ color: "lightgray" }} />
                      </span>
                    </div>
                    <div className="col text-center text-sm-start">
                      <div className="">
                        <h5 className="text-3 text-body">
                          Can't find what you're looking for?
                        </h5>
                        <p className="text-muted mb-0">
                          We want to answer all of your queries. Get in touch
                          and we'll get back to you as soon as we can.{" "}
                          <Link className="btn-link" to="/">
                            Contact us
                            <span className="text-1 ms-1">
                              <FaChevronRight />
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                  <div className="row g-0">
                    <div className="col-12 col-sm-auto text-13 text-light d-flex align-items-center justify-content-center">
                      <span className="px-4 ms-3 me-2 mb-4 mb-sm-0">
                        <FaCommentAlt style={{ color: "lightgray" }} />
                      </span>
                    </div>
                    <div className="col text-center text-sm-start">
                      <div className="">
                        <h5 className="text-3 text-body">Technical questions</h5>
                        <p className="text-muted mb-0">
                          Have some technical questions? Hit us up on live chat
                          or whatever.{" "}
                          <Link className="btn-link" to="/">
                            Click here
                            <span className="text-1 ms-1">
                              <FaChevronRight />
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Can't find end */}
      </div>
      {/* Content end */}

      <Footer />
    </div>
  );
};

export default Help;
