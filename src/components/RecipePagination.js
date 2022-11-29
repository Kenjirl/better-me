import React from "react";
import ReactPaginate from "react-paginate";
import '../styles/components/recipepagination.css';

export default function RecipePagination({ pageNumber, pageChange }) {
  return (
    <ReactPaginate className="pagination"
      previousLabel={'<<'} previousClassName='pagination-item button'
      nextLabel={'>>'} nextClassName='pagination-item button'
      breakLabel={'...'} breakClassName='pagination-item button'
      pageCount={pageNumber} pageClassName='pagination-item'
      marginPagesDisplayed={pageNumber}
      pageRangeDisplayed={0}
      onPageChange={pageChange}
    />
  )
}
