import { Slide } from "react-slideshow-image";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    comment: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
    name: "Jay Shah",
    position: "Founder at Icomatic Pvt Ltd"
  },
  {
    comment: "I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
    name: "Patrick Cary",
    position: "Freelancer from USA"
  },
  {
    comment: "Fast easy to use transfers to a different currency. Much better value that the banks.",
    name: "De Mortel",
    position: "Online Retail"
  },
  {
    comment: "I have used them twice now. Good rates, very efficient service and it denies high street banks an undeserved windfall. Excellent.",
    name: "Chris Tom",
    position: "User from UK"
  },
  {
    comment: "It's a real good idea to manage your money by PayConfidence. The rates are fair and you can carry out the transactions without worrying!",
    name: "Mauri Lindberg",
    position: "Freelancer from Australia"
  },
  {
    comment: "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. I'm only using it for sending money to friends at the moment.",
    name: "Dennis Jacques",
    position: "User from USA"
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-9 text-center">
          What people are saying about PayConfidence
        </h2>
        <p className="lead text-center mb-4">
          A payments experience people love to talk about
        </p>
        <div className="slide-container">
          <Slide>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial rounded text-center p-4 each-slide" key={index}>
                <p className="text-9 text-muted opacity-2 lh-base mb-0">
                  <FaQuoteLeft />
                </p>
                <p className="text-4">
                  “{testimonial.comment}”
                </p>
                <strong className="d-block fw-500">{testimonial.name}</strong>
                <span className="text-muted">
                  {testimonial.position}
                </span>
              </div>
            ))}
          </Slide>                
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn-link text-4">
            See more people review
            <FaChevronRight className="text-2 ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
