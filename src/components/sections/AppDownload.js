import { Link } from "react-router-dom";

import AppStore from "../../images/app-store.png";
import GooglePlayStore from "../../images/google-play-store.png";

const AppDownload = () => {
  return (
    <section className="section py-5">
      <div className="container">
        <div className="justify-content-center text-center">
          <h2 className="text-9">Get the app</h2>
          <p className="lead mb-4">
            Download our app for the fastest, most convenient way to send & get
            Payment.
          </p>
          <Link className="d-inline-flex mx-3" to="/">
            <img alt="" width="168" height="49" src={AppStore} />
          </Link>
          <Link className="d-inline-flex mx-3" to="/">
            <img
              alt=""
              width="166"
              height="49"
              src={GooglePlayStore}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
