
export default async function fetchMessages() {

    try {
        const res = await fetch("http://127.0.0.1:3500/messages")

        const messages: Message[] = await res.json()

        return messages
        
    } catch (err) {
        if (err instanceof Error) console.log(err.stack)
    }
}