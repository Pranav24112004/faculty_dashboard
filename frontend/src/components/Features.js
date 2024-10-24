import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  { title: 'Faculty Registration', description: 'Easily register and manage faculty information.' },
  { title: 'Skillset Management', description: 'Track and improve faculty skills and expertise.' },
  { title: 'Achievements', description: 'Document and showcase faculty and student achievements.' },
  { title: 'Training Programs', description: 'Recommend and track upskilling training programs.' }
];

const Features = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="text-center">Features</h2>
          <p className="text-center">Explore the powerful features of our faculty management system.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {features.map((feature, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
