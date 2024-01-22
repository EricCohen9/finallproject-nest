// CardDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CardDetailsContainer = styled.div`
`;

const CardDetails: React.FC = () => {
  const { cardId } = useParams<{ cardId?: string }>();
  const parsedCardId = cardId ? parseInt(cardId, 10) : undefined

  const cardDetails = {
    id: parsedCardId,
    title: 'Card Title',
    description: 'Card Description',
  };

  return (
    <CardDetailsContainer>
      <h2>{cardDetails.title}</h2>
      <p>{cardDetails.description}</p>
    </CardDetailsContainer>
  );
};

export default CardDetails;
