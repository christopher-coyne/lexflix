import React from "react";
import Triangle from "../../assets/triangle.svg";
import Suggestions from "../../components/Suggestions/Suggestions";

const Submit = ({ userInput, updateInput, submitHandler, metadata }) => {
  return (
    <div className="border-2 border-fontLightBlue w-7/12 container text-right">
      <Suggestions metadata={metadata} submit={submitHandler} />
      <form
        onSubmit={(e) => submitHandler(e)}
        autoComplete="off"
        className=" w-[100%] h-12 border-4 border-white container"
      >
        <input
          type="text"
          name="input"
          value={userInput}
          onChange={(e) => updateInput(e)}
          className="bg-inputBlue text-fontLightBlue h-full rounded-md w-[50%] px-2 border-none"
        />
        <button className="bg-inputBlue rounded-md h-full ml-4 w-16 text-center">
          <img src={Triangle} alt="send" className="inline-block" />
        </button>
      </form>
    </div>
  );
};

export default Submit;

/* absolute bottom-0 right-[30%] */
