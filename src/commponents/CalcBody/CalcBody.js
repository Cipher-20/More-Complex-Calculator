import { useState } from "react";
import Button from "../Button/Button";

function CalcBody() {

    const [text, setText] = useState("");
    const [result, setResult] = useState(0);

    const addText = (val) =>{
        setText((text) => [...text, val + " "])
    }
    
    const handler = () => {
        console.log(1);
    }

    return(
    <>

        <div className="calculator-grid">

            <div className="output">
                <div className="previous-operand">{text}</div>
                <div className="currnet-operand">{result}</div>
            </div>

            <button className="span-two">AC</button>    
            <button>DEL</button>
            <Button symbol="÷" handleClick={addText}/>
            <Button symbol="1" handleClick={addText}/>
            <Button symbol="2" handleClick={addText}/>
            <Button symbol="3" handleClick={addText}/>
            <Button symbol="*" handleClick={addText}/>
            <Button symbol="4" handleClick={addText}/>
            <Button symbol="5" handleClick={addText}/>
            <Button symbol="6" handleClick={addText}/>
            <Button symbol="+" handleClick={addText}/>
            <Button symbol="7" handleClick={addText}/>
            <Button symbol="8" handleClick={addText}/>
            <Button symbol="9" handleClick={addText}/>
            <Button symbol="-" handleClick={addText}/>
            <Button symbol="." handleClick={addText}/>
            <Button symbol="0" handleClick={addText}/>
            <button className="span-two">=</button>

        </div>

    </>
    );
}

export default CalcBody;