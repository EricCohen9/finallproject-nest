// ChartData.js
import faker from 'faker';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 export const generateRandomData = () => {
  return labels.map(() => faker.datatype.number({ min: -1000, max: 1000 }));
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomData(),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: generateRandomData(),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
