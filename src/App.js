import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Layout/Navbar/Navbar';
import Herobanner from './Components/HeroBanner/Herobanner';
import Footer from './Layout/Footer/Footer';
import Ourwork from '../src/Pages/Our Work Page/Ourwork'
import Aboutus from './Pages/About Us/Aboutus';
import Contactus from './Pages/Contact US/Contactus';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('dark')

  const toggledarklight = () => {
    if (mode === 'light') {
      setMode('dark')
      console.log(mode);
    } else {
      setMode('light')
      console.log(mode);

    }
  }

  return (
    <div className="App">
      <div className={mode === 'dark' ? "dart-theme" : ""}>
        <Router>
          <Navbar mode={mode} toggledarklight={toggledarklight} />
          <Routes>
            <Route path='/' element={<Herobanner />} />
            <Route path='/ourwork' element={<Ourwork />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contactus' element={<Contactus />} />
          </Routes>
        </Router>
        <Footer mode={mode} />
      </div>
    </div>
  );
}

export default App;
