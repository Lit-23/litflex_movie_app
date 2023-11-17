import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header shadow-md">
      <Link to='/'>
        <h1 className="font-bold">Logo.</h1>
      </Link>
      <div className="flex items-center gap-2">
        <input type="text" placeholder="Search movies" className="px-4 py-2 text-[12px] rounded-full" />
        <Link to='/'>
          <button>Acount</button>
        </Link>
      </div>
    </header>
  )
}

export default Header