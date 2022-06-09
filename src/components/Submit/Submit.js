import React from "react";
import Triangle from "../../assets/triangle.svg";
import Suggestions from "../../components/Suggestions/Suggestions";

const Submit = ({ userInput, updateInput, submitHandler }) => {
  return (
    <div className="border-4 border-yellow w-[90%] container">
      <Suggestions />
      <form
        onSubmit={(e) => submitHandler(e)}
        autoComplete="off"
        className=" w-[100%] h-12 border-4 border-white"
      >
        <input
          type="text"
          name="input"
          value={userInput}
          onChange={(e) => updateInput(e)}
          className="bg-inputBlue text-fontLightBlue h-full rounded-md w-[90%] border-none"
        />
        <button className="bg-inputBlue rounded-md h-full m-0 w-10 text-center">
          <img src={Triangle} alt="send" />
        </button>
      </form>
    </div>
  );
};

export default Submit;

/* absolute bottom-0 right-[30%] */
