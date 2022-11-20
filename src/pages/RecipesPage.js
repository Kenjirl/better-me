import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { getManyRecipes } from "../utils/spoonacular-api";
import RecipeCard from "../components/RecipeCard";
import '../styles/pages/recipespage.css'

const RecipesPage = () => {
  const [searchRecipe, setSearchRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getManyRecipes(searchRecipe).then(({ data }) => {
      setRecipes(data);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchFormSubmit = e => {
    e.preventDefault();
    getManyRecipes(searchRecipe).then(({ data }) => {
      setRecipes(data);
    });
  }

  const onSearchRecipeChange = event => {
    setSearchRecipe(event.target.value);
  }

  return (
    <main className="recipe-page-main">
      <form onSubmit={onSearchFormSubmit} action="#" id="searchForm" className="search-bar">
        <input className="search-input" name="recipe" id="recipe" type="text" onChange={onSearchRecipeChange} placeholder="cari resep ..." />
        <button className="search-btn" type="submit"><FiSearch/></button>
      </form>
      <div className="recipes-list" id="recipesList">
        {
          recipes
          ? recipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id}
                id={recipe.id} 
                image={recipe.image} 
                title={recipe.title} 
              />
            ))
          : <p>Tidak ada data</p>
        }
      </div>
    </main>
  )
}

export default RecipesPage;
