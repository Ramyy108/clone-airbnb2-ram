import { useState } from 'react';
import './ListingCard.css';

function ListingCard({ listing }) {
  const [isFavorite, setIsFavorite] = useState(listing.isGuestFavorite);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="listing-card">
      <div className="image-container">
        <div className="image-slider">
          <img
            src={listing.images[currentImageIndex]}
            alt={listing.title}
            className="listing-image"
          />
          {listing.images.length > 1 && (
            <>
              <button className="nav-button prev" onClick={handlePrevImage}>
                <svg viewBox="0 0 18 18" width="12" height="12" fill="currentColor">
                  <path d="M11.293 2.293a1 1 0 0 1 1.414 1.414L7.414 9l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6z"></path>
                </svg>
              </button>
              <button className="nav-button next" onClick={handleNextImage}>
                <svg viewBox="0 0 18 18" width="12" height="12" fill="currentColor">
                  <path d="M6.707 2.293a1 1 0 0 0-1.414 1.414L10.586 9l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6z"></path>
                </svg>
              </button>
              <div className="image-dots">
                {listing.images.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="favorite-badge">
          {listing.isGuestFavorite && (
            <div className="guest-favorite-label">
              <span className="trophy-icon">🏆</span>
              <span>Guest favouri...</span>
            </div>
          )}
          <button
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            <svg viewBox="0 0 32 32" width="24" height="24" fill={isFavorite ? '#FF385C' : 'rgba(0,0,0,0.5)'} stroke="white" strokeWidth="2">
              <path d="M16 28c7-4.733 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-4.95-2.05 6.98 6.98 0 0 0-7 7c0 7 7 12.267 14 17z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="listing-details">
        <div className="listing-header">
          <div className="listing-location">{listing.location}</div>
          <div className="listing-rating">
            <svg viewBox="0 0 32 32" width="12" height="12" fill="currentColor">
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
            </svg>
            <span>{listing.rating} ({listing.reviewCount})</span>
          </div>
        </div>
        <div className="listing-title">{listing.title}</div>
        <div className="listing-type">{listing.type}</div>
        <div className="listing-dates">{listing.dates}</div>
        <div className="listing-price">
          <span className="price-amount">₹{listing.price.toLocaleString('en-IN')}</span>
          <span className="price-period"> for 5 nights</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;