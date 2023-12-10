import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from './firebaseConfig';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    if(email !== '' && password !== '') {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('successfully signed in!')
          // ...
          navigate('/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setError(errorMessage);
          setLoading(false);
        });
    } else {
      setError('Incorrect or missing credentials!');
      setLoading(false);
    }
  }

  return (
    <section className='flex justify-center pt-28 px-5 min-h-[90vh]'>
      <div className='w-[550px] max-sm:w-full'>
        <h1 className='text-center font-bold tracking-wider text-2xl pt-5 pb-2'>Sign In</h1>
        <form onSubmit={handleSignin} className='flex flex-col'>
          <input className='bg-gray-200 p-3 mx-5 my-3 rounded-md' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className='bg-gray-200 p-3 mx-5 my-3 rounded-md' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          
          {
            error && <p className="text-red-600 text-sm mx-5 my-2">{error}</p>
          }
          
          <button 
            type='submit'
            className='mx-5 mt-2 p-3 rounded-md bg-black text-white'
          >
            { loading ? 'Loading...' : 'Sign In' }
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