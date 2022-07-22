import './App.css';
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <LayerOne />
      <LayerTwo />
      
    </div>
  );
}

export default App;
