import './App.css';
import { useState } from 'react';

const buttons = [
  { keyCode: 96, key: 0, id: 'zero' },
  { keyCode: 97, key: 1, id: 'one' },
  { keyCode: 98, key: 2, id: 'two' },
  { keyCode: 99, key: 3, id: 'three' },
  { keyCode: 100, key: 4, id: 'four' },
  { keyCode: 101, key: 5, id: 'five' },
  { keyCode: 102, key: 6, id: 'six' },
  { keyCode: 103, key: 7, id: 'seven' },
  { keyCode: 104, key: 8, id: 'eight' },
  { keyCode: 105, key: 9, id: 'nine' },
  { keyCode: 110, key: '.', id: 'decimal' },
  { keyCode: 8, key: 'AC', id: 'clear' },
  { keyCode: 13, key: '=', id: 'equals' },
  { keyCode: 107, key: '+', id: 'add' },
  { keyCode: 109, key: '-', id: 'subtract' },
  { keyCode: 106, key: '*', id: 'multiply' },
  { keyCode: 111, key: '/', id: 'divide' },
];

const numTest = /\d/;

const CalcButton = ({ addNumber, button: { id, key, clickFunction } }) => {
  return (
    <>
      <button id={id} className="calc-button" onClick={() => addNumber(key)}>
        {key}
      </button>
    </>
  );
};

const Display = ({ number }) => (
  <div id="display" className="display">
    {number}
  </div>
);

const ButtonGroup = ({ addNumber }) => (
  <div className="button-group">
    {buttons.map((button) => (
      <CalcButton addNumber={addNumber} button={button} />
    ))}
  </div>
);

const Calculator = () => {
  const [number, setNumber] = useState('0');

  const addNumber = (key) => {
    if (numTest.test(key) === true) {
      setNumber(key);
    }
  };

  const clearDisplay = () => {
    setNumber(0);
  };

  return (
    <div id="Calculator">
      <Display number={number} />
      <ButtonGroup addNumber={addNumber} clearDisplay={clearDisplay} />
    </div>
  );
};

export default Calculator;
