import { Link, useNavigate  } from "react-router-dom";

import LogoLight from "../images/logo-light-2.png";

const Login = () => {
  const navigate =  useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div id="main-wrapper">
      <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">

          {/* Welcome Text */}
          <div className="col-md-6">
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
                      Welcome to PayConfidence!
                    </h1>
                    <p className="text-4 text-white lh-base mb-5">
                      We are glad to see you! Instant payments, trusted by millions worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Welcome Text End */}

          {/* <!-- Login Form
          ============================================= --> */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="container my-4">
              <div className="row g-0">
                <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                  <h3 className="fw-400 mb-4">Log In</h3>
                  <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="emailAddress" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">Password</label>
                      <input type="password" className="form-control" id="loginPassword" required placeholder="Enter Password" />
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" id="remember-me" name="remember" type="checkbox" />
                          <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                        </div>
                      </div>
                      <div className="col-sm text-end"><Link className="btn-link" to='/#'>Forgot Password ?</Link></div>
                    </div>
                    <div className="d-grid mb-3"><button className="btn btn-primary" type="submit">Login</button></div>
                  </form>
                  <p className="text-3 text-center text-muted">Don't have an account? <Link className="btn-link" to='/signup'>Sign Up</Link></p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Login Form End -->  */}
        </div>
      </div>
    </div>
  );
};

export default Login;
