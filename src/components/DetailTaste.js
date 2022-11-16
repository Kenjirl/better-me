import React from "react";
import { Radar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart, Scale, Ticks } from "chart.js/auto";
import '../styles/components/detailtaste.css';

export const DetailTaste = ({ chartConfig, tastes }) => {
  if (!tastes) {
    return (
      <section id="tasteSection" className="taste section">
        <h3>Taste Widget</h3>
        <ul className="taste-widget" id="tasteWidget">
          <li>Tidak ada tastes</li>
        </ul>
      </section>
    )
  }

  return (
    <section id="tasteSection" className="taste section">
      <h3>Taste Widget</h3>
      <div className="taste-container" id="tasteContainer">
        <Radar data={chartConfig} />
      </div>
      <ul className="taste-widget" id="tasteWidget">
        {
          tastes.map((taste, index) => {
            return (
              <li key={index}>{taste.name} - {taste.value}</li>
            )
          })
        }
      </ul>
    </section>
  )
}
