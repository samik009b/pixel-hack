import { useState } from "react";
import { useParams } from "react-router-dom";
import hotelsData from "../data/hotels";

function Booking() {
  const { id } = useParams();

  const hotel = hotelsData.find((h) => h.id === id);

  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const bookingDetails = {
      hotelName: hotel?.name || "Unknown Hotel",
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      totalPrice: hotel?.price || 0,
    };

    const prev = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...prev, bookingDetails]));
    setSuccess(true);
  };

  if (!hotel) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Hotel not found.</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Book Your Stay</h2>

      <div className="card mb-4 shadow-sm">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{hotel.name}</h3>
          <p className="card-text">{hotel.description}</p>
          <h5 className="text-success">₹{hotel.price} / night</h5>
        </div>
      </div>

      <div className="card p-4 shadow-sm mb-4">
        <h4>Booking Form</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={form.guests}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="card p-4 shadow-sm mb-4">
        <h4>Booking Summary</h4>
        <p>
          <strong>Hotel:</strong> {hotel.name}
        </p>
        <p>
          <strong>Price per night:</strong> ₹{hotel.price * form.guests}
        </p>
        <p>
          <strong>Check-in:</strong> {form.checkIn || "—"}
        </p>
        <p>
          <strong>Check-out:</strong> {form.checkOut || "—"}
        </p>
        <p>
          <strong>Guests:</strong> {form.guests}
        </p>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-primary mt-3" onClick={handleConfirm}>
            Confirm Booking
          </button>
          <a className="btn btn-outline-primary mt-3" href={`http://localhost:3000/booking/${id}`}>
            Contact Us
          </a>
        </div>
      </div>

      {success && (
        <div className="alert alert-success">
          Booking confirmed! Your reservation has been saved.
        </div>
      )}
    </div>
  );
}

export default Booking;
