import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import SideBar from './common/Sidebar';
import About from './about/AboutPage';
import Todo from './todo/TodoPage';
import Docs from './docs/DocsPage';

const AppContent = styled.section`
  width: calc(100% - 220px);
  display: inline-block;
  height: 100vh;
  float: right;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <SideBar />
          
          <AppContent>
              <Route exact path="/about" component={About} />
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/docs" component={Docs} />
          </AppContent>
        </main>
      </Router>
    );
  }
}

export default App;
