import React, { useEffect, useState } from "react";
import { getManyRecipes } from "../utils/spoonacular-api";
import { RecipeList } from "../components/RecipeList";
import { RecipeSearch } from "../components/RecipeSearch";
import { Loading } from "../components/Loading";
import '../styles/pages/recipespage.css';

const RecipesPage = () => {
  const [searchRecipe, setSearchRecipe] = useState({
    name: '',
    minCalories: 0,
    maxCalories: 1000,
    ingredients: '',
  });
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getManyRecipes({searchRecipe}).then(({ data }) => {
      setRecipes(data);
      setIsLoading(false);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchFormSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    getManyRecipes({searchRecipe}).then(({ data }) => {
      setRecipes(data);
      setIsLoading(false);
    });
  }

  const onRecipeNameChange = event => {
    setSearchRecipe((prevState) => ({
      ...prevState, 
      name: event.target.value,
    }));
  }

  const onRecipeCaloriesChange = event => {
    if (event.target.value === '') {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minCalories: 0,
        maxCalories: 1000,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minCalories: Number(event.target.value) - 50,
        maxCalories: Number(event.target.value) + 50,
      }));
    }
  }

  const onRecipeIngredientsChange = event => {
    setSearchRecipe((prevState) => ({
      ...prevState, 
      ingredients: event.target.value,
    }));
  }

  if (isLoading) {
    return (
    <main className="recipe-page-main">
        <RecipeSearch 
          searchFormSubmit={onSearchFormSubmit} 
          nameChange={onRecipeNameChange} 
          calorieChange={onRecipeCaloriesChange} 
          ingredientChange={onRecipeIngredientsChange}
        />
        <Loading />
      </main>
    )
  }

  return (
    <main className="recipe-page-main">
      <RecipeSearch 
        searchFormSubmit={onSearchFormSubmit} 
        nameChange={onRecipeNameChange} 
        calorieChange={onRecipeCaloriesChange} 
        ingredientChange={onRecipeIngredientsChange}
      />
      <RecipeList recipesList={recipes} />
    </main>
  )
}

export default RecipesPage;
