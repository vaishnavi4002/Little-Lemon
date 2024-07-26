import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e.target.value);
    };
    const submitAPI = function(formData) {
        console.log(formData)
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const values = { date, time, numOfGuests, occasion };
        
        const schema = Yup.object().shape({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            numOfGuests: Yup.number()
                .required('Number of guests is required')
                .min(1, 'Must be at least 1 guest')
                .max(10, 'Cannot be more than 10 guests'),
        });

        const isValid = await schema.isValid(values);

        if (isValid) {
            const success = submitAPI(values);
            if (success) {
                console.log('Booking successful');
            } else {
                console.log('Booking failed');
            }
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className='bg-slate-100 min-h-screen flex items-center justify-center'>
            <div className='container mx-auto'>
                <h2 className='text-3xl text-center pt-3'>FIND A TABLE FOR ANY OCCASION</h2>
                <form
                    className="flex flex-col bg-white w-full lg:w-1/2 font-medium mx-auto p-8 my-8 sm:p-10 gap-8 rounded-md shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label htmlFor="date">Date</label>
                        <input
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            value={date}
                            onChange={handleDateChange}
                            type='date'
                            name="date"
                            id="date"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="time">Time</label>
                        <select
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            name="time"
                            id="time"
                        >
                            <option value="">Select a Time</option>
                            {props.availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="numOfGuests">Number Of Guests</label>
                        <input
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            type="number"
                            placeholder="1" min="1" max="10"
                            value={numOfGuests}
                            onChange={(e) => setNumOfGuests(e.target.value)}
                            name="numOfGuests"
                            id="numOfGuests"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            name="occasion"
                            id="occasion"
                            onChange={(e) => setOccasion(e.target.value)}
                            value={occasion}
                        >
                            <option value="" label="Select occasion" />
                            <option value="birthday" label="Birthday" />
                            <option value="anniversary" label="Anniversary" />
                            <option value="other" label="Other" />
                        </select>
                    </div>

                    <button
                        className="bg-[#F4CE14] text-white p-2 mt-4 rounded-md hover:bg-[hsl(50,92%,42%)]"
                        type="submit"
                    >
                        <Link to="/booking/confirmed" className="text-white">Confirm Booking</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};
BookingForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default BookingForm;
