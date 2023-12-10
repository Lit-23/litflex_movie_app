import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Account = ({ userDisplayName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleIsOpen() {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen)
  };

  function handleLogout() {
    navigate('/sign-in');
  }

  return (
    <>
      <img 
        src={`https://ui-avatars.com/api/?name=${userDisplayName}`} 
        alt="acount" 
        width={36}
        className='rounded-full'
        onClick={handleIsOpen}
      />
      {isOpen && 
        <div className="absolute flex flex-col h-[180px] bg-gray-200 w-[12rem] mt-[250px] ml-8 rounded-lg shadow-lg">
          {
            <Link to='#' onClick={() => {setIsOpen(false)}}>
              <h2 
                className="p-4 font-[500] tracking-wider hover:bg-black duration-300 hover:text-white"
                key='account'
              >
                {userDisplayName}
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