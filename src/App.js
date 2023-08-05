import React from 'react';

// CSS
import './App.css';

// DEPENDECYS REACT
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// PAGES
import Home from './components/pages/Home/Home';

// LAYOUTS
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
