import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App1 from './App1';
import MyName from './MyName';
import Counter from './Counter';

// simple list
class App extends Component {
    render() {
        return (
            <Counter />
        );
    }
}

export default App;