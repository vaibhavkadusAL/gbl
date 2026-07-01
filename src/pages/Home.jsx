import React from "react";
import "./Home.css";

import heroBg from "../assets/images/home page.png";
function Home() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-container">

          {/* Hero Content */}
          <div className="hero-content">
            <h1>
              Smart Technology.
              <br />
              <span>Sustainable Tomorrow.</span>
            </h1>

            <p>
              We build innovative IT solutions that empower organizations
              to meet ESG goals, drive measurable impact and create a
              better future for generations.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Solutions
                <span className="btn-arrow">→</span>
              </button>

              <button className="secondary-btn">
                Book a Consultation
              </button>
            </div>

            <div className="hero-tagline">
              🌱 Technology Today. Impact Forever.
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hero-cards">

            {/* Carbon Card */}
            <div className="card co2-card">
              

              <div className="card-text">
                <small>Carbon Emission</small>
                <h2>-32%</h2>
                <p>Emission Reduced</p>
              </div>
            </div>

            {/* ESG Card */}
            <div className="card esg-card">
            
              <div className="card-text">
                <h2>78%</h2>
                <p>ESG Score Improvement</p>
              </div>
            </div>

            {/* Water Card */}
            <div className="card water-card">
              <div className="water-icon">💧</div>

              <div className="card-text">
                <small>Water Saved</small>
                <h2>12.5 ML</h2>
                <p>Annual Savings</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;