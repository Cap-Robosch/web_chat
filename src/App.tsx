import { useState } from "react"
import axios from 'axios'

function App() {
  const [inputMessage, setInputMessage] = useState('')
  const [roboschAnswer,setRoboschAnswer] = useState('')

  const sendMessage = async()=>{
    await axios.post("http://localhost:3000/",{
      text: inputMessage,
      userId: "vinicius"
    }).then((e)=>{
      console.log(e)
      setRoboschAnswer(e.data)
      setInputMessage("")
    })
  }

  return (
    <div className='flex flex-col gap-5 px-10 items-center justify-center h-screen w-screen'>
      <p className="w-80">{roboschAnswer===""? "Faça uma pergunta":roboschAnswer}</p>
      <div className="flex gap-2">
      <input className="p-2 bg-gray-200 outline-none rounded w-40 lg:w-96" value={inputMessage} onChange={(e)=>setInputMessage(e.target.value)} type="text" />
      <button onClick={sendMessage} className="p-2 rounded bg-gray-200 w-16 lg:w-24">Enviar</button>
      </div>
    </div>
  )
}

export default App
