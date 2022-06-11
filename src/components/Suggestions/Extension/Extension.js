import React from "react";
import Icon from "../Icon/Icon";

const Extension = ({ currentExtension, submit }) => {
  return (
    <div className="h-[500] w-[40%] border-2 border-pink absolute bottom-[10%] right-[27%] bg-midnightPurple text-left p-4 rounded-lg">
      {currentExtension.map((sug) => (
        <Icon submit={submit} text={sug} key={sug} />
      ))}
    </div>
  );
};

export default Extension;
