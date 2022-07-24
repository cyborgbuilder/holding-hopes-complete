import './App.css';
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import LoginTwo from "./components/LoginTwo"
import Register from "./components/Register"
import Chat from './components/Chat';
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
