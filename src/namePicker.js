import React, {useState, useRef} from 'react';
import { FiEdit, FiSave } from 'react-icons/fi';
import './App.css';

function NamePicker(props) {
    const [name, setName] =  useState('')
    const [showName, setShowName] = useState(false)
    const inputEl = useRef(null)

    function save(){
        inputEl.current.focus()
            if(name && !showName) {
                props.onSave(name)
            }
            setShowName(!showName)
    }

    return <div className="edit-username">
        <input value={name} ref={inputEl}
            className="name-input"
            style={{visibility: showName ? 'hidden' : 'visible'}}
            onChange={e=> setName(e.target.value)}
            onKeyPress={e=> {
                if(e.key==='Enter') save()
            }}
        />
        {showName && <div>{name}</div>}
        <button onClick={save} className="name-button">
            {showName ? <FiEdit /> : <FiSave />}
        </button>
    </div>
}
export default NamePicker