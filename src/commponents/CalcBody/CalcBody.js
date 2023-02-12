import { useState } from "react";
import Button from "../Button/Button";

function CalcBody() {

    const [input, setInput] = useState("0");
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("");

    const addText = (val) =>{

        if (input === "0") {
            
            setInput("");
        }

        setInput((text) => [...text, val + ""]);

    }

    const addOperator = (val) =>{

        setOperator(val);

    }

    const commaHandler = () =>{
        if (input.includes(".")) {
            
            setInput(input);
        }
    }
    


    const deleteHandler = () =>{

        const value = input.slice(0,-1);
        if (value.length == 0) {
            setInput("0");
            
        }else{
            setInput(value);

        }
       setOperator("");


    }

    const plusHandler = () =>{
        let inputNumber = input.join('');
        
        let value = Number(result) + Number(inputNumber);

        setResult(value);

        setInput("0")
    }

    const minusHandler = () =>{

        let inputNumber = input.join('');
         
         let value = Number(result) - Number(inputNumber);
 
         setResult(value);
 
         setInput("0")
     }

     const multiplyHandler = () =>{

        let inputNumber = input.join('');
         
         let value = Number(result) * Number(inputNumber);
 
         setResult(value);
        
         setInput("0")
     }

     const divisionHandler = () =>{
        let inputNumber = input.join('');
         
        let value = Number(result) / Number(inputNumber);

        setResult(value);

        setInput("0")
    }

    const acHandler = () =>{
       setResult(0);

       setOperator("");

       setInput("0")
    }



   return(
   <>

       <div className="calculator-grid" >

           <div className="output">
               <div className="previous-operand">{input}</div>
               <div className="operator">{operator}</div>
               <div className="currnet-operand">{result}</div>
           </div>
            <div className="button-grid">
           <button className="span-two btn" onClick={acHandler}>AC</button>    
           <button className="btn" onClick={deleteHandler}>DEL</button> 
           <button className="btn" onClick={() => {addOperator("÷"); divisionHandler(); }}>÷</button>
           <Button symbol="1" handleClick={addText}/>
           <Button symbol="1" handleClick={addText}/>
           <Button symbol="1" handleClick={addText}/>
           <button className="btn" onClick={() => { addOperator("*"); multiplyHandler();}}>*</button>
            <Button symbol="4" handleClick={addText}/>
            <Button symbol="5" handleClick={addText}/>
            <Button symbol="6" handleClick={addText}/>
            <button className="btn" onClick={() => {addOperator("+"); plusHandler(); }}>+</button>
            <Button symbol="7" handleClick={addText}/>
            <Button symbol="8" handleClick={addText}/>
            <Button symbol="9" handleClick={addText}/>
            <button className="btn" onClick={() => {addOperator("-"); minusHandler(); }}>-</button>
            <button  className="btn"onClick={() => {addText("."); commaHandler();}} >.</button>
            <Button symbol="0" handleClick={addText}/>
            <button className="span-two btn">=</button>
            </div>


        </div>

    </>
    );
}

export default CalcBody;