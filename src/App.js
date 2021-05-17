import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Division from './view/Division';
import Home from './view/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/organizacion" component={Division}/>

      </Switch>
    </Router>
  );
}

export default App;
