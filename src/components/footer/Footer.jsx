import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className='mt-5 p-10 text-white bg-black text-center'>
      <div className="flex flex-col mb-5">
        <div className="mb-5">
          <Link to='/'>
            <h1 className="font-bold text-[2rem]">LitFlix</h1>
          </Link>
        </div>

        <div className="flex justify-center gap-10">
          <div>
            <h2 className="font-bold text-[1.2rem]">My Account</h2>
            <ul>
              <li className="hover:underline text-gray-400 cursor-pointer">Register</li>
              <li className="hover:underline text-gray-400 cursor-pointer">Login</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[1.2rem]">Company</h2>
            <ul>
              <li className="hover:underline text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:underline text-gray-400 cursor-pointer">News</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[1.2rem]">Contact Us</h2>
            <p className="hover:underline text-gray-400 cursor-pointer">litflix@support.com</p>
          </div>
        </div>
      </div>


      <hr />
      <div className="mt-5">
        <h2 className="font-bold text-[1.2rem] mb-1">©LitFlix 2023</h2>
        <div className="flex justify-center gap-3 text-gray-400">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          <br />
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </section>
  )
}

export default Footer