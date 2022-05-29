import './App.css';
import Chatbot from './screens/Chatbot'
import { useState } from "react"

const random_num = () => Math.floor(Math.random() * 10000)

const metadata_start = {'sessionStarted': false, 'sessionId': random_num(), 'sessionState': {}}
function App() {
  const [userLogs, setUserLogs] = useState([])
  const [botLogs, setBotLogs] = useState([{'content': 'i am the imdb bot. how can i help you today?'}])
  const [metadata, setMetadata] = useState(metadata_start)
  return (
    <Chatbot userLogs={userLogs} setUserLogs={setUserLogs} botLogs={botLogs} setBotLogs={setBotLogs} metadata={metadata} setMetadata={setMetadata}/>
  );
}

export default App;
