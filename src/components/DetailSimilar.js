import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/detailsimilar.css";

export const DetailSimilar = ({ similarRecipes }) => {
  if (!similarRecipes.length) {
    return (
    <section className="section similar" id="similarSection">
      <div className="recipes-list-empty">
        <p>No recipe match your search</p>
      </div>
    </section>
    )
  }

  return (
    <section className="section similar" id="similarSection">
      <h3>Similar Recipes</h3>
      <div className="similar-container">
        {
          similarRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}/detail`} key={recipe.id} className='similar-item'>
              <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={`${recipe.title}`} draggable={false} />
              <h4>{recipe.title}</h4>
            </Link>
          ))
        }
      </div>
    </section>
  )
}
