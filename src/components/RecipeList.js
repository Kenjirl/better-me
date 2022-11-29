import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/recipelist.css";

export const RecipeList = ({ recipesList, page }) => {
  if (!recipesList.length) {
    return (
      <div className="recipes-list-empty">
        <p>No recipe match your search</p>
      </div>
    )
  }

  const indexRecipe = page * 10;

  return (
    <div className="recipes-list" id="recipesList">
      {
        recipesList.slice(0+indexRecipe, 10+indexRecipe).map((recipe) => (
          <div className='recipe-container' key={recipe.id}>
            <img src={`${recipe.image}`} alt={`${recipe.title}`} draggable={false} />
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}/detail`} className='to-detail-btn'>Try this Recipe</Link>
          </div>
        ))
      }
    </div>
  )
}
