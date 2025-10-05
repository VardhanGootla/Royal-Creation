import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const BirthdayPartiesPage = () => {
  const categories = [
    { name: 'Kids', path: '/birthdays/kids', image: '/media/images/search1.jpg' },
    { name: 'Adults', path: '/birthdays/adults', image: '/media/images/search2.jpg' },
    { name: 'Themed', path: '/birthdays/themed', image: '/media/images/search3.jpg' },
    { name: 'Surprise', path: '/birthdays/surprise', image: '/media/images/search4.jpg' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>
        {`
          .categories-page-container {
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
          .category-card {
            background: #fff;
            border: none;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            color: inherit;
          }
          .category-card:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            color: inherit;
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
            margin-bottom: 0;
            text-align: center;
          }
        `}
      </style>
      <Container className="categories-page-container">
        <h1 className="page-title">Birthday Parties</h1>
        <Row>
          {categories.map((category, index) => (
            <Col md={6} lg={4} className="mb-5" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link to={category.path} className="category-card h-100 d-block">
                  <Card as="div">
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + category.image} />
                    <Card.Body>
                      <Card.Title>{category.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </motion.div>
            </Col>
          ))}\
        </Row>
      </Container>
    </>
  );
};

export default BirthdayPartiesPage;