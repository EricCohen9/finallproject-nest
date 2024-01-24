// Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardProps {
  cardData: {
    id: number;
    title: string;
    description: string;
  };
}

const CardContainer = styled.div`
 border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
`;

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <CardContainer>
      <Link to={`/card/${cardData.id}`}>
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
      </Link>
    </CardContainer>
  );
};

export default Card;
