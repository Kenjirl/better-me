import React from "react";
import { useParams } from "react-router-dom";
import '../styles/components/notfound.css';

export default function NotFound() {
  const { id } = useParams();

  return (
    <div className="not-found-container">
      <div className="error">
        <p>An error has occurred!</p>
      </div>
      <div>
        <div className="_404">
          <p>4</p>
          <p>0</p>
          <p>4</p>
        </div>
        <div className="_404 shadow">
          <p>4</p>
          <p>0</p>
          <p>4</p>
        </div>
      </div>
      <div className="error-message">
        <p>Can't find any recipe with id : {id}</p>
        <p>But don't worry! <b>Better Me</b> had thousands of recipes you can try to fulfill your needs.</p>
        <p>REMEMBER : </p>
      </div>
      <div className="error-quote">
        <p>"To eat is a necessity, but to eat <del>intelligently</del> with <b>Better Me</b> is an art"</p>
        <p>- no one actually said this</p>
      </div>
    </div>
  )
}
