import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <HomePage/>
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
