import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-12 col-md-4">
            <h3 className="fw-bold mb-3">HBS</h3>
            <p className="text-secondary">
              Simplify your travel, booking, or business experience with our modern, reliable, and
              efficient platform built for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://pixel-hack-virid.vercel.app/"
                  className="footer-link text-decoration-none ">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://pixel-hack-virid.vercel.app/about"
                  className="footer-link text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://pixel-hack-virid.vercel.app/hotels"
                  className="footer-link text-decoration-none">
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="https://pixel-hack-virid.vercel.app/"
                  className="footer-link text-decoration-none link-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-6 col-md-4 text-md-end">
            <h6 className="fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex d-md-inline-flex justify-content-start justify-content-md-end">
              <a
                href="https://www.linkedin.com/in/samik-biswas-943805320/"
                className="footer-icon me-3">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a href="https://x.com/bsamik009" className="footer-icon me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://www.instagram.com/bsamik009?igsh=MXF1aHJ4aWo3ZWs0bA=="
                className="footer-icon me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://github.com/samik009b" className="footer-icon">
                <i className="bi bi-github fs-4"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} HBS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
