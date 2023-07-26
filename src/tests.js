
import { useEffect, useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['Rock', 'Paper', 'Scissors']


const handleClick = (value) => {
  setUserChoice(value)
  generateComputerChoice()
  
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  setComputerChoice(randomChoice)
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
    <div>
       <h1>User choice is : {userChoice} </h1>
       <h1>Computer choice is : {computerChoice} </h1>

       {/*ONE WAY OF SETTING UP BUTTONS , next is using arrays */}
    
       
       {choices.map((choice, index) => <button key={index} 
       onClick={() => handleClick('rock')}>{choice}</button>)}
     {choices.map((choice, index) => <button key={index} 
       onClick={() => handleClick('paper')}>{choice}</button>)}
{choices.map((choice, index) => <button key={index} 
       onClick={() => handleClick('scissors')}>{choice}</button>)}
       


  <h1 className="flex justify-center text-2xl">{result}</h1>

    </div>

)
}

export default App
