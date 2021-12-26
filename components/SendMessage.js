import { Moralis } from "moralis";
import { useState } from "react";
import { useMoralis } from "react-moralis"

const SendMessage = ({endOfMessagesRef}) => {
    const [message, setMessage] = useState("");
    const { user } = useMoralis();
    const handleMessageFormSubmission = e => {
        e.preventDefault();

        if (!message) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            body: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        })
        .then(res => {
            console.log(res)
            endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });
        })
        .catch(err => console.error(err));

        setMessage("");
    }
    return (
            <form 
            onSubmit={handleMessageFormSubmission}
            className="flex w-11/12 fixed max-w-2xl bottom-5 p-1 pr-5 pl-5 rounded-full bg-slate-500/20 text-white border-2 border-slate-500/40"
            >
                <input type="text" 
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={`Enter Your Message ${ user.getUsername() }...`}
                className="flex-grow outline-none pr-5 bg-transparent"
                />
                <button type="submit">Send</button>
            </form>
    )
}

export default SendMessage
