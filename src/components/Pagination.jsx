import React from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
  charactersPerPage,
  totalCharacters,
}) => {
  const maxDisplayedPages = 7;
  const currentPageIndex = currentPage - 1;

  let startPage = currentPageIndex - Math.floor(maxDisplayedPages / 2);
  let endPage = currentPageIndex + Math.ceil(maxDisplayedPages / 2);

  startPage = startPage < 0 ? 0 : startPage;
  endPage = endPage > totalPages ? totalPages : endPage;

  const pages = Array.from(
    { length: endPage - startPage },
    (_, index) => startPage + index + 1
  );

  return (
    <div className=" flex justify-center" style={{ padding: 20 }}>
      <button
        className="py-2 px-4 rounded-md mr-2 shadow-md"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        <FcPrevious />
      </button>
      {/* {pages.map((pageNumber) => ( */}
      <button
        // key={pageNumber}
        className={`text-slate-700 py-2 px-4 rounded-[50%] mx-2 ${
          currentPage === currentPage ? "bg-[#ED4576]" : ""
        }`}
        // onClick={() => onPageChange(currentPage)}
      >
        {currentPage}
      </button>
      {/* ))} */}
      <button
        className="py-2 px-4 rounded-md mr-2 shadow-md"
        onClick={onNextPage}
        disabled={currentPage * charactersPerPage >= totalCharacters}
      >
        <FcNext />
      </button>
    </div>
  );
};

export default Pagination;
