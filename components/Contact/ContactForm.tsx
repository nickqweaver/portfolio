import { useState } from "react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form>
      <div className="my-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:bg-white"
          rows={5}
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="my-8 text-center">
        <button
          type="submit"
          className="inline-block px-6 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  )
}
