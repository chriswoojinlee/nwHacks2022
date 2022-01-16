import './App.css';
// setup routing between pages 
import { Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Phish from './pages/Phish';
import { Container } from './pages/Page';


function App() {
  return (
    <div>
      <Main />
      <Phish />
    </div>
  );
}

export default App;
