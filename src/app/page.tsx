import  Messages from '@/app/components/Messages'
import  AddMessage from '@/app/components/AddMessage'

export default function Home() {
  return (
  <div className="container">
     <h1>Simple Chat</h1>
    <div className="chat-container">
      <div className="card">
          <div className="thread">
            <Messages />
          </div>
          <div className="user">
            <AddMessage />
          </div>
      </div>
    </div>
  </div>
  )
}
