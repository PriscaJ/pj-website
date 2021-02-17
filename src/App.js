import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router basename='/site'>
        <div className='App'>
          <Switch>
            <Route path="/" component={Landing} exact/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App