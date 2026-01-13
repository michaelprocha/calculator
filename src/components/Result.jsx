import React from 'react'
import Equals from '../assets/Equals.svg'

function Result({children}) {
  return (
    <div className='px-4.5 flex justify-between'>
      <img className='w-1/10' src={Equals} alt="Sinal de igual" />
      <p className='uppercase text-text-result text-4xl'>{children}</p>
    </div>
  )
}

export default Result