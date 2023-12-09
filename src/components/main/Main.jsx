import About from "../about/About";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";

import { useState } from "react";


export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <main>
      {
        !authenticated 
          ? <About /> 
          : <>
              <Popular />
              <TopRated />
              <Upcoming />
            </>
      }
    </main>
  )
}