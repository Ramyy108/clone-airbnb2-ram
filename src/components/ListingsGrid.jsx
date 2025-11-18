import ListingCard from './ListingCard';
import './ListingsGrid.css';

function ListingsGrid({ listings }) {
  return (
    <div className="listings-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default ListingsGrid;