

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div>
        <h1 className="font-bold">Logo.</h1>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search movies" className="px-4 py-2 text-[12px] rounded-full" />
        <button>Acount</button>
      </div>
    </header>
  )
}

export default Header