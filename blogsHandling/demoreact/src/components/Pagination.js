import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const{page, totalPages, handlePageChange} = useContext(AppContext);

  function prevChangeHandler() {
    handlePageChange(page - 1);
  }

  function nextChangeHandler() {
    handlePageChange(page + 1);
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex gap-1">
        {page > 1 && <button className="bg-blue-200 p-2 w-fit rounded-md text-2xl font-bold px-5" onClick={prevChangeHandler}>Previous</button>}

        {page < totalPages && <button className="bg-blue-200 p-2 px-5 w-fit rounded-md text-2xl font-bold" onClick={nextChangeHandler}>Next</button>}
      </div>
        <p className="text-xl p-2">
          Page {page} of {totalPages}
        </p>
    </div>
  );
};

export default Pagination;
