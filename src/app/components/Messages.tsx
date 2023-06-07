import fetchMessages from "@/app/lib/fetchMessages";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';

export default async function Messages() {

    const messages = await fetchMessages();

    let content
    if (!messages || messages.length === 0) {
        content = (
            <p>No Messages Available</p>
        )
    } else {

        const sortedMessages = messages.reverse();

        content = (
            <>
                
                    {sortedMessages.map(message => (
                        <div key={uuidv4()} className={message.human ? 'chat chat-end' : 'chat chat-start'}>
                            <div className="chat-bubble">{message.words}</div>
                      </div>
                    ))}
               
              
            </>
        )
    }

    return content;
}
