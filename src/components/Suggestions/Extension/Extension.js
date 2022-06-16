import React from "react";
import Icon from "../Icon/Icon";

const Extension = ({ currentExtension, submit }) => {
  return (
    <div className="h-[500] w-[70%] sm:w-[70%] md:w-[60%] lg:w-[50%] border-2 border-pink absolute bottom-[10%] right-[27%] bg-midnightPurple text-left p-4 rounded-lg z-40 max-h-[20rem] overflow-y-scroll">
      {currentExtension.map((sug) => (
        <Icon submit={submit} text={sug} key={sug} />
      ))}
    </div>
  );
};

export default Extension;
