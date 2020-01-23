import React, {useState} from 'react';
import './App.css';
import NamePicker from './namePicker'

function App() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  console.log(messages)
  return <main>
    <header> 
      <div className="logo-wrap">
      <img src="https://www.freeiconspng.com/uploads/message-icon-png-0.png" alt="icon"/>
      Chatter
      </div>
      <NamePicker onSave={setName} />
    </header>
  
 
  <div className="messages">
    {messages.map((m, i)=> {
      return <div key={i} className="message-wrap">
        <div className="message">{m}</div>
        </div>
  })}
  </div>
    <TextInput onSend={(text)=> {
     setMessages([text, ...messages])
    }} />

  </main>
}

function TextInput(props) {
  const [text, setText] = useState('')

  return <div className="text-input">
    <input className="text-box" value={text}
      placeholder="  Write your message..."
      onChange={e=> setText(e.target.value)}
      onKeyPress={e=> {
        if(e.key==='Enter') {
          if(text) props.onSend(text)
          setText('')
        }
      }}
    />
    <button onClick={()=> {
      if(text) props.onSend(text)
      setText('')
    }} className="send-button" 
      disabled={!text}>
      <img src="https://pngriver.com/wp-content/uploads/2017/12/download-Email-symbol-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-4b8266_f0ef03475d104c6db271009986bdad0fmv2_d_1201_1201_s_2.png" alt="icon"/>
    </button>
  </div> 
}

export default App;
