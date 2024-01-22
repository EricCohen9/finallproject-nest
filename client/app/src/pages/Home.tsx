import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled, {} from 'styled-components';
import Card from '../components/Card';
import { data, generateRandomData } from '../data/ChartData'; 
import { options } from '../data/ChartData';
import ArticleDetails from '../components/ArticleDetails';
import MainStayleDiv from "../style/MainStayleDiv";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const staticCardData = [
  { id: 1, title: 'Card 1', description: 'Description for Card 1' },
  { id: 2, title: 'Card 2', description: 'Description for Card 2' },
];
const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
`;

const Button = styled.button`
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event:any) => {
    setSearchInput(event.target.value);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleBuyClick = () => {
    navigate('/buy');
  };

  const filteredData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      data: generateRandomData(),
    })),
  };
  const articles = [
    { id: 1, title: 'Article 1', content: 'Content for Article 1' },
    { id: 2, title: 'Article 2', content: 'Content for Article 2' },
    // Add more articles as needed
  ];
  return (
    <MainStayleDiv style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}> 
      <Sidebar></Sidebar>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '80vw' }}>
    <h2 style={{ alignSelf: 'center', justifySelf: 'center' }}>your value </h2>
      <Line options={options} data={filteredData} />
      <button onClick={refreshPage}>Show Different Graph</button>
      <button onClick={handleBuyClick}>Buy</button>
      <CardContainer>
        {staticCardData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </CardContainer>
    </div>
    </MainStayleDiv>
  );
};

export default Home;
