'use client';
import { FormEvent, useState } from "react";

type contactFieldChecklist = {
    name: boolean,
    email: boolean,
    message: boolean,
}

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // form validation
    const [showButtonText, setShowButtonText] = useState("submit");
    const [formErrors, setFormErrors] = useState({});
    
    const handleValidation = () => {
        // TODO: Check email address with regex validation or equivalent
        let tempErrors: contactFieldChecklist = { name: false, email: false, message: false};
        let isValid = true;
    
        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }
    
        setFormErrors({ ...tempErrors });
        console.log("errors", formErrors);
        return isValid;
    }

    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [showFailureMsg, setShowFailureMsg] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setShowButtonText("sending...");
            const res = await fetch('/api/contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, email: email, message: message })
            })
            const {error} = await res.json()

            if ( !error ) {
                setName('');
                setEmail('');
                setMessage('');
                setShowFailureMsg(false);
                setShowSuccessMsg(true);
                setShowButtonText("submit");
            } else {
                console.error("Error: " + error);
                setShowFailureMsg(true);
                setShowSuccessMsg(false);
                setShowButtonText("submit");
            }
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
                        name="name"
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
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        minLength={5}
                        maxLength={100}
                        required
                    />
                    <label className="font-bold text-gray-200 py-3" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="text-gray-800 w-full p-2 bg-gray-50 border border-gray-100 "
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                    />
                    <button className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 rounded-xl" type="submit">
                        Submit
                    </button>
                </div>
                {/* Implement messages depending on form submission success */}
                <div className="text-left">
                    {showSuccessMsg && 
                        <p className="text-green-500 font-semibold text-sm my-2 text-center font-mono">
                            Your message has been delivered.
                        </p>
                    }
                    {showFailureMsg &&
                        <p className="text-red-400 font-semibold text-sm my-2 text-center font-mono">
                            There was an issue with your submission<br/>
                            Please try again
                        </p>
                    }
                </div>
            </form>
        </div>
    )
}