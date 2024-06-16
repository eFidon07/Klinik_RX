import { Link } from "react-router-dom";
import { PrimaryLink } from "../../components";
import { ArrowRight } from "iconsax-react";

const CTA = () => {
  return (
    <div
      className="w-full h-[30rem] bg-cover bg-center rounded-3xl overflow-hidden mb-8"
      style={{ backgroundImage: "url('/img/hero-image-2.jpg')" }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center">
        <h1 className="text-secondary text-center text-5xl font-semibold">
          Your Journey to Wellness Starts Here!
        </h1>
        <p className="w-[70%] text-center text-white mt-4">
          Explore our extensive selection of health products and access
          informative health articles. Find essential medications,
          over-the-counter remedies, and health supplies all in one convenient
          location. Plus, learn valuable health tips and advice from our team of
          experts.
        </p>

        <Link
          to="/products"
          className="group w-fit flex items-center gap-x-2 mt-10 border-2 border-white hover:border-primary rounded-full px-3 py-2 lg:hover:bg-primary transition-all duration-200"
        >
          <span className="lg:group-hover:text-white text-[0.9rem] text-white">
            Discover More!
          </span>

          <ArrowRight
            size={18}
            className="text-white lg:group-hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default CTA;
