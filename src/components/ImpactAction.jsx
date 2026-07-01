import "./ImpactAction.css";
import smartCity from "../assets/images/smartcity image.png";

import {
  FaLeaf,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function ImpactAction() {
  return (
    <section className="impact-action">

      {/* Left Section */}
      <div className="impact-left">

        <h2>Impact in Action</h2>

        <p className="left-text">
          Real outcomes for organizations committed to a sustainable future.
        </p>

        <div className="impact-item">
          <div className="icon-box">
            <FaLeaf />
          </div>

          <div>
            <h3>40%+</h3>
            <p>Average reduction in operational emissions</p>
          </div>
        </div>

        <div className="impact-item">
          <div className="icon-box">
            <FaShieldAlt />
          </div>

          <div>
            <h3>60%+</h3>
            <p>Faster ESG reporting with automation</p>
          </div>
        </div>

        <div className="impact-item">
          <div className="icon-box">
            <FaCheckCircle />
          </div>

          <div>
            <h3>Trusted By</h3>
            <p>Global brands across industries</p>
          </div>
        </div>

      </div>

      {/* Right Card */}

      <div className="case-study-card">

        <div className="impact-image">
          <img src={smartCity} alt="Smart City" />
        </div>

        <div className="impact-right">

          <span className="case-study">
            CASE STUDY
          </span>

          <h2>
            How We Helped a Global Manufacturer
            Achieve Net Zero Roadmap
          </h2>

          <p>
            We built a carbon management platform that enabled
            real-time emissions tracking, scenario modeling and
            automated reporting resulting in 28% reduction in
            emissions in 18 months.
          </p>

          <a href="/">
            View Case Study →
          </a>

          <div className="bottom-area">

            <div className="dots">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>

            <div className="nav-buttons">
              <button>
                <FaArrowLeft />
              </button>

              <button>
                <FaArrowRight />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}