import React from "react";
import '../styles/components/detailstep.css';

export const DetailStep = ({ steps }) => {
  if (steps[0] === 'No steps recorded') {
    return (
      <section id="stepsSection" className="steps section">
        <h3>Steps</h3>
        <ol id="recipeSteps">
          <li>{steps}</li>
        </ol>
      </section>
    )
  }

  return (
    <section id="stepsSection" className="steps section">
      <h3>Steps</h3>
      <ol id="recipeSteps">
        {
          steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))
        }
      </ol>
    </section>
  )
}
