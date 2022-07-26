import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const number = useSelector((state)=>state.changeNumber);
  return (
    <>
      <div className="container">
        <h2>Increment/Decrement Number</h2>
        <h5>by any value.</h5>
      <input style={{marginTop: '50px'}} className="displayNumber" value={number} disabled/>
      </div>
      
    </>
  );
};

export default Display;
