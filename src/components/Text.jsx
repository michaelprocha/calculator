import React from 'react'

function Text({children, style}) {
  return (
    <p className={style} >{children}</p>
  )
}

export default Text