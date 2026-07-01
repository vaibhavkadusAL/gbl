import "./SolutionsSection.css";

import esgDataImg from "../assets/images/esg data image.png";
import carbonImg from "../assets/images/carbon management image.png";
import reportingImg from "../assets/images/sustanability reporting image.png";
import supplyImg from "../assets/images/supply chain image.png";
import stakeholderImg from "../assets/images/steckholder image.png";

const solutions = [
  {
    image: esgDataImg,
    title: "ESG Data Platform",
    description:
      "Unify, validate and manage ESG data with accuracy and ease.",
  },
  {
    image: carbonImg,
    title: "Carbon Management",
    description:
      "Measure, monitor and reduce emissions across Scopes 1, 2 & 3.",
  },
  {
    image: reportingImg,
    title: "Sustainability Reporting",
    description:
      "Automate reports aligned with GRI, SASB, TCFD, ISSB & more.",
  },
  {
    image: supplyImg,
    title: "Supply Chain ESG",
    description:
      "Assess suppliers, mitigate risks and build responsible supply chains.",
  },
  {
    image: stakeholderImg,
    title: "Stakeholder Engagement",
    description:
      "Engage stakeholders and communicate your impact.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="solutions">
      <h2>Solutions That Drive Real Change</h2>

      <div className="heading-line"></div>

      <div className="solution-grid">
        {solutions.map((item, index) => (
          <div className="solution-card" key={index}>
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}