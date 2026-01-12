function Calculator({Children}) {
  return (
    <div className='card'>
      <div className='flex flex-col gap-6.5'>{Children}</div>
    </div>
  )
}

export default Calculator