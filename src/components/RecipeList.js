import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/recipelist.css";

export const RecipeList = ({ recipesList }) => {
  if (!recipesList.length) {
    return (
      <div className="recipes-list-empty">
        <p>No recipe match your search</p>
      </div>
    )
  }

  return (
    <div className="recipes-list" id="recipesList">
      {
        recipesList.map((recipe) => (
          <div className='recipe-container' key={recipe.id}>
            <img src={`${recipe.image}`} alt={`${recipe.title}`} className='skeleton-loading' draggable={false} />
            <h3 className="skeleton-loading">{recipe.title}</h3>
            <p className="skeleton-loading">{recipe.nutrition.nutrients[0].name} : {recipe.nutrition.nutrients[0].amount} {recipe.nutrition.nutrients[0].unit}</p>
            <Link to={`/recipe/${recipe.id}/detail`} className='to-detail-btn'>Try this Recipe</Link>
          </div>
        ))
      }
    </div>
  )
}
