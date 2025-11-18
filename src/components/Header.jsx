import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <svg width="102" height="32" fill="#FF385C" viewBox="0 0 102 32">
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.73 6.114 5.556 11.716 5.556 8.458 0 14-5.584 14-14.85h2c0 10.256-6.432 16.85-16 16.85-6.407 0-11.16-2.138-13.532-6.708l-.533-1.025C17.463 2.762 16.668 2 15 2 11.686 2 9 4.686 9 8s2.686 6 6 6h1v2h-1c-4.4 0-8-3.6-8-8s3.6-8 8-8z"/>
            </svg>
            <span className="logo-text">airbnb</span>
          </div>
        </div>

        <div className="header-center">
          <div className="search-bar">
            <button className="search-item">
              <span className="search-icon-text">🏠</span>
              <span className="search-label">Homes nearby</span>
            </button>
            <div className="divider"></div>
            <button className="search-item">
              <span className="search-label">Any week</span>
            </button>
            <div className="divider"></div>
            <button className="search-item">
              <span className="search-label">2 guests</span>
            </button>
            <button className="search-button">
              <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="white" strokeWidth="5.33333">
                <circle cx="16" cy="16" r="10"></circle>
                <path d="M23 23 L28 28"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="header-right">
          <button className="become-host">Become a host</button>
          <button className="icon-button">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"></path>
            </svg>
          </button>
          <button className="menu-button">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M1.5 3.5h13v1h-13v-1zm0 4h13v1h-13v-1zm0 4h13v1h-13v-1z"></path>
            </svg>
            <div className="avatar">
              <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                <path d="M16 1c2.008 0 3.873.78 5.303 2.197a7.482 7.482 0 0 1 2.197 5.303c0 2.007-.78 3.873-2.197 5.303a7.482 7.482 0 0 1-5.303 2.197 7.482 7.482 0 0 1-5.303-2.197A7.482 7.482 0 0 1 8.5 8.5c0-2.008.78-3.873 2.197-5.303A7.482 7.482 0 0 1 16 1zm0 2a5.48 5.48 0 0 0-3.89 1.61A5.48 5.48 0 0 0 10.5 8.5c0 1.47.573 2.85 1.61 3.89a5.48 5.48 0 0 0 3.89 1.61 5.48 5.48 0 0 0 3.89-1.61 5.48 5.48 0 0 0 1.61-3.89 5.48 5.48 0 0 0-1.61-3.89A5.48 5.48 0 0 0 16 3zm0 14c4.142 0 7.5 3.358 7.5 7.5v1.5h-15v-1.5c0-4.142 3.358-7.5 7.5-7.5zm0 2c-3.038 0-5.5 2.462-5.5 5.5v.5h11v-.5c0-3.038-2.462-5.5-5.5-5.5z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;