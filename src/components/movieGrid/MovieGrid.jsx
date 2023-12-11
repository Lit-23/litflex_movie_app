import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const MovieGrid = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
    console.log(movie)
  };

  function closeModal() {
    setIsOpen(false)
  };

  return (
    <>
      <div className='bg-[#020F10] w-[10rem] h-[18rem] rounded-md cursor-pointer hover:scale-105 duration-300' onClick={openModal}>
        <img 
          src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/300'}
          alt={movie.title}
          className='rounded-t-md h-[236px] w-full'
        />
        <div className='px-1 text-white py-1'>
          <h2 className='font-bold text-ellipsis overflow-hidden whitespace-nowrap'>{movie.title}</h2>
          <div className='flex justify-between text-sm text-gray-400'>
            <p>⭐({(movie.vote_average).toFixed(1)})</p>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
      
      {/* headless UI MODAL */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {movie.title}
                    <span className='text-gray-500 font-[400]'>
                      ({
                        movie.release_date 
                          ? movie.release_date.split('-')[0]
                          : 'Unknown release date'
                      })
                    </span> <br />
                    <span className='text-sm text-gray-500 font-[400]'>{movie.release_date}({(movie.original_language).toUpperCase()}) • ⭐({movie.vote_average})</span>
                  </Dialog.Title>
                  <div className="mt-2">
                    {
                      movie.backdrop_path
                        &&  <img 
                              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                              alt="thumbnail" 
                              className='rounded-lg'
                            />
                    }
                    <h2 className="mt-2 text-md font-medium leading-6 text-gray-900">Overview</h2>
                    <p className="text-sm text-gray-500">
                      {movie.overview}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MovieGrid