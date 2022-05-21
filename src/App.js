import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar'
import {BrowserRouter as Router} from 'react-router-dom'
import data from './data/data.json'
import Slider from './components/Slider';
import Offers from './components/Offers';


function App() {
  return (
    <Router>
     <PreNavbar/>
     <Navbar/>
     {/* passing image banner as props */}
     <Slider start = {data.banner.start} /> 
     <Offers offer = {data.offer}/>
    </Router>
  );
}

export default App;
