import React from "react";

const UsageProcessCard = (props) => {
  return (
    <div className="w-full min-h-[135px] bg-transparent py-4 px-3 flex flex-col justify-start gap-y-2">
      <span className="text-white">{props.icon}</span>
      <span className="text-white text-sm font-medium">{props.label}</span>
    </div>
  );
};

export default UsageProcessCard;
