import { useState } from "react";
import axios from "axios";
import { Sidebar } from "./components/Sidebar";
import { LoadingDots } from "./components/LoadingDots";
import { TalkArea } from "./components/TalkArea";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [roboschAnswer, setRoboschAnswer] = useState("");
  const [showMessage, setShowMessage] = useState<string[]>([""])
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setShowMessage((prev) => [...prev, inputMessage])
    setInputMessage("");
    await axios
      .post("http://localhost:3000/", {
        text: inputMessage,
        userId: "vinicius",
      })
      .then((e) => {
        setLoading(false);
        setRoboschAnswer(e.data);
        setShowMessage((prev) => [...prev, e.data])
      });
  };

  const sla=()=>{
    console.log(showMessage)
  }

  return (
    <div className="flex gap-5 bg-gray-200 items-center justify-center h-screen w-screen">
      <div className="w-80 h-full">
        <Sidebar />
      </div>
      {loading ? (
        <LoadingDots />
      ) : (
        <TalkArea text={roboschAnswer} />
      )}
      <div className="flex gap-2 px-12 fixed bottom-5 right-3 lg:w-9/12">
        <div className="relative w-full flex items-center">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Escreva sua mensagem aqui..."
            className="p-3 px-4 bg-white outline-none rounded-full w-full"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
          />
          <button
            type="submit"
            onClick={sendMessage}
            className="p-2 absolute right-4 rounded-full"
          >
            <img className="w-6" src="./icon_send.svg" />
          </button>
        </div>
        <button onClick={sla} className="w-80 bg-red-500">Ts</button>

      </div>
    </div>
  );
}

export default App;
