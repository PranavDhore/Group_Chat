import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

export default function Message({messageData}) {
    const [user] = useAuthState(auth);
  return (
    <div className={`chat-message ${messageData.uid === user.uid ? "current-user" : "other-user"}`}>
      <img src={messageData.avatar} referrerpolicy="no-referrer" alt="User Avatar" />
      <div className='message-text'>
        <p>{messageData.name}</p>
        <p>{messageData.text}</p>
      </div>
    </div>
  )
}
