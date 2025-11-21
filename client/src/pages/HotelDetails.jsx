import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import hotels from "../data/hotels";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find hotel by id
  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) {
    return (
      <div className="container my-5 text-center">
        <h4>Hotel not found</h4>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="mb-4">
        <h2>{hotel.name}</h2>
        <p className="text-muted">
          ⭐ {hotel.rating} • {hotel.location}
        </p>
      </div>

      <div className="mb-4">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="img-fluid rounded w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
      </div>

      <div className="row">
        {/* Left side: Info */}
        <div className="col-md-8">
          <h4>About this Hotel</h4>
          <p>{hotel.description}</p>

          <h5 className="mt-4">Amenities</h5>
          <ul className="list-group list-group-flush mb-4">
            {hotel.amenities.map((a, idx) => (
              <li key={idx} className="list-group-item">
                {a}
              </li>
            ))}
          </ul>

          <h5>Guest Reviews</h5>
          <div className="card mb-2">
            <div className="card-body">
              <h6>Rohit Sinha</h6>
              <p className="mb-1">⭐️⭐️⭐️⭐️⭐️</p>
              <p>Excellent service and clean rooms. Highly recommended.</p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body">
              <h6>Ananya Das</h6>
              <p className="mb-1">⭐️⭐️⭐️⭐️</p>
              <p>Great location, beautiful interiors, but the food was average.</p>
            </div>
          </div>
        </div>

        {/* Right side: Booking Box */}
        <div className="col-md-4">
          <div className="card shadow-sm sticky-top" style={{ top: "90px" }}>
            <div className="card-body">
              <h4>₹{hotel.price} / night</h4>
              <p className="text-muted mb-4">Includes taxes and fees</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate(`/booking/${hotel.id}`)}>
                Book Now
              </button>
              <button className="btn btn-outline-secondary w-100 mt-2">❤️ Add to Favorites</button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mt-5">
        <h5>Location</h5>
        <p>{hotel.location}</p>
        <img
          src="https://via.placeholder.com/900x300?text=Map+Placeholder"
          alt="Map"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
}

export default HotelDetails;
