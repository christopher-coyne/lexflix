import React from "react";
import Triangle from "../../assets/triangle.svg";
import Suggestions from "../../components/Suggestions/Suggestions";

const Submit = ({ userInput, updateInput, submitHandler }) => {
  return (
    <>
      <Suggestions />
      <form
        onSubmit={(e) => submitHandler(e)}
        autoComplete="off"
        className="absolute bottom-0 right-[30%]"
      >
        <input
          type="text"
          name="input"
          value={userInput}
          onChange={(e) => updateInput(e)}
          className="bg-inputBlue text-fontLightBlue p-3 rounded-md"
        />
        <button className="bg-inputBlue p-3 rounded-md m-0">
          <img src={Triangle} alt="send" />
        </button>
      </form>
    </>
  );
};

export default Submit;

/* absolute bottom-0 right-[30%] */
