import { useState } from "react";
import { useLocation } from "react-router-dom"; 
import Phone from "../component/Phone";
import "../App.css";
import { Link } from 'react-router-dom';

function Screens() {
  const { state } = useLocation(); 
  const { name1 = "Unknown", name2 = "Unknown" } = state || {}; 

  const [messages, setMessages] = useState([]);

  const sendMessage = (sender, messageText) => {
    const newMessage = {
      sender: sender,
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((e) => [...e, newMessage]);
  };

  return (
    <div className="flex md:flex-row md:justify-around  md:items-end flex-col items-center bg-gradient-to-r from-green-700 to-green-900 min-h-screen ">
      <Phone
        sender={name1}
        messages={messages}
        onSendMessage={(messageText) => sendMessage(name1, messageText)} 
      />
      
      <Phone
        sender={name2} 
        messages={messages}
        onSendMessage={(messageText) => sendMessage(name2, messageText)} 
      />
      <Link 
          to="/" 
          
          className="text-center p-2 h-fit bg-red-500 hover:bg-red-600 text-white font-semibold  rounded-lg "
        >
          End Chat
        </Link>
    </div>
  );
}

export default Screens;
