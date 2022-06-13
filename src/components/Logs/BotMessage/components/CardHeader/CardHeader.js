import React from "react";

const CardHeader = ({ title }) => {
  return (
    <>
      <button className="text-yellow border text-left border-yellow w-[100%] font-ubuntu font-semibold inline-block">
        <div className="h-full w-10 bg-yellow border border-yellow inline-block my-0">
          &nbsp;
        </div>
        {title}
      </button>
    </>
  );
};

export default CardHeader;
