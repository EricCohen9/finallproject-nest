// SidebarGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { options as sidebarOptions,sidebarData } from '../data/SidebarChartData';

const GraphContainer = styled.div`
  width: 200px;
  height: 150px;
  margin: 10px;
`;

const SidebarGraph: React.FC = () => {
  return (
    <GraphContainer>
      <Bar options={sidebarOptions} data={sidebarData} />
    </GraphContainer>
  );
};

export default SidebarGraph;
