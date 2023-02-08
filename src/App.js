import './App.css';
import Display from './components/Display';
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';

const buttons = [
  { keyCode: 8, key: 'AC', id: 'clear' },
  { keyCode: 106, key: '*', id: 'multiply' },
  { keyCode: 111, key: '/', id: 'divide' },
  { keyCode: 103, key: 7, id: 'seven' },
  { keyCode: 104, key: 8, id: 'eight' },
  { keyCode: 105, key: 9, id: 'nine' },
  { keyCode: 109, key: '-', id: 'subtract' },
  { keyCode: 100, key: 4, id: 'four' },
  { keyCode: 101, key: 5, id: 'five' },
  { keyCode: 102, key: 6, id: 'six' },
  { keyCode: 107, key: '+', id: 'add' },
  { keyCode: 97, key: 1, id: 'one' },
  { keyCode: 98, key: 2, id: 'two' },
  { keyCode: 99, key: 3, id: 'three' },
  { keyCode: 96, key: 0, id: 'zero' },
  { keyCode: 110, key: '.', id: 'decimal' },
  { keyCode: 13, key: '=', id: 'equals' },
];

function Calculator() {
  return (
    <div id="Calculator">
      <Display />
      <ButtonGroup>
        {buttons.map((button) => (
          <Button value={button.key} id={button.id} />
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Calculator;
