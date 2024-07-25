
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
const Booking = ({ availableTimes, updateTimes, submitAPI }) => {
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            numOfGuests: 1,
            occasion: ""
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            numOfGuests: Yup.number()
                .required('Number of guests is required')
                .min(1, 'Must be at least 1 guest')
                .max(10, 'Cannot be more than 10 guests'),
        }),
        onSubmit: async (values) => {
            const success = submitAPI(values);
            if (success) {
                console.log('Booking successful');
            } else {
                console.log('Booking failed');
            }
        }
    });

    const handleDateChange = (e) => {
        formik.handleChange(e);
        updateTimes(e.target.value);
    };

    return (
        <div className='bg-slate-100 min-h-screen flex items-center justify-center'>
            <div className='container mx-auto'>
                <h2 className='text-3xl text-center pt-3'>FIND A TABLE FOR ANY OCCASION</h2>
                <form
                    className="flex flex-col bg-white w-full lg:w-1/2 font-medium mx-auto p-8 my-8 sm:p-10 gap-8 rounded-md shadow-lg"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="flex flex-col">
                        <label htmlFor="date">Date</label>
                        <input
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            value={formik.values.date}
                            onChange={handleDateChange}
                            type='date'
                            name="date"
                            id="date"
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="time">Time</label>
                        <select
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            name="time"
                            id="time"
                        >
                            {availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                        {formik.touched.time && formik.errors.time ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.time}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="numOfGuests">Number Of Guests</label>
                        <input
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            type="number"
                            placeholder="1" min="1" max="10"
                            value={formik.values.numOfGuests}
                            onChange={formik.handleChange}
                            name="numOfGuests"
                            id="numOfGuests"
                        />
                        {formik.touched.numOfGuests && formik.errors.numOfGuests ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.numOfGuests}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            className='p-2 mt-2 border border-gray-300 rounded-md'
                            name="occasion"
                            id="occasion"
                            onChange={formik.handleChange}
                            value={formik.values.occasion}
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

Booking.propTypes = {
    availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTimes: PropTypes.func.isRequired,
    submitAPI: PropTypes.func.isRequired,
};

export default Booking;
