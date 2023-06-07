// User Message Component
import addMessage from '@/app/lib/actions'

export default function AddMessage() {

    return (
        <form action={addMessage}>

            <label htmlFor="message" className="sr-only"/>
            <input 
                type="text" 
                name="message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                placeholder="Type your message here..."              
                />

            <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 ml-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            />

        </form>
    )

}