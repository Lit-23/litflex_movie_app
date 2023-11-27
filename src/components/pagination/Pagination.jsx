

const Pagination = ({ currentPage, setPage, totalPage }) => {

  const handleNext = () => {
    if(currentPage !== totalPage){
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if(currentPage !== 1){
      setPage((prevPage) => prevPage - 1);
    }
  };

  if(totalPage === 0) return null;

  return (
    <div className="flex justify-center items-center gap-5 font-bold text-white">
      <div>
        <button 
          className="bg-black px-3 py-2 rounded-md"
          onClick={handlePrev}
        >
          PREV
        </button>
      </div>
      <ul className="flex gap-3">
        <li className="bg-black px-4 py-2 rounded-md">
          <button>{currentPage}</button>
        </li>
        {/* <li className="bg-gray-200 px-4 py-2 rounded-md">
          <button>{currentPage + 1}</button>
        </li>
        <li className="bg-gray-200 px-4 py-2 rounded-md">
          <button>{currentPage + 2}</button>
        </li>
        <li className="bg-gray-200 px-4 py-2 rounded-md">
          <button>{currentPage + 3}</button>
        </li>
        <li className="bg-gray-200 px-4 py-2 rounded-md">
          <button>{currentPage + 4}</button>
        </li> */}
      </ul>
      <div>
        <button 
          className="bg-black px-3 py-2 rounded-md"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Pagination