import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, image, title }) => {
  return (
    <>
      <div className='recipe-container'>
        <img src={`https://spoonacular.com/recipeImages/${image}`} alt={`${title}`} draggable={false} />
        <h3>{title}</h3>
        <Link to={`/recipe/${id}/detail`} className='to-detail-btn'>Try this Recipe</Link>
      </div>
    </>
  );
}

export default RecipeCard;
