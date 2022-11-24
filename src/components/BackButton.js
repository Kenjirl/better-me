import React from "react";
import { FiSkipBack } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../styles/components/backbutton.css';

export const BackButton = ({ navigate }) => {
  return (
    <div className="back-button-container">
      {/* <button onClick={() => navigate(-1)}><FiSkipBack /></button> */}
      <Link to={'/recipes'}><FiSkipBack /></Link>
      <h3>Back to Recipes List</h3>
    </div>
  )
}