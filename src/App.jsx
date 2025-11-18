import './App.css';
import Header from './components/Header';
import ListingsGrid from './components/ListingsGrid';
import { listingsData } from './data/listings';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="info-bar">
          <div className="homes-count">Over 1,000 homes</div>
          <div className="price-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF385C">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <span>Prices include all fees</span>
          </div>
        </div>
        <ListingsGrid listings={listingsData} />
      </div>
    </div>
  );
}

export default App;
