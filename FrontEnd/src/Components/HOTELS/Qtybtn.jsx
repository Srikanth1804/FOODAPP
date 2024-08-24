import React from "react";

const Qtybtn = ({ children, Track, disable }) => {
  return (
    <button onClick={Track} disabled={disable}>
      {children}
    </button>
  );
};

export default Qtybtn;
