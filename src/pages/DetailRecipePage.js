import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSource } from "../utils/spoonacular-api";
import { DetailEquipment } from "../components/DetailEquipment";
import { DetailIngredient } from "../components/DetailIngredient";
import { DetailStep } from "../components/DetailStep";
import { DetailTaste } from "../components/DetailTaste";
import { DetailNutrient } from "../components/DetailNutrient";
import { DetailInfo } from "../components/DetailInfo";
import '../styles/pages/detailrecipepage.css';
import { BackButton } from "../components/BackButton";

const DetailRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [chartConfig, setChartConfig] = useState({
    labels: [],
    datasets:[],
  });
  const [nutrients, setNutrients] = useState([]);

  useEffect(() => {
    getSource(id).then(({ data }) => {
      setRecipe(data.recipe);
      setEquipments(data.equipments);
      setIngredients(data.ingredients);
      setSteps(data.steps);
      setNutrients(data.nutrients);
      setTastes(data.tastesData);
      setChartConfig({
        labels: data.tastesData.map(data => data.name),
        datasets:[
          {
            label:"Taste Widget",
            data: data.tastesData.map(data => data.value),
            backgroundColor:"rgba(38,159,202,0.2)",
            borderColor:"rgb(38,159,202)",
            pointBackgroundColor:"rgb(38,159,202)",
          },
        ],
      });
    });
  }, [id]);

  return (
    <>
      <BackButton navigate={navigate} />
      <main className="food-recipe" id="foodRecipe">
        <DetailInfo recipe={recipe} />
        <DetailEquipment equipments={equipments} />
        <DetailIngredient ingredients={ingredients} />
        <DetailStep steps={steps} />
        <DetailTaste chartConfig={chartConfig} tastes={tastes} />
        <DetailNutrient nutrients={nutrients} />
      </main>
    </>
  )
}

export default DetailRecipePage;
