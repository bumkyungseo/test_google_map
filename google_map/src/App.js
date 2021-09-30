import { Route } from 'react-router';
import './App.css';
import GraphPage from './Graph/GraphPage';
import MapPage from './Map/MapPage';
import Menu from './Menu';

function App() {
  return (
    <div>
      <Menu />
      <Route path="/map" component={MapPage} />
      <Route path="/graph" component={GraphPage} />
    </div>
  )
}

export default App;
