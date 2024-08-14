import { useState } from 'react'
import './App.css'

function App() {
    let [opr, setOpr] = useState('');
    let [result, setResult] = useState(0);
    let [display, setDisplay] = useState('');

    function clickHandler(e) {
        setDisplay((display) => {
            return display + e.target.value;
        });

        if (e.target.value == '+' || e.target.value == '-' || e.target.value == '/' || e.target.value == '*') {
            setOpr(e.target.value);
        }
    }

    function calculate() {
        let temp = 0;
        let tempDisplay = '';

        if (opr == '+') {
            tempDisplay = display.split('+');
            temp = Number(tempDisplay[0]) + Number(tempDisplay[1]);
        } else if (opr == '-') {
            tempDisplay = display.split('-');
            temp = Number(tempDisplay[0]) - Number(tempDisplay[1]);
        } else if (opr == '*') {
            tempDisplay = display.split('*');
            temp = Number(tempDisplay[0]) * Number(tempDisplay[1]);
        } else if (opr == '/') {
            tempDisplay = display.split('/');
            temp = Number(tempDisplay[0]) / Number(tempDisplay[1]);
        }

        setResult(temp);
        setDisplay(temp);

    }

    function digit() {
        setDisplay((display) => {
            return display + '.';
        });
    }

    function clear() {
        setDisplay('');
        setResult(0);
        setOpr('');
    }

    function backspace() {
        setDisplay((display) => {
            let text = display.substring(0, display.length - 1);
            return text;
        });
    }

    return (
        <>
            <div className='calculator'>
                <input type="text" value={display} />
                <div>
                    <button value={7} onClick={e => clickHandler(e)}>7</button>
                    <button value={8} onClick={e => clickHandler(e)}>8</button>
                    <button value={9} onClick={e => clickHandler(e)}>9</button>
                    <button value={'/'} onClick={e => clickHandler(e)}>/</button>
                </div>

                <div>
                    <button value={4} onClick={e => clickHandler(e)}>4</button>
                    <button value={5} onClick={e => clickHandler(e)}>5</button>
                    <button value={6} onClick={e => clickHandler(e)}>6</button>
                    <button value={'*'} onClick={e => clickHandler(e)}>*</button>
                </div>

                <div>
                    <button value={1} onClick={e => clickHandler(e)}>1</button>
                    <button value={2} onClick={e => clickHandler(e)}>2</button>
                    <button value={3} onClick={e => clickHandler(e)}>3</button>
                    <button value={'-'} onClick={e => clickHandler(e)}>-</button>
                </div>

                <div>
                    <button value={','} onClick={digit}>,</button>
                    <button value={0} onClick={e => clickHandler(e)}>0</button>
                    <button value={'='} onClick={calculate}>=</button>
                    <button value={'+'} onClick={e => clickHandler(e)}>+</button>
                </div>

                <div className='clear-div'>
                    <button onClick={clear}>CE</button>
                    <button onClick={backspace}>Del</button>
                </div>
            </div>
        </>
    )
}

export default App
