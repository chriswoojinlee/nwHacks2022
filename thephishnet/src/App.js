import './App.css';
// setup routing between pages 
import { Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Phish from './pages/Phish';
import Safe from './pages/Safe';
import Warning from './pages/Warning';

import { Container } from './pages/Page';


function App() {
  return (
    <div>
      <Main />
      <Phish />
      <Safe />
      <Warning />

    </div>
  );
}

export default App;
