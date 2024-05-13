import { useState } from 'react';
import './App.css'
import ButtonsContainer from './component/ButtonsContainer'
import Container from './component/Container';
import Display from './component/Display';

function App() {
  const keyboardKeys = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','='];
  const [calValue, setCalValue] = useState();

  const clickHandler =(item) =>{
    if(item === 'C'){
      setCalValue('');
    }
    else if(item === '='){
      const result = eval(calValue);
      setCalValue(result);
    }
    else{
      setCalValue(calValue+item);
    }
  }

  return (
    <Container>
      <Display displayValue={calValue} />
      <ButtonsContainer items={keyboardKeys} handleClick={clickHandler}/>
    </Container>
  )
}

export default App
