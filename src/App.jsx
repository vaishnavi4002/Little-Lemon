import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
