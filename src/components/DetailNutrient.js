import React from "react";
import $ from 'jquery';
import '../styles/components/detailnutrient.css';

export const DetailNutrient = ({ nutrients }) => {
  $('#nutrientSection').html('<h3>Nutrient Widget</h3>').append(nutrients);

  return (
    <section id="nutrientSection" className="nutrient section"></section>
  )
}
