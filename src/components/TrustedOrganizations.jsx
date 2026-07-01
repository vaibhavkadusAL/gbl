import "./TrustedOrganizations.css";
import {
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaSpa,
  FaGlobe,
  FaAsterisk,
} from "react-icons/fa";

export default function TrustedOrganizations() {
  const companies = [
    {
      icon: <FaLeaf />,
      name: "FutureBuild",
      color: "#5AAE4A",
    },
    {
      icon: <FaRecycle />,
      name: "EcoLogix",
      color: "#5F6772",
    },
    {
      icon: <FaSeedling />,
      name: "VerdeEnergy",
      color: "#708070",
    },
    {
      icon: <FaSpa />,
      name: "NaturalLife",
      color: "#6E7378",
    },
    {
      icon: <FaGlobe />,
      name: "CleanTech",
      color: "#6E7378",
    },
    {
      icon: <FaAsterisk />,
      name: "InspireImpact",
      color: "#6E7378",
    },
  ];

  return (
    <section className="trusted-section">

      <h2>Trusted by Organizations Driving Change</h2>

      <div className="trusted-companies">
        {companies.map((company, index) => (
          <div className="company" key={index}>
            <span
              className="company-icon"
              style={{ color: company.color }}
            >
              {company.icon}
            </span>

            <span className="company-name">
              {company.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}