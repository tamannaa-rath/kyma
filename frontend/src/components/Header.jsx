import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* SVG Pulse Icon */}
        <svg 
          className="logo-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2 12H5L8 20L13 4L17 12H22" 
            stroke="#3b82f6" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        <div className="logo-text">
          <h1>KYMA</h1>
          <span>AI-Powered Predictive Maintenance</span>
        </div>
      </div>

      <div className="status-badge">
        <span className="status-dot"></span>
        Live System
      </div>
    </header>
  );
}