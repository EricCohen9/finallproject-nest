// CardDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CardDetailsContainer = styled.div`
`;
export const staticCardData = [
  { id: 1, title: 'artical 1', description: 'Description for Card 1' },
  { id: 2, title: 'artical 2', description: 'Description for Card 2' },
  { id: 3, title: 'artical 3', description: 'Description for Card 3' },
  { id: 4, title: 'artical 4', description: 'Description for Card 4' },
  { id: 5, title: 'artical 5', description: 'Description for Card 5' },
];
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
