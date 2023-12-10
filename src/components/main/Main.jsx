import About from "../about/About";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";

import { useEffect, useState } from "react";

import authStateObserver from '../authentication/authStateObserver'

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');

  useEffect(() => {
    authStateObserver(setAuthenticated, setUserDisplayName);
  }, [])

  return (
    <main>
      {
        !authenticated 
          ? <About /> 
          : <>
              <h2 className="text-2xl px-5 font-[500] mt-20">Welcome {userDisplayName.split(' ')[0]}, enjoy watching!</h2>
              <Popular />
              <TopRated />
              <Upcoming />
            </>
      }
    </main>
  )
}