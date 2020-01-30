import {useState, useEffect} from 'react'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

let store
const coll = 'messages'

function useDB(room) {
    const [messages, setMessages] = useState([])

    function add(m) {
        setMessages(current => {
            const msgs = [m, ...current]
            msgs.sort((a,b)=> b.ts.seconds - a.ts.seconds)
            return msgs
        })
    }
    function remove(id) {
        setMessages(current=> current.filter(m=> m.id!==id))
    }
    
    useEffect(() => {
        store.collection(coll)
        .where('room','==',room)
        .onSnapshot(snap=> snap.docChanges().forEach(c=> {
            const {doc, type} = c
            if (type==='added') add({...doc.data(),id:doc.id})
            if (type==='removed') remove(doc.id)
        }))
    }, [])
    return messages
}

const db = {}
db.send = function(msg) {
    return store.collection(coll).add(msg)
}
db.delete = function(id) {
    return store.collection(coll).doc(id).delete()
}

export { db, useDB }

const firebaseConfig = {
    apiKey: "AIzaSyD1LpYjq9V7I5og1W4-wb1kd4ZkcKt4TDY",
    authDomain: "chatterapppp.firebaseapp.com",
    databaseURL: "https://chatterapppp.firebaseio.com",
    projectId: "chatterapppp",
    storageBucket: "chatterapppp.appspot.com",
    messagingSenderId: "386607123135",
    appId: "1:386607123135:web:65f96a6f03a4b287f4940a",
    measurementId: "G-E0SCXB9E5F"
}

firebase.initializeApp(firebaseConfig)
store = firebase.firestore()