import  { useReducer } from "react";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import HomePage from "./HomePage";
import BookingConfirmed from "./BookingConfirmed";

const Main = () => {

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
        let random = seededRandom(date.getDate());

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
        console.log(formData)
        return true;
    };

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) };
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<BookingConfirmed />} />
            </Routes>
        </main>
    );
}

export default Main;
