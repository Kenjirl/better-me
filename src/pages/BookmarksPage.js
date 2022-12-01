import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import RecipeList from "../components/RecipeList";
import RecipePagination from "../components/RecipePagination";

export default function BookmarksPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recipeIndex, setRecipeIndex] = useState(0);

  useEffect(() => {
    setRecipes(
      JSON.parse(localStorage.getItem('bookmarkedRecipes') || 'null')
    );
    setIsLoading(false);
  }, []);

  const onPaginationChange = (pageIndex) => {
    setRecipeIndex(Number(pageIndex.selected));
  }

  if (isLoading) {
    return (
      <main className="recipe-page-main">
        <Loading />
      </main>
    )
  }

  if (recipes === null) {
    return (
      <main className="recipe-page-main">
        <h2>No bookmark yet</h2>
      </main>
    )
  }

  return (
    <main className="recipe-page-main">
      <RecipeList 
        recipesList={recipes} 
        page={recipeIndex} 
      />
      <RecipePagination 
        pageChange={onPaginationChange} 
        pageNumber={(Math.floor(recipes.length/15))} 
      />
    </main>
  )
}