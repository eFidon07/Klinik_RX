import { useState } from "react";
import { FAQCard } from "../../components";
import { faqs } from "../../utils/data";

// Photo by SHVETS production: https://www.pexels.com/photo/crop-psychologist-writing-on-clipboard-during-psychotherapy-session-7176036/
const FAQ = () => {
  const [showCard, setCard] = useState(0);

  return (
    <section className="w-full mt-24 md:mt-32 flex flex-col md:flex-row items-center mb-12">
      <img
        src="/img/faq-image.jpg"
        alt="Image representing frequently asked questions"
        className="md:flex-1 w-full md:w-[35%] h-[20rem] md:h-[28rem] object-cover object-center rounded-3xl"
      />
      {/* Height for image: h-[20rem] md:h-[28rem] */}

      <div className="w-full md:w-[55%] flex justify-end">
        <div className="md:w-[90%]">
          <h1 className="w-full mt-5 md:mt-0 text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">
            Queries About Klinik RX
          </h1>

          <div className="mt-7 flex flex-col">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                showAnswer={index === showCard}
                setShowAnswer={() =>
                  showCard === index ? setCard(-1) : setCard(index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
