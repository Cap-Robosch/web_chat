import { useState } from "react";
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
      });
  };


  return (
    <div className="flex gap-5 h-screen w-screen bg-gray-200">
        <Sidebar />
      <div className="pl-72 pb-80 h-screen w-full box-border bg-cover">
      <TalkArea loading={loading} text={showMessage} />
      <div className="flex gap-2 px-12 fixed bottom-5 right-3 md:w-9/12 2xl:w-10/12">
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

      </div>
      </div>
    </div>
  );
}

export default App;
