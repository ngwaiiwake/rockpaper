import { useEffect, useState } from 'react'
import './App.css'
import { Icon } from '@iconify/react';


const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = [
  
    'scissors',
    'paper', 
    'rock',
  ]

  const handleClick = (value) => {
    setUserChoice(value)
    setInterval(5000)
    generateComputerChoice()
    
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
    setImmediate(3000)
    
    
  }

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'scissorspapers':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('ITS A DRAW!')
          break
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className='App'>
      <div className='one'>
        <div  className='two'>
          <div className='App-logo'>
          <h2>Rock Paper Scissors</h2>
          </div>
      <span>Player choice is: <br/> 
      <span className='for'>{userChoice}</span>
      </span>
      <span>PC choice is: <br/> 
      <span className='for'>{computerChoice}</span>
      </span>
      </div>
<div className='butts'>
      <button onClick={() => handleClick('rock')} 
      className='rocks'><Icon icon="emojione:right-facing-fist-medium-dark-skin-tone" className='icon'/></button>


       <button onClick={() => handleClick('paper')}
       className='rocks'>
       <Icon icon="openmoji:waving-hand" className='icons'/>
       </button>


  <button onClick={() => handleClick('scissors')}
  className='rocks'>
  <Icon icon="openmoji:victory-hand" className='icons'/>
  </button>
  </div>

      <h1 className=' font-light'>{result}</h1>
      </div>
    </div>
  )
}

export default App