import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/recipelist.css";

export default function RecipeList({ recipesList, page }) {
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
          <Link to={`/recipe/${recipe.id}/detail`} className='recipe-container' key={recipe.id}>
            <img src={`${recipe.image}`} alt={`${recipe.title}`} draggable={false} />
            <h3>{recipe.title}</h3>
            {
              recipe.nutrition 
              ? <div className="nutrition">
                  <p>{parseFloat(recipe.nutrition.nutrients[0].amount).toFixed(0)}k cal</p>
                  <p>{parseFloat(recipe.nutrition.nutrients[3].amount).toFixed(0)}g carbs</p>
                  <p>{parseFloat(recipe.nutrition.nutrients[2].amount).toFixed(0)}g fat</p>
                  <p>{parseFloat(recipe.nutrition.nutrients[1].amount).toFixed(0)}g protein</p>
                </div>
              : <p></p>
            }
          </Link>
        ))
      }
    </div>
  )
}
