import React from "react";
import cookingSVG from '../svg/cooking.svg';
import dietSVG from '../svg/diet.svg';
import { Link } from "react-router-dom";
import '../styles/pages/homepage.css';

const HomePage = () => {
  return (
    <main>
      <div id="description" className="parallax description">
        <div className="parallax-caption">
          <h2>#FOOD RECIPE APP</h2>
        </div>
        <div className="description-caption">
          <div>
            <span>BETTER ME</span>
            <span> membantu Anda mencari berbagai jenis <b>resep</b> makanan sehat untuk memenuhi kebutuhan <b>kalori</b> Anda. </span>
          </div>
        </div>
      </div>

      <div id="services" className="parallax services">
        <div className="parallax-caption">
          <h2>#SERVICES</h2>
        </div>
        <div className="services-container">
          <div className="service-info">
            <p><b>Better Me</b> menyediakan berbagai fitur yang mampu membantu Anda mencari ide makanan sehat sesuai dengan keinginan Anda.  </p>
            <Link to="/recipes">Try our service</Link>
          </div>
          <div className="service">
            <h3>Recipes List</h3>
            <img className="svg" src={cookingSVG} alt="logo" />
            <p>Layanan <b>Daftar Resep</b> memberikan daftar makanan sehat secara acak, mulai dari resep sayur, daging, hingga buah.</p>
          </div>
          <div className="service">
            <h3>Recipes by Calories</h3>
            <img className="svg" src={dietSVG} alt="logo" />
            <p>Layanan <b>Resep sesuai Kalori</b> memberikan daftar makanan sehat sesuai dengan takaran kalori yang diinginkan.</p>
          </div>
          <Link to="/recipes">Try our service</Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
