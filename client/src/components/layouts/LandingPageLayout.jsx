import React from "react";

const LandingPageLayout = (props) => {
  return (
    <div className="max-w-screen-xl w-full h-full mx-auto px-4 md:px-7 lg:px-10 xl:px-7 2xl:px-0">
      {props.children}
    </div>
  );
};

export default LandingPageLayout;
