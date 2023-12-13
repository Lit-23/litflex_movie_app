

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
    <div className="flex justify-center gap-3 max-[768px]:gap-[10px] max-[640px]:gap-[8px] text-white">
      <div>
        <button 
          className="bg-[#020F10] text-sm max-[768px]:text-[12px] max-[640px]:text-[10px] px-3 py-2 max-[768px]:px-[10px] max-[768px]:py-[6px] max-[640px]:px-[8px] max-[640px]:py-[4px] rounded-md hover:scale-105 duration-100 active:translate-x-1"
          onClick={handlePrev}
        >
          PREV
        </button>
      </div>
      <ul className="flex gap-3">
        <li className="bg-[#020F10] text-sm max-[768px]:text-[12px] max-[640px]:text-[10px] px-4 max-[768px]:px-[12px] max-[640px]:text-[8px] rounded-md flex align-middle">
          <button>{currentPage}</button>
        </li>
      </ul>
      <div>
        <button 
          className="bg-[#020F10] text-sm max-[768px]:text-[12px] max-[640px]:text-[10px] px-3 py-2 max-[768px]:px-[10px] max-[768px]:py-[6px] max-[640px]:px-[8px] max-[640px]:py-[4px] rounded-md hover:scale-105 duration-100 active:translate-x-1"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Pagination