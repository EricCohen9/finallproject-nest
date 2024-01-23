// Home.test.tsx
import { render, screen ,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom'; // Import as Router
import Home from '../pages/Home';
import Buy from '../pages/Buy';
import { createMemoryHistory, MemoryHistory } from 'history';
test('renders Home component', () => {
  render(
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  );


  expect(screen.getByText(/your value/i)).toBeInTheDocument();
  expect(screen.getByText(/Show Different Graph/i)).toBeInTheDocument();
  expect(screen.getByText(/Buy/i)).toBeInTheDocument();

});
