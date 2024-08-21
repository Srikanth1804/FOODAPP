import React from "react";

const Qtybtn = ({ children, onclick }) => {
  return <button onClick={onclick}>{children}</button>;
};

export default Qtybtn;
