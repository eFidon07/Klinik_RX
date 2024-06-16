import { PrimaryLink } from "../../components";

// Photo by cottonbro studio: https://www.pexels.com/photo/person-in-black-pants-and-black-shoes-sitting-on-brown-wooden-chair-4101143/
const BlogIntro = () => {
  return (
    <section className="w-full mt-32 flex flex-col-reverse md:flex-row items-center mb-12">
      <div className="w-full md:w-[55%]">
        <h1 className="w-full mt-5 md:mt-0 md:w-[85%] text-4xl md:text-5xl font-semibold text-primary">
          Your Trusted Guide to Health: Stay Informed with Our Blog
        </h1>
        <p className="w-full md:w-[85%] text-stone-500 text-[17px] mt-3 mb-7 md:mt-5">
          We believe access to reliable health information is crucial. Our blog
          provides clear, evidence-based information and helpful tips to support
          your health and wellness journey.
        </p>

        <PrimaryLink placeholder="Learn more" navigateTo="/blog" />
      </div>

      <img
        src="/img/blog-info.jpg"
        alt="Image representing blog introduction"
        className="md:flex-1 w-full md:w-[40%] h-fit object-contain object-center rounded-3xl"
      />
      {/* Height for image: h-[20rem] md:h-[28rem] */}
    </section>
  );
};

export default BlogIntro;
