import { LoadingDots } from "./LoadingDots";

export const TalkArea = ({
  text,
  loading,
}: {
  loading: boolean;
  text: { text: string; sender: string }[];
}) => {
  return (
    <div className="font-fonte lg:w-full flex flex-col space-y-8 px-3 md:px-16 pt-32 md:pt-10 pb-32 lg:pb-6 overflow-y-scroll h-full md:h-[90vh]" id="messageWindow">
      {text.map((msg, index) => (
        <p key={index}
          className={`${
            msg.sender === "Robosch"
              ? "bg-white max-w-prose rounded-bl-none"
              : "bg-purple text-white flex self-end max-w-prose rounded-br-none"
          } rounded-2xl p-2 px-4 whitespace-pre-line text-sm 2xl:text-base`}
        >
          {msg.text}
        </p>
      ))}
      <div
        className={`${
          loading ? "flex" : "hidden"
        } p-2 bg-white rounded-2xl flex justify-center items-center rounded-bl-none w-16 `}
      >
        {loading ? <LoadingDots /> : null}
      </div>
    </div>
  );
};
