import "./ESGSection.css";

const esgData = [
  {
    icon: "E",
    color: "#43a047",
    title: "Environmental",
    subtitle: "Measure. Reduce. Regenerate.",
    points: [
      "Carbon & Energy Management",
      "Climate Risk & Resilience",
      "Resource & Waste Optimization",
      "Biodiversity & Natural Capital",
    ],
  },
  {
    icon: "S",
    color: "#4f79b8",
    title: "Social",
    subtitle: "Empower people. Strengthen communities.",
    points: [
      "Diversity, Equity & Inclusion",
      "Health, Safety & Wellbeing",
      "Human Rights & Labor Standards",
      "Community Impact & Development",
    ],
  },
  {
    icon: "G",
    color: "#43a047",
    title: "Governance",
    subtitle: "Build trust. Ensure transparency. Drive accountability.",
    points: [
      "ESG Reporting & Disclosure",
      "Policy & Compliance Management",
      "Risk & Opportunity Management",
      "Board & Stakeholder Engagement",
    ],
  },
];

export default function ESGSection() {
  return (
    <section className="esg-section">
      <h2>
        We Build Technology for Every Pillar of ESG
      </h2>

      <div className="title-line"></div>

      <div className="esg-container">
        {esgData.map((item, index) => (
          <div className="esg-card" key={index}>
            <div
              className="icon-circle"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}