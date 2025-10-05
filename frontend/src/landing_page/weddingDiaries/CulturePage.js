import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CulturePage = ({ culture }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWedding, setSelectedWedding] = useState(null);

  const handleShowModal = (wedding) => {
    setSelectedWedding(wedding);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWedding(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>
        {`
          .culture-page-container {
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
          .wedding-card {
            background: #fff;
            border: none;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .wedding-card:hover {
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
            background-color: #8E44AD;
            color: white;
          }
          .btn-details:hover {
            background-color: #7D3C98;
            transform: scale(1.05);
          }
          .btn-book {
            background-color: transparent;
            color: #8E44AD;
            border-color: #8E44AD;
          }
          .btn-book:hover {
            background-color: #8E44AD;
            color: white;
            transform: scale(1.05);
          }
          .modal-content {
            border-radius: 15px;
            overflow: hidden;
          }
          .modal-header {
            background: #8E44AD;
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
      <Container className="culture-page-container">
        <h1 className="page-title">{culture.title}</h1>
        <Row>
          {culture.weddings.map((wedding, index) => (
            <Col md={6} lg={4} className="mb-5" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="wedding-card h-100">
                  <Card.Img variant="top" src={process.env.PUBLIC_URL + wedding.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{wedding.title}</Card.Title>
                    <Card.Text>{wedding.location}</Card.Text>
                    <div className="mt-auto">
                      <Button variant="link" className="btn-details me-2" onClick={() => handleShowModal(wedding)}>
                        View Details
                      </Button>
                      <Button variant="link" className="btn-book">Book Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedWedding && (
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedWedding.title} - Expense Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="expense-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-end">Cost</th>
                </tr>
              </thead>
              <tbody>
                {selectedWedding.expenses.breakdown.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td className="text-end">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="total-row">
                  <td>Total</td>
                  <td className="text-end">{selectedWedding.expenses.total}</td>
                </tr>
              </tfoot>
            </table>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default CulturePage;