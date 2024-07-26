import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the Header heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button", { name: /Reserve A Table/i });
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("FIND A TABLE FOR ANY OCCASION");
  expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const reserveButton = screen.getByRole("button", { name: /Reserve A Table/i });
  fireEvent.click(reserveButton);

  const dateInput = screen.getByLabelText(/Pick Date:/i);
  fireEvent.change(dateInput, { target: { value: '2024-08-15' } });

  const timeOptions = screen.getByLabelText(/Choose Time:/i);
  const timeOptionsArray = Array.from(timeOptions.options).map(option => option.value);
  
 
  
  expect(timeOptionsArray).toEqual(expect.arrayContaining([
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
  ]));
});
