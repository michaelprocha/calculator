import { useEffect, useState } from "react";

const useHistorical = (lastResult, screen) => {

    const [historical, setHistorical] = useState([])
    
      useEffect(() => {
        if (lastResult) {
          console.log(historical.length)
          console.log(screen, lastResult)
          const screenJoin = screen.join(' ')
          const forHistorical = `${lastResult} = ${screenJoin}`;
          console.log(forHistorical)
          if (historical.length === 0) {
            console.log(`primeiro`)
            setHistorical([forHistorical])
          } else if(historical.length > 0 && historical.length < 10){
            console.log(`segundo`)
            const newHistorical = [forHistorical, ...historical]
            setHistorical(newHistorical)
          } else{
            console.log(`ultimo`)
            const maxHistorical = historical.length - 1;
            const minHistorical = 0;
            const newHistorical = []
            for (let i = minHistorical; i <= maxHistorical; i++) {
              if (i === minHistorical) {
                newHistorical.push(forHistorical)
              }else{
                newHistorical.push(historical[i - 1]);
              }          
            }
            setHistorical([...newHistorical])
          }
        }
      }, [lastResult])

      return [historical]
}

export default useHistorical;