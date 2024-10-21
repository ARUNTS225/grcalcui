import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"


  const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculation = () => {
    const tokens = parseInput(input);
    const res = calculateExpression(tokens);
    setInput("");
    setResult(res);
  };

  // Function to split the input into numbers and operators
  const parseInput = (input) => {
    const regex = /([+\-*/])/; // Regular expression to detect operators
    const tokens = input.split(regex).filter(Boolean); // Split the input string and remove empty elements
    return tokens;
  };

  // Function to perform the calculation
  const calculateExpression = (tokens) => {
    const stack = [];
    let currentOp = null;

    for (const token of tokens) {
      if (!isNaN(token)) {
        // If token is a number
        if (currentOp) {
          const num2 = parseFloat(token);
          const num1 = stack.pop();

          switch (currentOp) {
            case "+":
              stack.push(num1 + num2);
              break;
            case "-":
              stack.push(num1 - num2);
              break;
            case "*":
              stack.push(num1 * num2);
              break;
            case "/":
              stack.push(num1 / num2);
              break;
            default:
              break;
          }
          currentOp = null;
        } else {
          stack.push(parseFloat(token));
        }
      } else {
        // If token is an operator
        currentOp = token;
      }
    }

    return stack[0];
  };
  
  const [rate, setRate] = useState([]);

   useEffect(()=> {
    const exRate = async () => {
   //fetch('https://goldratecalculator.onrender.com/api/v1/rateapi')
    //.then( res => res.json())
   // .then( res => setRate(res.change))
    //},[])
    try {
      let url ='https://goldratecalculator.onrender.com/api/v1/rateapi';
      const response = await axios.get(url);
             setRate(response.data.change)
            
        
    } catch (error) {
      console.log(error)
    }}
    exRate();
  },[])

  return (
  <Fragment>
<div class="container text-center" >
<h5 style={{fontFamily:"cursive",color:"grey"}}><b>GOLD RATE CALCULATOR</b></h5>
<form>
  <input type='text'placeholder="Enter the value" value={input} style={{padding:"10px",boxShadow:"1px 1px 1px grey ", border:"2px solid grey",borderRadius:"4px"}} />
</form>

<div class="container-fluid text-center">
<div class="container text-center">
<div class="row align-items-start"><div class="col">
<button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={handleClear}>C</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("0")}>0</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={handleDelete}>D</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("/")}>/</button>
       
     </div></div></div>
<div class="row align-items-start">
<div class="col"> <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("1")}>1</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("2")}>2</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("3")}>3</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("+")}>+</button></div></div></div>
<div class="container text-center">
<div class="row align-items-start">
<div class="col"><button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("4")}>4</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("5")}>5</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("6")}>6</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("-")}>-</button>
        </div></div></div>
<div class="container text-center">
<div class="row align-items-start"><div class="col">
<button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("7")}>7</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("8")}>8</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("9")}>9</button>
        <button class="btn btn-dark btn-lg m-1 border-danger-subtle" onClick={() => handleClick("*")}>*</button></div></div></div>

<div class="container text-center">
<div class="row align-items-start">
<div class="col">
<button  class="btn btn-dark btn-lg m-1" border-danger-subtle data-bs-toggle="modal" data-bs-target="#grdata"  style={{width:"10em",fontFamily:"cursive",color:"gold"}} onClick={handleCalculation}>Convert2goldrate</button>
</div></div></div></div>
            

<div class="modal fade" id="grdata" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-secondary">Gold Rate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"style={{fontFamily:"cursive",color:"brown",}}>
        <p>{result} gram of 24carat gold:₹{rate.map(data =>data.price24*result)}</p>
        <p>{result} gram of 22carat gold:₹{rate.map(data =>data.price22*result)}</p>
        <p>{result} gram of 18carat gold:₹{rate.map(data =>data.price18*result)}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
           
</Fragment>)
};

export default Calculator;
