import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";

const FAQCard = ({ question, answer, showAnswer, setShowAnswer }) => {
  return (
    <div className="w-full border-b border-stone-300 py-3">
      <div
        onClick={setShowAnswer}
        className="w-full flex items-center justify-between cursor-pointer"
      >
        <h1 className="text-[22px] text-stone-700 font-semibold">{question}</h1>
        <ArrowDown2 />
      </div>
      {showAnswer && (
        <p className="text-stone-600 text-[0.95rem] mt-3 whitespace-pre-line">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQCard;
