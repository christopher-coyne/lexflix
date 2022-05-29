import React from 'react'

const Logs = ({messages}) => {
    if (!messages) {
        return <></>
    }
  return (
      <div>
    {messages.map((msg, ind) => <div key={ind}>{msg.content}</div>)}
    </div>
  )
}

export default Logs