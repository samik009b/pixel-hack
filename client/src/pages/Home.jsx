import "../styles/global.css";

function Home() {
  return (
    <>
      {/* hero section */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-5 fw-bold mb-3 ">Find Your Perfect Stay</h1>
            <p className="lead text-muted mb-4">
              Explore top-rated hotels, book your next vacation, and experience comfort like never
              before.
            </p>
            <button className="btn btn-primary btn-lg">Book Now</button>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/hero-image.webp"
              alt="Hotel"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* website features */}

      <div class="container text-center">
        <h1 className="fs-1 fw-semibold mt-3 mb-0 text-start">Why choose us ?</h1>
        {/* optional enhancement, follow DRY rule here */}
        <div className="row text-center gap-4 m-3">
          <div className="col-md feature-card py-4 m-0">
            <img src="/feature-1.png" className="feature-icon mb-3" alt="Book now" />
            <div>
              <p className="fs-5 fw-bold mb-1">Book now, pay later</p>
              <p className="fs-6 mb-0">FREE cancellation on most rooms</p>
            </div>
          </div>

          <div className="col-md feature-card py-4 m-0">
            <img src="/feature-2.png" className="feature-icon mb-3" alt="Reviews" />
            <div>
              <p className="fs-5 fw-bold mb-1">300M+ reviews</p>
              <p className="fs-6 mb-0">Trusted information from guests like you</p>
            </div>
          </div>

          <div className="col-md feature-card py-4 m-0">
            <img src="/feature-3.png" className="feature-icon mb-3" alt="Assets" />
            <div>
              <p className="fs-5 fw-bold mb-1">2+ million assets</p>
              <p className="fs-6 mb-0">Hotels, guest houses, apartments, and more…</p>
            </div>
          </div>
        </div>
      </div>

      {/* trending destinations */}

      <div className="container text-center">
        <h1 className="fs-4 fw-semibold mb-3 text-start">Trending Destinations</h1>

        <div className="container my-5">
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="position-relative">
                <img src="/bengalore.jpg" alt="Bangalore" className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5">
                  <i className="bi bi-geo-alt-fill" /> Bangalore
                </span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="position-relative">
                <img src="/hyedrabad.jpg" alt="Hyderabad" className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5">
                  <i className="bi bi-geo-alt-fill" /> Hyderabad
                </span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-12 col-sm-4">
              <div className="position-relative">
                <img src="/rajasthan.jpg" alt="Rajasthan" className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5">
                  <i className="bi bi-geo-alt-fill" /> Rajasthan
                </span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="position-relative">
                <img src="/basil-cathedral.jpg" alt="Moscow" className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5">
                  <i className="bi bi-geo-alt-fill" /> Basil's Cathedral, Moscow
                </span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <div className="position-relative">
                <img src="/fes.jpg" alt="Fes" className="img-fluid rounded" />
                <span className="position-absolute top-0 end-0 text-white px-2 py-1 rounded-start fw-medium fs-5">
                  <i class="bi bi-geo-alt-fill" /> Fes, Morocco
                </span>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <p className="text-white fw-bold fs-5">
                    <i className="bi bi-geo-alt-fill" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
