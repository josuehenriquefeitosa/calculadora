import { useState } from 'react'
import './styles.js' 
import Input from './components/Input'
import ButtonContainer from './components/Button'
import { Container , Content, Row} from './styles'


function App() {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')

  const handleOnClear = ()=>{
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }

  return (
      <Container>
        <h1>Calcule aqui</h1>
        <Content>

          <Input value={currentNumber}/>
          <Row>
            <ButtonContainer label="¹/x" onClick={() => handleAddNumber('')}/>
            <ButtonContainer label="CE" onClick={() => handleAddNumber('')}/>
            <ButtonContainer label="C" onClick={handleOnClear}/>
            <ButtonContainer label="(X)" onClick={() => handleAddNumber('(X)')}/>
          </Row>
          <Row>
            <ButtonContainer label="x²" onClick={() => handleAddNumber('')}/>
            <ButtonContainer label="%" onClick={() => handleAddNumber('')}/>
            <ButtonContainer label="²√" onClick={() => handleAddNumber('')}/>
            <ButtonContainer label="/" onClick={() => handleAddNumber('/')}/>
          </Row>
          <Row>
            <ButtonContainer label="7" onClick={() => handleAddNumber('7')}/>
            <ButtonContainer label="8" onClick={() => handleAddNumber('8')}/>
            <ButtonContainer label="9" onClick={() => handleAddNumber('9')}/>
            <ButtonContainer label="x" onClick={() => handleAddNumber('x')}/>
          </Row>
          <Row>
            <ButtonContainer label="4" onClick={() => handleAddNumber('4')}/>
            <ButtonContainer label="5" onClick={() => handleAddNumber('5')}/>
            <ButtonContainer label="6" onClick={() => handleAddNumber('6')}/>
            <ButtonContainer label="-" onClick={() => handleAddNumber('-')}/>
          </Row>
          <Row>
            <ButtonContainer label="1" onClick={() => handleAddNumber('1')}/>
            <ButtonContainer label="2" onClick={() => handleAddNumber('2')}/>
            <ButtonContainer label="3" onClick={() => handleAddNumber('3')}/>
            <ButtonContainer label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <ButtonContainer label="+/-" onClick={() => handleAddNumber('+/-')}/>
            <ButtonContainer label="0" onClick={() => handleAddNumber('0')}/>
            <ButtonContainer label="," onClick={() => handleAddNumber(',')}/>
            <ButtonContainer label="=" onClick={() => handleAddNumber('=')}/>
          </Row>
          
            
          
        </Content>
      </Container>
  )
}

export default App
