import Footer from "./Footer";
import Header from "./Header";
import AppDownload from "./sections/AppDownload";
import CustomerSupport from "./sections/CustomerSupport";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* <!-- Content
      ============================================= --> */}
      <div id="content">
        <CustomerSupport />
        <AppDownload />
      </div>
      {/* <!-- Content end -->  */}

      <Footer />
    </div>
  );
};

export default Home;
