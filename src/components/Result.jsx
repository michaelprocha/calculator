import React from 'react'
import Equals from '../assets/Equals.svg'

function Result() {
  return (
    <div className='relative px-4.5 flex justify-between'>
      <img className='w-1/10 absolute left-3 top-1.5 pointer-events-none' src={Equals} alt="Sinal de igual" />
      <input className='uppercase text-text-result text-4xl max-w-66 text-right focus:outline-none' type='text' value={'2+4'}/>
    </div>
  )
}

export default Result