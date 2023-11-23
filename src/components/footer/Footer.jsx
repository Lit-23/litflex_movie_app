const Footer = () => {
  return (
    <section className='mt-5 p-10 text-white bg-black'>
      <div className="mb-5">
        <h1 className="font-bold text-xl">LitFlix</h1>
      </div>
      <hr />
      <div className="mt-5">
        <h2 className="font-bold mb-1">©LitFlix 2023</h2>
        <div className="flex gap-3 text-gray-400">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          <br />
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </section>
  )
}

export default Footer