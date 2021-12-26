import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername";
const Header = () => {
    const { user, logout } = useMoralis();
    
    return (
        <div className="sticky top-0 z-50 bg-black border-b-4 border-pink-500 w-4/5 flex flex-col align-middle h-2/6 justify-center text-white">
            {/* avatar */}
            <div className="relative border-8 border-pink-500 rounded-full mx-auto h-36 w-36 lg:h-40 lg:w-40">
                <Avatar logoutOnPress />
            </div>
            <h1 className="text-center text-pink-400 font-bold text-2xl">{user.getUsername()}</h1>

            <div className="absolute top-5 right-5">
                <ChangeUsername />
            </div>
        </div>
    )
}

export default Header
