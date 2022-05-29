import React from 'react'
import Logs from '../components/Logs'
import { useState } from "react"
import axios from 'axios'
import './Chatbot.css';

const Chatbot = ({setUserLogs, userLogs, botLogs, setBotLogs, metadata, setMetadata}) => {
  const [userInput, setUserInput] = useState('')
  const updateInput = e => {
    setUserInput(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()

    const newMessage = {'text': userInput, 'sessionId': metadata['sessionId'], 'sessionStarted': metadata['sessionStarted'], 'sessionState': metadata['sessionState']}
    console.log('sending new message... ', newMessage)
    axios.post('https://n9i31tpdha.execute-api.us-east-1.amazonaws.com/v1/chatbot', newMessage).then(value => {
        console.log('value returned : ', value)

        const parsed = JSON.parse(value.data.body)
        for (const slot in parsed.sessionState.intent.slots) {
            if (parsed.sessionState.intent.slots[slot] == null) {
                parsed.sessionState.intent.slots[slot] = {}
            }
        }

        console.log('fixed parsed : ', parsed)
        console.log('session attributes : ', parsed.sessionState.sessionAttributes)
        setBotLogs([...botLogs, {'content': value.data.body}])

        // if we have fulfilled getrecs (or anything...), then reset 
        if (parsed.sessionState.intent.state === 'Fulfilled') {
            console.log('fulfilled! reset')
            setMetadata({...metadata, sessionState: {'sessionState': {'intent': {'name': 'FallbackIntent', slots: {}}}, 'sessionAttributes': {'movies': 'mymovie'}}, sessionStarted: true})
        }
        setMetadata({...metadata, sessionState: parsed.sessionState, sessionStarted: true})
    })

    setUserLogs([...userLogs, {'content': userInput}])
    setUserInput('')
  }
  return (
    <div>
        <div className="userMessages">
        <Logs messages={userLogs}/>
        </div>
        <div className="botMessages">
        <Logs messages={botLogs}/>
        </div>
        <form onSubmit={(e) => submitHandler(e)} autoComplete='off'>
            <input type="text" name="input" value={userInput} onChange={e => updateInput(e)}/>
        </form>
    </div>
  )
}

export default Chatbot