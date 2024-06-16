import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";

export const PrimaryButton = (props) => {
  return (
    <button
      onClick={props.clicked}
      type={props.type}
      className={`min-w-[120px] px-6 py-3.5 bg-primary rounded-md shadow-lg font-semibold text-[#fbf8f3] hover:bg-opacity-80 active:shadow-sm ${
        props.twTextSize || "text-sm"
      }`}
    >
      {props.placeholder}
    </button>
  );
};

export const PrimaryLink = (props) => {
  return (
    <Link
      to={props.navigateTo}
      className="group w-fit flex items-center gap-x-2 mt-3 border border-stone-700 hover:border-primary rounded-full px-3 py-2 lg:hover:bg-primary transition-all duration-200"
    >
      <span className="lg:group-hover:text-white text-[0.9rem] text-stone-900">
        {props.placeholder}
      </span>

      <ArrowRight
        size={18}
        className="text-stone-700 lg:group-hover:text-white"
      />
    </Link>
  );
};
