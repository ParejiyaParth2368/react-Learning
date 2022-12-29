import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import './style.css';
import Herobanner from './Global Component/Herobanner';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Footer />
    </div>
  );
}

export default App;
