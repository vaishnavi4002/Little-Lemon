import { render, screen, waitFor, act } from '@testing-library/react';

import Main from './components/Main'; 


jest.mock('./components/Main', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn()
}));

// Import the mocked functions
// import { fetchAPI, submitAPI } from './components/Main';


const mockFetchAPI = jest.fn();

beforeEach(() => {
    jest.clearAllMocks(); 
});

// Test for the initial available times
test('initializeTimes sets the correct initial available times', async () => {
   
    mockFetchAPI.mockImplementation(() => ['17:00', '18:00']);

    // Render the Main component
    render(<Main />);

    // Wait for the component to update with the mock data
    await waitFor(() => {
        // Adjust this if necessary to match the actual rendered output
        expect(screen.getByText('17:00')).toBeInTheDocument();
        expect(screen.getByText('18:00')).toBeInTheDocument();
    });
});


test('updateTimes updates the available times based on selected date', async () => {
   
    mockFetchAPI.mockImplementation((date) => {
        if (date === '2024-07-25') return ['19:00', '20:00'];
        return [];
    });

    
    render(<Main />);

    
    const newDate = '2024-07-25';
    await act(async () => {
        
        const updateTimes = screen.getByTestId('update-times'); // Adjust based on implementation
        await updateTimes(newDate); // Ensure this matches your test setup
    });

    // Check that the available times have been updated
    await waitFor(() => {
        
        expect(screen.getByText('19:00')).toBeInTheDocument();
        expect(screen.getByText('20:00')).toBeInTheDocument();
    });
});
