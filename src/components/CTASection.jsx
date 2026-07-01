import "./CTASection.css";
import bgImage from "../assets/images/data bg image.png";
import {
  FaLeaf,
  FaGlobe,
  FaTree,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

export default function CTASection() {
  const stats = [
    {
      icon: <FaLeaf />,
      number: "100+",
      title: "ESG Projects",
      subtitle: "Delivered",
    },
    {
      icon: <FaGlobe />,
      number: "50+",
      title: "Clients Across",
      subtitle: "Industries",
    },
    {
      icon: <FaTree />,
      number: "25M+",
      title: "tCO₂e Emissions",
      subtitle: "Tracked",
    },
    {
      icon: <FaUsers />,
      number: "1M+",
      title: "Lives Positively",
      subtitle: "Impacted",
    },
  ];

  return (
    <section
      className="cta-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="cta-container">

        {/* Left */}

        <div className="cta-left">
          <h2 style= {{color: "white"}}>
            Let's build a sustainable future
            <br />
            together with technology.
          </h2>

          <p>
            Partner with GreenKode to turn your ESG vision
            into measurable impact.
          </p>

          <button>
            Let's Build Impact Together
            <FaArrowRight />
          </button>
        </div>

        {/* Right */}

        <div className="stats">

          {stats.map((item, index) => (
            <div className="stat-box" key={index}>
              <div className="stat-icon">
                {item.icon}
              </div>

              <h3 style= {{color: "white"}}>{item.number}</h3>

              <p>{item.title}</p>

              <span>{item.subtitle}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}