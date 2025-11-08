import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import hotels from "../data/hotels"; // import your hotel data file

function HotelList() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Available Hotels</h2>
      <Row>
        {hotels.map((hotel) => (
          <Col key={hotel.id} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={hotel.images[0]}
                alt={hotel.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.location}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ₹{hotel.price}/night
                </Card.Text>
                <Link to={`/hotel/${hotel.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelList;
