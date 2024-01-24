import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Buy from '../pages/Buy'; 

test('renders Buy component and submits the form', async () => {
  render(
    <BrowserRouter>
      <Buy />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '10' } });
  fireEvent.change(screen.getByLabelText(/limitOrder/i), { target: { value: '70.00' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'your_password' } });


  fireEvent.click(screen.getByText(/buy/i));

await waitFor(()=>{
  expect(screen.getByText(/success/i)).toBeInTheDocument();
})
await waitFor(
  () => {
    expect(window.location.pathname).toBe('/home');
  },
  {
    timeout: 5000, 
  }
);
  });
