import { useState } from "react";
import { useParams } from "react-router-dom";

function Booking() {
    const { id } = useParams(); // hotel id from route (e.g., /booking/1)

    // --- mock hotel data for demo ---
    const hotelData = {
        1: { name: "The Grand Palace", price: 5000 },
        2: { name: "Seaside Resort", price: 6500 },
        3: { name: "Mountain View Inn", price: 4200 },
    };

    const hotel = hotelData[id] || { name: "Unknown Hotel", price: 0 };

    // --- form state ---
    const [form, setForm] = useState({
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const [success, setSuccess] = useState(false);

    // --- handle changes ---
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // --- handle booking confirmation ---
    const handleConfirm = () => {
        const bookingDetails = {
            hotelName: hotel.name,
            checkIn: form.checkIn,
            checkOut: form.checkOut,
            guests: form.guests,
            totalPrice: hotel.price,
        };

        // store in localStorage
        const prev = JSON.parse(localStorage.getItem("bookings")) || [];
        localStorage.setItem("bookings", JSON.stringify([...prev, bookingDetails]));

        setSuccess(true);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Book Your Stay</h2>

            {/* Booking Form */}
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

            {/* Booking Summary */}
            <div className="card p-4 shadow-sm mb-4">
                <h4>Booking Summary</h4>
                <p>
                    <strong>Hotel:</strong> {hotel.name}
                </p>
                <p>
                    <strong>Price per night:</strong> ₹{hotel.price}
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

                <button className="btn btn-primary mt-3" onClick={handleConfirm}>
                    Confirm Booking
                </button>
            </div>

            {/* Success Message */}
            {success && (
                <div className="alert alert-success">
                    Booking confirmed! Your reservation has been saved.
                </div>
            )}
        </div>
    );
}

export default Booking;
