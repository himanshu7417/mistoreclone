import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
     <PreNavbar/>
     <Navbar/>
    </Router>
  );
}

export default App;
