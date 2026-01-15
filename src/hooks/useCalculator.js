import { useState } from "react";

const useCalculator = () => {

  const [screen, setScreen] = useState([]);
  const [lastResult, setLastResult] = useState('');

  const pressInput = (n) => {
    setScreen([...screen, n])
  };

  const deleteLastInput = () => {
    if (screen.length) {
      const newScreen = Array.from(screen);
      newScreen.pop()
      setScreen(newScreen)
    }
  };

  const deleteAllInput = () => {
    setScreen([])
  };

  const resultMath = () => {
    console.log('acionado')
    if (screen.length) {
      console.log('passou')
      let finalResult = 0;
      let groupNumber = [];
      let groupOperation = [];
      let iNumber = 0;
      let iOperation = 0;
      let oneOperation = true;
      const regexNumber = /^[0-9]/;
      const arrayForMath = Array.from(screen);
      const forHistorical = screen.join(' ');
      setLastResult(forHistorical);
      arrayForMath.forEach((char, iChar, allChars) => {
        if (regexNumber.test(char) || char === ',') {
          if (char === ',') {
            if (groupNumber[iNumber] || groupNumber[iNumber] === 0 || groupNumber[iNumber] === '0') {
              groupNumber[iNumber] = `${groupNumber[iNumber]}.`
            } else {
              groupNumber[iNumber] = `.`
            }
          } else {
            if (groupNumber[iNumber] || groupNumber[iNumber] === 0 || groupNumber[iNumber] === '0') {
              groupNumber[iNumber] = `${groupNumber[iNumber]}${char}`
            } else {
              groupNumber[iNumber] = `${char}`
            }
          }
        } else {
  
          if (allChars.length - 1 !== iChar) {
            iNumber += 1;
          }
          if (oneOperation) {
            groupOperation[iOperation] = char;
            oneOperation = false;
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
              finalResult = parseFloat(groupNumber[i]) + parseFloat(groupNumber[i + 1])
              break;
            case '-':
              finalResult = parseFloat(groupNumber[i]) - parseFloat(groupNumber[i + 1])
              break;
            case 'x':
              finalResult = parseFloat(groupNumber[i]) * parseFloat(groupNumber[i + 1])
              break;
            case '÷':
              finalResult = parseFloat(groupNumber[i]) / parseFloat(groupNumber[i + 1])
              break;
            default:
              break;
          }
        } else {
          switch (operation) {
            case '+':
              finalResult += parseFloat(groupNumber[i + 1])
              break;
            case '-':
              finalResult -= parseFloat(groupNumber[i + 1])
              break;
            case 'x':
              finalResult *= parseFloat(groupNumber[i + 1])
              break;
            case '÷':
              finalResult /= parseFloat(groupNumber[i + 1])
              break;
            default:
              break;
          }
        }
      });
      const showResult = String(finalResult).split('')
      setScreen([...showResult]);
    }
  }

  return [pressInput, deleteLastInput, deleteAllInput, resultMath, screen, setScreen, lastResult]
}

export default useCalculator;