import React, { useEffect, useState } from "react";
import { getManyRecipes, getRandomRecipe } from "../utils/spoonacular-api";
import { RecipeList } from "../components/RecipeList";
import { RecipeSearch } from "../components/RecipeSearch";
import { Loading } from "../components/Loading";
import { searchFormToggle } from "../utils/search-form-init";
import '../styles/pages/recipespage.css';

const RecipesPage = () => {
  const [searchRecipe, setSearchRecipe] = useState({
    name: '',
    minCalories: 0,
    maxCalories: 1000,
    ingredients: '',
    type: '',
    diet: '',
    intolerant: '',
    sort: '',
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

  const onSearchFormSubmit = event => {
    event.preventDefault();
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

  const onRecipeTypeChoosen = event => {
    setSearchRecipe((prevState) => ({
      ...prevState, 
      type: event.target.value,
    }));
  }

  const onRecipeDietChoosen = event => {
    setSearchRecipe((prevState) => ({
      ...prevState, 
      diet: event.target.value,
    }));
  }

  const onRecipeIntolerantChecked = event => {
    if (searchRecipe.intolerant.includes(event.target.value)) {
      const splittedIntolerant = searchRecipe.intolerant.split(',');
      const filteredIntolerant = splittedIntolerant.filter(i => !i.includes(event.target.value));
      setSearchRecipe((prevState) => ({
        ...prevState, 
        intolerant: filteredIntolerant.join(','),
      }));
    } else if (searchRecipe.intolerant === '') {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        intolerant: event.target.value,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        intolerant: `${prevState.intolerant},${event.target.value}`,
      }));
    }
  }

  const onRecipeSortChoosen = event => {
    setSearchRecipe((prevState) => ({
      ...prevState, 
      sort: event.target.value,
    }));
  }

  const onRandomizeRecipe = event => {
    event.preventDefault();
    searchFormToggle();
    setIsLoading(true);
    getRandomRecipe().then(({ data }) => {
      setRecipes(data);
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return (
    <main className="recipe-page-main">
        <RecipeSearch 
          searchFormSubmit={onSearchFormSubmit} 
          nameChange={onRecipeNameChange} 
          calorieChange={onRecipeCaloriesChange} 
          ingredientChange={onRecipeIngredientsChange}
          typeChoosen={onRecipeTypeChoosen} 
          dietChoosen={onRecipeDietChoosen} 
          intolerantChecked={onRecipeIntolerantChecked} 
          randomizeRecipe={onRandomizeRecipe} 
          sortChoosen={onRecipeSortChoosen}
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
        typeChoosen={onRecipeTypeChoosen}
        dietChoosen={onRecipeDietChoosen} 
        intolerantChecked={onRecipeIntolerantChecked} 
        randomizeRecipe={onRandomizeRecipe} 
        sortChoosen={onRecipeSortChoosen}
      />
      <RecipeList recipesList={recipes} />
    </main>
  )
}

export default RecipesPage;
