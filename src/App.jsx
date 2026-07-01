import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ESGSection from "./components/ESGSection";
import ImpactSection from "./components/ImpactSection";
import SolutionsSection from "./components/SolutionsSection";
import ImpactAction from "./components/ImpactAction";
import TrustedOrganizations from "./components/TrustedOrganizations";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ESGSection />
      <ImpactSection />
      <SolutionsSection />
      <ImpactAction />
      <TrustedOrganizations />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;