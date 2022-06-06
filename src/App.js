import './App.css';
import Home from './components/Home';
import ReactAccelorometerValue from 'reactaccelerometervalue';
import List from './components/List/index'

function App(props) {
  return (
    <div className="App">
      <Home/>
      <ReactAccelorometerValue>
        <List></List>
      </ReactAccelorometerValue>
    </div>
  );
}

export default App;
