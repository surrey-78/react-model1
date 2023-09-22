import { useState } from 'react';

const CurrencyConverter = () => {
    const [info] = useState([]);
    const [input, setInput] = useState(0);
    const [to] = useState("");
    const [output, setOutput] = useState(0);

    function convert() {
        var rate = info[to];
        setOutput(input * 82.91);
    }
  return (
    <div className="App">
            <div className="heading">
                <h1>Currency converter</h1>
            </div>
            <div className="container">
                <div className="left-Amount">
                    <h3>Amount in USD</h3>
                    <input type="text"
                        placeholder="Enter the amount"
                        onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="middle">
                    <h4>TO INR</h4>
                </div>
            </div>
            <div className="result">
                <button onClick={() => { convert() }}>Convert</button>
                <h2>{"Converted Amount: " + output.toFixed(2) + " INR"}</h2>
                
            </div>
        </div>
  );
}

export default CurrencyConverter