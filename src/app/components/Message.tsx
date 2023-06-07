
export default function Message(response: Message) {
    return (
        <textarea 
            name="message"
            value={response.words}
            className={`${response.human} ? 'human' : 'bot'`}
        />
    )

   
}