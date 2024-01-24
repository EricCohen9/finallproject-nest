import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled, {} from 'styled-components';
import Card from '../components/Card';
import { data, generateRandomData } from '../data/ChartData'; 
import { options } from '../data/ChartData';
import ArticleDetails from '../components/ArticleDetails';
import MainStayleDiv from "../style/MainStayleDiv";
import { staticCardData } from '../data/CardDetails';
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
  return (
    <MainStayleDiv as="div" flexDirection= 'column' height= '100vh' width='100vw' > 
      <Sidebar></Sidebar>
    <MainStayleDiv as="div"  flexDirection= 'column' height='100vh' width= '80vw' >
    <h2 style={{ alignSelf: 'center', justifySelf: 'center' }}>your holding </h2>
      <Line options={options} data={filteredData} />
      <button onClick={refreshPage}>Show Different Graph</button>
      <button onClick={handleBuyClick}>Buy</button>
      <MainStayleDiv as="div" flexDirection='column' flexwrap='warp' >
        {staticCardData.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </MainStayleDiv>
    </MainStayleDiv>
    </MainStayleDiv>
  );
};

export default Home;
