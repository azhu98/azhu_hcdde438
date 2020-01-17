import React, {useState} from 'react';
import './App.css';

function App() {
  return <main>
    <header> 
      <img src="https://www.freeiconspng.com/uploads/message-icon-png-0.png"/>
      Chatter
    </header>
  
  <div className="chatter-bubble">
    Hello!~ This is Chatterbot.

  </div>
  <div className="speech-bubble">
    Hi

  </div>
  <div className="speech-bubble2">
    Nice to meet you

  </div>
  <div className="speech-bubble3">
    My name is Amanda 😊

  </div>
    <TextInput onSend={t=> console.log(t)} />
    
  </main>
}

function TextInput(props) {
  const [text, setText] = useState('')

  return <div className="text-input">
    <input className="text-box" value={text}
      placeholder="  Write your message..."
      onChange={e=> setText(e.target.value)}
    />
    <button className="send-button" onClick={()=> {
      if(props.onSend) props.onSend(text)
      setText('')
    }}>
      <img src="https://pngriver.com/wp-content/uploads/2017/12/download-Email-symbol-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-4b8266_f0ef03475d104c6db271009986bdad0fmv2_d_1201_1201_s_2.png" />
    </button>
  </div> 
}

export default App;
