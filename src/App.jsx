import Calculator from "./components/Calculator"
import Text from "./components/Text"
import Result from "./components/Result"

function App() {

  return (
    <main>
      <Calculator>
        <div className="grow flex flex-col gap-2">
          <Text style='px-4.5 text-right text-xl text-text-history'>1+1</Text>
          <Result>2</Result>
        </div>
      </Calculator>
    </main>
  )
}

export default App
