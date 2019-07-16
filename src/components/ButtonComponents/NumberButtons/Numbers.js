import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";


//import any components needed


//Import your array data to from the provided data file

const Numbers = () => {
const [dataInfo,setDataInfo] = useState(numbers)
const numberInfo = dataInfo.map(e=> e )
  // STEP 2 - add the imported data to state
  return (
    <div >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {dataInfo.map(numberData => (<NumberButton target={numberData}/>))}
    </div>
  );
};
export default Numbers;