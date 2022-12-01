import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import cookingSVG from '../svg/cooking.svg';
import dietSVG from '../svg/diet.svg';
import '../styles/pages/homepage.css';

const HomePage = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <main>
      <div id="description" className="parallax description">
        <div className="parallax-caption" data-aos="fade-down">
          <h2>#FOOD RECIPE APP</h2>
        </div>
        <div className="description-caption" data-aos="fade-up">
          <div>
            <span>BETTER ME</span>
            <span> membantu Anda mencari berbagai jenis <b>resep</b> makanan sehat untuk memenuhi kebutuhan <b>kalori</b> Anda. </span>
          </div>
        </div>
      </div>

      <div id="services" className="parallax services">
        <div className="parallax-caption" data-aos="fade-down">
          <h2>#SERVICES</h2>
        </div>
        <div className="services-container">
          <div className="service-info" data-aos="fade-up">
            <p><b>Better Me</b> menyediakan berbagai fitur yang mampu membantu Anda mencari ide makanan sehat sesuai dengan keinginan Anda.  </p>
            <Link to="/recipes">Try our service</Link>
          </div>
          <div>
            <div className="service" data-aos="fade-right">
              <h3>Recipes List</h3>
              <div>
                <img className="svg" src={cookingSVG} alt="logo" />
              </div>
              <p>Layanan <b>Daftar Resep</b> memberikan daftar makanan sehat secara acak, mulai dari resep sayur, daging, hingga buah.</p>
            </div>
            <div className="service" data-aos="fade-left">
              <h3>Recipes by Calories</h3>
              <div>
                <img className="svg" src={dietSVG} alt="logo" />
              </div>
              <p>Layanan <b>Resep sesuai Kalori</b> memberikan daftar makanan sehat sesuai dengan takaran kalori yang diinginkan.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
