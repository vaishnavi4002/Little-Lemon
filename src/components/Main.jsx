
import React from 'react';
import { useReducer, useEffect } from 'react';
import BookingForm from './Booking'; // Adjust the import path if necessary
import BookingConfirmed from './BookingConfirmed';
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    console.log('Form data submitted:', formData);
    
    <BookingConfirmed formdata={formData}/>
    return true;
};

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);

    useEffect(() => {
        const initializeTimes = async () => {
            const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
            const times = fetchAPI(today);
            dispatch({ type: 'SET_TIMES', payload: times });
        };

        initializeTimes();
    }, []);

    const updateTimes = async (date) => {
        const times = fetchAPI(date);
        dispatch({ type: 'SET_TIMES', payload: times });
    };

    return (
        <div>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitAPI={submitAPI} />
        </div>
    );
};

export default Main;
