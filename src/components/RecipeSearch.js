import React from "react";
import '../styles/components/recipesearch.css';

export const RecipeSearch = ({ searchFormSubmit, nameChange, calorieChange, ingredientChange }) => {
  return (
    <form onSubmit={searchFormSubmit} action="#" id="searchForm" className="search-bar">
      <input className="search-input" name="recipe" id="recipe" type="text" onChange={nameChange} placeholder="e.g. burger, pasta, etc" />
      <input className="search-input" name="calories" id="calories" type="number" onChange={calorieChange} placeholder="e.g. 10, 100, 200, etc" />
      <input className="search-input" name="ingredients" id="ingredients" type="text" onChange={ingredientChange} placeholder="e.g. apple, banana, egg, etc" />
      <button className="search-btn" type="submit">Search Recipe</button>
    </form>
  )
}