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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col my-4">
                    <label className="font-bold text-gray-200" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="text-gray-800"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        minLength={3}
                        maxLength={100}
                        required
                    />
                    <label className="font-bold text-gray-200" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="text-gray-800"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        minLength={5}
                        maxLength={100}
                        required
                    />
                    <textarea
                        className="text-gray-800"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}