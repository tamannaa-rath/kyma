import "./Controls.css";

export default function Controls({
  rms,
  kurtosis,
  setRms,
  setKurtosis,
  onPredict,
  loading
}) {
  return (
    <div className="controls-card">
      <h3>
        <span className="icon">⚡</span> Input Signals
      </h3>

      {/* RMS Slider */}
      <div className="control-group">
        <div className="label-row">
          <span className="label-name">RMS</span>
          <span className="label-value">{rms.toFixed(3)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="0.5"
          step="0.005"
          value={rms}
          onChange={(e) => setRms(Number(e.target.value))}
        />
      </div>

      {/* Kurtosis Slider */}
      <div className="control-group">
        <div className="label-row">
          <span className="label-name">Kurtosis</span>
          <span className="label-value">{kurtosis.toFixed(2)}</span>
        </div>
        <input
          type="range"
          min="2"
          max="10"
          step="0.1"
          value={kurtosis}
          onChange={(e) => setKurtosis(Number(e.target.value))}
        />
      </div>

      <button onClick={onPredict} disabled={loading}>
        {loading ? "Processing..." : "⚙️ Predict Health"}
      </button>
    </div>
  );
}