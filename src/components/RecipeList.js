import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import "../styles/components/recipelist.css";

export default function RecipeList({ recipesList, page }) {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

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
          <div className='recipe-container' key={recipe.id} data-aos="flip-right">
            <img src={`${recipe.image}`} alt={`${recipe.title}`} draggable={false} />
            <h3>{recipe.title}</h3>
            {
              recipe.nutrition 
              ? <p>Calories : {recipe.nutrition.nutrients[0].amount}kcal</p>
              : <p></p>
            }
            <Link to={`/recipe/${recipe.id}/detail`} className='to-detail-btn'>Try this Recipe</Link>
          </div>
        ))
      }
    </div>
  )
}
