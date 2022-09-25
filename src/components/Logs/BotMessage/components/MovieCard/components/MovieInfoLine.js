import React from "react";

export const MovieInfoLine = ({ label, info, afterInfo }) => {
  return (
    <p className="mt-2">
      <span className="text-yellow font-semibold">{label}:</span>{" "}
      {Array.isArray(info) ? (
        info.map((infoStr, ind) => (
          <React.Fragment key={ind}>
            {infoStr}
            {info.length - 1 === ind ? "" : ", "}
            {afterInfo && afterInfo}
          </React.Fragment>
        ))
      ) : (
        <>
          {info} {afterInfo && afterInfo}
        </>
      )}
    </p>
  );
};
