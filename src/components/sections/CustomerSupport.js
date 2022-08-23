import { Link } from "react-router-dom";

const CustomerSupport = () => {
  return (
    <section className="hero-wrap section shadow-md">
      <div className="hero-mask opacity-9 bg-success"></div>
      <div className="hero-bg customer-support-image"></div>
      <div className="hero-content py-5">
        <div className="container text-center">
          <h2 className="text-9 text-white">Awesome Customer Support</h2>
          <p className="lead text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
          <Link to="/help" className="btn btn-light">Find out more</Link> </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
