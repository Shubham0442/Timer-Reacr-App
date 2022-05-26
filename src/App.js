
import './App.css';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <Timer sec = {1000} end = {15} start ={0}/>
    </div>
  );
}

export default App;
