import React from 'react';
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes';
import { createBrowserHistory } from 'history';
import Home from './views/home/Intro';
import './assets/styles/style.css';

function App() {
    const history = createBrowserHistory();

    return (
        <div>
            <Router history={history}>
                {renderRoutes(routes)}
            </Router>
        </div>
    )
};

export default App;