export default function DestinationsSection() {
  const destinations = [
    { img: "/bengalore.jpg", name: "Bangalore" },
    { img: "/hyedrabad.jpg", name: "Hyderabad" },
    { img: "/rajasthan.jpg", name: "Rajasthan" },
    { img: "/basil-cathedral.jpg", name: "Moscow" },
    { img: "/fes.jpg", name: "Morocco" },
  ];

  return (
    <div className="container text-center">
      <h1 className=" fs-4 fw-semibold mb-3 text-start">Trending Destinations</h1>

      <div className="container my-5">
        <div className="row g-3">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className={`col-12 col-sm-${index < 2 ? 6 : 4}`}
              style={{ position: "relative" }}>
              <div className="position-relative">
                <img src={dest.img} alt={dest.name} className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5"></span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" /> {dest.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
