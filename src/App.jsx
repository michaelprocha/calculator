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
import { useState } from "react"

function App() {

  const [screen, setScreen] = useState([]);

  const pressInput = (n) => {
    screen.push(n);
  };

  const deleteLastInput = () => {
    if (!screen.length) {
      screen.pop();
    }
  };

  const deleteAllInput = () => {
    setScreen([])
  };

  const resultMath = () => {
    if (!screen.length) {
      let finalResult = 0;
      let groupNumber = [];
      let groupOperation = [];
      let iNumber = 0;
      let iOperation = 0;
      const regexNumber = /^[0-9]$/g;
      screen.forEach((char, iChar, allChars) => {
        if (regexNumber.test(char) || char === ',') {
          if (char === ',') {
            groupNumber[iNumber] = `${groupNumber[iNumber]}.`
          }
          groupNumber[iNumber] = `${groupNumber[iNumber]}${char}`
        } else {
          if (allChars.length - 1 !== iChar) {
            iNumber += 1;
          }
          if (!iOperation) {
            groupOperation[iOperation] = char;
          } else {
            iOperation += 1;
            groupOperation[iOperation] = char;
          }
        }
      });
      groupOperation.forEach((operation, i) => {
        if (!i) {
          switch (operation) {
            case '+':
              finalResult = parseInt(groupNumber[i]) + parseInt(groupNumber[i + 1])
              break;
            case '-':
              finalResult = parseInt(groupNumber[i]) - parseInt(groupNumber[i + 1])
              break;
            case 'x':
              finalResult = parseInt(groupNumber[i]) * parseInt(groupNumber[i + 1])
              break;
            case '÷':
              finalResult = parseInt(groupNumber[i]) / parseInt(groupNumber[i + 1])
              break;
            default:
              break;
          }
        } else {
          switch (operation) {
            case '+':
              finalResult += parseInt(groupNumber[i + 1])
              break;
            case '-':
              finalResult -= parseInt(groupNumber[i + 1])
              break;
            case 'x':
              finalResult *= parseInt(groupNumber[i + 1])
              break;
            case '÷':
              finalResult /= parseInt(groupNumber[i + 1])
              break;
            default:
              break;
          }
        }
      });
      setScreen(finalResult);
    }
  }

  return (
    <main className="flex gap-4.5">
      <Calculator>
        <div className="grow flex flex-col gap-2">
          <Text style='tracking-[-0.02em] px-4.5 text-right text-xl text-text-history'>1 + 1</Text>
          <Result />
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
              <img src={Plus} alt="Adição" />
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
      <History>
        <div className="flex flex-col gap-3">
          <Text style='tracking-[-0.02em] text-xl text-text-result flex items-center'>1 + 4 = 5</Text>
          <Text style='tracking-[-0.02em] text-xl text-text-result flex items-center'>1 + 4 = 5</Text>
        </div>
      </History>
    </main>
  )
}
export default App
