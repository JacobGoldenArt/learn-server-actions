export default async function fetchMessage(id: string) {

        const res = await fetch(`http://127.0.0.1:3500/messages/${id}`)

        if (!res.ok) return undefined

        const message: Message[] = await res.json()

        return message

}
