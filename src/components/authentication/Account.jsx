import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from './firebaseConfig';

const Account = ({ userDisplayName, setIsSearching, setQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayname, setDisplayname] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setDisplayname(userDisplayName);
  }, [])

  function handleIsOpen() {
    setIsOpen((prevState) => !prevState);
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
    <>
      <img 
        src={displayname ? `https://ui-avatars.com/api/?name=${displayname}` : 'https://ui-avatars.com/api/?name=Account'} 
        alt="acount" 
        width={36}
        className='rounded-full'
        onClick={handleIsOpen}
      />
      {isOpen && 
        <div className="absolute flex flex-col h-[180px] bg-gray-200 w-[12rem] mt-[250px] ml-16 rounded-lg shadow-lg">
          {
            <Link to='#' onClick={() => {setIsOpen(false)}}>
              <h2 
                className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white"
                key='account'
              >
                {displayname}
              </h2>
            </Link>
          }
          {
            <Link to='#' onClick={() => {setIsOpen(false)}}>
              <h2 
                className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white"
                key='top-rated'
              >
                Settings
              </h2>
            </Link>
          }
          {
            <h2 
              className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white"
              key='logout'
              onClick={handleLogout}
            >
              Logout
            </h2>
          }
        </div>
      }
    </>
  )
}

export default Account;