import React, { useEffect, useState,useRef } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, query,orderBy,onSnapshot,limit } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatBox(props) {

  const [user] = useAuthState(auth);
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    props.setLoading(false);
    const q = query(collection(db,"messages"),orderBy("createdAt"),limit(50));
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      let messages = [];
      QuerySnapshot.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id});
      })
      setMessages(messages);
    });
    return () => unsubscribe;
  },[])

  

  return (
    <div className='chat-box'>
      <div className='chat-messages'>
        {messages.map((messageData)=>{
            return(<Message key={messageData.id} messageData={messageData} />)
          
        })}
        {/* <div className='message-box other-user'>
            <p>Hello World</p>
        </div>
        <div className='message-box current-user'>
            <p>Hello World</p>
        </div> */}
        <span class="clear"></span>
      </div>
      <SendMessage />
    </div>
  )
}
