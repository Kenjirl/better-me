import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSource } from "../utils/spoonacular-api";
import { ToastContainer, toast } from "react-toastify";
import $ from 'jquery';
import DetailButton from "../components/DetailButton";
import DetailInfo from "../components/DetailInfo";
import DetailEquipment from "../components/DetailEquipment";
import DetailIngredient from "../components/DetailIngredient";
import DetailStep from "../components/DetailStep";
import DetailTaste from "../components/DetailTaste";
import DetailNutrient from "../components/DetailNutrient";
import DetailSimilar from "../components/DetailSimilar";
import Loading from "../components/Loading";
import NotFoundPage from "./NotFoundPage";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/pages/detailrecipepage.css';

export default function DetailRecipePage() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({
    info: {
      title: null,
      image: null,
      types: [],
      readyInMinutes: null,
      servings: null,
    }, 
    equipments: [], 
    ingredients: [], 
    steps: [],
    tastesData: [], 
    nutrients: {
      bad: [],
      calories: 'no record found',
      carbs: 'no record found',
      fat: 'no record found',
      good: [],
      protein: 'no record found',
    }, 
    similars: [],
  });
  let bookmarkedRecipes = JSON.parse(localStorage.getItem('bookmarkedRecipes') || '[]');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSource(id).then(({ error, data }) => {
      if (error) {
        setRecipe(null);
      } else {
        setRecipe({
          info: {
            id: data.info.id,
            title: data.info.title, 
            image: data.info.image, 
            types: [...data.info.dishTypes],
            readyInMinutes: data.info.readyInMinutes,
            servings: data.info.servings,
          }, 
          equipments: [...data.equipments],
          ingredients: [...data.ingredients],
          steps: [...data.steps],
          tastesData: [...data.tastesData],
          nutrients: {
            bad: [...data.nutrients.bad],
            calories: data.nutrients.calories,
            carbs: data.nutrients.carbs,
            fat: data.nutrients.fat,
            good: [...data.nutrients.good],
            protein: data.nutrients.protein,
          }, 
          similars: [...data.similars],
        });
        setIsBookmarked(bookmarkedRecipes.some(r => r.id === Number(id)));
      }
      setIsLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onBookmarkRecipeClicked = () => {
    const newBookmarkedRecipe = {
      order: Number(bookmarkedRecipes.length) + 1,
      id: recipe.info.id,
      title: recipe.info.title,
      image: recipe.info.image, 
      nutrition: {
        nutrients: [
          { amount: recipe.nutrients.calories.replace('k',''), },
          { amount: recipe.nutrients.protein, },
          { amount: recipe.nutrients.fat, },
          { amount: recipe.nutrients.carbs, },
        ],
      },
    };

    let notifPosition = '';
    if ($(window).width() < 800 || $(window).innerHeight < $(window).innerWidth) {
      notifPosition = 'top-center'
    } else {
      notifPosition = 'bottom-right'
    }

    const notify = message => {
      toast.info(message, {
        position: notifPosition,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true, 
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (isBookmarked) {
      bookmarkedRecipes = bookmarkedRecipes.filter(r => r.id !== newBookmarkedRecipe.id);
      setIsBookmarked(false);
      notify('Removed recipe from Bookmark');
    } else {
      bookmarkedRecipes.push(newBookmarkedRecipe);
      setIsBookmarked(true);
      notify('Added recipe to Bookmark');
    }
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(bookmarkedRecipes));
  }

  if (isLoading) {
    return (
      <main className="detail-recipe-main">
        <Loading />
      </main>
    )
  }

  if (recipe === null) {
    return (
      <NotFoundPage />
    )
  }

  return (
    <main>
      <DetailButton bookmarkRecipe={onBookmarkRecipeClicked} isBookmarked={isBookmarked} />
      <ToastContainer />
      <div className="food-recipe" id="foodRecipe">
        <DetailInfo recipe={recipe.info} />
        <DetailEquipment equipments={recipe.equipments} />
        <DetailIngredient ingredients={recipe.ingredients} />
        <DetailStep steps={recipe.steps} />
        <DetailTaste tastes={recipe.tastesData} />
        <DetailNutrient nutrients={recipe.nutrients} /> 
        <DetailSimilar similarRecipes={recipe.similars} />
      </div>
    </main>
  )
}
