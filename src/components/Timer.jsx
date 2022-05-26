import React, { useEffect } from 'react'
import { useState } from 'react'

const Timer = ({sec, end, start}) => {
    const [timer, settimer] = useState(start)

    useEffect(() => {
      let id = setInterval(()=>{

        if(timer>=end)
        {
            clearInterval(id)
            settimer(start)
        }
        else{
            settimer(timer + 1)
        }

      },sec)
    
      return () => {
        clearInterval(id)
      }
    }, [timer])
    
   
  return (
    <div>
          <div>
              <h1>Timer</h1>
              <h1>{timer}</h1>
          </div>
    </div>
  )
}

export default Timer