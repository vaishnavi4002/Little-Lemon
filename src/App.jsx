import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from './components/Main';
import HomePage from './components/HomePage';

function App() {
  const location = useLocation(); // Get the current route location

  return (
    <div>
      <Navbar />
      {location.pathname !== '/booking' && location.pathname !== '/confirmed' && <HomePage />}
      <Main />
      <Footer />
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
