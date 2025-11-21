import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import AnimatedContent from "../utils/AnimatedContent";
import Aurora from "../utils/Aurora";

export default function HeroSection() {
  return (
    <div>
      <Aurora colorStops={["#ffffff", "#ffffff", "#ffffff"]} blend={1.5} amplitude={1} speed={1}>
        <section
          className="hero-section position-relative d-flex align-items-center justify-content-center text-light"
          style={{
            maxHeight: "1000px",
            overflow: "hidden",
            color: "#fff",
          }}></section>
        <div className="container text-center text-md-start position-relative z-1">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <AnimatedContent
                distance={40}
                direction="vertical"
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0}
                delay={0}>
                <h1 className="display-4 fw-bold mb-3 text-dark">Find Your Perfect Stay</h1>
                <p className="lead text-dark opacity-75 mb-4">
                  Explore top-rated hotels, book your next vacation, and experience comfort like
                  never before.
                </p>
                <Stack direction="horizontal" gap={3}>
                  <Link to={"/hotels"}>
                    <button className="btn btn-primary btn-lg px-4">Book Now</button>
                  </Link>
                  <Link className="btn btn-outline-dark btn-lg px-4" to="/">
                    Contact Us
                  </Link>
                </Stack>
              </AnimatedContent>
            </div>

            <div className="col-md-6 text-center">
              <AnimatedContent
                distance={50}
                direction="horizontal"
                duration={1.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.05}
                threshold={0}
                delay={0.2}>
                <img
                  src="/hero-image.webp"
                  alt="Hotel"
                  className="img-fluid rounded-4 shadow-lg mt-2"
                  style={{
                    maxHeight: "420px",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.1)",
                  }}
                />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </Aurora>
    </div>
  );
}
