import React from "react";

const OperatorButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.target}
    </button>
  );
};
export default OperatorButton;