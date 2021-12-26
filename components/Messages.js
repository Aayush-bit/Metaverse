import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis"
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;
const Messages = () => {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, isLoading, error} = useMoralisQuery("Messages", (query) => 
        query.ascending("createdAt")
        .greaterThan(
            "createdAt",
            new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live: true
        }
    );

    return (
        <div className="pb-56">
            {/* Each Message */}
            <div className="space-y-10 p-4">
                {
                    data.map(message => (
                        <Message key={message.id} message={message} />
                    ))
                }

            </div>

            {/* Send Messages */}
            <div className="flex justify-center">
                <SendMessage endOfMessagesRef={ endOfMessagesRef } />
            </div>
            <div className="flex justify-center text-slate-300">
                <div ref={ endOfMessagesRef } className="bg-slate-600 opacity-40 p-1 rounded-xl">
                    <p>You're up to date { user.getUsername() }.</p>
                </div>
            </div>
        </div>
    )
}

export default Messages
