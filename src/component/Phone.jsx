import { useState } from "react";

function Phone({  sender, messages, onSendMessage }) {
  const [inputMessage, setInputMessage] = useState("");


  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };


  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage(""); 
    }
  };

  return (
    <div className="">
      <div className="mockup-phone border-0">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="size-full flex flex-col h-full">
              <h4 className="bg-slate-700 text-center pt-8 text-white">{sender}</h4>

              <div className="flex-1 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat ${
                      message.sender === sender ? "chat-start" : "chat-end"
                    }`}
                  >
                    <div className="chat-footer">
                      <time className="text-xs opacity-50">{message.time}</time>
                    </div>
                    <div
                      className={`chat-bubble ${
                        message.sender === sender ? "bg-green-300" : "bg-gray-500"
                      } text-white h-fit break-words`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex bg-gray-100">
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Write a message"
                  className="w-3/4 p-2 m-2 rounded-full resize-none border-[1px] border-gray-300  "
                  rows={1}
                  value={inputMessage}
                  onChange={handleInputChange}
                />
                <button className="rounded-full w-1/4 m-2 bg-green-300" onClick={handleSendMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="100%"
                    fill="#FFFFFF"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
