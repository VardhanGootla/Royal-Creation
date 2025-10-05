import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AnniversaryCategoryPage = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAnniversary, setSelectedAnniversary] = useState(null);
  const navigate = useNavigate();

  const handleShowModal = (anniversary) => {
    setSelectedAnniversary(anniversary);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAnniversary(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>
        {`
          .category-page-container {
            padding: 6rem 0;
            background: linear-gradient(to right, #fdfbfb, #ebedee);
          }
          .page-title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 700;
            color: #333;
            text-align: center;
            margin-bottom: 4rem;
          }
          .anniversary-card {
            background: #fff;
            border: none;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .anniversary-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }
          .card-img-top {
            height: 280px;
            object-fit: cover;
            border-bottom: 5px solid #fff;
          }
          .card-body {
            padding: 2rem;
          }
          .card-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.75rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.75rem;
          }
          .card-text {
            font-family: 'Roboto', sans-serif;
            color: #777;
            margin-bottom: 2rem;
          }
          .btn-details, .btn-book {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
          }
          .btn-details {
            background-color: #9C27B0;
            color: white;
          }
          .btn-details:hover {
            background-color: #7B1FA2;
            transform: scale(1.05);
          }
          .btn-book {
            background-color: transparent;
            color: #9C27B0;
            border-color: #9C27B0;
          }
          .btn-book:hover {
            background-color: #9C27B0;
            color: white;
            transform: scale(1.05);
          }
          .modal-content {
            border-radius: 15px;
            overflow: hidden;
          }
          .modal-header {
            background: #9C27B0;
            color: white;
            border-bottom: none;
            padding: 1.5rem 2rem;
          }
          .modal-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.75rem;
            font-weight: 600;
          }
          .modal-body {
            padding: 2rem;
          }
          .expense-table {
            width: 100%;
            font-family: 'Roboto', sans-serif;
          }
          .expense-table th, .expense-table td {
            padding: 1rem;
            vertical-align: middle;
          }
          .expense-table thead {
            background-color: #f8f9fa;
          }
          .expense-table th {
            font-weight: 600;
            color: #333;
          }
          .total-row {
            font-weight: bold;
            font-size: 1.2rem;
            border-top: 2px solid #dee2e6;
            background-color: #f8f9fa;
          }
          .modal-footer {
            border-top: none;
            padding: 1rem 2rem;
          }
        `}
      </style>
      <Container className="category-page-container">
        <h1 className="page-title">{category.title}</h1>
        <Row>
          {category.anniversaries.map((anniversary, index) => (
            <Col md={6} lg={4} className="mb-5" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="anniversary-card h-100">
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + anniversary.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{anniversary.title}</Card.Title>
                    <Card.Text>{anniversary.location}</Card.Text>
                    <div className="mt-auto">
                      <Button variant="link" className="btn-details me-2" onClick={() => handleShowModal(anniversary)}>
                        View Details
                      </Button>
                      <Button
                        variant="link"
                        className="btn-book"
                        onClick={() => navigate('/booking', { state: { event: anniversary } })}
                      >
                        Book Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedAnniversary && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedAnniversary.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <img 
                  src={process.env.PUBLIC_URL + selectedAnniversary.image} 
                  alt={selectedAnniversary.title}
                  className="img-fluid rounded mb-3"
                />
              </div>
              <div className="col-md-6">
                <h5>Location: {selectedAnniversary.location}</h5>
                <p className="text-muted">{selectedAnniversary.description}</p>
                
                <h6 className="mt-4">Package Includes:</h6>
                <ul className="list-unstyled">
                  {selectedAnniversary.includes?.map((item, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h5>Package Pricing</h5>
              <table className="expense-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedAnniversary.pricing?.breakdown?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.service}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td>Total Package</td>
                    <td>{selectedAnniversary.pricing?.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              className="btn-details"
              onClick={() => navigate('/booking', { state: { event: selectedAnniversary } })}
            >
              Book This Package
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default AnniversaryCategoryPage;
