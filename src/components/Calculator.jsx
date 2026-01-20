function Calculator({children}) {
  return (
    <div className='card w-89 px-8 pb-8 pt-13.5'>
      <div className='flex flex-col gap-6.5'>{children}</div>
    </div>
  )
}

export default Calculator