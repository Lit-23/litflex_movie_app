import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className='flex justify-center pt-28 px-5 min-h-[100vh]'>
      <div className='w-[550px] max-sm:w-full'>
        <h1 className='text-center font-bold tracking-wider text-2xl pt-5 pb-2'>Sign In</h1>
        <form className='flex flex-col'>
          <input className='bg-gray-200 p-3 mx-5 my-3 rounded-md' type="email" placeholder='Email' name="sign-up" />
          <input className='bg-gray-200 p-3 mx-5 my-3 rounded-md' type="password" placeholder='Password' name="sign-up" />
          <button 
            type='submit'
            className='mx-5 mt-2 p-3 rounded-md bg-black text-white'
          >
            Sign Up
          </button>
        </form>
        <p className='p-5 font-[500]'>
          Dont have an account yet? 
          <Link to='/sign-up' className='text-blue-700 hover:underline'> Sign Up</Link>
        </p>
      </div>
    </section> 
  )
}

export default SignIn