import Image from "next/image"
import { useMoralis } from "react-moralis"

const Login = () => {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <div className="absolute z-50 w-full space-y-7 h-4/5 flex flex-col items-center justify-center">
                {/* logo */}
                <Image
                className="rounded-full"
                src="https://images.pexels.com/photos/9983165/pexels-photo-9983165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                width={250}
                height={250}
                />
                
                {/* login button */}
                <button 
                onClick={authenticate}
                className="rounded-sm bg-red-200 font-bold animate-pulse hover:bg-green-200 text-black p-3">
                    Login to Metaverse
                </button>
            </div>
            

            {/* background image */}
            <div className="w-full h-screen">
                <Image 
                className="blur-lg"
                src="https://images.pexels.com/photos/8232041/pexels-photo-8232041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login
