import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCarComponents from './components/ListCarComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCarComponent from './components/CreateCarComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCarComponents}></Route>
                          <Route path = "/cars" component = {ListCarComponents}></Route>
                          <Route path = "/add-car/:id" component = {CreateCarComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;
