export const TalkArea = ({ text }: { text: string }) => {
    if (text === "") {
      return <div className="text-gray-700">Faça uma pergunta!</div>
    }
  
    const newText = text.split("\n").map((str) => <p>{str}</p>);
    
    return <div>{newText}</div>;
  };