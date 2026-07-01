import "./ImpactSection.css";
import bgImage from "../assets/images/data bg image.png";

import {
  FaDatabase,
  FaLeaf,
  FaMagic,
  FaGlobe
} from "react-icons/fa";

export default function ImpactSection() {
  return (
    <section
      className="impact-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="impact-container">
        {/* Left */}
        <div className="left-content">
          <span className="tag">
            BEYOND SOFTWARE. MEASURABLE IMPACT.
          </span>

          <h1 style= {{color: "white"}}>
            From Data to Impact,
            <br />
            We Close the Sustainability Loop.
          </h1>

          <p>
            Our solutions turn ESG data into strategic action
            that drives real-world impact.
          </p>

          <button>
            See How It Works →
          </button>
        </div>

        {/* Right */}
        <div className="workflow">

          <div className="step">
            <div className="circle">
              <FaDatabase />
            </div>

            <h3 style= {{color: "white"}}>Collect</h3>

            <p>
              Integrate data from
              across your value chain
            </p>
          </div>

          <div className="arrow"></div>

          <div className="step">
            <div className="circle">
              <FaLeaf />
            </div>

            <h3 style= {{color: "white"}}>Analyze</h3>

            <p>
              AI-powered insights
              uncover risks &
              opportunities
            </p>
          </div>

          <div className="arrow"></div>

          <div className="step">
            <div className="circle">
              <FaMagic />
            </div>

            <h3 style= {{color: "white"}}>Act</h3>

            <p>
              Intelligent workflows
              drive measurable
              actions
            </p>
          </div>

          <div className="arrow"></div>

          <div className="step">
            <div className="circle">
              <FaGlobe />
            </div>

            <h3 style= {{color: "white"}}>Impact</h3>

            <p>
              Track progress &
              communicate
              transparency
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
