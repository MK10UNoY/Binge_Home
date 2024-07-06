import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.js"
import Genres from './components/Genres/Genres.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element="Login"/>
          <Route path="/signup" element="Signup"/>
          <Route path="/genres" element={<Genres/>}/>
          <Route path="/discover" element="Discover"/>
          <Route path="/subscribe" element="Subscribe"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;