import React from "react";
import '../styles/components/detailnutrient.css';

export const DetailNutrient = ({ nutrients }) => {
  if (!nutrients) {
    return (
      <section id="nutrientSection" className="nutrient section">
        <h3>Nutrient Info</h3>
        <ul>
          <li>No nutrient info recorded</li>
        </ul>
      </section>
    )
  }

  return (
    <section id="nutrientSection" className="nutrient section">
      <h3>Nutrient Info</h3>
      <div className="nutrient-tables">
        <table className="nutrient-table">
          <thead>
            <tr>
              <th colSpan={2}>Main Nutrient</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>{nutrients.calories}</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>{nutrients.carbs}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{nutrients.fat}</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{nutrients.protein}</td>
            </tr>
          </tbody>
        </table>
        <table className="nutrient-table">
          <thead>
            <tr>
              <th colSpan={2}>Good Nutrient</th>
            </tr>
          </thead>
          <tbody>
            {
              nutrients.good.map((goodies, index) => {
                const percentage = parseInt(goodies.percentOfDailyNeeds);
                return (
                  <tr key={index}>
                    <td>{goodies.title} {goodies.amount}</td>
                    <td>{percentage}%</td>
                  </tr>
                  )
              })
            }
          </tbody>
        </table>
        <table className="nutrient-table">
          <thead>
            <tr>
              <th colSpan={2}>Bad Nutrient</th>
            </tr>
          </thead>
          <tbody>
            {
              nutrients.bad.map((baddies, index) => {
                const percentage = parseInt(baddies.percentOfDailyNeeds);
                return (
                  <tr key={index}>
                    <td>{baddies.title} {baddies.amount}</td>
                    <td>{percentage}%</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
