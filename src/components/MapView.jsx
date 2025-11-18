import './MapView.css';

function MapView({ listings }) {
  return (
    <div className="map-view">
      <div className="map-container">
        <div className="map-image">
          <img
            src="https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Mumbai Map"
            className="map-bg"
          />
          <div className="map-overlay"></div>
        </div>

        <div className="price-markers">
          <button className="price-marker" style={{ top: '15%', left: '65%' }}>
            ₹20,827
          </button>
          <button className="price-marker" style={{ top: '18%', right: '15%' }}>
            ₹12,051
          </button>
          <button className="price-marker" style={{ top: '28%', right: '25%' }}>
            ₹17,689
          </button>
          <button className="price-marker" style={{ top: '35%', right: '28%' }}>
            ₹19,971
          </button>
          <button className="price-marker" style={{ top: '38%', right: '30%' }}>
            ₹25,420
          </button>
          <button className="price-marker active" style={{ top: '42%', right: '12%' }}>
            ₹14,500
          </button>
          <button className="price-marker" style={{ bottom: '25%', right: '20%' }}>
            ₹17,255
          </button>
          <button className="price-marker" style={{ bottom: '22%', right: '28%' }}>
            ₹12,548
          </button>
        </div>

        <div className="map-controls">
          <button className="map-control-button">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </button>
          <button className="map-control-button">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
          </button>
          <button className="map-control-button">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
          </button>
        </div>

        <button className="fullscreen-button">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </button>

        <div className="google-logo">
          <svg width="66" height="26" viewBox="0 0 66 26">
            <g fill="none">
              <path d="M35.8 13.2c0 3.5-2.8 6.1-6.2 6.1s-6.2-2.6-6.2-6.1 2.8-6.1 6.2-6.1 6.2 2.6 6.2 6.1z" fill="#4285F4"/>
              <path d="M29.6 15.4c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z" fill="#FFF"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MapView;