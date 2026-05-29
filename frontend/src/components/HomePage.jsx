import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleStartSearch = () => {
    navigate('/map');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Civic <span className="hero-highlight">Pulse</span>
          </h1>
          <p className="hero-subtitle">
            A data-driven snapshot of how neighborhoods are doing
          </p>
          <p className="hero-description">
            Civic Pulse rates every neighborhood with a <strong>Green Score from 1 to 10</strong>, 
            built from environmental, infrastructure, and livability signals — then lets you 
            simulate changes to see how the score would shift.
          </p>
          
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Environmental Quality</h3>
              <p>Air, vegetation, and water — the basics of a healthy neighborhood</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Infrastructure</h3>
              <p>Roads, utilities, and street-level upkeep across the area</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏘️</div>
              <h3>Livability</h3>
              <p>Safety on the ground plus resilience to climate hazards</p>
            </div>
          </div>

          <button className="start-button" onClick={handleStartSearch}>
            Open the map →
          </button>
          
          <div className="hero-badges">
            <span className="badge">Tempe, AZ pilot</span>
            <span className="badge">217 Neighborhoods</span>
            <span className="badge">Live data feeds</span>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-container">
          <h2>How it works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Browse the map</h3>
              <p>A 3D view of every Tempe neighborhood, tinted by its Green Score</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Drill into a neighborhood</h3>
              <p>Tap any area to open its environmental and infrastructure breakdown</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Compare and simulate</h3>
              <p>Set neighborhoods side by side and test how upgrades would shift their scores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;