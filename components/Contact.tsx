'use client';
import { FormEvent, useState } from "react";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify({ name, email, message })
        })

        const data = await res.json()

        if (data.status == 'Ok') {
            setName('');
            setEmail('');
            setMessage('');
        } else {
            console.error(data.error);
        }
    }

    return (
        <div className="min-w-[500px]">
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold text-gray-200 py-3" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="text-gray-800 p-2 bg-gray-50 border border-gray-100"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        minLength={3}
                        maxLength={100}
                        required
                    />
                    <label className="font-bold text-gray-200 py-3" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="text-gray-800 p-2 bg-gray-50 border border-gray-100 "
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        minLength={5}
                        maxLength={100}
                        required
                    />
                    <label className="font-bold text-gray-200 py-3" htmlFor="email">
                        Message
                    </label>
                    <textarea
                        className="text-gray-800 w-full p-2 bg-gray-50 border border-gray-100 "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                    />
                    <button className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 rounded-xl" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}