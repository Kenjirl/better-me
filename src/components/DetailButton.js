import React from "react";
import { FiBookmark, FiSkipBack } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import '../styles/components/detailbutton.css';

export default function DetailButton({ bookmarkRecipe, isBookmarked }) {
  const navigate = useNavigate();
  return (
    <div className="detail-button-container">
      <div>
        {/* <Link to={'/recipes'}><FiSkipBack /></Link> */}
        <button type="button" onClick={() => navigate(-1)} ><FiSkipBack /></button>
        <h3>Return</h3>
      </div>
      <div>
        <h3>{ isBookmarked ? 'Recipe Bookmarked' : 'Bookmark Recipe' }</h3>
      {
        bookmarkRecipe
        ? isBookmarked 
          ? <button type="button" className="bookmark-btn bookmarked" onClick={bookmarkRecipe}><FiBookmark /></button>
          : <button type="button" className="bookmark-btn" onClick={bookmarkRecipe}><FiBookmark /></button>
        : <button type="button" className="bookmark-btn disabled" disabled={true}><FiBookmark /></button>
      }
      </div>
    </div>
  )
}
