import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis"
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated } = useMoralis();  
  if (!isAuthenticated) return <Login />;

  return (
    <div>
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative overflow-y-scroll overflow-hidden bg-gradient-to-b from-black to-fuchsia-800 h-screen">
        <div className="w-full flex justify-center sticky top-0 z-50">
          <Header />
        </div>

        <Messages />
      </div>
      
    </div>
  )
}
