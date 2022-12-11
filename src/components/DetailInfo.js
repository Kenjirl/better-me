import React from "react";
import { MdTimer } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
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
        <img className="recipe-img" src={recipe.image} alt={`${recipe.title}`} />
      </figure>
      <div className="recipe-types">
        {
          recipe.types.length
          ? recipe.types.map((type, index) => (
              <span key={index} className="type-item">#{type}</span>
            ))
          : <span className="type-item">#no type</span>
        }
      </div>
      <div className="other-info">
        <div className="prep-time">
          <MdTimer /> <p className="prep-time">{recipe.readyInMinutes} minute(s)</p>
        </div>
        <div className="servings">
          <ImSpoonKnife /><p>{recipe.servings} serving(s)</p>
        </div>
      </div>
    </div>
  )
}
