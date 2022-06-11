import React from "react";

const MovieInfoLine = ({ label, info }) => {
  return (
    <p className="mt-2">
      <span className="text-yellow font-semibold">{label}:</span>{" "}
      {Array.isArray(info) ? (
        info.map((infoStr, ind) => (
          <>
            {infoStr}
            {info.length - 1 === ind ? "" : ", "}
          </>
        ))
      ) : (
        <>{info}</>
      )}
    </p>
  );
};

export default MovieInfoLine;
