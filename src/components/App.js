import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './common/Header';

import About from './about/AboutPage';
import Todo from './todo/TodoPage';
import Docs from './docs/DocsPage';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <main className="App">
            <Header />

            <section>

              <Route exact path="/about" component={About} />
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/docs" component={Docs} />
            </section>
          </main>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
