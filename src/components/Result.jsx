import { useEffect, useState } from 'react'
import Equals from '../assets/Equals.svg'

function Result({ screen, setScreen }) {

  const [stringScreen, setStringScreen] = useState('');

  const pushNewInput = (e) => {
    const newInput = e.target.value
    console.log(newInput)
    // const regexNumber = /^[0-9]$/g;
    // if (condition) {
      
    // }
    const chars = newInput.split('')
    console.log(chars)
    setScreen([...chars])
  }

  useEffect(() => {
    const newScreen = screen.join('')
    setStringScreen(newScreen)
  }, [screen]);

  return (
    <div className='relative px-4.5 flex justify-between'>
      <img className='w-1/10 absolute left-3 top-1.5 pointer-events-none' src={Equals} alt="Sinal de igual" />
      <input onChange={(e) => pushNewInput(e)} className='uppercase text-text-result text-4xl max-w-66 text-right focus:outline-none' type='text' value={stringScreen} />
    </div>
  )
}

export default Result