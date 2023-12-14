import { Link } from "react-router-dom"


const About = () => {
  return (
    <section className="text-xl max-[768px]:text-lg max-[640px]:text-base min-h-[80vh] p-5 mt-24">
      <h1 className="tracking-wider text-5xl max-[768px]:text-3xl max-[640px]:text-2xl">Welcome to <span className="font-bold ">LitFlix!</span></h1>
      
      <p className="font-[300] py-5 max-[768px]:py-3 max-[640px]:py-1">
        <span className="font-bold">LitFlix</span> is the ultimate destination for movie enthusiasts! Immerse yourself in a world of cinematic wonders with our extensive collection of films spanning various genres, from thrilling action to heartwarming dramas. Our user-friendly interface ensures a seamless browsing experience, allowing you to discover hidden gems or revisit timeless classics effortlessly.
      </p>

      <div className="font-[500]">
        <p className="mb-2">
          To start exploring a vast array of movies, create an account now!
        </p>
        <Link to='/sign-up'>
          <button className="bg-[#020F10] font-[400] max-[640px]:text-sm hover:scale-105 duration-300 text-white rounded-md px-4 py-2">Register</button>
        </Link>
      </div>
    </section>
  )
}

export default About