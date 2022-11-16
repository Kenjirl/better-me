import React from "react";
import cookingSVG from '../svg/cooking.svg';
import dietSVG from '../svg/diet.svg';
import '../styles/pages/homepage.css';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <div className="parallax img1">
        <div className="parallax-caption">
          <h2>#FOOD RECIPE APP</h2>
        </div>
      </div>

      <div id="description" className="description parallax">
        <div>
          <span>BETTER ME</span>
          <span> adalah aplikasi berbasis web yang menampilkan berbagai resep menu makanan sehat untuk memenuhi kebutuhan kalori Anda. </span>
        </div>
      </div>

      <div className="parallax img2">
        <div className="parallax-caption">
          <h2>#SERVICES</h2>
        </div>
      </div>

      <div id="services" className="services parallax">
        <p><b>Better Me</b> membantu Anda mencari <b>resep</b> makanan sehat untuk memenuhi kebutuhan <b>kalori</b> Anda. </p>
        <div className="service">
          <h3>Recipes List</h3>
          <img className="svg" src={cookingSVG} alt="logo" />
          <p>Layanan <b>Daftar Resep</b> memberikan daftar makanan sehat secara acak, mulai dari resep sayur, daging, hingga buah.</p>
          <Link to="/recipes">Try this service</Link>
        </div>
        <div className="service">
          <h3>Recipes by Calories</h3>
          <img className="svg" src={dietSVG} alt="logo" />
          <p>Layanan <b>Resep sesuai Kalori</b> memberikan daftar makanan sehat sesuai dengan takaran kalori yang diinginkan.</p>
          <Link to="/recipes">Try this service</Link>
        </div>
      </div>

      {/* <!-- <div className="parallax img3">
        <div className="parallax-caption">
          <h2>#ABOUT</h2>
        </div>
      </div>

      <div id="about" className="about">
        <p>Web application ini dibuat sebagai project Capstone dari program SIB batch 3 dari Dicoding.</p>
        <h3>Anggota Kelompok</h3>
      </div> --> */}
    </main>
  )
}

export default HomePage;
