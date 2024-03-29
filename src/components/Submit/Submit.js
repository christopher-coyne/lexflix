import React from "react";
import Triangle from "../../assets/triangle.svg";
import Suggestions from "../../components/Suggestions/Suggestions";

export const Submit = ({ submitHandler, metadata }) => {
  return (
    <div className="w-11/12 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 text-right h-[40%] xs:h-[30%] lg:h-[20%] flex flex-col justify-end pb-5 max-w-screen-lg">
      <Suggestions metadata={metadata} submit={submitHandler} />
      <form
        onSubmit={(e) => submitHandler(e)}
        autoComplete="off"
        className=" w-full h-12 flex flex-between md:flex-none"
      >
        <input
          type="text"
          name="input"
          className="bg-inputBlue text-fontLightBlue h-full rounded-md px-2 border-none inline-block grow md:w-[50%] md:grow-0 md:ml-auto"
        />
        <button
          type="submit"
          className="bg-inputBlue rounded-md h-full ml-4 w-16 text-center"
        >
          <img src={Triangle} alt="send" className="inline-block" />
        </button>
      </form>
    </div>
  );
};
