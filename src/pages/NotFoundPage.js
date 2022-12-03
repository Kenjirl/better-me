import React from "react";
import '../styles/pages/notfoundpage.css';

export default function NotFoundPage() {
  return (
    <main>
      <div className="not-found-container">
        <div className="error">
          <p>Oh no!</p>
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
          <p>Unfortunately, we can't find the page you're looking for</p>
          <p>Go back to our main page, cause' <b>Better Me</b> still had thousands of recipes you can try to fulfill your needs.</p>
          <p>REMEMBER : </p>
        </div>
        <div className="error-quote">
          <p>"To eat is a necessity, but to eat <del>intelligently</del> with <b>Better Me</b> is an art"</p>
          <p><i>- no one actually said this</i></p>
        </div>
      </div>
    </main>
  )
}