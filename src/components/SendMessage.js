import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp, query,orderBy,onSnapshot,limit } from "firebase/firestore";
import { auth, db } from "../firebase";


export default function SendMessage() {

  const [message,setMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(message.trim() === ""){
      alert("Enter Valid Message");
      return;
    }

    const {uid,displayName,photoURL} = auth.currentUser;
    await addDoc(collection(db,"messages"),{
      text:message,
      name:displayName,
      avatar:photoURL,
      createdAt:serverTimestamp(),
      uid
    });
    setMessage("");
  }

  return (
    <div className='chat-send-message'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Send Message' />
          <button type="submit">Send</button>
        </form>
      </div>
  )
}
