// Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import { data, generateRandomData } from '../data/ChartData'; 
import { Line } from 'react-chartjs-2';
import { options } from '../data/ChartData';
const SidebarContainer = styled.div`
  height: 100vh;
  width: 18vw;
  background-color: #ffffff;
  color: #4950af;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 0;
  overflow: auto;
  z-index: 1;
`;
const ChartContainer = styled.div`
  min-width: 200px; 
`;
const Sidebar: React.FC = () => {
  const filteredData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      data: generateRandomData(),
    })),
  };

  return (
    <SidebarContainer>
        <h3>top gain</h3>
      <ChartContainer>
        <Line options={options} data={filteredData} />
      </ChartContainer>
      <h3>biggest holding</h3>
      <ChartContainer>
        <Line options={options} data={filteredData} />
      </ChartContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

