import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Chatbot from "./screens/Chatbot/Chatbot";
import About from "./screens/About/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SuggestionsContext } from "./contexts/suggestionsContext";
import { MessagesContext } from "./contexts/messagesContext";

const random_num = () => Math.floor(Math.random() * 10000);

const metadata_start = {
  sessionStarted: false,
  sessionId: random_num(),
  sessionState: {},
};
function App() {
  /* wakeup function. use this to make sure lambda gets woken up ASAP */
  useEffect(() => {
    const message = JSON.stringify({ wakeup: "true" });
    axios.post(
      "https://n9i31tpdha.execute-api.us-east-1.amazonaws.com/v1/chatbot",
      message
    );
  }, []);
  const [messages, setMessages] = useState([
    {
      content:
        "Hello, I’m the Lexflix bot. I can give you movie recommendations, or show you IMDB’s top movies with a certain director or actor. How can I help you today?",
      type: "bot",
    },
  ]);
  const [metadata, setMetadata] = useState(metadata_start);
  return (
    <BrowserRouter>
      <SuggestionsContext>
        <MessagesContext>
          <Routes>
            <Route
              path="/"
              element={
                <Chatbot
                  messages={messages}
                  setMessages={setMessages}
                  metadata={metadata}
                  setMetadata={setMetadata}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </MessagesContext>
      </SuggestionsContext>
    </BrowserRouter>
  );
}

export default App;
