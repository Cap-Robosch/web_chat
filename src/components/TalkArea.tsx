import { LoadingDots } from "./LoadingDots";

export const TalkArea = ({
  text,
  loading
}: {
  loading: boolean,
  text: { text: string; sender: string }[];
}) => {
  return (
    <div className={`lg:w-full h-full flex flex-col space-y-8 px-16 py-5`}>
      {text.map((msg) => (
        <p
          className={`${msg.sender === "Robosch" ? "bg-white max-w-prose rounded-bl-none" : "bg-purple-500 text-white flex self-end max-w-prose rounded-br-none"
            } rounded-2xl p-2 px-3`}
        >
          {msg.text}
        </p>
      ))}
      <div className={`${loading ? "flex" : "hidden"} p-2 bg-white rounded-2xl flex justify-center items-center rounded-bl-none w-16 `}>{loading ? <LoadingDots /> : null}</div>
    </div>
  );
};
