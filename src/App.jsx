import Calculator from "./components/Calculator"
import History from './components/History'
import Text from "./components/Text"
import Result from "./components/Result"
import GroupButtons from "./components/GroupButtons"
import Button from "./components/Button"
import Divide from './assets/Divide.svg'
import Minus from './assets/Minus.svg'
import Plus from './assets/Plus.svg'
import ResultImage from './assets/Result.svg'
import X from './assets/X.svg'
import useCalculator from "./hooks/useCalculator"
import { useEffect, useState } from "react"

function App() {

  const [pressInput, deleteLastInput, deleteAllInput, resultMath, screen, setScreen, lastResult] = useCalculator();
  const [historical, setHistorical] = useState([])

  useEffect(() => {
    if (lastResult) {
      if (historical.length) {
        const newHistorical = [...historical, lastResult]
        setHistorical(newHistorical)
      } else {
        setHistorical([lastResult])
      }
    }
  }, [lastResult])

  return (
    <main className="flex gap-4.5">
      <Calculator>
        <div className="grow flex flex-col gap-2">
          <Text style='tracking-[-0.02em] px-4.5 text-right text-xl text-text-history'>{lastResult}</Text>
          <Result screen={screen} setScreen={setScreen} />
        </div>
        <div className="grow flex flex-col gap-3">
          <GroupButtons>
            <Button onClick={() => deleteLastInput()} style="w-15 btn-black text-white">CE</Button>
            <Button onClick={() => deleteAllInput()} style="w-35 btn-black text-white">C</Button>
            <Button onClick={() => pressInput('÷')} style="w-15 btn-dark-purple text-white">
              <img src={Divide} alt="Divisão" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button onClick={() => pressInput('7')} style="w-15.5 btn-black text-white">7</Button>
            <Button onClick={() => pressInput('8')} style="w-15.5 btn-black text-white">8</Button>
            <Button onClick={() => pressInput('9')} style="w-15.5 btn-black text-white">9</Button>
            <Button onClick={() => pressInput('x')} style="w-15.5 btn-dark-purple text-white">
              <img src={X} alt="Multiplicação" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button onClick={() => pressInput('4')} style="w-15.5 btn-black text-white">4</Button>
            <Button onClick={() => pressInput('5')} style="w-15.5 btn-black text-white">5</Button>
            <Button onClick={() => pressInput('6')} style="w-15.5 btn-black text-white">6</Button>
            <Button onClick={() => pressInput('-')} style="w-15.5 btn-dark-purple text-white">
              <img src={Minus} alt="Subtração" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button onClick={() => pressInput('1')} style="w-15.5 btn-black text-white">1</Button>
            <Button onClick={() => pressInput('2')} style="w-15.5 btn-black text-white">2</Button>
            <Button onClick={() => pressInput('3')} style="w-15.5 btn-black text-white">3</Button>
            <Button onClick={() => pressInput('+')} style="w-15.5 btn-dark-purple text-white">
              <img src={Plus} alt="Adição" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button onClick={() => pressInput('0')} style="w-35 btn-black text-white">0</Button>
            <Button onClick={() => pressInput(',')} style="w-15 btn-black text-white">,</Button>
            <Button onClick={() => resultMath()} style="w-15 btn-light-purple text-white">
              <img src={ResultImage} alt="Resultado" />
            </Button>
          </GroupButtons>
        </div>
      </Calculator>
      <History>
        <div className="flex flex-col gap-3">
          <Text style='tracking-[-0.02em] text-xl text-text-result flex items-center'>1 + 4 = 5</Text>
          {historical.map((item, i) => (
            <Text key={i} style='tracking-[-0.02em] text-xl text-text-result flex items-center'>{item}</Text>
          ))}
        </div>
      </History>
    </main>
  )
}
export default App
