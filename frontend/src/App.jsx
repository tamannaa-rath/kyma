import { useState } from "react";
import Header from "./components/Header";
import HealthCard from "./components/HealthCard";
import Controls from "./components/Controls";
import ExplanationPanel from "./components/ExplanationPanel";
import Recommendation from "./components/Recommendation";
import { fetchPrediction } from "./api";
import "./App.css";

export default function App() {
  const [rms, setRms] = useState(0.200);
  const [kurtosis, setKurtosis] = useState(3.50);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const result = await fetchPrediction(rms, kurtosis);
      setPrediction(result); 
    } catch (error) {
      console.error(error);
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="app-container">
        {/* 1. Health Card (Top Left) */}
        <HealthCard prediction={prediction} />
        
        {/* 2. Controls (Top Right) */}
        <Controls 
          rms={rms} 
          kurtosis={kurtosis} 
          setRms={setRms} 
          setKurtosis={setKurtosis} 
          onPredict={handlePredict} 
          loading={loading}
        />

        {/* 3. Explanation (Bottom Left) */}
        <ExplanationPanel />

        {/* 4. Recommendation (Bottom Right) */}
        <Recommendation prediction={prediction} />
      </main>

      <footer className="footer">
        © 2026 KYMA • AI-Powered Predictive Maintenance
      </footer>
    </>
  );
}