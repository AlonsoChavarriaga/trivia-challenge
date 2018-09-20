import React, { Fragment, Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import {Home} from './views/home';
import QuizProvider from './providers/quiz-provider';
import ResultsProvider from './providers/results-provider';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route
            path="/quiz"
            component={QuizProvider}
            exact={true}
          />
          <Route
            path="/results"
            component={ResultsProvider}
            exact={true}
          />
          <Route
            path="/"
            component={Home}
            exact={true}
          />
        </Fragment>
      {/* <div className="App">
      </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
