// SidebarChartData.ts
import faker from 'faker';

const sidebarLabels = ['A', 'B', 'C', 'D', 'E'];
const generateRandomData = () => {
  return sidebarLabels.map(() => faker.datatype.number({ min: 0, max: 100 }));
};

export const sidebarData = {
  labels: sidebarLabels,
  datasets: [
    {
      label: 'Sidebar Dataset',
      data: generateRandomData(),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Sidebar Graph',
    },
  },
};
