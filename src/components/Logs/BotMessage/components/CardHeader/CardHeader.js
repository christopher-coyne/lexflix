import React from "react";

const CardHeader = ({ title }) => {
  return (
    <>
      <button className="text-yellow border border-yellow w-[100%] font-ubuntu font-semibold flex items-stretch justify-between gap-2">
        <div className=" w-[15%] bg-yellow border border-yellow my-0">
          &nbsp;
        </div>
        <div className="text-left w-[100%]">{title}</div>
      </button>
    </>
  );
};

export default CardHeader;
