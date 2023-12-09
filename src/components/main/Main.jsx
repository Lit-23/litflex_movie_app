import About from "../about/About";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";

import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '../authentication/firebaseConfig';

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  // const [userProperties, setUserProperties] = useState({});
  // const [userName, setUserName] = useState('');

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user)
        // ...
        setAuthenticated(true);
        // setUserProperties(user);
        // setUserName(user.displayName);
      }
    });
  }, [])

  return (
    <main>
      {
        !authenticated 
          ? <About /> 
          : <>
              <p></p>
              <Popular />
              <TopRated />
              <Upcoming />
            </>
      }
    </main>
  )
}