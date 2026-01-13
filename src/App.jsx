import Calculator from "./components/Calculator"
import Text from "./components/Text"
import Result from "./components/Result"
import GroupButtons from "./components/GroupButtons"
import Button from "./components/Button"
import Divide from './assets/Divide.svg'
import Minus from './assets/Minus.svg'
import Plus from './assets/Plus.svg'
import ResultImage from './assets/Result.svg'
import X from './assets/X.svg'

function App() {

  return (
    <main>
      <Calculator>
        <div className="grow flex flex-col gap-2">
          <Text style='px-4.5 text-right text-xl text-text-history'>1+1</Text>
          <Result>2</Result>
        </div>
        <div className="grow flex flex-col gap-3">
          <GroupButtons>
            <Button style="w-15 btn-black text-white">CE</Button>
            <Button style="w-35 btn-black text-white">C</Button>
            <Button style="w-15 btn-dark-purple text-white">
              <img src={Divide} alt="Divisão" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button style="w-15.5 btn-black text-white">7</Button>
            <Button style="w-15.5 btn-black text-white">8</Button>
            <Button style="w-15.5 btn-black text-white">9</Button>
            <Button style="w-15.5 btn-dark-purple text-white">
              <img src={X} alt="Multiplicação" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button style="w-15.5 btn-black text-white">4</Button>
            <Button style="w-15.5 btn-black text-white">5</Button>
            <Button style="w-15.5 btn-black text-white">6</Button>
            <Button style="w-15.5 btn-dark-purple text-white">
              <img src={Minus} alt="Subtração" />
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button style="w-15.5 btn-black text-white">1</Button>
            <Button style="w-15.5 btn-black text-white">2</Button>
            <Button style="w-15.5 btn-black text-white">3</Button>
            <Button style="w-15.5 btn-dark-purple text-white">
              <img src={Plus} alt="Adição"/>
            </Button>
          </GroupButtons>
          <GroupButtons>
            <Button style="w-35 btn-black text-white">0</Button>
            <Button style="w-15 btn-black text-white">,</Button>
            <Button style="w-15 btn-light-purple text-white">
              <img src={ResultImage} alt="Resultado" />
            </Button>
          </GroupButtons>
        </div>
      </Calculator>
    </main>
  )
}

export default App
