import Text from "./Text"

function History({children}) {
  return (
    <div className='card w-129.5 pt-10 px-8 flex flex-col gap-4'>
        <Text style='text-2xl text-text-result'>Histórico de Operações</Text>
        {children}
    </div>
  )
}

export default History