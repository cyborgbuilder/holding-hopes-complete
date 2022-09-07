
import './App.css';
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';

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
