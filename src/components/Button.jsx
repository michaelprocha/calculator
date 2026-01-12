import React from 'react'

function Button({children, onClick, style}) {
  return (
    <button className={style} type='button' onClick={onClick}>{children}</button>
  )
}

export default Button