import './App.css';
// setup routing between pages 
import { Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import { Container } from './pages/Page';


function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
