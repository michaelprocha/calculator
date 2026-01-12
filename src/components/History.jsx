import Text from "./Text"

function History({children}) {
  return (
    <div className='card pt-10 px-8'>
        <Text style='text-2xl text-text-result'>Histórico de Operações</Text>
        {children}
    </div>
  )
}

export default History