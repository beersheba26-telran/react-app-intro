import React from 'react'

function Timer() {
    const [dateTime, setDateTime] = React.useState<Date>(new Date())
    const countRenders = React.useRef<number>(0);
    React.useEffect(() => {
        function tic(){
        setDateTime(new Date())
        console.log("tic")
        countRenders.current++
    }
       const intervalId: number = setInterval(tic, 1000)
       return () => {
        //cleanup function
        clearInterval(intervalId)
        console.log("cleanup function call")
       }
    }, [])
    
    
  return (
    <div>
      <span>{`${dateTime.getDate()}/${dateTime.getMonth()}/${dateTime.getFullYear()}T `}</span>
      <span>{dateTime.getHours()}/</span>
      <span>{dateTime.getMinutes()}/</span>
      <span>{dateTime.getSeconds()}/</span>
    </div>
  )
}

export default Timer
