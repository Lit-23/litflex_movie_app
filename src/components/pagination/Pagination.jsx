

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
          className="bg-[#020F10] px-3 py-2 rounded-md hover:scale-105 duration-100 active:translate-x-1"
          onClick={handlePrev}
        >
          PREV
        </button>
      </div>
      <ul className="flex gap-3">
        <li className="bg-[#020F10] px-4 py-2 rounded-md">
          <button>{currentPage}</button>
        </li>
      </ul>
      <div>
        <button 
          className="bg-[#020F10] px-3 py-2 rounded-md hover:scale-105 duration-100 active:translate-x-1"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Pagination