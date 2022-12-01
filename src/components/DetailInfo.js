import React from "react";
import '../styles/components/detailinfo.css';

export default function DetailInfo({ recipe }) {
  if (!recipe) {
    return (
      <div className="recipe-info">
        <h2 className="recipe-title">No data recorded</h2>
      </div>
    )
  }

  return (
    <div className="recipe-info">
      <h2 className="recipe-title">{recipe.title}</h2>
      <figure className="recipe-img">
        <img src={recipe.image} alt={`${recipe.title}`} />
        <figcaption>{recipe.title}</figcaption>
      </figure>
      <p className="prep-time">Prepare time : {recipe.readyInMinutes} minute(s)</p>
    </div>
  )
}
