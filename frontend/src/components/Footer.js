import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Faculty Management System. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <a href="/privacy" className="text-white">Privacy Policy</a> | <a href="/terms" className="text-white">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
