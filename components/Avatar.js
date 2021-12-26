import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({username, logoutOnPress}) => {
    const { user, logout } = useMoralis();
    
    return (
        <div>
            <Image 
            src={`https://avatars.dicebear.com/api/bottts/${username || user.getUsername()}.svg`}
            // src={`https://avatars.dicebear.com/api/pixel-art/${username || user.getUsername()}.svg`}
            className="bg-black cursor-pointer hover:opacity-75 rounded-full"
            layout="fill"
            onClick={() => logoutOnPress && logout()}
            />
        </div>
    )
}

export default Avatar
