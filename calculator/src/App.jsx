import './App.css'
import ButtonsContainer from './component/ButtonsContainer'
import Container from './component/Container';
import Display from './component/Display';

function App() {

  const keyboardKeys = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','='];

  return (
    <Container>
        <Display />
        <ButtonsContainer items={keyboardKeys}/>
    </Container>
  )
}

export default App
