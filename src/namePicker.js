import React, {useState, useRef, useEffect} from 'react';
import { GoDiffRemoved, GoDiffAdded } from 'react-icons/go';
import './App.css';

function NamePicker(props) {
    const [name, setName] =  useState('')
    const [showName, setShowName] = useState(false)
    const inputEl = useRef(null)
 

    function save(){
        inputEl.current.focus()
            if(name && !showName) {
                props.onSave(name)
                localStorage.setItem('name', name)
            }
            setShowName(!showName)
    }

    useEffect(()=>{
        const n = localStorage.getItem('name')
        if(n) {
            setName(n)
            save()
        }
    }, [])

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
            {showName ? <GoDiffRemoved /> : <GoDiffAdded />}
        </button>
    </div>
}
export default NamePicker