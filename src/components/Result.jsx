import { useState } from 'react'
import Equals from '../assets/Equals.svg'

function Result() {

  const [test, setTest] = useState('2÷4');

  const teste = test.split('');

  console.log(teste)

  return (
    <div className='relative px-4.5 flex justify-between'>
      <img className='w-1/10 absolute left-3 top-1.5 pointer-events-none' src={Equals} alt="Sinal de igual" />
      <input className='uppercase text-text-result text-4xl max-w-66 text-right focus:outline-none' type='text' value={test} />
    </div>
  )
}

export default Result