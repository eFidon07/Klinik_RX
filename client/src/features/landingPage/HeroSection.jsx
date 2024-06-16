import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { howToSteps, platformStats } from "../../utils/data";
import { PrimaryLink, UsageProcessCard } from "../../components";

const HeroSection = () => {
  return (
    <section className="mb-7">
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-[4%] gap-y-3 lg:gap-y-0 pt-12">
        <h1 className="w-full md:w-[65%] text-3xl lg:text-5xl leading-tight font-medium text-stone-700">
          Your one-stop shop for a healthier you! Order meds online today!
        </h1>

        <div className="w-fit flex-1">
          <p className="text-base text-stone-600">
            Making healthcare a breeze. Explore our user-friendly website, learn
            about medications, order online in minutes, and relax, knowing your
            meds are on the way!
          </p>

          <PrimaryLink navigateTo="/" placeholder="Get Started" />
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-fit shadow-black/45">
        <img
          src="/img/hero-image-2.jpg"
          alt="hero section image"
          className="relative w-full h-[20rem] md:h-[30rem] rounded-2xl object-cover mt-14 shadow-2xl"
        />

        <div className="w-full md:w-[30%] bg-primary/70 md:bg-primary/50 backdrop-blur-lg md:absolute bottom-0 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 items-start md:m-3 rounded-2xl px-3 py-2 mt-14">
          {howToSteps.map((step, index) => (
            <UsageProcessCard key={index} label={step.label} icon={step.icon} />
          ))}
        </div>

        <div className="w-[95%] md:w-1/3 h-fit absolute bottom-[22rem] sm:bottom-[14rem] md:top-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 flex flex-wrap items-start gap-x-7 bg-primary/50 backdrop-blur-lg md:m-3 rounded-2xl px-6 py-4 mt-3">
          {platformStats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-[2.7rem] leading-tight font-medium text-white">
                {stat.amount}
              </span>
              <span className="text-sm mt-2 font-medium capitalize text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
