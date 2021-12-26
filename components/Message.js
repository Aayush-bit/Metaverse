import { useMoralis } from "react-moralis"
import TimeAgo from "timeago-react"
import timeagoReact from "timeago-react"
import Avatar from "./Avatar"

const Message = ({ message }) => {
    const { user } = useMoralis()
    const isUsersMessage = user.get("ethAddress") == message.get("ethAddress");

    return (
        <div className={`flex items-end relative  ${
            isUsersMessage ? "justify-end" : ""
        }`}>
            <div className={`relative h-8 w-8 ${
                isUsersMessage ? "ml-2 order-last" : "mr-2"
            }`}>
                <Avatar username={message.get("username")} />
            </div>
            <div className={`p-2 rounded-lg space-x-4 ${
                isUsersMessage ? 
                "bg-pink-300 rounded-br-none" : 
                "bg-blue-300 rounded-bl-none"
            }`}>
                {
                    message.get("body")
                }
                {/* time stamp */}
                <div className={`text-[10px] text-gray-900/60 ${isUsersMessage ? "text-right": "text-left"}`}>
                    <TimeAgo datetime={message.createdAt} />
                </div>
            </div>

            <p className={`absolute -bottom-5 text-xs ${
                isUsersMessage ? 
                "text-pink-300" : 
                "text-blue-300"}`}>
                {
                    message.get("username")
                }
            </p>
        </div>
    )
}

export default Message
