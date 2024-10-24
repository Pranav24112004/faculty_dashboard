import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Faculty Management System</h1>
            <p className="lead">
              Efficiently manage faculty information, skillsets, and achievements.
            </p>
            <Button as={Link} to="/dashboard" variant="primary">Go to Dashboard</Button>
          </Col>
          <Col md={6}>
            {/* Optional: Add an illustration or image */}
            <img src="src/components/i1.jpg" alt="Faculty " className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
