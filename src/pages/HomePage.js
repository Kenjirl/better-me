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
    document.title = 'Better Me';
  }, []);

  return (
    <main>
      <div id="description" className="parallax description">
        <div className="parallax-caption" data-aos="fade-down">
          <h2>FOOD RECIPE APP</h2>
        </div>
        <div className="description-caption" data-aos="fade-up">
          <div>
            <span>BETTER ME</span>
            <span> helps you find various types of healthy food <b>recipes</b> to meet your <b>calorie</b>, <b>carbohydrate</b>, <b>fat</b>, and <b>protein</b> needs. </span>
          </div>
        </div>
      </div>

      <div id="services" className="parallax services">
        <div className="parallax-caption" data-aos="fade-down">
          <h2>SERVICES</h2>
        </div>
        <div className="services-container">
          <div className="service-info" data-aos="fade-up">
            <p><b>Better Me</b> provides various features that can help you find healthy food ideas according to your wishes.  </p>
            <Link to="/recipes">Try our service</Link>
          </div>
          <div>
            <div className="service" data-aos="fade-right">
              <h3>Recipes List</h3>
              <div>
                <img className="svg" src={cookingSVG} alt="logo" />
              </div>
              <p>The <b>Recipe List</b> feature provides a random list of healthy foods, ranging from vegetable, meat and fruit recipes.</p>
            </div>
            <div className="service" data-aos="fade-left">
              <h3>Recipes by Search</h3>
              <div>
                <img className="svg" src={dietSVG} alt="logo" />
              </div>
              <p>The <b>Recipes by Search</b> feature provides a list of healthy foods according to the desired calorie, carbs, fat, or protein level.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
