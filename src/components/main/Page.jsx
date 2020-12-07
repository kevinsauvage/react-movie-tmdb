import React from "react";

const Page = ({ handlePageChange }) => {
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="page-number">
      {page.map((page) => {
        return (
          <span data-key={page} onClick={handlePageChange}>
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Page;
