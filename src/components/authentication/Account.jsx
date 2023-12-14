// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from './firebaseConfig';

const Account = ({ userDisplayName, setIsSearching, setQuery, openAccount, setOpenAccount }) => {
  const navigate = useNavigate();

  function handleIsOpen() {
    setOpenAccount((prevState) => !prevState);
  };

  const handleLogout = async () => {
    const auth = getAuth(firebaseApp);
    setIsSearching(false); 
    setQuery('');
    
    await signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/sign-in');
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <article className="relative">
      <img 
        src={`https://ui-avatars.com/api/?name=${userDisplayName ? userDisplayName : 'My+Account'}`} 
        alt="acount" 
        className='rounded-full w-[36px] cursor-pointer'
        onClick={handleIsOpen}
      />
      {openAccount && 
        <div className="absolute flex flex-col bg-gray-200 w-36 md:w-48 py-2 mt-4 md:mt-5 right-0 rounded-lg shadow-lg">
          {
            <Link to='#' onClick={() => {setIsOpen(false)}}>
              <h2 
                className="max-[640px]:text-xs py-2 md:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white text-ellipsis overflow-hidden whitespace-nowrap"
                key='account'
              >
                {userDisplayName ? userDisplayName : 'My Account'}
              </h2>
            </Link>
          }
          {
            <Link to='#' onClick={() => {setIsOpen(false)}}>
              <h2 
                className="max-[640px]:text-xs py-2 md:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white"
                key='top-rated'
              >
                Settings
              </h2>
            </Link>
          }
          {
            <h2 
              className="max-[640px]:text-xs py-2 md:px-4 px-3 font-[500] tracking-wider hover:bg-[#020F10] duration-300 hover:text-white"
              key='logout'
              onClick={handleLogout}
            >
              Logout
            </h2>
          }
        </div>
      }
    </article>
  )
}

export default Account;