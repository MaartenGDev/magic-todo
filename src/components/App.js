import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/Header';
import Container from './common/Container';
import About from './about/AboutPage';
import Todo from './todo/TodoPage';
import Docs from './docs/DocsPage';
import Notes from '../containers/note/NotePage';
import AddNote from '../containers/note/AddNote';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <main className="App">
                        <Header />


                        <Route exact path="/notes" component={Notes} />
                        <Route exact path="/notes/add" component={AddNote} />
                        <Route exact path="/todo" component={Todo} />
                        <Route exact path="/docs" component={Docs} />
                        <Route exact path="/about" component={About} />
                    </main>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
