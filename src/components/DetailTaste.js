import React from "react";
import { Radar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart, Scale, Ticks } from "chart.js/auto";
import '../styles/components/detailtaste.css';

export const DetailTaste = ({ chartConfig, tastes }) => {
  if (!tastes) {
    return (
      <section id="tasteSection" className="taste section">
        <h3>Taste Chart</h3>
        <ul className="taste-widget" id="tasteWidget">
          <li>Tidak ada tastes</li>
        </ul>
      </section>
    )
  }

  return (
    <section id="tasteSection" className="taste section">
      <h3>Taste Chart</h3>
      <div className="taste-container" id="tasteContainer">
        <Radar data={chartConfig} />
      </div>
      <table className="taste-table">
        <thead>
          <tr>
            <th colSpan={2}>Taste Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            tastes.map((taste, index) => {
              const value = parseInt(taste.value,10);
              return (
                <tr key={index}>
                  <td>{taste.name}</td>
                  <td>{value}%</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}
