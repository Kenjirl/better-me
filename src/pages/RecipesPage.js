import React, { useEffect, useState } from "react";
import $ from 'jquery';
import { getManyRecipes, getRandomRecipe } from "../utils/spoonacular-api";
import RecipeList from "../components/RecipeList";
import RecipeSearch from "../components/RecipeSearch";
import RecipePagination from "../components/RecipePagination";
import Loading from "../components/Loading";
import '../styles/pages/recipespage.css';

export default function RecipesPage() {
  const [searchRecipe, setSearchRecipe] = useState({
    name: '',
    minCalories: 10, maxCalories: 1000,
    minCarbs: 10, maxCarbs: 100,
    minFat: 1, maxFat: 100,
    minProtein: 10, maxProtein: 100,
    ingredients: '',
    type: '',
    diet: '',
    intolerant: '',
    sort: '',
  });
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recipeIndex, setRecipeIndex] = useState(0);

  useEffect(() => {
    getManyRecipes({searchRecipe}).then(({ error, data }) => {
      if (error) {
        setRecipes(null);
      } else {
        setRecipes(data);
      }
      setIsLoading(false);
    });
    document.title = 'Better Me | Recipe List';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchFormSubmit = event => {
    event.preventDefault();
    onSearchFormToggle();
    setIsLoading(true);
    getManyRecipes({searchRecipe}).then(({ data }) => {
      setRecipes(data);
      setRecipeIndex(0);
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
        minCalories: 10,
        maxCalories: 1000,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minCalories: Number(event.target.value) - 10,
        maxCalories: Number(event.target.value) + 10,
      }));
    }
  }

  const onRecipeCarbsChange = event => {
    if (event.target.value === '') {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minCarbs: 10,
        maxCarbs: 100,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minCarbs: Number(event.target.value) - 10,
        maxCarbs: Number(event.target.value) + 10,
      }));
    }
  }

  const onRecipeFatChange = event => {
    if (event.target.value === '') {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minFat: 1,
        maxFat: 100,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minFat: Number(event.target.value) - 5,
        maxFat: Number(event.target.value) + 5,
      }));
    }
  }

  const onRecipeProteinChange = event => {
    if (event.target.value === '') {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minProtein: 10,
        maxProtein: 100,
      }));
    } else {
      setSearchRecipe((prevState) => ({
        ...prevState, 
        minProtein: Number(event.target.value) - 10,
        maxProtein: Number(event.target.value) + 10,
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
    onSearchFormToggle();
    setIsLoading(true);
    getRandomRecipe().then(({ data }) => {
      setRecipes(data);
      setRecipeIndex(0);
      setIsLoading(false);
    });
  }

  const onPaginationChange = (pageIndex) => {
    setRecipeIndex(Number(pageIndex.selected));
  }

  const onSearchFormToggle = () => {
    $('form#searchForm').toggleClass('open');
  };

  if (isLoading) {
    return (
    <main className="recipe-page-main">
        <RecipeSearch 
          searchFormToggle={onSearchFormToggle} 
          searchFormSubmit={onSearchFormSubmit} 
          nameChange={onRecipeNameChange} 
          calorieChange={onRecipeCaloriesChange} 
          carbChange={onRecipeCarbsChange} 
          fatChange={onRecipeFatChange} 
          proteinChange={onRecipeProteinChange}
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
        searchFormToggle={onSearchFormToggle} 
        searchFormSubmit={onSearchFormSubmit} 
        nameChange={onRecipeNameChange} 
        calorieChange={onRecipeCaloriesChange} 
        carbChange={onRecipeCarbsChange} 
        fatChange={onRecipeFatChange} 
        proteinChange={onRecipeProteinChange}
        ingredientChange={onRecipeIngredientsChange}
        typeChoosen={onRecipeTypeChoosen}
        dietChoosen={onRecipeDietChoosen} 
        intolerantChecked={onRecipeIntolerantChecked} 
        randomizeRecipe={onRandomizeRecipe} 
        sortChoosen={onRecipeSortChoosen}
      />
      <RecipeList 
        recipesList={recipes} 
        page={recipeIndex} 
      />
      <RecipePagination 
        pageChange={onPaginationChange} 
        pageNumber={(Math.floor(recipes.length/10))} 
      />
    </main>
  )
}
