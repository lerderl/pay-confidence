import { Link } from "react-router-dom";

import Logo2 from "../images/logo-2.png"

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header-row">
          <div className="header-column justify-content-start"> 
            {/* <!-- Logo
            ============================= --> */}
            <div className="logo me-3"><Link className="d-flex" to="/" title="PayConfidence"><img src={Logo2} alt="PayConfidence" height="108px" /></Link></div>
            {/* <!-- Logo end --> 
            <!-- Collapse Button
            ============================== --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button>
            {/* <!-- Collapse Button end --> 
            
            <!-- Primary Navigation
            ============================== --> */}
            <nav className="primary-menu navbar navbar-expand-lg">
              <div id="header-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/fees">Fees</Link></li>
                  <li><Link to="/help">Help</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </nav>
            {/* <!-- Primary Navigation end -->  */}
          </div>
          <div className="header-column justify-content-end"> 
            {/* <!-- Login & Signup Link
            ============================== --> */}
            <nav className="login-signup navbar navbar-expand">
              <ul className="navbar-nav">
                <li><Link to="/login">Login</Link> </li>
                <li className="align-items-center h-auto ms-sm-3"><Link className="btn btn-success" to="/signup">Sign Up</Link></li>
              </ul>
            </nav>
            {/* <!-- Login & Signup Link end -->  */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
