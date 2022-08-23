import { Link, useNavigate  } from "react-router-dom";

import LogoLight from "../images/logo-light-2.png";

const SignUp = () => {
  const navigate =  useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      {/* <!-- Preloader --> */}
      {/* <div id="preloader">
        <div data-loader="dual-ring"></div>
      </div> */}
      {/* <!-- Preloader ends --> */}

      <div id="main-wrapper">
        <div className="container-fluid px-0">
          <div className="row g-0 min-vh-100">
            <div className="col-md-6">
              {/* <!-- Get Verified! Text
              ============================================= --> */}
              <div className="hero-wrap d-flex align-items-center h-100">
                <div className="hero-mask opacity-8 bg-primary"></div>
                <div className="hero-bg hero-bg-scroll background-image"></div>
                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                  <div className="row g-0">
                    <div className="col-10 col-lg-9 mx-auto">
                      <div className="logo mt-5 mb-5 mb-md-0">
                        <Link className="d-flex" to="/" title="PayConfidence">
                          <img src={LogoLight} alt="PayConfidence" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 my-auto">
                    <div className="col-10 col-lg-9 mx-auto">
                      <h1 className="text-11 text-white mb-4">
                        Registered Now!
                      </h1>
                      <p className="text-4 text-white lh-base mb-5">
                        Every day, PayConfidence makes thousands of suppliers
                        happy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Get Verified! Text End -->  */}
            </div>
            <div className="col-md-6 d-flex align-items-center">
              {/* <!-- SignUp Form
              ============================================= --> */}
              <div className="container my-4">
                <div className="row g-0">
                  <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 className="fw-400 mb-4">Sign Up</h3>
                    <form id="loginForm" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                          Supplier
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailAddress"
                          required
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="loginPassword"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="bankName" className="form-label">
                          Bank Name
                        </label>
                        <select
                          className="form-select"
                          id="bankName"
                          name="bankName"
                          required
                        >
                          <option value=""> Please Select </option>
                          <option value="1">Bank Name 1</option>
                          <option value="2">Bank Name 2</option>
                          <option value="3">Bank Name 3</option>
                          <option value="4">Bank Name 4</option>
                          <option value="5">Bank Name 5</option>
                          <option value="6">Bank Name 6</option>
                          <option value="7">Bank Name 7</option>
                          <option value="8">Bank Name 8</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="accountName" className="form-label">
                          Account Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountName"
                          required
                          placeholder="Enter Account Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="accountNumber" className="form-label">
                          Account Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="accountNumber"
                          required
                          placeholder="Enter Account Number"
                        />
                      </div>
                      <div className="d-grid mt-4 mb-3">
                        <button className="btn btn-primary" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <p className="text-3 text-center text-muted">
                      Already have an account?
                      <Link className="btn-link" to="/login">
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- SignUp Form End -->  */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Back to Top
      ============================================= -->  */}
      {/* <a
        id="back-to-top"
        data-bs-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i className="fa fa-chevron-up"></i>
      </a> */}
    </>
  );
};

export default SignUp;
