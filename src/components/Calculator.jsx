function Calculator({Children}) {
  return (
    <div className='bg-card w-89 h-141.5 px-8 pb-8 pt-13.5 flex'>
      <div className='flex flex-col gap-6.5'>{Children}</div>
    </div>
  )
}

export default Calculator