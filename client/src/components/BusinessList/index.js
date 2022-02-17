import React, { useState } from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from 'react-router-dom';
import businessImg from '../../images/lawn-care-gcf1748be3_1920.jpg';

const BusinessList = ({business}) => {
  return (
    <>
      <Card key={business._id}>
        <CardImg width="100%" src={businessImg} alt="Business Image" />
        <Card.Body>
          <Card.Link as={Link} to={`/businesses/${business._id}`}>{business.name}</Card.Link>
        </Card.Body>
      </Card>
      
    </>
  )
};

export {BusinessList};