import "./App.css";
import Chatbot from "./screens/Chatbot/Chatbot";
import About from "./screens/About/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const random_num = () => Math.floor(Math.random() * 10000);

const metadata_start = {
  sessionStarted: false,
  sessionId: random_num(),
  sessionState: {},
};
function App() {
  const [userLogs, setUserLogs] = useState([]);
  const [botLogs, setBotLogs] = useState([
    { content: "i am the imdb bot. how can i help you today?" },
  ]);
  const [metadata, setMetadata] = useState(metadata_start);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Chatbot
              userLogs={userLogs}
              setUserLogs={setUserLogs}
              botLogs={botLogs}
              setBotLogs={setBotLogs}
              metadata={metadata}
              setMetadata={setMetadata}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
