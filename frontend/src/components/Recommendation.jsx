import "./Recommendation.css";

export default function Recommendation({ prediction }) {
  // 1. Safely extract the severity string (e.g., "Normal", "IR014")
  const severity = prediction ? prediction.severity : null;

  let text = "Waiting for analysis...";
  let statusClass = "neutral"; // For styling the text color if needed

  // 2. Logic to determine the message
  if (!prediction) {
    text = "Initiate a prediction to see recommendations.";
  } else if (severity === "Normal") {
    text = "✅ System healthy. No maintenance required.";
    statusClass = "good";
  } else if (severity === "IR007") {
    text = "⚠️ Minor irregularity detected. Monitor closely.";
    statusClass = "warning";
  } else if (severity === "IR014") {
    text = "🔧 Moderate wear detected. Schedule maintenance soon.";
    statusClass = "warning";
  } else if (severity === "IR021") {
    text = "🛠️ Significant fault. Maintenance recommended immediately.";
    statusClass = "danger";
  } else if (severity === "IR028") {
    text = "🚨 CRITICAL FAULT. Immediate shutdown recommended.";
    statusClass = "danger";
  } else {
    // Fallback for unknown fault codes
    text = `Unknown status (${severity}). Please check manual.`;
  }

  return (
    <div className={`recommendation-card ${statusClass}`}>
      <h3>Recommended Action</h3>
      <p>{text}</p>
    </div>
  );
}
