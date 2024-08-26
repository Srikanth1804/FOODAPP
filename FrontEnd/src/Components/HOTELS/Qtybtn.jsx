import React from "react";

const Qtybtn = ({ children, Track, disable }) => {
  return (
    <button
      onClick={Track}
      disabled={disable}
      style={{ border: "none", fontWeight: "900", borderRadius: "2px" }}
    >
      {children}
    </button>
  );
};

export default Qtybtn;
