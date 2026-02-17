import { useEffect, useState } from "react"
import Timer from "./components/Timer"


function App() {
  const [date, setDate] = useState<Date> (new Date())
  useEffect(()=>{
    function tic(){
      setDate(new Date())
    }
    const intervalId = setInterval(tic, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return <>
      <Timer city="Tel-Aviv" timeZone="Asia/Jerusalem" dateTime={date}/>
  </>
}

export default App
