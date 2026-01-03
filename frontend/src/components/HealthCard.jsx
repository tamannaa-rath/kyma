import "./HealthCard.css";

export default function HealthCard({ prediction }) {
  const healthValue = prediction ? prediction.health : 0;
  const severity = prediction ? prediction.severity : "Unknown";
  
  let statusClass = "fault";
  
  if (severity === "Normal") {
    statusClass = "healthy";
  } else if (severity === "IR007" || severity === "IR014") {
    statusClass = "warning";
  }

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (healthValue / 100) * circumference;

  return (
    <div className={`health-card ${statusClass}`}>
      <div className="card-header">
        <div className="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h5l3 8 5-16 4 8h5" />
          </svg>
          Machine Health
        </div>
        <div className="severity-badge-small">{severity}</div>
      </div>

      <div className="card-content">
        <div className="text-info">
          <div className="big-percentage">
            {typeof healthValue === "number" ? healthValue.toFixed(1) : "—"}%
          </div>
          <div className="sub-label">Health Index: <span>{severity}</span></div>
        </div>

        <div className="ring-container">
          <svg width="100" height="100" viewBox="0 0 100 100" className="progress-ring">
            <circle cx="50" cy="50" r={radius} className="ring-bg" />
            <circle 
              cx="50" cy="50" r={radius} 
              className="ring-progress"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)" 
            />
          </svg>
          <div className="ring-icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h5l3 8 5-16 4 8h5" />
             </svg>
          </div>
        </div>
      </div>
    </div>
  );
}