import { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "./components/Sidebar";
import { TalkArea } from "./components/TalkArea";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [showMessage, setShowMessage] = useState<
    { text: string; sender: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if(inputMessage!==""){
      setLoading(true);
      setShowMessage((prev) => [...prev, { text: inputMessage, sender: "User" }]);
      setInputMessage("");
      await axios
        .post("http://localhost:3000/", {
          text: inputMessage,
          userId: "vinicius",
        })
        .then((e) => {
          setLoading(false);
          console.log(e);
          setShowMessage((prev) => [
            ...prev,
            { text: e.data, sender: "Robosch" },
          ]);
      const windowMessage = document.getElementById("messageWindow")
          if (windowMessage){
            windowMessage.scrollTop = windowMessage.scrollHeight - windowMessage.clientHeight;
          }
        });
    }
  };

  useEffect(()=>{
    const windowMessage = document.getElementById("messageWindow")
          if (windowMessage){
            windowMessage.scrollTop = windowMessage.scrollHeight - windowMessage.clientHeight;
          }
  },[sendMessage, showMessage])

  return (
    <main>
      <div>
        <div className="w-full z-50 fixed h-1.5 bg-gradient-to-r from-purple to-pink"></div>
      <div className="flex font-fonte gap-5">
        <Sidebar />
        <div className="md:pl-72 md:pb-80 h-screen w-full box-border bg-cover">
          <TalkArea loading={loading} text={showMessage} />
          <div className="flex gap-2 md:px-12 fixed bottom-8 md:bottom-5 px-4 w-full md:w-9/12 2xl:w-10/12">
            <div className="relative w-full flex items-center">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Escreva sua mensagem aqui..."
                className="p-3 px-4 bg-white outline-none rounded-full w-full z-40"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                type="text"
              />

              <button
                type="submit"
                onClick={sendMessage}
                className="p-2 absolute right-4 rounded-full z-50"
              >
                <img className="w-6" src="./icon_send.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default App;
