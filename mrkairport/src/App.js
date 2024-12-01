import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import FlightList from './pages/flightList'; 
import { images } from './constants/image';
import Auth from './pages/auth';
import Admin from './pages/admin';
function App() {
  return (
    <div className="App" 
    style={{
      backgroundImage: `url(${images.fullBack})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: '0px 00px',
      backgroundSize: 'cover',
      }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flightlist" element={<FlightList />} /> 
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
