import { useState } from "react";
import axios from "axios";

const NewlineText = ({ text }: { text: string }) => {
  if (text === ""){
    return <div className="text-gray-700">Faça uma pergunta!</div>
  }
  const newText = text.split("\n").map((str) => <p>{str}</p>);
  return <div>{newText}</div>;
};

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [roboschAnswer, setRoboschAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:3000/", {
        text: inputMessage,
        userId: "vinicius",
      })
      .then((e) => {
        setLoading(false);
        console.log(e);
        setRoboschAnswer(e.data);
        setInputMessage("");
      });
  };

  return (
    <div className="flex flex-col gap-5 px-10 items-center justify-center h-screen w-screen">
      {loading ? (
        <div className="flex">
          <div className="h-2.5 w-2.5 bg-purple-500 rounded-full mr-1 animate-bounce"></div>
          <div className="h-2.5 w-2.5 bg-purple-500 rounded-full mr-1 animate-bounce200"></div>
          <div className="h-2.5 w-2.5 bg-purple-500 rounded-full animate-bounce400"></div>
        </div>
      ) : (
        <NewlineText text={roboschAnswer} />
      )}
      <div className="flex gap-2">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Escreva sua mensagem aqui..."
          className="p-2 bg-gray-200 outline-none rounded w-40 lg:w-96"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          type="text"
        />
        <button
          type="submit"
          onClick={sendMessage}
          className="p-2 rounded bg-gray-200 w-16 lg:w-24"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
