export const TalkArea = ({
  text,
}: {
  text: { text: string; sender: string }[];
}) => {
  return (
    <div className={`lg:w-full h-full flex flex-col space-y-8 px-16 py-5`}>
      {text.map((msg) => (
        <p
          className={`${
            msg.sender === "Robosch" ? "bg-white max-w-prose" : "bg-purple-500 text-white flex self-end max-w-prose"
          } rounded-2xl p-2`}
        >
          {msg.text}
        </p>
      ))}
    </div>
  );
};
