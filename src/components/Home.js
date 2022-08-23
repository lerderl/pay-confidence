import Header from "./Header";
import CustomerSupport from "./sections/CustomerSupport";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />

      {/* <!-- Content
      ============================================= --> */}
      <div id="content">
        <CustomerSupport />
      </div>
      {/* <!-- Content end -->  */}
    </div>
  );
};

export default Home;
