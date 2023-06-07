'use server'
// for mutation of messages

import { revalidatePath } from "next/cache"

export default async function AddMessage(data: FormData) { 

  const user_message = data.get('words') as string

  await fetch('http://127.0.0.1:3500/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        id: 1,
        words: user_message,
        human: true
    })
})
   revalidatePath('/')

}