import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
    const { user, setUserData } = useMoralis();
    
    const changeUsername = () => {
        const newUsername = prompt(`Enter your cool new username(current username): ${user.getUsername()}`);
        if (!newUsername) return;
        setUserData({ username: newUsername });
    }

    return (
        <div>
            <button 
            onClick={changeUsername}
            className="capitalize text-pink-400"
            >
                change your username
            </button>
        </div>
    )
}

export default ChangeUsername
