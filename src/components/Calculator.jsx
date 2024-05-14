import Input from '../components/Input';
import Button from '../components/Button';
import '../assets/css/components/calculator.css';

import { useState } from 'react';

function Calculator(){
  const [number, setNumber] = useState('');
  const handleClick = (value) => {
    setNumber(number + value);
  };

  const handleClear = () => {
    setNumber('');
  };

  const handleDelete = () => {
    setNumber(number.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(number);
      setNumber(result.toString());
    } catch (error) {
        setNumber('Error');
    }
  };

  return (
    <div className="container">
      <Input value={number} onChange={setNumber} />
      <div className="btn-container">
      <div>
        <Button style={{ color: '#3fc0a8' }} value="←" onClick={handleDelete} />
        <Button style={{ color: '#3fc0a8' }} value="C" onClick={handleClear}/>
        <Button style={{ color: '#70484b' }} value="/" onClick={() => handleClick('/')} />
        <Button style={{ color: '#70484b' }} value="*" onClick={() => handleClick('*')} />
      </div>
      <div>
        <Button value="7" onClick={() => handleClick('7')} />
        <Button value="8" onClick={() => handleClick('8')} />
        <Button value="9" onClick={() => handleClick('9')} />
        <Button style={{ color: '#70484b' }} value="-" onClick={() => handleClick('-')} />
      </div>
      <div>
        <Button value="4" onClick={() => handleClick('4')} />
        <Button value="5" onClick={() => handleClick('5')} />
        <Button value="6" onClick={() => handleClick('6')} />
        <Button style={{ color: '#70484b' }} value="+" onClick={() => handleClick('+')} />
      </div>
      <div>
        <Button value="1" onClick={() => handleClick('1')} />
        <Button value="2" onClick={() => handleClick('2')} />
        <Button value="3" onClick={() => handleClick('3')}  />
        <Button style={{ color: '#70484b' }} value="=" onClick={handleCalculate} />
      </div>
      <div>
        <Button value="0" onClick={() => handleClick('0')} />
        <Button value="." onClick={() => handleClick('.')} />
      </div>
    </div>
  </div>
  );
}

export default Calculator;
